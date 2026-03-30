import { useRef, useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const Counter = ({ value, label, delay }) => {
  const [ref, visible] = useReveal();
  const [count, setCount] = useState(0);
  const end = parseInt(value, 10);
  const plus = value.includes('+');
  const ran = useRef(false);

  useEffect(() => {
    if (!visible || ran.current) return;
    ran.current = true;
    let v = 0;
    const step = 1800 / end;
    const id = setInterval(() => {
      v++; setCount(v);
      if (v >= end) clearInterval(id);
    }, step);
    return () => clearInterval(id);
  }, [visible, end]);

  return (
    <div ref={ref}
      className={`reveal scale-in ${visible ? 'visible' : ''} d${delay}`}
      style={{ textAlign:'center', padding:'2rem 1rem', border:'1px solid #1a1a1a', background:'var(--bg3)', transition:'border-color 0.25s' }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--orange)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = '#1a1a1a'}
    >
      <p style={{ fontSize:'clamp(2.5rem,6vw,3.5rem)', fontWeight:900, color:'#fff', marginBottom:'0.25rem', fontVariantNumeric:'tabular-nums' }}>
        {count}{plus ? '+' : ''}
      </p>
      <p className="text-xs uppercase tracking-widest font-bold" style={{ color:'var(--muted)' }}>{label}</p>
    </div>
  );
};

const stats = [
  { value:'1.5', label:'Years in Mobile Dev' },
  { value:'15+', label:'Projects Completed' },
  { value:'03', label:'Internships' },
  { value:'08', label:'Technologies' },
];

const Stats = () => (
  <section style={{ background:'var(--bg)', padding:'3rem 0', borderBottom:'1px solid #111' }}>
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-3">
      {stats.map((s,i) => <Counter key={i} {...s} delay={i+1}/>)}
    </div>
  </section>
);

export default Stats;
