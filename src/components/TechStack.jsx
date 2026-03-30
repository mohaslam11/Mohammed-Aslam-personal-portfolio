import { useReveal } from '../hooks/useReveal';
import {
  SiFlutter, SiAndroid, SiSwift, SiDart, SiFirebase,
  SiNodedotjs, SiPython, SiOpencv, SiKotlin, SiGit,
} from 'react-icons/si';
import { FaRobot, FaShieldAlt, FaMobileAlt } from 'react-icons/fa';

const techs = [
  { name:'Flutter',          icon:<SiFlutter size={28}/>,    color:'#00D4FF' },
  { name:'Android',          icon:<SiAndroid size={28}/>,    color:'#3DDC84' },
  { name:'iOS / Swift',      icon:<SiSwift size={28}/>,      color:'#F05138' },
  { name:'Dart',             icon:<SiDart size={28}/>,       color:'#00B4AB' },
  { name:'Kotlin',           icon:<SiKotlin size={28}/>,     color:'#7F52FF' },
  { name:'Firebase',         icon:<SiFirebase size={28}/>,   color:'#FFCA28' },
  { name:'Node.js',          icon:<SiNodedotjs size={28}/>,  color:'#68A063' },
  { name:'Python',           icon:<SiPython size={28}/>,     color:'#4B8BBE' },
  { name:'OpenCV',           icon:<SiOpencv size={28}/>,     color:'#FF2222' },
  { name:'AI / ML',          icon:<FaRobot size={28}/>,      color:'#A855F7' },
  { name:'Cyber Security',   icon:<FaShieldAlt size={28}/>,  color:'#22D3EE' },
  { name:'Git',              icon:<SiGit size={28}/>,        color:'#F05032' },
];

const TechStack = () => {
  const [ref, vis] = useReveal();

  return (
    <section id="techstack" style={{ padding:'6rem 0', background:'var(--bg2)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${vis?'visible':''} mb-14 pb-8`} style={{ borderBottom:'1px solid #111' }}>
          <span className="section-label">// Expertise</span>
          <h2 style={{ fontSize:'clamp(2rem,5vw,3rem)', fontWeight:900, color:'#fff' }}>My Techstack</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {techs.map((t, i) => (
            <div
              key={t.name}
              className={`reveal ${vis?'visible':''} d${(i%6)+1}`}
              style={{
                display:'flex', flexDirection:'column', alignItems:'center', gap:'0.6rem',
                padding:'1.5rem 1rem',
                border:'1px solid #1a1a1a',
                background:'var(--bg3)',
                cursor:'default',
                transition:'border-color 0.2s, transform 0.2s, background 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = t.color;
                e.currentTarget.style.background   = `${t.color}11`;
                e.currentTarget.style.transform    = 'translateY(-5px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#1a1a1a';
                e.currentTarget.style.background   = 'var(--bg3)';
                e.currentTarget.style.transform    = 'none';
              }}
            >
              <span style={{ color: t.color }}>{t.icon}</span>
              <span style={{ fontSize:'0.65rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', color:'#666', textAlign:'center' }}>
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
