import { useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'ColourDetection',
    description: 'Real-time color identification app using Python & OpenCV with advanced image processing algorithms.',
    tags: ['Python', 'AI/ML', 'OpenCV'],
    link: 'https://github.com/mohaslam11/ColourDetection',
    type: 'AI Research',
    bg: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
    icon: '🎨',
    label: 'Computer Vision',
    accent: '#a855f7',
  },
  {
    title: 'Platesy App',
    description: 'Community-driven food sharing platform promoting zero-waste lifestyle built with Flutter & Firebase.',
    tags: ['Flutter', 'Firebase', 'Maps'],
    link: 'https://github.com/mohaslam11/platesy-food-sharing',
    type: 'Mobile App',
    bg: 'linear-gradient(135deg, #134e5e, #71b280)',
    icon: '🍽️',
    label: 'Mobile Application',
    accent: '#71b280',
  },
  {
    title: 'Medical AI',
    description: 'Diagnostic support system leveraging machine learning for fast and accurate medical analysis.',
    tags: ['ML', 'Healthcare', 'Python'],
    link: 'https://github.com/mohaslam11/medical-ai',
    type: 'Healthcare Tech',
    bg: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
    icon: '🩺',
    label: 'AI Health Platform',
    accent: '#e94560',
  },
  {
    title: 'Travnook Lead Qualifier',
    description: 'AI-powered lead scoring (0–100) using Groq LLM with Google Sheets export and rich terminal UI.',
    tags: ['Python', 'Groq API', 'Google Sheets'],
    link: 'https://github.com/mohaslam11/travnook-lead-qualifier',
    type: 'AI Automation',
    bg: 'linear-gradient(135deg, #1a1a1a, #2d1b00, #3d2200)',
    icon: '🤖',
    label: 'Lead Intelligence',
    accent: '#f97316',
  },
  {
    title: 'AI Automation Bot',
    description: 'Stealth browser automation bot that bypasses Cloudflare protection with human-like interaction.',
    tags: ['JavaScript', 'Playwright', 'Automation'],
    link: 'https://github.com/mohaslam11/AI-Automation-Bot',
    type: 'Browser Automation',
    bg: 'linear-gradient(135deg, #0d0d0d, #1a0a2e, #0d1b2a)',
    icon: '⚡',
    label: 'Browser Automation',
    accent: '#6366f1',
  },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  /* GSAP scroll reveal */
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: (index % 3) * 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
      }
    );
  }, [index]);

  /* 3-D tilt on mouse move */
  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -18;
    e.currentTarget.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg) scale(1.03)`;
    e.currentTarget.style.transition = 'transform 0.1s ease';
  };
  const onMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)';
    e.currentTarget.style.transition = 'transform 0.5s ease';
  };

  return (
    <div
      ref={cardRef}
      className="group relative bg-[#0f0f0f] border border-gray-800 hover:border-cinema-orange transition-colors duration-300 will-change-transform"
      style={{ opacity: 0 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Card thumbnail */}
      <div
        className="h-48 relative overflow-hidden border-b border-gray-800"
        style={{ background: project.bg }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(${project.accent}44 1px, transparent 1px), linear-gradient(90deg, ${project.accent}44 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-2xl opacity-25"
          style={{ background: project.accent }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
            {project.icon}
          </span>
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: project.accent }}
          >
            {project.label}
          </span>
        </div>
        <div
          className="absolute top-3 right-3 text-[10px] font-mono px-2 py-1 border"
          style={{
            color: project.accent,
            borderColor: `${project.accent}55`,
            background: `${project.accent}11`,
          }}
        >
          {'< />'}
        </div>
      </div>

      {/* Text */}
      <div className="p-7">
        <span className="text-cinema-orange text-xs font-bold uppercase tracking-widest mb-2 block">
          {project.type}
        </span>
        <h3 className="text-2xl font-black text-white mb-3 group-hover:text-cinema-orange transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-500 mb-6 text-sm leading-relaxed">{project.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase font-bold text-gray-600 border border-gray-800 px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-cinema-orange transition-colors"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const headRef = useRef(null);

  useEffect(() => {
    if (!headRef.current) return;
    gsap.fromTo(
      headRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: { trigger: headRef.current, start: 'top 85%' },
      }
    );
  }, []);

  return (
    <section id="projects" className="py-24 bg-cinema-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headRef}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 border-b border-gray-800 pb-8"
          style={{ opacity: 0 }}
        >
          <div>
            <h4 className="text-cinema-orange font-mono text-sm uppercase tracking-widest mb-2">
              // Portfolio
            </h4>
            <h2 className="text-4xl font-black text-white">Featured Work</h2>
          </div>
          <a
            href="https://github.com/mohaslam11"
            target="_blank"
            rel="noreferrer"
            className="mt-4 sm:mt-0 flex items-center gap-2 text-gray-500 hover:text-white transition-colors uppercase text-sm font-bold tracking-widest"
          >
            View Github <FaExternalLinkAlt size={12} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
