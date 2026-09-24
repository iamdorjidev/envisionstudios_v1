import Hero from '@/components/Hero';
import ValueStrip from '@/components/ValueStrip';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Work from '@/components/Work';
import Testimonials from '@/components/Testimonials';
import AboutSnippet from '@/components/AboutSnippet';
import FinalCta from '@/components/FinalCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <Services />
      <HowItWorks />
      <Work />
      <Testimonials />
      <AboutSnippet />
      <FinalCta />
    </>
  );
}
