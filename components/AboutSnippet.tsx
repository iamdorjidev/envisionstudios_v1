import Reveal from './Reveal';
import Team from './Team';

export default function AboutSnippet() {
  return (
    <section className="section section--paper about-snippet" id="about-snippet">
      <div className="container about-inner">
        <Reveal className="about-copy">
          <p className="eyebrow">About</p>
          <h2 className="section-title">
            A small team, <span className="accent">fully invested</span> in your project
          </h2>
          <p>
            enVision Studio is Thinley Dorji and Sangay Choden, based in Auckland. Sangay works with you
            to understand how your business runs and what it needs; Thinley leads the design and build.
            Together we deliver websites and business systems that help Auckland businesses win and keep
            more customers.
          </p>
          <p>
            You deal directly with the people doing the work, from first call to launch and beyond.
          </p>
          <a href="/about" className="text-link">
            More about us
          </a>
        </Reveal>

        <Team />
      </div>
    </section>
  );
}
