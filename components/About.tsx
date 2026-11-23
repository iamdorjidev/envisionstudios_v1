import Reveal from './Reveal';
import Team from './Team';

export default function About() {
  return (
    <section className="section section--paper about" id="about">
      <div className="container about-inner">
        <Reveal className="about-copy">
          <p className="eyebrow">About</p>
          <h2 className="section-title">
            A team that understands <span className="accent">business</span>
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
            Sangay Choden is our Business Analyst and Developer, working with clients to map out how
            their business runs, turning that into clear requirements, and helping build and test the
            solution — so what we deliver fits the way you actually work.
          </p>
          <p>
            That means you get a team who can scope the right solution, build it properly, and explain
            the decisions in plain language.
          </p>
        </Reveal>

        <Team />
      </div>
    </section>
  );
}
