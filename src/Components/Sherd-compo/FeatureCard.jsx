import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div 
      whileHover={{ y: -12 }} 
      className="group relative flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative mb-6 p-5 bg-green-50 text-green-600 rounded-3xl group-hover:bg-green-600 group-hover:text-white transition-all duration-500 shadow-inner">
        <Icon size={32} />
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-green-700 transition-colors duration-300">
        {title}
      </h2>
      <p className="text-gray-500 leading-relaxed text-start  font-medium">
        {description}
      </p>
      <div className="mt-8 w-12 h-1 bg-gray-200 rounded-full group-hover:bg-green-500 transition-all duration-500" />
    </motion.div>
  );
};

export default FeatureCard;