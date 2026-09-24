'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { NAV_LINKS, PRIMARY_CTA, SITE } from '@/lib/content';
import Icon from './Icon';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const { style } = document.body;
    const prev = style.overflow;
    style.overflow = 'hidden';
    panelRef.current?.querySelector<HTMLElement>('a, button')?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key === 'Tab' && panelRef.current) {
        const items = panelRef.current.querySelectorAll<HTMLElement>('a, button');
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="/" className="brand" aria-label="enVision Studio — home" onClick={close}>
          <Image
            src="/image/logo-cropped.png"
            alt="enVision Studio"
            width={466}
            height={113}
            className="brand-logo"
            priority
          />
        </a>

        <div className="nav-right">
          <div id="primary-nav" ref={panelRef} className={`nav-panel${open ? ' is-open' : ''}`}>
            <nav aria-label="Primary" className="nav-links">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={close}>
                  {l.label}
                </a>
              ))}
            </nav>
            <a href="/contact" className="btn btn-primary nav-cta-mobile" onClick={close}>
              {PRIMARY_CTA}
            </a>
          </div>

          <a href={SITE.phoneHref} className="nav-phone" aria-label={`Call ${SITE.phone}`} onClick={close}>
            <Icon name="phone" size={16} />
            <span className="nav-phone-text">{SITE.phone}</span>
          </a>

          <a href="/contact" className="btn btn-primary nav-cta">
            {PRIMARY_CTA} <Icon name="arrowRight" size={15} />
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      <button
        className={`nav-scrim${open ? ' is-open' : ''}`}
        tabIndex={-1}
        aria-hidden="true"
        onClick={close}
      />
    </header>
  );
}
