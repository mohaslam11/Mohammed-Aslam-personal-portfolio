import { useState } from 'react';
import Cursor       from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import Stats        from './components/Stats';
import About        from './components/About';
import WhatIDo      from './components/WhatIDo';
import Career       from './components/Career';
import TechStack    from './components/TechStack';
import Projects     from './components/Projects';
import { Testimonials, CTA, Contact, Footer } from './components/Sections';

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', color: '#e0e0e0' }}>
      <Cursor />
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <WhatIDo />
        <Career />
        <TechStack />
        <Projects />
        <Testimonials />
        <CTA />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
