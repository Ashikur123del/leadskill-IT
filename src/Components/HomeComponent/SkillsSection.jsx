import React from 'react';
import { motion } from 'framer-motion';
import { FaWordpress, FaHtml5, FaElementor, FaDivide, FaHandHoldingUsd } from 'react-icons/fa';

const SkillsSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:flex   gap-10 items-center">
        
        {/* Left Side: Animated Image Stack */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[500px] w-full max-w-md mx-auto lg:mx-0 col-span-1"
        >
          <img src="p.jpg" alt="Profile 1" className="absolute top-0 right-0  object-cover rounded-3xl shadow-2xl z-10" />
          <img src="p2.webp" alt="Profile 2" className="absolute top-10 left-0  object-cover rounded-3xl shadow-2xl border-[8px] border-white z-20" />
          
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-40 bg-gradient-to-tr from-purple-600 to-pink-600 p-6 rounded-3xl text-white shadow-2xl z-30"
          >
            <FaHandHoldingUsd className="text-4xl" />
          </motion.div>
        </motion.div>

        {/* Right Side: Animated Content */}
<div className="flex flex-col gap-y-6">
  {[
    {
      title: "5,000+ Educational Institute",
      text: "Lead Skil IT implemented Eduman, a nationwide Education Management System, streamlining academic and administrative operations across schools, colleges, and madrasahs in Bangladesh.",
      icon: "🎓"
    },
    {
      title: "10+ Years of Experience",
      text: "With over 10 years of proven experience, backed by a decade of expertise, and leveraging extensive industry knowledge, Leadswin delivers innovative and reliable education management solutions.",
      icon: "⏳"
    },
    {
      title: "Efficient and Reliable Support",
      text: "MantorERP is focused on delivering a smooth experience for educational institutions. Our support team provides prompt assistance and effective solutions to keep academic and administrative activities running efficiently.",
      icon: "🛠️"
    }
  ].map((card, index) => (
    <motion.div
      key={index}
      initial={{ x: 50, opacity: 0 }} 
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
      className="group relative bg-white p-6 md:p-8 rounded-3xl shadow-lg border-l-4 border-transparent hover:border-purple-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
    >
     
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
        <span className="text-4xl">{card.icon}</span>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
          {card.title}
        </h2>
      </div>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-0 md:pl-14 font-bold">
        {card.text}
      </p>
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
        <div className="w-16 h-16 bg-purple-600 rounded-full blur-2xl"></div>
      </div>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
};

export default SkillsSection;