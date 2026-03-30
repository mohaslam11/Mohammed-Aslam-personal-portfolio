import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useReveal } from '../hooks/useReveal';

const projects = [
  { title:'ColourDetection', desc:'Real-time color identification using Python & OpenCV with advanced image processing.',
    tags:['Python','OpenCV','AI/ML'], link:'https://github.com/mohaslam11/ColourDetection',
    type:'AI Research', bg:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', icon:'🎨', accent:'#a855f7' },
  { title:'Platesy App', desc:'Community food sharing platform promoting zero-waste lifestyle — Flutter & Firebase.',
    tags:['Flutter','Firebase','Maps'], link:'https://github.com/mohaslam11/platesy-food-sharing',
    type:'Mobile App', bg:'linear-gradient(135deg,#134e5e,#71b280)', icon:'🍽️', accent:'#71b280' },
  { title:'Medical AI', desc:'Diagnostic support system leveraging machine learning for fast medical analysis.',
    tags:['ML','Healthcare','Python'], link:'https://github.com/mohaslam11/medical-ai',
    type:'Healthcare Tech', bg:'linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)', icon:'🩺', accent:'#e94560' },
  { title:'Travnook Lead Qualifier', desc:'AI lead scoring (0–100) with Groq LLM, Google Sheets export, rich terminal UI.',
    tags:['Python','Groq API','Sheets'], link:'https://github.com/mohaslam11/travnook-lead-qualifier',
    type:'AI Automation', bg:'linear-gradient(135deg,#1a1a1a,#2d1b00,#3d2200)', icon:'🤖', accent:'#f97316' },
  { title:'AI Automation Bot', desc:'Stealth browser bot that bypasses Cloudflare with human-like Playwright automation.',
    tags:['JavaScript','Playwright','Bots'], link:'https://github.com/mohaslam11/AI-Automation-Bot',
    type:'Browser Automation', bg:'linear-gradient(135deg,#0d0d0d,#1a0a2e,#0d1b2a)', icon:'⚡', accent:'#6366f1' },
];

const tilt = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - r.left) / r.width  - 0.5) * 16;
  const y = ((e.clientY - r.top)  / r.height - 0.5) * -16;
  e.currentTarget.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg) scale(1.03)`;
};
const resetTilt = (e) => { e.currentTarget.style.transform = 'none'; };

const Card = ({ p, index, parentVis }) => (
  <div
    className={`reveal ${parentVis?'visible':''} d${(index%3)+1} project-card`}
    onMouseMove={tilt} onMouseLeave={resetTilt}
    style={{ cursor:'default' }}
  >
    {/* Thumbnail */}
    <div style={{ height:180, background:p.bg, position:'relative', overflow:'hidden', borderBottom:'1px solid #1a1a1a' }}>
      <div style={{
        position:'absolute', inset:0, opacity:0.08,
        backgroundImage:`linear-gradient(${p.accent}55 1px,transparent 1px),linear-gradient(90deg,${p.accent}55 1px,transparent 1px)`,
        backgroundSize:'28px 28px',
      }}/>
      <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:8 }}>
        <span style={{ fontSize:'2.5rem' }}>{p.icon}</span>
        <span style={{ fontSize:'0.6rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.15em', color:p.accent }}>{p.type}</span>
      </div>
    </div>
    {/* Body */}
    <div style={{ padding:'1.5rem' }}>
      <h3 style={{ fontSize:'1.1rem', fontWeight:900, color:'#fff', marginBottom:'0.5rem', transition:'color 0.2s' }}
        onMouseEnter={e=>e.target.style.color='var(--orange)'} onMouseLeave={e=>e.target.style.color='#fff'}>
        {p.title}
      </h3>
      <p style={{ fontSize:'0.78rem', lineHeight:1.6, color:'#555', marginBottom:'1rem' }}>{p.desc}</p>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div style={{ display:'flex', flexWrap:'wrap', gap:4 }}>
          {p.tags.map(tag=>(
            <span key={tag} style={{ fontSize:'0.6rem', fontWeight:700, textTransform:'uppercase', color:'#444', border:'1px solid #1a1a1a', padding:'0.2rem 0.5rem' }}>
              {tag}
            </span>
          ))}
        </div>
        <a href={p.link} target="_blank" rel="noreferrer"
          style={{ color:'#555', transition:'color 0.2s' }}
          onMouseEnter={e=>e.target.style.color='var(--orange)'} onMouseLeave={e=>e.target.style.color='#555'}>
          <FaGithub size={18}/>
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [ref, vis] = useReveal();
  return (
    <section id="projects" style={{ padding:'6rem 0', background:'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${vis?'visible':''} flex flex-col sm:flex-row justify-between items-start sm:items-end mb-14 pb-8`}
          style={{ borderBottom:'1px solid #111' }}>
          <div>
            <span className="section-label">// Portfolio</span>
            <h2 style={{ fontSize:'clamp(2rem,5vw,3rem)', fontWeight:900, color:'#fff' }}>Featured Work</h2>
          </div>
          <a href="https://github.com/mohaslam11" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest mt-4 sm:mt-0 transition-colors"
            style={{ color:'var(--muted)' }}
            onMouseEnter={e=>e.currentTarget.style.color='#fff'} onMouseLeave={e=>e.currentTarget.style.color='var(--muted)'}>
            Github <FaExternalLinkAlt size={11}/>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p,i) => <Card key={i} p={p} index={i} parentVis={vis}/>)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
