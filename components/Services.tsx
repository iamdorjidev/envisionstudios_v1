import Reveal from './Reveal';
import Icon from './Icon';
import SectionHeading from './SectionHeading';
import { SERVICES } from '@/lib/content';

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title={<>What I can help you build</>}
          lead="The essentials, done well — pick what fits, or ask and I'll point you the right way."
        />
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Reveal className="service-card" key={s.title} delay={(i % 3) * 60}>
              <span className="service-icon">
                <Icon name={s.icon} size={20} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
          <Reveal className="service-card service-card--cta" delay={120}>
            <h3>Not sure what you need?</h3>
            <p>Tell me the problem and I&apos;ll recommend the simplest way to solve it.</p>
            <a href="#contact" className="text-link">
              Get a free quote <Icon name="arrowRight" size={14} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
