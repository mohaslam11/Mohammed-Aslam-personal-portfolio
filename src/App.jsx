import { useState } from 'react';
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import Career from './components/Career';
import TechStack3D from './components/TechStack3D';
import Projects from './components/Projects';
import { Testimonials, CTA } from './components/CtaAndTestimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="bg-cinema-bg min-h-screen text-white font-sans">
      <Cursor />
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.7s ease' }}>
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <WhatIDo />
        <Career />
        <TechStack3D />
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
