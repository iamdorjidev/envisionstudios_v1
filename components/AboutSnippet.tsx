import Image from 'next/image';
import Reveal from './Reveal';

export default function AboutSnippet() {
  return (
    <section className="section section--paper about-snippet" id="about-snippet">
      <div className="container about-inner">
        <Reveal className="about-copy">
          <p className="eyebrow">About</p>
          <h2 className="section-title">
            Built and run by <span className="accent">one developer</span>
          </h2>
          <p>
            I&apos;m Thinley Dorji, the developer behind enVision Studio. I design and build websites and
            business systems that help Auckland businesses win and keep more customers — one project,
            one client, done properly.
          </p>
          <a href="/about" className="text-link">
            More about me
          </a>
        </Reveal>

        <Reveal className="about-card" delay={80}>
          <div className="about-photo">
            <Image
              src="/image/profile.png"
              alt="Thinley Dorji, founder of enVision Studio"
              fill
              sizes="(min-width: 960px) 280px, 60vw"
            />
          </div>
          <strong>Thinley Dorji</strong>
          <span>Based in Auckland, New Zealand</span>
        </Reveal>
      </div>
    </section>
  );
}
