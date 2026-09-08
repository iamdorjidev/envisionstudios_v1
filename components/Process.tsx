import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { PROCESS_STEPS } from '@/lib/content';

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <SectionHeading eyebrow="How it works" title={<>From first message to launch</>} />
        <ol className="process-grid">
          {PROCESS_STEPS.map((s, i) => (
            <Reveal as="li" className="process-step" key={s.num} delay={(i % 4) * 50}>
              <span className="process-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
