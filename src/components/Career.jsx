import { useReveal } from '../hooks/useReveal';

const experiences = [
  {
    year:'2022',
    role:'Android Developer Intern',
    company:'Mobile Tech Company',
    desc:'Kickstarted my mobile journey building native Android features in Kotlin. Integrated REST APIs, built UI components, and shipped to production.',
    tags:['Android','Kotlin','Java','REST API'],
    color:'#3DDC84',
  },
  {
    year:'2024',
    role:'Flutter Developer Intern',
    company:'Software Studio',
    desc:'Built cross-platform Flutter apps for Android & iOS. Real-time Firebase features, clean architecture, shipped features used by live users.',
    tags:['Flutter','Dart','Firebase','BLoC'],
    color:'#00D4FF',
  },
  {
    year:'2025',
    role:'Flutter Developer Intern',
    company:'Product Company',
    desc:'Advanced Flutter role — performance optimisation, Riverpod state management, payment & mapping SDK integrations. Mentored junior devs.',
    tags:['Flutter','Riverpod','Maps SDK','Payments'],
    color:'#00D4FF',
  },
  {
    year:'2025',
    role:'Software Developer',
    company:'Dubai, UAE — Current',
    desc:'Delivering full-cycle mobile apps for UAE clients. Building AI automation tools, browser bots, and lead intelligence systems. Open to opportunities.',
    tags:['Flutter','iOS','AI','Python','Playwright'],
    color:'#FF6B00',
    current:true,
  },
];

const Item = ({ item, index, parentVis }) => (
  <div
    className={`reveal from-left ${parentVis?'visible':''} d${index+1}`}
    style={{ display:'flex', gap:'1.5rem', paddingBottom:'2.5rem', position:'relative' }}
  >
    {/* Dot + line */}
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', flexShrink:0 }}>
      {item.current
        ? <div className="dot-current" style={{ marginTop:4 }}/>
        : <div style={{ width:12, height:12, borderRadius:'50%', border:`2px solid ${item.color}66`, marginTop:4, flexShrink:0, transition:'border-color 0.2s' }}/>
      }
      {index < experiences.length - 1 && (
        <div style={{ width:1, flex:1, marginTop:6, background:`linear-gradient(to bottom, ${item.color}44, transparent)`, minHeight:40 }}/>
      )}
    </div>

    {/* Content */}
    <div style={{ paddingBottom:'0.5rem' }}>
      <span style={{ fontSize:'0.65rem', fontFamily:'monospace', textTransform:'uppercase', letterSpacing:'0.2em', color:item.color, display:'block', marginBottom:6 }}>
        {item.year}{item.current && ' — Present'}
      </span>
      <div style={{ display:'flex', flexWrap:'wrap', alignItems:'baseline', gap:'0.5rem 0.75rem', marginBottom:'0.5rem' }}>
        <h3
          style={{ fontSize:'clamp(1rem,3vw,1.25rem)', fontWeight:900, color:'#fff', margin:0, transition:'color 0.2s', cursor:'default' }}
          onMouseEnter={e => e.target.style.color = item.color}
          onMouseLeave={e => e.target.style.color = '#fff'}
        >{item.role}</h3>
        <span style={{ fontSize:'0.75rem', fontFamily:'monospace', color:'var(--muted)' }}>@ {item.company}</span>
      </div>
      <p style={{ fontSize:'0.82rem', lineHeight:1.7, color:'#555', maxWidth:520, marginBottom:'0.75rem' }}>{item.desc}</p>
      <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
        {item.tags.map(tag => (
          <span key={tag} style={{
            fontSize:'0.6rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.12em',
            color:item.color, border:`1px solid ${item.color}33`, background:`${item.color}0d`, padding:'0.25rem 0.6rem',
          }}>{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const Career = () => {
  const [ref, vis] = useReveal();

  return (
    <section id="career" style={{ padding:'6rem 0', background:'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`reveal ${vis?'visible':''} mb-14 pb-8`} ref={ref} style={{ borderBottom:'1px solid #111' }}>
          <span className="section-label">// Career Path</span>
          <h2 style={{ fontSize:'clamp(2rem,5vw,3rem)', fontWeight:900, color:'#fff', lineHeight:1.2 }}>
            My Career &amp;<br/><span style={{ color:'#2a2a2a' }}>Experience</span>
          </h2>
        </div>

        <div style={{ maxWidth:600 }}>
          {experiences.map((item,i) => (
            <Item key={i} item={item} index={i} parentVis={vis}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
