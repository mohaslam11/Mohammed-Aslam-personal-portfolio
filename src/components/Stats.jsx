import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Counter = ({ value, label, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericEnd = parseInt(value, 10);
  const hasPlus = value.includes('+');

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = duration / numericEnd;
    const timer = setInterval(() => {
      start++;
      setCount(start);
      if (start >= numericEnd) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [isInView, numericEnd]);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.6, delay: index * 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 90%' },
      }
    );
  }, [index]);

  return (
    <div
      ref={ref}
      className="text-center p-6 md:p-8 border border-gray-800 bg-[#0f0f0f] hover:border-cinema-orange/60 transition-all duration-300 group"
      style={{ opacity: 0 }}
    >
      <h3 className="text-5xl md:text-6xl font-black text-white mb-2 group-hover:text-cinema-orange transition-colors duration-300 tabular-nums">
        {count}{hasPlus ? '+' : ''}
      </h3>
      <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">{label}</p>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { value: '03', label: 'Years in Mobile Dev' },
    { value: '15+', label: 'Projects Completed' },
    { value: '03', label: 'Internships' },
    { value: '08', label: 'Technologies' },
  ];

  return (
    <section className="bg-cinema-bg py-12 border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stats.map((s, i) => (
            <Counter key={i} value={s.value} label={s.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
