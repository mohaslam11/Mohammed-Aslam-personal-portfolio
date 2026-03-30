import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const W = container.clientWidth;
    const H = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    /* ----- Torus knot (wireframe) ----- */
    const knotGeo = new THREE.TorusKnotGeometry(1.6, 0.45, 180, 20);
    const knotMat = new THREE.MeshPhongMaterial({
      color: 0x1a1a1a,
      wireframe: true,
      emissive: 0xff6b00,
      emissiveIntensity: 0.25,
      transparent: true,
      opacity: 0.55,
    });
    const knot = new THREE.Mesh(knotGeo, knotMat);
    knot.position.set(2.5, 0, -1);
    scene.add(knot);

    /* ----- Secondary ring ----- */
    const ringGeo = new THREE.TorusGeometry(2.8, 0.02, 2, 120);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xff6b00, transparent: true, opacity: 0.12 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 4;
    scene.add(ring);

    /* ----- Particles ----- */
    const N = 1400;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N * 3; i++) pos[i] = (Math.random() - 0.5) * 22;
    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const ptMat = new THREE.PointsMaterial({ color: 0xff6b00, size: 0.025, transparent: true, opacity: 0.5 });
    const pts = new THREE.Points(ptGeo, ptMat);
    scene.add(pts);

    /* ----- Lights ----- */
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const pl = new THREE.PointLight(0xff6b00, 3, 12);
    pl.position.set(4, 3, 3);
    scene.add(pl);

    /* ----- Mouse ----- */
    let mx = 0, my = 0;
    const onMouse = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouse);

    /* ----- Resize ----- */
    const onResize = () => {
      const nw = container.clientWidth, nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', onResize);

    /* ----- Loop ----- */
    let id;
    const clock = new THREE.Clock();
    const animate = () => {
      id = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      knot.rotation.x += 0.003;
      knot.rotation.y += 0.005;
      knot.rotation.x += (my * 0.4 - knot.rotation.x) * 0.03;
      knot.rotation.y += (mx * 0.4 - knot.rotation.y) * 0.03;
      ring.rotation.z = t * 0.08;
      pts.rotation.y += 0.0003;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-cinema-bg overflow-hidden pt-20">
      {/* 3-D canvas */}
      <div ref={mountRef} className="absolute inset-0 z-0" style={{ opacity: 0.7 }} />

      {/* Gradient overlay so text stays readable */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-cinema-bg via-cinema-bg/80 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p className="text-cinema-orange font-mono text-sm tracking-[0.2em] mb-4 uppercase">
            // Hello, I am
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-6">
            MOHAMMED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">
              ASLAM
            </span>
          </h1>
          <div className="h-1 w-24 bg-cinema-orange mb-8" />

          <h2 className="text-xl md:text-2xl text-gray-400 mb-2 font-light uppercase tracking-wide">
            Software Application Developer
          </h2>
          <p className="text-gray-500 mb-10 font-mono text-sm">
            [ Flutter ] • [ Android ] • [ iOS ]
          </p>

          <div className="flex flex-wrap gap-6">
            <a
              href="/Mohammed_Aslam_CV.pdf"
              download
              className="px-8 py-4 bg-cinema-orange text-black font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-orange-900/20 flex items-center gap-3 group"
            >
              <FaDownload className="group-hover:-translate-y-1 transition-transform" />
              Download CV
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border border-gray-700 text-white font-bold uppercase tracking-widest hover:border-cinema-orange hover:text-cinema-orange transition-all flex items-center gap-3 group"
            >
              My Work <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Right — portrait with orange frame */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="hidden lg:flex justify-end relative"
        >
          <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden border border-gray-800">
            <img
              src="/profile.png"
              alt="Mohammed Aslam"
              className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700 contrast-125"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cinema-bg to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-cinema-orange" />
          <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-cinema-orange/30" />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-6 lg:left-12 flex items-center gap-4 z-20">
        <motion.div
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-12 h-[1px] bg-cinema-orange origin-left"
        />
        <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
