'use client';
import { useEffect, useRef } from 'react';

export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      ref.current.style.background = isDark
        ? `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(14,165,233,0.05), transparent 80%)`
        : '';
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return <div ref={ref} className="pointer-events-none fixed inset-0 z-[1]" aria-hidden />;
}
