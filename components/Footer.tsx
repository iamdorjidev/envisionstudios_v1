import Link from 'next/link';
import { SITE, NAV_LINKS } from '@/lib/content';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">
            en<b>Vision</b> <span>Studio</span>
          </span>
          <p>{SITE.positioning}</p>
          <p className="footer-loc">{SITE.location}</p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="footer-contact">
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href="#contact">Get a free quote</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {year} {SITE.name}
        </p>
        <p className="footer-legal">
          <Link href="/privacy">Privacy</Link>
          <span aria-hidden="true">·</span>
          <Link href="/terms">Terms</Link>
        </p>
      </div>
    </footer>
  );
}
