import Reveal from './Reveal';
import Icon from './Icon';

export default function Pricing() {
  return (
    <section className="section section--ink pricing" id="pricing">
      <div className="container pricing-inner">
        <Reveal>
          <p className="eyebrow">Pricing</p>
          <h2 className="section-title">
            Professional solutions. <span className="accent">Fair pricing.</span>
          </h2>
          <p className="pricing-lead">
            Every project is different, so I don&apos;t use a rigid price list. Whether you need a
            simple business website or a custom system, I&apos;ll recommend a solution that fits your
            needs and your budget — and give you a clear quote before any work starts.
          </p>
          <ul className="pricing-points">
            <li>
              <Icon name="check" size={14} /> No agency overhead priced into your project
            </li>
            <li>
              <Icon name="check" size={14} /> Fixed quote agreed up front
            </li>
            <li>
              <Icon name="check" size={14} /> Build in stages if it suits your budget
            </li>
          </ul>
          <a href="#contact" className="btn btn-primary">
            Request a Free Quote <Icon name="arrowRight" size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
