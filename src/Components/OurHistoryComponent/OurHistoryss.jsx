import React from 'react';
import { FaLightbulb, FaRocket, FaLeaf, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const milestones = [
  { year: "2018", title: "Founded as Netizen", desc: "Launched to disrupt education with innovative tech solutions.", icon: FaLightbulb },
  { year: "2022", title: "Rebranded: Lead-Skill-IT", desc: "Focused on skill development & digital transformation.", icon: FaLeaf },
  { year: "2018", title: "Global Expansion", desc: "Expanded our reach and platform capabilities.", icon: FaRocket },
  { year: "2024", title: "SkillUp Project", desc: "Empowering individuals with futuristic skills.", icon: FaGraduationCap },
  { year: "2025", title: "SkillUp Project", desc: "Empowering individuals with futuristic skills.", icon: FaGraduationCap },
  { year: "2026", title: "SkillUp Project", desc: "Empowering individuals with futuristic skills.", icon: FaGraduationCap },
];

const Journey = () => {
  return (
    <section className="py-40 bg-[#E0F2F1] px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold text-slate-900 mb-16"
        >
          History of Mentor<span className='text-yellow-500'>ERP</span>
        </motion.h2>

        {/* Quadrant Layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Central Lines (Hidden on mobile) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-800 -ml-0.5"></div>
          <div className="hidden md:block absolute left-0 right-0 top-1/2 h-0.5 bg-slate-800 -mt-0.5"></div>
          <div className="hidden md:flex absolute top-1/2 left-1/2 w-6 h-6 bg-white border-2 border-slate-800 rounded-full -ml-3 -mt-3 z-10 items-center justify-center">
             <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
          </div>

          {milestones.map((m, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg border-2 border-slate-900 relative z-20"
            >
              <div className="flex-1 text-left">
                <span className="text-blue-600 font-bold">{m.year}</span>
                <h3 className="font-bold text-lg">{m.title}</h3>
                <p className="text-sm text-slate-600">{m.desc}</p>
              </div>
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 rounded-full border-2 border-slate-900 shadow-md">
                <m.icon className="text-slate-900 text-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-16 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl"
        >
         Read More
        </motion.button>
      </div>
    </section>
  );
};

export default Journey;