'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

type RevealTag = 'div' | 'section' | 'p' | 'h1' | 'h2' | 'h3' | 'ul' | 'ol' | 'li';

type RevealProps = {
  as?: RevealTag;
  className?: string;
  children: ReactNode;
  delay?: number;
};

/**
 * Fades/slides children in once when scrolled into view. Reveals via an
 * IntersectionObserver (its callback fires for elements already on screen), and
 * falls back to visible — on the next frame — when reduced motion is requested
 * or IntersectionObserver is unavailable, so content is never stuck hidden.
 */
export default function Reveal({ as = 'div', className = '', children, delay }: RevealProps) {
  const Tag = as as 'div';
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (prefersReducedMotion() || !el || typeof IntersectionObserver === 'undefined') {
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
