import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { HOW_IT_WORKS_STEPS } from '@/lib/content';

export default function HowItWorks() {
  return (
    <section className="section section--ink how-it-works" id="how-it-works">
      <div className="container">
        <SectionHeading eyebrow="How it works" title={<>Free call, fixed quote, built and launched</>} />
        <ol className="steps-grid steps-grid--3">
          {HOW_IT_WORKS_STEPS.map((s, i) => (
            <Reveal as="li" className="step-item" key={s.num} delay={(i % 3) * 60}>
              <span className="step-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
