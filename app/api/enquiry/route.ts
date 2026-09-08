import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { validateEnquiry, type EnquiryInput } from '@/lib/enquiry';
import { ownerNotificationEmail, customerConfirmationEmail } from '@/lib/email-templates';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Best-effort in-memory rate limit (per warm instance).
const HITS = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 4;

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (HITS.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  HITS.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: 'Too many enquiries in a short time. Please try again in a minute.' },
      { status: 429 },
    );
  }

  let body: Partial<EnquiryInput>;
  try {
    body = (await request.json()) as Partial<EnquiryInput>;
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 });
  }

  // Spam signals: honeypot filled, or submitted implausibly fast.
  if (typeof body.company === 'string' && body.company.trim() !== '') {
    return NextResponse.json({ ok: true }); // silently accept, drop
  }
  if (typeof body.elapsedMs === 'number' && body.elapsedMs >= 0 && body.elapsedMs < 2500) {
    return NextResponse.json(
      { ok: false, message: 'That was a little too quick — please try again.' },
      { status: 400 },
    );
  }

  const result = validateEnquiry(body);
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, message: 'Please check the highlighted fields.', errors: result.errors },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error('[enquiry] Missing email env: RESEND_API_KEY / ENQUIRY_TO_EMAIL / ENQUIRY_FROM_EMAIL');
    return NextResponse.json(
      { ok: false, message: 'The enquiry service is not configured yet. Please email me directly.' },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const receivedAt = new Date();
  const data = result.data;

  // 1) Deliver the enquiry to the studio inbox. This MUST succeed.
  const owner = ownerNotificationEmail(data, receivedAt);
  const ownerSend = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject: owner.subject,
    html: owner.html,
    text: owner.text,
  });

  if (ownerSend.error) {
    console.error('[enquiry] owner notification failed:', ownerSend.error);
    return NextResponse.json(
      { ok: false, message: 'Something went wrong sending your enquiry. Please email me directly.' },
      { status: 502 },
    );
  }

  // 2) Confirmation to the enquirer. Non-critical — log if it fails.
  try {
    const confirm = customerConfirmationEmail(data);
    const confirmSend = await resend.emails.send({
      from,
      to: [data.email],
      replyTo: to,
      subject: confirm.subject,
      html: confirm.html,
      text: confirm.text,
    });
    if (confirmSend.error) console.error('[enquiry] confirmation failed:', confirmSend.error);
  } catch (err) {
    console.error('[enquiry] confirmation threw:', err);
  }

  return NextResponse.json({ ok: true });
}
