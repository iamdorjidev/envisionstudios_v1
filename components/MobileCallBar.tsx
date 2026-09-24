'use client';

import { useEffect, useState } from 'react';
import { SITE } from '@/lib/content';
import Icon from './Icon';

/**
 * Sticky bottom call bar, mobile only, appears once the visitor has scrolled
 * past the hero (300px) so it doesn't compete with the hero's own CTAs.
 */
export default function MobileCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`mobile-call-bar${visible ? ' is-visible' : ''}`}
      aria-hidden={!visible}
      role="navigation"
      aria-label="Quick contact"
    >
      <a href={SITE.phoneHref} className="mobile-call-bar-btn" tabIndex={visible ? 0 : -1}>
        <Icon name="phone" size={17} /> Call
      </a>
      <a href="/contact" className="mobile-call-bar-btn is-primary" tabIndex={visible ? 0 : -1}>
        <Icon name="mail" size={17} /> Enquire
      </a>
    </div>
  );
}
