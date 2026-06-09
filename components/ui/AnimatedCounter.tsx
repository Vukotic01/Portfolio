'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

export function AnimatedCounter({ value }: { value: string }) {
  const num = parseInt(value, 10);
  const suffix = value.replace(/[0-9]/g, '');
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, num, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v).toString()),
    });
    return controls.stop;
  }, [inView, num]);

  return <span ref={ref}>{display}{suffix}</span>;
}
