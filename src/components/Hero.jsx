import { FaDownload, FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{ background: 'var(--bg)' }}>

    {/* Animated grid */}
    <div className="hero-grid absolute inset-0 z-0" />

    {/* Floating CSS orbs */}
    <div className="orb orb-1" />
    <div className="orb orb-2" />
    <div className="orb orb-3" />

    {/* CSS 3D decorative shapes */}
    <div className="absolute right-8 top-1/4 hidden lg:block" style={{ perspective: '600px' }}>
      <div style={{
        width: 260, height: 260,
        borderRadius: '50%',
        border: '1px solid rgba(255,107,0,0.15)',
        animation: 'spinRing 14s linear infinite',
        transformStyle: 'preserve-3d',
      }}/>
    </div>
    <div className="absolute right-32 top-1/3 hidden lg:block" style={{ perspective: '600px' }}>
      <div style={{
        width: 160, height: 160,
        borderRadius: '50%',
        border: '1px solid rgba(255,107,0,0.08)',
        animation: 'spinRing 20s linear infinite reverse',
        transformStyle: 'preserve-3d',
      }}/>
    </div>

    {/* Small floating cubes */}
    {[
      { size: 28, top: '20%', right: '22%', delay: '0s', dur: '7s' },
      { size: 18, top: '60%', right: '30%', delay: '-2s', dur: '9s' },
      { size: 22, top: '40%', right: '12%', delay: '-4s', dur: '11s' },
    ].map((c, i) => (
      <div key={i} className="absolute hidden lg:block" style={{
        top: c.top, right: c.right,
        width: c.size, height: c.size,
        border: '1px solid rgba(255,107,0,0.25)',
        animation: `rotateCube ${c.dur} linear infinite`,
        animationDelay: c.delay,
        transformStyle: 'preserve-3d',
      }}/>
    ))}

    {/* Content */}
    <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left */}
      <div style={{ animation: 'fadeSlideLeft 0.9s ease forwards' }}>
        <span className="section-label">// Hello, I am</span>
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 900,
          lineHeight: 1,
          marginBottom: '1.5rem',
          color: '#fff',
        }}>
          MOHAMMED<br/>
          <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
            ASLAM
          </span>
        </h1>

        <div style={{ width: 80, height: 2, background: 'var(--orange)', marginBottom: '1.5rem' }}/>

        <p className="text-gray-400 uppercase tracking-widest text-sm mb-2 font-medium">
          Software Application Developer
        </p>
        <p className="font-mono text-xs mb-10" style={{ color: 'var(--muted)' }}>
          [ Flutter ] • [ Android ] • [ iOS ]
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <a href="/Mohammed_Aslam_CV.pdf" download className="btn-orange">
            <FaDownload size={13}/> Download CV
          </a>
          <a href="#projects" className="btn-outline">
            My Work <FaArrowRight size={13}/>
          </a>
        </div>

        <div className="flex items-center gap-5">
          <a href="https://github.com/mohaslam11" target="_blank" rel="noreferrer"
            className="text-gray-600 hover:text-white transition-colors"><FaGithub size={20}/></a>
          <a href="https://linkedin.com/in/mohaslam" target="_blank" rel="noreferrer"
            className="text-gray-600 hover:text-white transition-colors"><FaLinkedin size={20}/></a>
        </div>
      </div>

      {/* Right — portrait */}
      <div className="hidden lg:flex justify-end relative" style={{ animation: 'fadeSlideRight 0.9s 0.2s ease both' }}>
        <div className="relative" style={{ maxWidth: 420 }}>
          {/* Corner accents */}
          <div style={{ position:'absolute', top:-12, left:-12, width:50, height:50, borderTop:'2px solid rgba(255,107,0,0.4)', borderLeft:'2px solid rgba(255,107,0,0.4)', zIndex:1 }}/>
          <div style={{ position:'absolute', bottom:-12, right:-12, width:50, height:50, borderBottom:'2px solid var(--orange)', borderRight:'2px solid var(--orange)', zIndex:1 }}/>

          <div style={{ overflow:'hidden', border:'1px solid #1a1a1a', aspectRatio:'4/5' }}>
            <img src="/profile.png" alt="Mohammed Aslam"
              style={{ width:'100%', height:'100%', objectFit:'cover', filter:'grayscale(1) contrast(1.1)', transition:'filter 0.6s' }}
              onMouseEnter={e => e.target.style.filter = 'grayscale(0) contrast(1)'}
              onMouseLeave={e => e.target.style.filter = 'grayscale(1) contrast(1.1)'}
            />
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, var(--bg) 0%, transparent 50%)' }}/>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll hint */}
    <div className="absolute bottom-8 left-8 flex items-center gap-3 z-10">
      <div style={{ width:40, height:1, background:'var(--orange)', animation:'pulse 2s infinite' }}/>
      <span className="font-mono text-xs uppercase tracking-widest" style={{ color:'var(--muted)' }}>Scroll</span>
    </div>

    <style>{`
      @keyframes fadeSlideLeft  { from { opacity:0; transform:translateX(-40px); } to { opacity:1; transform:none; } }
      @keyframes fadeSlideRight { from { opacity:0; transform:translateX(40px);  } to { opacity:1; transform:none; } }
    `}</style>
  </section>
);

export default Hero;
