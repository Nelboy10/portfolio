'use client';

import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaPython } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiDjango,
  SiTensorflow,
} from "react-icons/si";

const technologies = [
  {
    category: "Développement Web",
    items: [
      { name: "React", icon: <FaReact className="text-sky-400" size={26} />, color: "bg-sky-900/30" },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" size={26} />, color: "bg-gray-800/30" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" size={26} />, color: "bg-cyan-900/30" },
    ],
  },
  {
    category: "Développement Mobile",
    items: [
      { name: "Flutter", icon: <SiFlutter className="text-blue-400" size={26} />, color: "bg-blue-900/30" },
    ],
  },
  {
    category: "Backend / Base de données",
    items: [
      { name: "Django", icon: <SiDjango className="text-green-500" size={26} />, color: "bg-green-900/30" },
    ],
  },
  {
    category: "Data Science / IA",
    items: [
      { name: "Python", icon: <FaPython className="text-yellow-400" size={26} />, color: "bg-yellow-900/30" },
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" size={26} />, color: "bg-orange-900/30" },
    ],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Competence() {
  return (
    <section id="competences" className="py-24 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Mes Compétences Techniques
          </h2>
          <p className="text-lg text-[#ADB7BE] max-w-2xl mx-auto">
            Technologies que j&apos;utilise pour créer des solutions performantes et innovantes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              transition={{ delay: index * 0.15 }}
              className="bg-[#1e1e1e] rounded-xl border border-[#2a2a2a] shadow-md hover:shadow-purple-600/20 transition duration-300 group overflow-hidden"
            >
              <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-5 text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                  {tech.category}
                </h3>
                <ul className="space-y-4">
                  {tech.items.map((item, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className={`flex items-center gap-4 p-3 rounded-lg ${item.color} backdrop-blur-md hover:ring-2 hover:ring-purple-400/30 transition-all duration-300`}
                    >
                      <div className="p-2 bg-[#2a2a2a] rounded-lg">
                        {item.icon}
                      </div>
                      <span className="text-base font-medium">{item.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-[#ADB7BE] italic">
            Toujours en apprentissage de nouvelles technologies...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
