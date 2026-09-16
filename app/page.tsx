import Hero from '@/components/Hero';
import ValueStrip from '@/components/ValueStrip';
import Services from '@/components/Services';
import Work from '@/components/Work';
import FinalCta from '@/components/FinalCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <Services />
      <Work />
      <FinalCta />
    </>
  );
}
