import Image from 'next/image';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { TESTIMONIALS } from '@/lib/testimonials';

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <SectionHeading eyebrow="Testimonials" title={<>What Auckland businesses say</>} />
        <div className="testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal className="testimonial-card" key={`${t.name}-${i}`} delay={i * 70}>
              {t.isPlaceholder ? <span className="testimonial-todo">TODO — real quote needed</span> : null}
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-attribution">
                {t.logo ? (
                  <Image src={t.logo} alt={t.business} width={40} height={40} className="testimonial-logo" />
                ) : null}
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.business}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
