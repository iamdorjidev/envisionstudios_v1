import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms for using the enVision Studio website.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <main className="legal">
      <div className="container legal-inner">
        <Link href="/" className="legal-back">
          ← Back to enVision Studio
        </Link>
        <h1>Terms &amp; Conditions</h1>
        <p>
          These terms cover use of the enVision Studio website. Project work is governed by a separate
          written quote and agreement for each engagement.
        </p>

        <h2>Website content</h2>
        <p>
          Information here is provided in good faith for general guidance. &ldquo;Also equipped to
          build&rdquo; items are examples of capability, not client case studies. Any project shown as
          completed work is described accurately.
        </p>

        <h2>Enquiries and quotes</h2>
        <p>
          Submitting the enquiry form does not create a contract. Any indication of price becomes firm
          only in a written quote issued after your requirements are understood.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The enVision Studio name and site content belong to enVision Studio. Ownership of work
          produced during a paid engagement is set out in that engagement&apos;s agreement.
        </p>

        <h2>Liability</h2>
        <p>
          To the extent permitted by law, enVision Studio is not liable for loss arising from use of
          this website. Nothing here limits rights you have under the New Zealand Consumer Guarantees
          Act or Fair Trading Act where they apply.
        </p>

        <p className="legal-meta">
          Questions: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Last updated: September 2026.
        </p>
      </div>
    </main>
  );
}
