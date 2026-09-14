import Image from 'next/image';
import Reveal from './Reveal';
import Icon from './Icon';
import SectionHeading from './SectionHeading';
import { PROJECTS, type Project } from '@/lib/content';

const hostOf = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

function SiteFrame({ project }: { project: Project }) {
  return (
    <a
      className="site-frame"
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.name} in a new tab`}
    >
      <span className="site-frame-bar">
        <i />
        <i />
        <i />
        <span className="site-frame-url">{hostOf(project.url)}</span>
      </span>
      <span className="site-frame-shot">
        <Image
          src={project.image}
          alt={`${project.name} homepage`}
          width={project.imageWidth}
          height={project.imageHeight}
          sizes="(min-width: 960px) 45vw, 92vw"
        />
      </span>
    </a>
  );
}

function VisitLink({ project }: { project: Project }) {
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-link">
      Visit site <Icon name="external" size={13} />
    </a>
  );
}

export default function Work() {
  const [featured, ...rest] = PROJECTS;

  return (
    <section className="section work" id="work">
      <div className="container">
        <SectionHeading
          eyebrow="Work"
          title={<>Real projects, live right now</>}
          lead="A look at recent builds — click through, they're all real, working sites."
        />

        <Reveal className="work-feature">
          <div className="work-media">
            <SiteFrame project={featured} />
          </div>
          <div className="work-detail">
            <div className="work-detail-top">
              <h3>{featured.name}</h3>
              <span className="work-type">{featured.type}</span>
            </div>
            <p>{featured.summary}</p>
            <ul className="work-highlights">
              {featured.highlights.map((h) => (
                <li key={h}>
                  <Icon name="check" size={13} /> {h}
                </li>
              ))}
            </ul>
            <div className="work-detail-foot">
              <ul className="work-stack">
                {featured.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <VisitLink project={featured} />
            </div>
          </div>
        </Reveal>

        <div className="work-grid">
          {rest.map((p, i) => (
            <Reveal className="work-card" key={p.name} delay={i * 70}>
              <SiteFrame project={p} />
              <div className="work-card-body">
                <div className="work-detail-top">
                  <h3>{p.name}</h3>
                  <span className="work-type">{p.type}</span>
                </div>
                <p>{p.summary}</p>
                <div className="work-detail-foot">
                  <ul className="work-stack">
                    {p.stack.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <VisitLink project={p} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
