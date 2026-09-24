import Link from 'next/link';
import Image from 'next/image';
import { SITE, NAV_LINKS, PRIMARY_CTA } from '@/lib/content';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Image
            src="/image/logo-cropped.png"
            alt="enVision Studio"
            width={466}
            height={113}
            className="brand-logo"
          />
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
          <a href={SITE.phoneHref}>{SITE.phone}</a>
          <a href="/contact">{PRIMARY_CTA}</a>
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
