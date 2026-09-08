import Reveal from './Reveal';

export default function About() {
  return (
    <section className="section section--paper about" id="about">
      <div className="container about-inner">
        <Reveal className="about-copy">
          <p className="eyebrow">About</p>
          <h2 className="section-title">
            A developer who understands <span className="accent">business</span>
          </h2>
          <p>
            I&apos;m Thinley Dorji, a software developer based in Auckland, New Zealand. enVision Studio
            is my independent studio, focused on affordable, practical development for small businesses,
            startups and individuals.
          </p>
          <p>
            I bring professional software development experience across web applications, mobile
            applications, APIs, databases and business systems, combined with a practical understanding
            of how businesses actually use technology. Before enVision Studio I worked as a full-stack
            developer — including a lead role — delivering software for a development company.
          </p>
          <p>
            That means you get someone who can scope the right solution, build it properly, and explain
            the decisions in plain language.
          </p>
        </Reveal>

        <Reveal className="about-card" delay={80}>
          <div className="about-monogram" aria-hidden="true">
            <span>TD</span>
          </div>
          <strong>Thinley Dorji</strong>
          <span>Developer · enVision Studio</span>
          <span>Auckland, New Zealand</span>
        </Reveal>
      </div>
    </section>
  );
}
