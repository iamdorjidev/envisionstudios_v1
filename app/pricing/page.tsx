import type { Metadata } from 'next';
import Pricing from '@/components/Pricing';
import FinalCta from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent pricing for websites and business systems for Auckland businesses — no rigid price list, just a clear quote for what you actually need.',
  alternates: { canonical: '/pricing' },
};

export default function PricingPage() {
  return (
    <>
      <Pricing />
      <FinalCta />
    </>
  );
}
