import type { EnquiryFields } from './enquiry';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const nl2br = (s: string) => esc(s).replace(/\n/g, '<br />');

function formatTimestamp(d: Date) {
  return new Intl.DateTimeFormat('en-NZ', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Pacific/Auckland',
  }).format(d);
}

const shell = (heading: string, body: string) => `
<!DOCTYPE html>
<html lang="en">
<body style="margin:0;background:#f4f4f2;padding:24px;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#14232e;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e6e3dd;border-radius:12px;overflow:hidden;">
    <tr><td style="background:#003653;padding:20px 28px;">
      <span style="color:#ffffff;font-size:16px;font-weight:700;letter-spacing:-0.01em;">enVision&nbsp;Studio</span>
    </td></tr>
    <tr><td style="padding:28px;">
      <h1 style="margin:0 0 16px;font-size:18px;color:#003653;">${esc(heading)}</h1>
      ${body}
    </td></tr>
    <tr><td style="padding:16px 28px;border-top:1px solid #eeece7;color:#7a8790;font-size:12px;">
      enVision Studio · Auckland, New Zealand
    </td></tr>
  </table>
</body>
</html>`;

function row(label: string, value: string) {
  return `<tr>
    <td style="padding:8px 0;color:#7a8790;font-size:13px;width:150px;vertical-align:top;">${esc(label)}</td>
    <td style="padding:8px 0;font-size:14px;color:#14232e;">${value}</td>
  </tr>`;
}

/** Internal notification sent to the studio inbox. */
export function ownerNotificationEmail(data: EnquiryFields, receivedAt: Date) {
  const body = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${row('Name', esc(data.name))}
      ${row('Email', `<a href="mailto:${esc(data.email)}" style="color:#d8181f;">${esc(data.email)}</a>`)}
      ${row('Phone', data.phone ? esc(data.phone) : '—')}
      ${row('Business', data.business ? esc(data.business) : '—')}
      ${row('Service', esc(data.service))}
      ${row('Budget', data.budget ? esc(data.budget) : '—')}
      ${row('Prefers', esc(data.contactMethod))}
      ${row('Received', esc(formatTimestamp(receivedAt)))}
    </table>
    <div style="margin-top:16px;padding-top:16px;border-top:1px solid #eeece7;">
      <div style="color:#7a8790;font-size:13px;margin-bottom:6px;">Project description</div>
      <div style="font-size:14px;line-height:1.6;">${nl2br(data.message)}</div>
    </div>`;
  return {
    subject: `New enquiry — ${data.name}${data.business ? ` (${data.business})` : ''}`,
    html: shell('New project enquiry', body),
    text:
      `New project enquiry\n\n` +
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone ?? '—'}\n` +
      `Business: ${data.business ?? '—'}\n` +
      `Service: ${data.service}\n` +
      `Budget: ${data.budget ?? '—'}\n` +
      `Prefers: ${data.contactMethod}\n` +
      `Received: ${formatTimestamp(receivedAt)}\n\n` +
      `Project description:\n${data.message}\n`,
  };
}

/** Auto-confirmation sent to the person who enquired. */
export function customerConfirmationEmail(data: EnquiryFields) {
  const firstName = data.name.split(' ')[0] || data.name;
  const body = `
    <p style="margin:0 0 14px;font-size:14px;line-height:1.6;">Hi ${esc(firstName)},</p>
    <p style="margin:0 0 14px;font-size:14px;line-height:1.6;">
      Thanks for contacting enVision Studio. I've received your enquiry and will get back to you shortly —
      usually within one business day.
    </p>
    <p style="margin:0 0 6px;font-size:13px;color:#7a8790;">For reference, here's what you sent:</p>
    <div style="font-size:14px;line-height:1.6;padding:12px 14px;background:#f7f6f3;border-radius:8px;">
      <strong>Service:</strong> ${esc(data.service)}<br />
      ${data.budget ? `<strong>Budget:</strong> ${esc(data.budget)}<br />` : ''}
      <strong>Project:</strong><br />${nl2br(data.message)}
    </div>
    <p style="margin:16px 0 0;font-size:14px;line-height:1.6;">
      If you need to add anything, just reply to this email.
    </p>
    <p style="margin:16px 0 0;font-size:14px;line-height:1.6;">— Thinley, enVision Studio</p>`;
  return {
    subject: 'Thanks for contacting enVision Studio',
    html: shell("I've received your enquiry", body),
    text:
      `Hi ${firstName},\n\n` +
      `Thanks for contacting enVision Studio. I've received your enquiry and will get back to you shortly — usually within one business day.\n\n` +
      `For reference, here's what you sent:\n` +
      `Service: ${data.service}\n` +
      (data.budget ? `Budget: ${data.budget}\n` : '') +
      `Project:\n${data.message}\n\n` +
      `If you need to add anything, just reply to this email.\n\n` +
      `— Thinley, enVision Studio`,
  };
}
