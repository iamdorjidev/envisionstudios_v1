import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How enVision Studio handles the information you send through this website.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <main className="legal">
      <div className="container legal-inner">
        <Link href="/" className="legal-back">
          ← Back to enVision Studio
        </Link>
        <h1>Privacy Policy</h1>
        <p>
          This policy explains how enVision Studio (&ldquo;I&rdquo;, &ldquo;me&rdquo;) handles
          information you provide through this website.
        </p>

        <h2>What I collect</h2>
        <p>
          When you submit the enquiry form I collect the details you enter: name, email, optional
          phone and business name, the service you&apos;re interested in, an optional budget range,
          your message, and your preferred contact method. The site does not use advertising or
          tracking cookies.
        </p>

        <h2>How I use it</h2>
        <p>
          Your details are used only to respond to your enquiry and discuss a possible project. I
          don&apos;t sell or share your information for marketing. Enquiries are delivered and stored
          by email (via the email provider Resend) and kept only as long as needed to correspond with
          you.
        </p>

        <h2>Your choices</h2>
        <p>
          You can ask me to correct or delete the personal information you&apos;ve sent at any time by
          emailing <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>

        <p className="legal-meta">Last updated: September 2026. This is a general policy for a small studio website.</p>
      </div>
    </main>
  );
}
