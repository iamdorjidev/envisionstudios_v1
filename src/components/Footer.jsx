const SERVICE_LINKS = [
  'Website Design & Development',
  'Website Maintenance',
  'Web Hosting',
  'System Development',
  'App Development',
];

const QUICK_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

const SOCIALS = [
  { icon: 'fa-brands fa-facebook-f', label: 'Facebook' },
  { icon: 'fa-brands fa-instagram', label: 'Instagram' },
  { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn' },
  { icon: 'fa-brands fa-github', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col footer-brand-col">
          <a href="#home" className="brand">
            <img src="/image/logo-cropped.png" alt="enVision Studio Logo" className="brand-logo" />
          </a>
          <p>
            enVision Studio is an independent digital studio helping businesses design, build,
            and run their websites, systems, and apps — under one roof.
          </p>
        </div>

        <div className="footer-col">
          <h5>Core Services</h5>
          {SERVICE_LINKS.map((s) => (
            <a href="#services" key={s}>{s}</a>
          ))}
        </div>

        <div className="footer-col">
          <h5>Quick Links</h5>
          {QUICK_LINKS.map((l) => (
            <a href={l.href} key={l.href}>{l.label}</a>
          ))}
        </div>

        <div className="footer-col footer-social-col">
          <h5>Social</h5>
          {SOCIALS.map((s) => (
            <a href="#" key={s.label}><i className={s.icon}></i> {s.label}</a>
          ))}
        </div>

        <div className="footer-col">
          <h5>Contact Us</h5>
          <a href="mailto:tdorji.dev@gmail.com">tdorji.dev@gmail.com</a>
          <a href="#contact">Get a Quote</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright {new Date().getFullYear()} enVision Studio | All Rights Reserved</p>
      </div>
    </footer>
  );
}
