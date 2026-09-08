import Reveal from './Reveal';
import Icon from './Icon';
import SectionHeading from './SectionHeading';
import { SELECTED_WORK, BUILD_CONCEPTS } from '@/lib/content';

export default function Work() {
  const w = SELECTED_WORK;
  return (
    <section className="section work" id="work">
      <div className="container">
        <SectionHeading eyebrow="Work" title={<>A recent build</>} />

        <Reveal className="work-feature">
          <div className="work-preview" aria-hidden="true">
            <div className="wf-screen">
              <span className="wf-line wf-line--lg" />
              <span className="wf-line wf-line--md" />
              <div className="wf-cards">
                <i />
                <i />
                <i />
              </div>
              <span className="wf-line wf-line--sm" />
              <span className="wf-line wf-line--md" />
              <div className="wf-cards">
                <i />
                <i />
                <i />
              </div>
              <span className="wf-line wf-line--sm" />
            </div>
          </div>
          <div className="work-detail">
            <div className="work-detail-top">
              <h3>{w.name}</h3>
              <span className="work-type">{w.type}</span>
            </div>
            <p>{w.summary}</p>
            <ul className="work-highlights">
              {w.highlights.map((h) => (
                <li key={h}>
                  <Icon name="check" size={13} /> {h}
                </li>
              ))}
            </ul>
            <ul className="work-stack">
              {w.stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="build-concepts">
          <p className="build-concepts-label">Also equipped to build</p>
          <ul>
            {BUILD_CONCEPTS.map((c) => (
              <li key={c.title}>
                <Icon name={c.icon} size={16} /> {c.title}
              </li>
            ))}
          </ul>
          <p className="build-concepts-note">
            Examples of what I build — not client case studies.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
