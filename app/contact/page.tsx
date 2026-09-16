import type { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get a free quote for your website, web application or business system. Send a few details and I usually reply within one business day.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <Contact />;
}
