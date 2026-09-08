import Reveal from './Reveal';
import Icon from './Icon';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <Reveal as="p" className="eyebrow">
            Auckland, New Zealand
          </Reveal>
          <Reveal as="h1" className="hero-title" delay={60}>
            Affordable web &amp; software development for{' '}
            <span className="accent">growing businesses</span>
          </Reveal>
          <Reveal as="p" className="hero-sub" delay={120}>
            From professional business websites to custom systems and applications, I build practical
            digital solutions that help businesses work better and grow.
          </Reveal>
          <Reveal className="hero-actions" delay={180}>
            <a href="#contact" className="btn btn-primary btn-lg">
              Get a Free Quote <Icon name="arrowRight" size={16} />
            </a>
            <a href="#services" className="btn btn-ghost btn-lg">
              View Services
            </a>
          </Reveal>
          <Reveal as="p" className="hero-tagline" delay={240}>
            Websites <span>•</span> Web Applications <span>•</span> Business Systems
          </Reveal>
        </div>

        <Reveal className="hero-visual" delay={160}>
          <div className="mock" aria-hidden="true">
            <div className="mock-bar">
              <span />
              <span />
              <span />
              <div className="mock-url">yourbusiness.co.nz</div>
            </div>
            <div className="mock-body">
              <div className="mock-side">
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="mock-main">
                <div className="mock-stats">
                  <div>
                    <b>Bookings</b>
                    <s>128</s>
                  </div>
                  <div>
                    <b>Revenue</b>
                    <s>$14.6k</s>
                  </div>
                  <div>
                    <b>Clients</b>
                    <s>312</s>
                  </div>
                </div>
                <div className="mock-chart">
                  <span style={{ height: '40%' }} />
                  <span style={{ height: '65%' }} />
                  <span style={{ height: '50%' }} />
                  <span style={{ height: '82%' }} />
                  <span style={{ height: '58%' }} />
                  <span style={{ height: '72%' }} />
                </div>
                <div className="mock-rows">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
