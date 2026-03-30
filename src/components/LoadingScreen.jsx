import { useState, useEffect } from 'react';

const MARQUEE = ['Mohammed Aslam', 'Software Developer', 'Flutter', 'Android', 'iOS', 'Dubai UAE', 'AI Automation', 'Python'];

const LoadingScreen = ({ onComplete }) => {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    let v = 0;
    const id = setInterval(() => {
      v += v < 80 ? Math.random() * 5 + 2 : v < 95 ? 1 : 100;
      v = Math.min(v, 100);
      setPct(Math.floor(v));
      if (v >= 100) {
        clearInterval(id);
        setTimeout(() => setDone(true), 400);
      }
    }, 55);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => {
      setExit(true);
      setTimeout(onComplete, 700);
    }, 600);
    return () => clearTimeout(t);
  }, [done, onComplete]);

  const marqueeItems = [...MARQUEE, ...MARQUEE];

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: '#050505',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        transition: exit ? 'opacity 0.7s ease, transform 0.7s ease' : 'none',
        opacity: exit ? 0 : 1,
        transform: exit ? 'translateY(-4%)' : 'none',
        pointerEvents: exit ? 'none' : 'auto',
      }}
    >
      {/* Top marquee */}
      <div className="marquee-wrap absolute top-0 w-full py-3 border-b" style={{ borderColor: '#111' }}>
        <div className="marquee-inner">
          {marqueeItems.map((t, i) => (
            <span key={i} className="text-xs font-mono uppercase tracking-widest" style={{ color: '#333' }}>
              {t} &nbsp;•&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Logo */}
      <div className="absolute top-5 left-8 text-xl font-black uppercase tracking-widest text-white">
        ASLAM<span style={{ color: 'var(--orange)' }}>.</span>
      </div>

      {/* Big number */}
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative">
          <span className="loader-num">{String(pct).padStart(2, '0')}</span>
          <span className="absolute top-4 -right-6 text-3xl font-black" style={{ color: 'var(--orange)' }}>%</span>
        </div>

        {/* Bar */}
        <div className="w-64 md:w-80" style={{ height: '1px', background: '#1a1a1a', position: 'relative' }}>
          <div className="loader-bar-fill" style={{ width: `${pct}%` }} />
        </div>

        <p className="text-xs font-mono uppercase tracking-widest" style={{ color: '#444', animation: 'pulse 1.5s infinite' }}>
          {done ? 'Welcome' : 'Loading...'}
        </p>
      </div>

      {/* Bottom marquee */}
      <div className="marquee-wrap absolute bottom-0 w-full py-3 border-t" style={{ borderColor: '#111' }}>
        <div className="marquee-inner" style={{ animationDirection: 'reverse' }}>
          {marqueeItems.map((t, i) => (
            <span key={i} className="text-xs font-mono uppercase tracking-widest" style={{ color: '#333' }}>
              {t} &nbsp;•&nbsp;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
