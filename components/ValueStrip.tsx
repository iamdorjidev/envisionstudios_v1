import Reveal from './Reveal';
import Icon from './Icon';
import { VALUE_POINTS } from '@/lib/content';

export default function ValueStrip() {
  return (
    <Reveal as="section" className="value-strip" aria-label="What you get working with enVision Studio">
      <div className="container value-grid">
        {VALUE_POINTS.map((p) => (
          <div className="value-item" key={p.title}>
            <span className="value-icon">
              <Icon name={p.icon} size={18} />
            </span>
            <div>
              <b>{p.title}</b>
              <span>{p.text}</span>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
