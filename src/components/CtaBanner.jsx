import Reveal from './Reveal.jsx';

export default function CtaBanner() {
  return (
    <Reveal as="section" className="cta-banner">
      <div className="container cta-inner">
        <h2>Have a Project In Mind?</h2>
        <p>Let's turn it into something real — get a free, no-obligation quote today.</p>
        <a href="#contact" className="btn btn-primary btn-lg">
          Get Your Free Quote <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </Reveal>
  );
}
