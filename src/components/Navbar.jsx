import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="brand">
          <img src="/image/logo-cropped.png" alt="enVision Studio Logo" className="brand-logo" />
        </a>
        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-outline nav-cta">Get a Quote <i className="fa-solid fa-arrow-right"></i></a>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
