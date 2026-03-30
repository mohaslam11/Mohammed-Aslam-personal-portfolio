import { useEffect, useRef, useState } from 'react';

/**
 * Returns [ref, isVisible] — triggers once when element enters viewport.
 * Zero dependencies, no GSAP needed.
 */
export const useReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
};

/**
 * CSS class helper — returns animation class when visible
 */
export const reveal = (visible, animation = 'fade-up', delay = 0) =>
  `reveal ${visible ? `visible ${animation}` : ''} delay-${delay}`;
