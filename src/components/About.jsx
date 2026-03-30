import { useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

const skills = [
  { name:'Flutter',          level:90 },
  { name:'Android (Kotlin)', level:85 },
  { name:'iOS (Swift)',      level:75 },
  { name:'Firebase & Backend', level:80 },
  { name:'Python & AI Tools',level:78 },
  { name:'Browser Automation',level:72 },
];

const SkillBar = ({ name, level, delay, parentVisible }) => {
  const barRef = useRef(null);
  useEffect(() => {
    if (!parentVisible || !barRef.current) return;
    const t = setTimeout(() => {
      barRef.current.style.width = level + '%';
    }, delay * 100 + 200);
    return () => clearTimeout(t);
  }, [parentVisible, level, delay]);

  return (
    <div style={{ marginBottom:'1.25rem' }}>
      <div className="flex justify-between mb-1.5">
        <span className="text-xs font-bold uppercase tracking-wider text-white">{name}</span>
        <span className="font-mono text-xs" style={{ color:'var(--orange)' }}>{level}%</span>
      </div>
      <div style={{ height:3, background:'#1a1a1a', overflow:'hidden' }}>
        <div ref={barRef} className="skill-fill" style={{ '--level': level + '%' }}/>
      </div>
    </div>
  );
};

const About = () => {
  const [imgRef, imgVis]   = useReveal();
  const [textRef, textVis] = useReveal();

  return (
    <section id="about" style={{ padding:'6rem 0', background:'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div ref={imgRef} className={`reveal from-left ${imgVis?'visible':''}`} style={{ position:'relative' }}>
          <div style={{ position:'relative', zIndex:1, overflow:'hidden', border:'1px solid #1a1a1a', aspectRatio:'16/10' }}>
            <img src="/workspace.png" alt="Workspace"
              style={{ width:'100%', height:'100%', objectFit:'cover', filter:'grayscale(1)', transition:'filter 0.7s' }}
              onMouseEnter={e => e.target.style.filter='grayscale(0)'}
              onMouseLeave={e => e.target.style.filter='grayscale(1)'}
            />
          </div>
          {/* Orange offset border */}
          <div style={{ position:'absolute', top:-12, left:-12, right:12, bottom:12, border:'1px solid rgba(255,107,0,0.2)', zIndex:0 }}/>
          <div style={{ position:'absolute', bottom:-10, right:-10, width:48, height:48, borderBottom:'2px solid var(--orange)', borderRight:'2px solid var(--orange)' }}/>
        </div>

        {/* Text */}
        <div ref={textRef} className={`reveal from-right ${textVis?'visible':''}`}>
          <span className="section-label">// The Journey</span>
          <h2 style={{ fontSize:'clamp(1.8rem,4vw,2.5rem)', fontWeight:900, color:'#fff', marginBottom:'1.5rem', lineHeight:1.2 }}>
            Building Digital<br/><span style={{ color:'#444' }}>Excellence.</span>
          </h2>
          <p className="text-sm leading-relaxed mb-10" style={{ color:'#666' }}>
            I am a Software Application Developer based in{' '}
            <strong style={{ color:'#fff' }}>Dubai, UAE</strong>. My journey spans native
            Android development, cross-platform Flutter apps, and AI-powered automation.
            I also bring a Cyber Security background from{' '}
            <strong style={{ color:'#fff' }}>IIT Jammu</strong>.
          </p>

          {skills.map((s, i) => (
            <SkillBar key={s.name} {...s} delay={i} parentVisible={textVis}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
