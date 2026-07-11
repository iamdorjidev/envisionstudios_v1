import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(min-width: 900px)').matches) return;
    const handleMove = (e) => {
      if (!ref.current) return;
      ref.current.style.left = e.clientX + 'px';
      ref.current.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return <div className="cursor-glow" ref={ref} />;
}
