import Reveal from './Reveal.jsx';

const SERVICES = [
  {
    icon: 'fa-globe',
    title: 'Website Design & Development',
    desc: 'Modern, responsive websites crafted from scratch — fast, SEO-friendly, and built to convert visitors into customers.',
  },
  {
    icon: 'fa-screwdriver-wrench',
    title: 'Website Maintenance',
    desc: 'Regular updates, security patches, backups, and performance checks so your site stays fast and reliable.',
  },
  {
    icon: 'fa-server',
    title: 'Web Hosting',
    desc: 'Reliable, secure hosting setup and management — domains, SSL, email, and uptime monitoring handled for you.',
  },
  {
    icon: 'fa-database',
    title: 'System Development',
    desc: 'Custom business systems — inventory, booking, CRM, and internal tools designed around how you actually work.',
  },
  {
    icon: 'fa-mobile-screen-button',
    title: 'App Development',
    desc: 'Cross-platform mobile and web apps with clean UI/UX, built to perform on any device.',
  },
  {
    icon: 'fa-pen-nib',
    title: 'Logo & Brand Design',
    desc: 'Distinctive logos and brand identities that make your business memorable and market-ready.',
  },
  {
    icon: 'fa-object-group',
    title: 'UI/UX Design',
    desc: 'Clean, intuitive interfaces backed by real design thinking — for websites, apps, and dashboards.',
  },
  {
    icon: 'fa-arrow-trend-up',
    title: 'And Many More',
    desc: "SEO basics, digital consulting, e-commerce setup, automation — tell us your goal and we'll build a plan for it.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <Reveal as="div" className="section-head">
          <p className="eyebrow">What We Offer</p>
          <h2>Services Built Around <span className="gradient-text">Your Growth</span></h2>
          <p className="section-desc">
            From your first line of code to long-term support — enVision Studio covers
            the full digital lifecycle of your business.
          </p>
        </Reveal>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <Reveal className="service-card" key={s.title}>
              <div className="service-icon"><i className={`fa-solid ${s.icon}`}></i></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="#contact" className="service-arrow">Learn more <i className="fa-solid fa-arrow-right"></i></a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
