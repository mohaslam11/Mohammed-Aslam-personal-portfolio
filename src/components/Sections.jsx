import { useState, useRef } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useReveal } from '../hooks/useReveal';

/* ── Contact ── */
export const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle');
  const [ref, vis] = useReveal();

  const send = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.sendForm('service_gj4bbid','template_reop7xg', formRef.current,'EQwbd4UJkIbrm4P7M')
      .then(()=>{ setStatus('success'); formRef.current.reset(); })
      .catch(()=> setStatus('error'));
  };

  const inp = { width:'100%', background:'#000', border:'1px solid #1a1a1a', padding:'1rem', color:'#fff', fontSize:'0.85rem', outline:'none', transition:'border-color 0.2s' };

  return (
    <section id="contact" style={{ padding:'6rem 0', background:'var(--bg2)' }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16" ref={ref}>

        <div className={`reveal from-left ${vis?'visible':''}`}>
          <span className="section-label">// Contact</span>
          <h2 style={{ fontSize:'clamp(2.5rem,6vw,4rem)', fontWeight:900, color:'#fff', marginBottom:'1.5rem', lineHeight:1.1 }}>
            Let's Work<br/>Together.
          </h2>
          <p style={{ color:'var(--muted)', fontSize:'0.9rem', lineHeight:1.7, marginBottom:'2.5rem', maxWidth:380 }}>
            Available for freelance &amp; full-time. Have a project that needs a creative touch?
          </p>
          <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
            {[
              { icon:<FaEnvelope/>, label:'Email', val:'mohaslam861@gmail.com', href:'mailto:mohaslam861@gmail.com' },
              { icon:<FaMapMarkerAlt/>, label:'Location', val:'Dubai, UAE', href:null },
            ].map(item => (
              <div key={item.label} style={{ display:'flex', alignItems:'center', gap:'1rem' }}>
                <div style={{ width:44, height:44, background:'#0f0f0f', border:'1px solid #1a1a1a', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--orange)', flexShrink:0 }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontSize:'0.65rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.15em', color:'var(--muted)', marginBottom:2 }}>{item.label}</p>
                  {item.href
                    ? <a href={item.href} style={{ color:'#fff', fontSize:'0.9rem', fontWeight:700, transition:'color 0.2s' }}
                        onMouseEnter={e=>e.target.style.color='var(--orange)'} onMouseLeave={e=>e.target.style.color='#fff'}>{item.val}</a>
                    : <p style={{ color:'#fff', fontSize:'0.9rem', fontWeight:700, margin:0 }}>{item.val}</p>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`reveal from-right ${vis?'visible':''}`} style={{ background:'var(--bg3)', border:'1px solid #1a1a1a', padding:'2.5rem' }}>
          <form ref={formRef} onSubmit={send} style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label style={{ display:'block', fontSize:'0.65rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.15em', color:'var(--muted)', marginBottom:8 }}>Name</label>
                <input type="text" name="from_name" required placeholder="John Doe"
                  style={inp} onFocus={e=>e.target.style.borderColor='var(--orange)'} onBlur={e=>e.target.style.borderColor='#1a1a1a'}/>
              </div>
              <div>
                <label style={{ display:'block', fontSize:'0.65rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.15em', color:'var(--muted)', marginBottom:8 }}>Email</label>
                <input type="email" name="from_email" required placeholder="you@email.com"
                  style={inp} onFocus={e=>e.target.style.borderColor='var(--orange)'} onBlur={e=>e.target.style.borderColor='#1a1a1a'}/>
              </div>
            </div>
            <div>
              <label style={{ display:'block', fontSize:'0.65rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.15em', color:'var(--muted)', marginBottom:8 }}>Message</label>
              <textarea rows={5} name="message" required placeholder="Tell me about your project..."
                style={{ ...inp, resize:'none' }} onFocus={e=>e.target.style.borderColor='var(--orange)'} onBlur={e=>e.target.style.borderColor='#1a1a1a'}/>
            </div>
            {status==='success' && <p style={{ color:'#4ade80', fontSize:'0.75rem', fontWeight:700, textTransform:'uppercase' }}>✅ Message sent!</p>}
            {status==='error'   && <p style={{ color:'#f87171', fontSize:'0.75rem', fontWeight:700, textTransform:'uppercase' }}>❌ Error. Try again.</p>}
            <button type="submit" disabled={status==='sending'} className="btn-orange" style={{ justifyContent:'center', opacity: status==='sending'?0.6:1 }}>
              {status==='sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

/* ── Testimonials ── */
export const Testimonials = () => {
  const [ref, vis] = useReveal();
  return (
    <section id="testimonials" ref={ref} className={`reveal ${vis?'visible':''}`}
      style={{ padding:'6rem 0', background:'var(--bg)', borderTop:'1px solid #111', borderBottom:'1px solid #111' }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="section-label" style={{ justifyContent:'center', display:'block' }}>// Testimonials</span>
        <FaQuoteLeft size={28} style={{ color:'#1a1a1a', margin:'0 auto 1.5rem' }}/>
        <blockquote style={{ fontSize:'clamp(1rem,3vw,1.4rem)', fontWeight:300, color:'#aaa', fontStyle:'italic', lineHeight:1.7, marginBottom:'2rem' }}>
          "Aslam's ability to translate complex logic into smooth, high-performance mobile interfaces is exceptional. A true professional who delivers on time."
        </blockquote>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'1rem' }}>
          <div style={{ width:44, height:44, borderRadius:'50%', background:'linear-gradient(135deg,var(--orange),#aa4400)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:900, color:'#000' }}>T</div>
          <div style={{ textAlign:'left' }}>
            <strong style={{ display:'block', color:'#fff', fontSize:'0.85rem', fontFamily:'monospace' }}>Tech Lead</strong>
            <span style={{ color:'var(--orange)', fontSize:'0.65rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.15em' }}>Internship Supervisor</span>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── CTA ── */
export const CTA = () => {
  const [ref, vis] = useReveal();
  return (
    <section ref={ref} className={`reveal scale-in ${vis?'visible':''}`}
      style={{ padding:'6rem 0', background:'var(--orange)' }}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 style={{ fontSize:'clamp(2rem,6vw,4rem)', fontWeight:900, color:'#000', marginBottom:'1.5rem', textTransform:'uppercase', letterSpacing:'-0.02em' }}>
          Available for New<br/>Opportunities
        </h2>
        <p style={{ color:'rgba(0,0,0,0.65)', marginBottom:'2.5rem', maxWidth:520, margin:'0 auto 2.5rem', fontSize:'1rem', lineHeight:1.7 }}>
          Looking for a passionate Mobile Application Developer? Let's talk.
        </p>
        <a href="#contact" style={{
          display:'inline-block', padding:'1rem 3rem',
          background:'#000', color:'#fff',
          fontWeight:900, textTransform:'uppercase', letterSpacing:'0.15em', fontSize:'0.8rem',
          transition:'background 0.2s, transform 0.2s',
        }}
          onMouseEnter={e=>{e.target.style.background='#fff';e.target.style.color='#000';e.target.style.transform='translateY(-2px)'}}
          onMouseLeave={e=>{e.target.style.background='#000';e.target.style.color='#fff';e.target.style.transform='none'}}>
          Hire Me Now
        </a>
      </div>
    </section>
  );
};

/* ── Footer ── */
export const Footer = () => (
  <footer style={{ background:'#000', padding:'3rem 0', borderTop:'1px solid #0f0f0f' }}>
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div>
        <h3 style={{ fontSize:'1.25rem', fontWeight:900, textTransform:'uppercase', letterSpacing:'0.15em', color:'#fff', marginBottom:4 }}>
          Aslam<span style={{ color:'var(--orange)' }}>.</span>
        </h3>
        <p style={{ fontSize:'0.7rem', fontFamily:'monospace', color:'#333' }}>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
      <div style={{ display:'flex', gap:'1.5rem' }}>
        {[
          { icon:<FaGithub size={18}/>, href:'https://github.com/mohaslam11' },
          { icon:<FaLinkedin size={18}/>, href:'https://linkedin.com/in/mohaslam' },
          { icon:<FaTwitter size={18}/>, href:'#' },
        ].map((s,i) => (
          <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{ color:'#333', transition:'color 0.2s' }}
            onMouseEnter={e=>e.currentTarget.style.color='#fff'} onMouseLeave={e=>e.currentTarget.style.color='#333'}>
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);
