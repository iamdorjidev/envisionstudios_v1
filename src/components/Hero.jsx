import Reveal from './Reveal.jsx';
import HeroNetwork from './HeroNetwork.jsx';

const TAGS = ['Websites', 'Apps', 'Hosting & Maintenance', 'Branding'];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container hero-rule">
        <div className="rule-line"></div>
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <Reveal as="p" className="eyebrow">Freelance Digital Studio</Reveal>
          <Reveal as="h1" className="hero-title">
            We Design, Build & Power<br />
            Your <span className="gradient-text">Digital Vision</span>
          </Reveal>
          <Reveal as="p" className="hero-sub">
            enVision Studio helps businesses and individuals launch stunning websites, robust systems,
            and powerful apps — with the branding to match. One studio, every solution.
          </Reveal>
          <Reveal className="hero-actions">
            <a href="#contact" className="btn btn-primary">Start a Project <i className="fa-solid fa-arrow-right"></i></a>
            <a href="#services" className="btn btn-outline">Explore Services</a>
          </Reveal>
          <Reveal className="hero-tags">
            {TAGS.map((tag) => (
              <span key={tag}><i className="fa-solid fa-check"></i> {tag}</span>
            ))}
          </Reveal>
        </div>

        <Reveal className="hero-visual">
          <HeroNetwork />
          <div className="hero-visual-ring"></div>
          <div className="hero-visual-ring ring-2"></div>
          <img src="/image/eye-icon.png" alt="" className="hero-eye" />
        </Reveal>
      </div>

      <div className="container hero-rule bottom">
        <div className="rule-line"></div>
      </div>

      <a href="#services" className="scroll-indicator" aria-label="Scroll down"></a>
    </section>
  );
}
