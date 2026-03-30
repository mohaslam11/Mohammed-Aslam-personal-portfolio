import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'Flutter', level: 90 },
  { name: 'Android (Kotlin)', level: 85 },
  { name: 'iOS (Swift)', level: 75 },
  { name: 'Backend & Firebase', level: 80 },
  { name: 'Python & AI Tools', level: 78 },
  { name: 'Browser Automation', level: 72 },
];

const About = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const barsRef = useRef([]);

  useEffect(() => {
    /* Slide in image */
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, x: -60 },
      {
        opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    );

    /* Slide in text */
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: 60 },
      {
        opacity: 1, x: 0, duration: 0.9, delay: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    );

    /* Staggered skill bar fills */
    barsRef.current.forEach((bar, i) => {
      if (!bar) return;
      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width: bar.dataset.level + '%',
          duration: 1.4,
          delay: i * 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
        }
      );
    });
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-cinema-bg text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div ref={imgRef} className="relative" style={{ opacity: 0 }}>
            <div className="relative z-10 aspect-video bg-gray-900 overflow-hidden border border-gray-800 group">
              <img
                src="/workspace.png"
                alt="Developer Workspace"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full border border-cinema-orange/30 z-0" />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-cinema-orange" />
          </div>

          {/* Content */}
          <div ref={textRef} style={{ opacity: 0 }}>
            <h4 className="text-cinema-orange font-mono text-sm uppercase tracking-widest mb-4">
              // The Journey
            </h4>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Building Digital <br />
              <span className="text-gray-500">Excellence.</span>
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed text-sm">
              I am a Software Application Developer based in{' '}
              <span className="text-white font-bold">Dubai, UAE</span>. My journey spans native
              Android development, cross-platform Flutter apps, and AI-powered automation systems.
              From internships to production deployments — I bring a full-cycle engineering mindset
              and a Cyber Security background from{' '}
              <span className="text-white">IIT Jammu</span>.
            </p>

            {/* Skill bars */}
            <div className="space-y-5">
              {skills.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-white text-xs font-bold uppercase tracking-wider">{s.name}</span>
                    <span className="text-cinema-orange font-mono text-xs">{s.level}%</span>
                  </div>
                  <div className="h-[3px] bg-gray-800 overflow-hidden">
                    <div
                      ref={(el) => { barsRef.current[i] = el; }}
                      data-level={s.level}
                      className="h-full bg-cinema-orange"
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
