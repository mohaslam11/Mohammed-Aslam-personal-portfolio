import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { name: 'About',   href: '#about' },
  { name: 'What I Do', href: '#services' },
  { name: 'Career',  href: '#career' },
  { name: 'Work',    href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen]     = useState(false);
  const [active, setActive]     = useState('');
  const navRef = useRef(null);

  /* Scroll state */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Active section via IntersectionObserver */
  useEffect(() => {
    const ids = ['about', 'services', 'career', 'projects', 'contact'];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { threshold: 0.35 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  /* GSAP slide-in on mount */
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, delay: 0.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
      style={{ opacity: 0 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-black uppercase tracking-wider text-white group">
            ASLAM<span className="text-cinema-orange group-hover:animate-pulse">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-widest relative group transition-colors duration-200 ${
                  active === link.href ? 'text-cinema-orange' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-cinema-orange transition-all duration-300 ${
                    active === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Socials + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-4 border-r border-gray-700 pr-6">
              <a href="https://github.com/mohaslam11" target="_blank" rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors">
                <FaGithub size={17} />
              </a>
              <a href="https://linkedin.com/in/mohaslam" target="_blank" rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={17} />
              </a>
            </div>
            <a
              href="#contact"
              className="px-5 py-2 border border-cinema-orange text-cinema-orange text-xs font-bold uppercase tracking-widest hover:bg-cinema-orange hover:text-black transition-all"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen((p) => !p)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-cinema-bg border-t border-gray-800"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black text-white uppercase tracking-widest hover:text-cinema-orange transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-10 py-4 bg-cinema-orange text-black font-black uppercase tracking-widest"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
