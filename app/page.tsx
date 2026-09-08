import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ValueStrip from '@/components/ValueStrip';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Work from '@/components/Work';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import Process from '@/components/Process';
import FinalCta from '@/components/FinalCta';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <ValueStrip />
        <Services />
        <WhyUs />
        <Work />
        <About />
        <Pricing />
        <Process />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
