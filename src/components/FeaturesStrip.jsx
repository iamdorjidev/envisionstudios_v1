import Reveal from './Reveal.jsx';

const FEATURES = [
  { icon: 'fa-bolt', title: 'Fast Turnaround', desc: 'Efficient workflow, on-time delivery' },
  { icon: 'fa-comments', title: 'Direct Communication', desc: 'Work directly with your developer' },
  { icon: 'fa-code', title: 'Custom Built', desc: 'No templates — tailored to your needs' },
  { icon: 'fa-headset', title: 'Ongoing Support', desc: 'Maintenance & hosting after launch' },
];

export default function FeaturesStrip() {
  return (
    <Reveal as="section" className="features-strip">
      <div className="container features-grid">
        {FEATURES.map((f) => (
          <div className="feature-item" key={f.title}>
            <span className="dot-tr"></span>
            <span className="dot-bl"></span>
            <i className={`fa-solid ${f.icon}`}></i>
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
