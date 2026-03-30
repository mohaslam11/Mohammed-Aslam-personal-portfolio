import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    year: '2022',
    role: 'Android Developer Intern',
    company: 'Mobile Tech Company',
    description:
      'Kickstarted my mobile development journey building native Android features in Kotlin. Integrated RESTful APIs, worked on UI components, and gained hands-on experience with the Android SDK and production workflows.',
    tags: ['Android', 'Kotlin', 'Java', 'REST API', 'XML Layouts'],
    color: '#3DDC84',
  },
  {
    year: '2024',
    role: 'Flutter Developer Intern',
    company: 'Software Studio',
    description:
      'Developed cross-platform Flutter applications for both Android and iOS. Built real-time features with Firebase, implemented clean architecture patterns, and shipped features used by live users.',
    tags: ['Flutter', 'Dart', 'Firebase', 'BLoC', 'REST API'],
    color: '#00D4FF',
  },
  {
    year: '2025',
    role: 'Flutter Developer Intern',
    company: 'Product Company',
    description:
      'Advanced Flutter role focusing on performance optimisation, state management with Riverpod, and integrating complex payment & mapping SDKs. Mentored junior developers and led sprint planning.',
    tags: ['Flutter', 'Riverpod', 'Maps SDK', 'Payments', 'CI/CD'],
    color: '#00D4FF',
  },
  {
    year: '2025',
    role: 'Software Developer',
    company: 'Dubai, UAE — Current',
    description:
      'Delivering full-cycle mobile apps (Flutter, iOS, Android) for clients in the UAE. Building AI-powered automation tools, browser bots, and lead intelligence systems. Open to full-time & freelance opportunities.',
    tags: ['Flutter', 'iOS', 'AI Automation', 'Python', 'Playwright', 'Groq API'],
    color: '#FF6B00',
    current: true,
  },
];

const CareerItem = ({ item, index }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
      }
    );
  }, [index]);

  return (
    <div ref={itemRef} className="relative flex gap-6 md:gap-10 group" style={{ opacity: 0 }}>
      {/* Dot + line */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className="w-5 h-5 rounded-full border-2 mt-1 transition-all duration-500 group-hover:scale-125"
          style={
            item.current
              ? {
                  backgroundColor: item.color,
                  borderColor: item.color,
                  boxShadow: `0 0 18px ${item.color}99`,
                }
              : { backgroundColor: 'transparent', borderColor: '#444' }
          }
        />
        {index < experiences.length - 1 && (
          <div
            className="w-[1px] flex-1 mt-2 min-h-[60px]"
            style={{
              background: `linear-gradient(to bottom, ${item.color}66, transparent)`,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-12 flex-1">
        <span
          className="text-xs font-mono uppercase tracking-[0.25em] mb-2 block"
          style={{ color: item.color }}
        >
          {item.year} {item.current && '— Present'}
        </span>

        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
          <h3
            className="text-xl md:text-2xl font-black text-white transition-colors duration-200"
            style={{ color: 'white' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = item.color)}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
          >
            {item.role}
          </h3>
          <span className="text-gray-500 text-sm font-mono">@ {item.company}</span>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed max-w-xl mb-4">{item.description}</p>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 border transition-all duration-300"
              style={{
                color: item.color,
                borderColor: `${item.color}33`,
                background: `${item.color}0d`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Career = () => {
  const headRef = useRef(null);

  useEffect(() => {
    if (!headRef.current) return;
    gsap.fromTo(
      headRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 85%' },
      }
    );
  }, []);

  return (
    <section id="career" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headRef} className="mb-16 border-b border-gray-800 pb-8" style={{ opacity: 0 }}>
          <h4 className="text-cinema-orange font-mono text-sm uppercase tracking-widest mb-2">
            // Career Path
          </h4>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            My Career &amp; <br />
            <span className="text-gray-600">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-2xl">
          {experiences.map((item, i) => (
            <CareerItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
