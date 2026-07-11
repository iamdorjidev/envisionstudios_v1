import { useEffect, useState } from 'react';
import Loader from './components/Loader.jsx';
import CursorGlow from './components/CursorGlow.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FeaturesStrip from './components/FeaturesStrip.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Process from './components/Process.jsx';
import CtaBanner from './components/CtaBanner.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';

export default function App() {
  const [loaderHidden, setLoaderHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaderHidden(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CursorGlow />
      <Loader hidden={loaderHidden} />
      <Navbar />
      <Hero />
      <FeaturesStrip />
      <Services />
      <About />
      <Process />
      <CtaBanner />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
