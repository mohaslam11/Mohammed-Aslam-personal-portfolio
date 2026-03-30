import { useState } from 'react';
import { FaMobileAlt, FaRobot, FaServer, FaShieldAlt } from 'react-icons/fa';
import { useReveal } from '../hooks/useReveal';

const services = [
  {
    id:'mobile', icon:<FaMobileAlt size={22}/>,
    title:'MOBILE DEVELOPMENT', sub:'Cross-Platform & Native',
    desc:"High-performance mobile apps for iOS and Android — Flutter and native stacks. Real-time features, offline-first architecture, full end-to-end delivery.",
    skills:['Flutter','Android (Kotlin)','iOS (Swift)','Dart','Firebase','REST APIs'],
  },
  {
    id:'ai', icon:<FaRobot size={22}/>,
    title:'AI & AUTOMATION', sub:'Intelligent Tools & Bots',
    desc:"AI-powered systems — lead qualification engines, stealth browser bots, computer vision pipelines. Complex workflows turned into hands-free automation.",
    skills:['Python','Groq API','OpenCV','Playwright','Puppeteer','Google Sheets API'],
  },
  {
    id:'backend', icon:<FaServer size={22}/>,
    title:'BACKEND & INTEGRATIONS', sub:'APIs & Cloud Services',
    desc:"Scalable backend solutions and third-party integrations. Firebase, custom REST APIs, or Node.js — your data flows reliably and securely.",
    skills:['Node.js','Firebase','REST APIs','Google Cloud','Supabase','SQL'],
  },
  {
    id:'security', icon:<FaShieldAlt size={22}/>,
    title:'SECURE DEVELOPMENT', sub:'Cyber Security Trained',
    desc:"Trained at IIT Jammu. Security-first thinking — auth flows, encryption, and vulnerability mitigation built in as standard, not an afterthought.",
    skills:['Auth Systems','Encryption','Ethical Hacking','Network Security','Secure APIs'],
  },
];

const Card = ({ s, open, toggle, index, parentVis }) => (
  <div
    className={`reveal ${parentVis?'visible':''} d${index+1}`}
    style={{
      border:`1px solid ${open?'var(--orange)':'#1a1a1a'}`,
      marginBottom:4,
      transition:'border-color 0.25s',
      cursor:'pointer',
    }}
    onClick={toggle}
  >
    {/* Header */}
    <div className="flex items-center justify-between p-5 md:p-6">
      <div className="flex items-center gap-4">
        <div style={{
          padding:'0.65rem',
          background: open ? 'var(--orange)' : '#111',
          color: open ? '#000' : 'var(--orange)',
          transition:'background 0.25s, color 0.25s',
        }}>
          {s.icon}
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-wider" style={{ color: open ? 'var(--orange)' : '#fff' }}>
            {s.title}
          </p>
          <p className="font-mono text-xs mt-0.5" style={{ color:'var(--muted)' }}>{s.sub}</p>
        </div>
      </div>
      <div style={{
        width:30, height:30,
        border:`1px solid ${open?'var(--orange)':'#333'}`,
        display:'flex', alignItems:'center', justifyContent:'center',
        color: open ? 'var(--orange)' : '#555',
        fontSize:'1.3rem', fontWeight:300,
        transform: open ? 'rotate(45deg)' : 'none',
        transition:'transform 0.3s, color 0.2s, border-color 0.2s',
        flexShrink:0,
      }}>+</div>
    </div>

    {/* Body - CSS max-height accordion */}
    <div className={`accordion-body ${open?'open':''}`}>
      <div style={{ padding:'0 1.5rem 1.5rem', borderTop:'1px solid #111' }}>
        <p className="text-sm leading-relaxed mt-4 mb-4" style={{ color:'#666' }}>{s.desc}</p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
          {s.skills.map(sk => (
            <span key={sk} style={{
              fontSize:'0.6rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.12em',
              color:'var(--orange)', border:'1px solid rgba(255,107,0,0.25)',
              background:'rgba(255,107,0,0.06)', padding:'0.3rem 0.7rem',
            }}>{sk}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const WhatIDo = () => {
  const [open, setOpen] = useState('mobile');
  const [ref, vis]      = useReveal();

  return (
    <section id="services" style={{ padding:'6rem 0', background:'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${vis?'visible':''} grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 pb-10`}
          style={{ borderBottom:'1px solid #111' }}>
          <div>
            <span className="section-label">// What I Do</span>
            <h2 style={{ fontSize:'clamp(2rem,5vw,3.5rem)', fontWeight:900, color:'#fff', lineHeight:1.1 }}>
              WHAT<br/><span style={{ color:'#2a2a2a' }}>I DO</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-sm leading-relaxed" style={{ color:'var(--muted)' }}>
              Polished mobile apps, intelligent automation, and secure backend integrations.
              Click each to explore.
            </p>
          </div>
        </div>

        <div>
          {services.map((s,i) => (
            <Card key={s.id} s={s} open={open===s.id}
              toggle={() => setOpen(open===s.id ? null : s.id)}
              index={i} parentVis={vis}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
