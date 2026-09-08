import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { WHY_POINTS } from '@/lib/content';

export default function WhyUs() {
  return (
    <section className="section section--ink why" id="why">
      <div className="container">
        <SectionHeading
          eyebrow="Why enVision Studio"
          title={
            <>
              Professional technology, <span className="accent">without the agency price</span>
            </>
          }
        />
        <div className="why-grid">
          {WHY_POINTS.map((p, i) => (
            <Reveal className="why-item" key={p.title} delay={(i % 2) * 60}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
