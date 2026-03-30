import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const links = [
  { name: 'About',    href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Career',   href: '#career' },
  { name: 'Work',     href: '#projects' },
  { name: 'Contact',  href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['about','services','career','projects','contact'];
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id); }),
      { threshold: 0.4 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-black uppercase tracking-widest text-white">
          ASLAM<span style={{ color: 'var(--orange)' }}>.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.name} href={l.href}
              className={`nav-link text-xs font-bold uppercase tracking-widest transition-colors ${active === l.href ? 'active text-white' : 'text-gray-500 hover:text-white'}`}>
              {l.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <a href="https://github.com/mohaslam11" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors"><FaGithub size={17}/></a>
          <a href="https://linkedin.com/in/mohaslam" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors"><FaLinkedin size={17}/></a>
          <a href="#contact" className="btn-outline" style={{ padding:'0.5rem 1.2rem', fontSize:'0.7rem' }}>Hire Me</a>
        </div>

        {/* Mobile */}
        <button className="md:hidden text-white" onClick={() => setOpen(p => !p)}>
          {open ? <FaTimes size={22}/> : <FaBars size={22}/>}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-t" style={{ borderColor:'#111' }}>
          <div className="flex flex-col items-center py-10 gap-7">
            {links.map(l => (
              <a key={l.name} href={l.href} onClick={() => setOpen(false)}
                className="text-xl font-black uppercase tracking-widest text-white hover:text-orange-500 transition-colors">
                {l.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-orange mt-4">Hire Me</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
