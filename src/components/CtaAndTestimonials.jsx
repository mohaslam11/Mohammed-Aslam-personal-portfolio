import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CTA = () => {
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(ref.current, { opacity: 0, scale: 0.95 }, {
      opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 85%' },
    });
  }, []);

  return (
    <section ref={ref} className="py-24 bg-cinema-orange text-black" style={{ opacity: 0 }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">
          Available for New <br /> Opportunities
        </h2>
        <p className="text-black/70 mb-10 max-w-2xl mx-auto font-medium text-lg">
          Looking for a precise and passionate Mobile Application Developer? Let's discuss how I
          can add value to your team.
        </p>
        <a
          href="#contact"
          className="inline-block px-12 py-5 bg-black text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl hover:scale-105 transform duration-200"
        >
          Hire Me Now
        </a>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(ref.current, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 85%' },
    });
  }, []);

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-[#0a0a0a] border-y border-gray-900" style={{ opacity: 0 }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h4 className="text-cinema-orange font-mono text-sm uppercase tracking-widest mb-6">
          // Testimonials
        </h4>
        <blockquote className="text-xl md:text-2xl font-light text-gray-300 italic mb-8 leading-relaxed">
          "Aslam's ability to translate complex logic into smooth, high-performance mobile
          interfaces is exceptional. A true professional who delivers on time."
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cinema-orange to-orange-900 flex items-center justify-center font-black text-black text-lg">
            T
          </div>
          <div className="text-left">
            <cite className="block text-white font-black not-italic font-mono text-sm">Tech Lead</cite>
            <span className="text-cinema-orange text-xs font-bold uppercase tracking-wide">
              Internship Supervisor
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
