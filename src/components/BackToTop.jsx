import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a href="#home" className={`back-to-top${show ? ' show' : ''}`} aria-label="Back to top">
      <i className="fa-solid fa-arrow-up"></i>
    </a>
  );
}
