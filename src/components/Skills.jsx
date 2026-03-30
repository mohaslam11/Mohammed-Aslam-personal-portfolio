import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaServer, FaTools, FaSwift, FaPython, FaRobot } from 'react-icons/fa';
import { SiFlutter, SiFirebase, SiDart, SiAndroid, SiOpencv, SiNodedotjs, SiGooglesheets } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      category: "Mobile",
      icon: <FaMobileAlt className="text-cinema-orange" />,
      items: [
        { name: "Flutter", icon: <SiFlutter className="text-cyan-400" /> },
        { name: "Android", icon: <SiAndroid className="text-green-400" /> },
        { name: "iOS", icon: <FaSwift className="text-orange-500" /> },
        { name: "Dart", icon: <SiDart className="text-blue-400" /> },
      ]
    },
    {
      category: "AI & Data",
      icon: <FaPython className="text-cinema-orange" />,
      items: [
        { name: "Python", icon: <FaPython className="text-blue-400" /> },
        { name: "OpenCV", icon: <SiOpencv className="text-red-500" /> },
        { name: "Groq API", icon: <FaRobot className="text-purple-400" /> },
        { name: "ML / AI", icon: <FaServer className="text-yellow-400" /> },
      ]
    },
    {
      category: "Backend",
      icon: <FaServer className="text-cinema-orange" />,
      items: [
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "REST APIs", icon: <FaTools className="text-gray-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Google Sheets API", icon: <SiGooglesheets className="text-green-400" /> },
      ]
    },
    {
      category: "Automation",
      icon: <FaRobot className="text-cinema-orange" />,
      items: [
        { name: "Playwright", icon: <FaTools className="text-teal-400" /> },
        { name: "Browser Automation", icon: <FaTools className="text-indigo-400" /> },
        { name: "Stealth Bots", icon: <FaRobot className="text-pink-400" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-cinema-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-gray-800 pb-8"
        >
          <h4 className="text-cinema-orange font-mono text-sm uppercase tracking-widest mb-2">// Expertise</h4>
          <h2 className="text-4xl font-black text-white">Tech Stack</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#0f0f0f] border border-gray-800 hover:border-cinema-orange transition-all duration-300 p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 text-3xl">
                  {skillGroup.icon}
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wide">{skillGroup.category}</h3>
              </div>
              <div className="space-y-4">
                {skillGroup.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 hover:bg-white/5 transition-colors">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-300 font-medium text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
