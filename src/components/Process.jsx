import Reveal from './Reveal.jsx';

const STEPS = [
  { num: '01', title: 'Discover', desc: 'We talk through your goals, audience, and requirements to define the right scope.' },
  { num: '02', title: 'Design', desc: 'Wireframes and visual concepts are shaped around your brand and your users.' },
  { num: '03', title: 'Build', desc: 'Clean, tested development — websites, systems, or apps — built to spec.' },
  { num: '04', title: 'Launch & Support', desc: 'We deploy, host, and stay on for maintenance so things keep running smoothly.' },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <Reveal as="div" className="section-head">
          <p className="eyebrow">How It Works</p>
          <h2>A Clear Path From <span className="gradient-text">Idea to Launch</span></h2>
        </Reveal>
        <div className="process-grid">
          {STEPS.map((s) => (
            <Reveal className="process-card" key={s.num}>
              <span className="process-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
