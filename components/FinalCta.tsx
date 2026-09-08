import Reveal from './Reveal';
import Icon from './Icon';
import BookConsultation from './BookConsultation';

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner">
        <Reveal>
          <h2>Have an idea? Let&apos;s build it.</h2>
          <p>
            Tell me what you need and I&apos;ll help you work out the simplest, most cost-effective way
            to build it.
          </p>
          <div className="final-cta-actions">
            <a href="#contact" className="btn btn-primary btn-lg">
              Get a Free Quote <Icon name="arrowRight" size={16} />
            </a>
            <BookConsultation variant="light" size="lg" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
