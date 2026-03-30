import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMobileAlt, FaRobot, FaServer, FaShieldAlt } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 'mobile',
    icon: <FaMobileAlt size={26} />,
    title: 'MOBILE DEVELOPMENT',
    subtitle: 'Cross-Platform & Native',
    description:
      'I build stunning, high-performance mobile applications for iOS and Android using Flutter and native stacks. From real-time features to offline-first architecture — full end-to-end delivery.',
    skills: ['Flutter', 'Android (Kotlin)', 'iOS (Swift)', 'Dart', 'Firebase', 'REST APIs'],
  },
  {
    id: 'ai',
    icon: <FaRobot size={26} />,
    title: 'AI & AUTOMATION',
    subtitle: 'Intelligent Tools & Bots',
    description:
      'AI-powered automation systems — lead qualification engines, stealth browser bots, computer vision pipelines. I turn complex workflows into efficient, hands-free systems.',
    skills: ['Python', 'Groq API', 'OpenCV', 'Playwright', 'Puppeteer', 'Google Sheets API'],
  },
  {
    id: 'backend',
    icon: <FaServer size={26} />,
    title: 'BACKEND & INTEGRATIONS',
    subtitle: 'APIs & Cloud Services',
    description:
      'Scalable backend solutions and third-party integrations. Whether it\'s Firebase, custom REST APIs, or Node.js services — your data flows reliably.',
    skills: ['Node.js', 'Firebase', 'REST APIs', 'Google Cloud', 'Supabase', 'SQL'],
  },
  {
    id: 'security',
    icon: <FaShieldAlt size={26} />,
    title: 'SECURE DEVELOPMENT',
    subtitle: 'Cyber Security Awareness',
    description:
      'Trained in Cyber Security at IIT Jammu. I bring security-first thinking — auth flows, encryption, and vulnerability mitigation as standard practice, not an afterthought.',
    skills: ['Auth Systems', 'Encryption', 'Ethical Hacking', 'Network Security', 'Secure APIs'],
  },
];

const Card = ({ service, isOpen, onClick, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0, duration: 0.6, delay: index * 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: cardRef.current, start: 'top 88%' },
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`border transition-all duration-300 cursor-pointer group overflow-hidden ${
        isOpen ? 'border-cinema-orange' : 'border-gray-800 hover:border-gray-600'
      }`}
      style={{ opacity: 0 }}
      onClick={onClick}
    >
      <div className="flex items-center justify-between p-6 md:p-7">
        <div className="flex items-center gap-5">
          <div
            className={`p-3 transition-colors duration-300 ${
              isOpen ? 'bg-cinema-orange text-black' : 'bg-gray-900 text-cinema-orange'
            }`}
          >
            {service.icon}
          </div>
          <div>
            <h3
              className={`text-sm font-black uppercase tracking-wider transition-colors duration-200 ${
                isOpen ? 'text-cinema-orange' : 'text-white'
              }`}
            >
              {service.title}
            </h3>
            <p className="text-gray-500 text-xs font-mono mt-0.5">{service.subtitle}</p>
          </div>
        </div>
        <div
          className={`w-8 h-8 flex items-center justify-center border text-xl font-thin transition-all duration-300 shrink-0 ${
            isOpen ? 'border-cinema-orange text-cinema-orange rotate-45' : 'border-gray-700 text-gray-500'
          }`}
        >
          +
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <div className="px-7 pb-8 border-t border-gray-800 pt-6">
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.skills.map((sk) => (
                  <span
                    key={sk}
                    className="text-[10px] font-bold uppercase tracking-wider text-cinema-orange border border-cinema-orange/30 px-3 py-1 bg-cinema-orange/5"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const WhatIDo = () => {
  const [openId, setOpenId] = useState('mobile');
  const headRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 85%' },
      }
    );
  }, []);

  return (
    <section id="services" className="py-24 bg-cinema-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14 border-b border-gray-800 pb-12"
          style={{ opacity: 0 }}
        >
          <div>
            <h4 className="text-cinema-orange font-mono text-sm uppercase tracking-widest mb-4">
              // What I Do
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              WHAT <br />
              <span className="text-gray-600">I DO</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-gray-500 text-sm leading-relaxed">
              I specialise in polished mobile apps, intelligent automation, and secure backend
              integrations. Click each service to explore.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {services.map((s, i) => (
            <Card
              key={s.id}
              service={s}
              isOpen={openId === s.id}
              onClick={() => setOpenId(openId === s.id ? null : s.id)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
