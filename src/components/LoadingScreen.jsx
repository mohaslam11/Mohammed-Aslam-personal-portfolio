import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const [phase, setPhase] = useState('counting');

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < 80) {
        current += Math.floor(Math.random() * 6) + 2;
      } else if (current < 95) {
        current += 1;
      } else {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setPhase('ready'), 400);
      }
      setPercent(Math.min(current, 100));
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (phase === 'ready') {
      const t = setTimeout(() => {
        setPhase('exit');
        setTimeout(onComplete, 900);
      }, 700);
      return () => clearTimeout(t);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Marquee top */}
          <div className="absolute top-0 w-full overflow-hidden py-3 border-b border-gray-900">
            <div className="marquee-track flex gap-10 whitespace-nowrap text-[10px] font-mono text-gray-700 uppercase tracking-[0.3em]">
              {[...Array(10)].map((_, i) => (
                <span key={i}>Mohammed Aslam &nbsp;•&nbsp; Software Developer &nbsp;•&nbsp; Flutter &nbsp;•&nbsp; Dubai UAE &nbsp;•&nbsp;</span>
              ))}
            </div>
          </div>

          {/* Logo */}
          <div className="absolute top-5 left-8">
            <span className="text-xl font-black uppercase tracking-widest text-white">
              ASLAM<span className="text-cinema-orange">.</span>
            </span>
          </div>

          {/* Counter */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <span className="text-[130px] md:text-[200px] font-black leading-none text-white tabular-nums">
                {String(percent).padStart(2, '0')}
              </span>
              <span className="absolute top-6 right-0 translate-x-full text-cinema-orange text-4xl font-black">%</span>
            </div>

            {/* Bar */}
            <div className="w-64 md:w-80 h-[1px] bg-gray-800 relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-cinema-orange transition-all duration-75"
                style={{ width: `${percent}%` }}
              />
            </div>

            <motion.p
              className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.25em]"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {phase === 'ready' ? 'Welcome — Loading complete' : 'Loading portfolio...'}
            </motion.p>
          </div>

          {/* Marquee bottom */}
          <div className="absolute bottom-0 w-full overflow-hidden py-3 border-t border-gray-900">
            <div
              className="marquee-track flex gap-10 whitespace-nowrap text-[10px] font-mono text-gray-700 uppercase tracking-[0.3em]"
              style={{ animationDirection: 'reverse' }}
            >
              {[...Array(10)].map((_, i) => (
                <span key={i}>Android &nbsp;•&nbsp; iOS &nbsp;•&nbsp; AI Automation &nbsp;•&nbsp; Python &nbsp;•&nbsp; Firebase &nbsp;•&nbsp;</span>
              ))}
            </div>
          </div>

          <style>{`
            .marquee-track { animation: marquee 20s linear infinite; }
            @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
