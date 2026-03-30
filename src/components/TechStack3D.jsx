import * as THREE from 'three';
import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { EffectComposer, N8AO, Bloom } from '@react-three/postprocessing';
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
} from '@react-three/rapier';

const techs = [
  { name: 'Flutter',   color: '#00D4FF', emissive: '#00A0CC' },
  { name: 'Android',   color: '#3DDC84', emissive: '#1A9955' },
  { name: 'iOS',       color: '#F05138', emissive: '#B03020' },
  { name: 'Python',    color: '#4B8BBE', emissive: '#2A5C80' },
  { name: 'Firebase',  color: '#FFCA28', emissive: '#CC9900' },
  { name: 'Node.js',   color: '#68A063', emissive: '#3A6B38' },
  { name: 'AI / ML',   color: '#A855F7', emissive: '#7020CC' },
  { name: 'Kotlin',    color: '#7F52FF', emissive: '#5030BB' },
];

// Pre-build spheres list (30 balls, random tech assignment)
const sphereList = [...Array(30)].map(() => ({
  scale: [0.7, 1, 0.8, 0.9, 1.1][Math.floor(Math.random() * 5)],
  tech: techs[Math.floor(Math.random() * techs.length)],
}));

const sphereGeo = new THREE.SphereGeometry(1, 32, 32);

function Ball({ scale, tech, isActive, vec = new THREE.Vector3() }) {
  const api = useRef(null);

  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: tech.color,
        emissive: tech.emissive,
        emissiveIntensity: 0.5,
        metalness: 0.3,
        roughness: 0.5,
        clearcoat: 0.4,
      }),
    [tech]
  );

  useFrame((_s, delta) => {
    if (!isActive || !api.current) return;
    const d = Math.min(0.1, delta);
    const imp = vec
      .copy(api.current.translation())
      .normalize()
      .multiply(new THREE.Vector3(-50 * d * scale, -150 * d * scale, -50 * d * scale));
    api.current.applyImpulse(imp, true);
  });

  const r = THREE.MathUtils.randFloatSpread;
  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh castShadow geometry={sphereGeo} material={material} scale={scale} />
    </RigidBody>
  );
}

function Pointer({ isActive, vec = new THREE.Vector3() }) {
  const ref = useRef(null);
  useFrame(({ pointer, viewport }) => {
    if (!isActive || !ref.current) return;
    ref.current.setNextKinematicTranslation(
      vec.lerp(
        new THREE.Vector3(
          (pointer.x * viewport.width) / 2,
          (pointer.y * viewport.height) / 2,
          0
        ),
        0.2
      )
    );
  });
  return (
    <RigidBody position={[100, 100, 100]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack3D = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const el = document.getElementById('techstack-section');
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="techstack-section" className="relative w-full bg-cinema-bg" style={{ height: '100svh' }}>
      {/* Title */}
      <div className="absolute top-10 left-0 right-0 z-10 text-center pointer-events-none">
        <h4 className="text-cinema-orange font-mono text-sm uppercase tracking-widest mb-2">// Expertise</h4>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase">My Techstack</h2>
      </div>

      {/* Tech name legend */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-wrap justify-center gap-3 px-6 pointer-events-none">
        {techs.map((t) => (
          <span
            key={t.name}
            className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 border"
            style={{ color: t.color, borderColor: `${t.color}44`, background: `${t.color}11` }}
          >
            {t.name}
          </span>
        ))}
      </div>

      {/* 3-D Canvas */}
      <Canvas
        shadows
        gl={{ alpha: true, antialias: false, stencil: false, depth: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(s) => (s.gl.toneMappingExposure = 1.5)}
        className="w-full h-full"
      >
        <ambientLight intensity={1} />
        <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="white" castShadow />
        <directionalLight position={[0, 5, -4]} intensity={2} />

        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {sphereList.map((props, i) => (
            <Ball key={i} {...props} isActive={isActive} />
          ))}
        </Physics>

        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0a0005" aoRadius={2} intensity={1.1} />
          <Bloom mipmapBlur luminanceThreshold={1} intensity={0.4} />
        </EffectComposer>
      </Canvas>
    </section>
  );
};

export default TechStack3D;
