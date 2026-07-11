import Reveal from './Reveal.jsx';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <Reveal className="about-visual">
          <div className="about-glow"></div>
          <img src="/image/logo-cropped.png" alt="enVision Studio" className="about-logo" />
        </Reveal>
        <Reveal className="about-content">
          <p className="eyebrow">About enVision Studio</p>
          <h2>One Freelancer. <span className="gradient-text">Full-Stack Vision.</span></h2>
          <p>
            enVision Studio is an independent digital studio built on a simple idea: businesses shouldn't
            need five different vendors to go online. From the first sketch of your logo to the server that
            hosts your app, everything is designed, built, and supported under one roof.
          </p>
          <p>
            Whether you're a startup that needs a website by next week, or an established business that needs
            a custom internal system, enVision Studio adapts to the scope — without the agency overhead.
          </p>
          <ul className="about-list">
            <li><i className="fa-solid fa-circle-check"></i> Personal, hands-on attention to every project</li>
            <li><i className="fa-solid fa-circle-check"></i> Transparent pricing, no hidden fees</li>
            <li><i className="fa-solid fa-circle-check"></i> Long-term support, not just a hand-off</li>
          </ul>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </Reveal>
      </div>
    </section>
  );
}
