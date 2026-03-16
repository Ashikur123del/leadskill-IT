import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa'; // FaArrowRight ইমপোর্ট করলাম

const BlogComn = ({ imageSrc, title, description, linkUrl, direction = "left" }) => {
  const animationVariants = {
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={animationVariants}
      className="group relative overflow-hidden flex flex-col md:flex-row items-center my-10 gap-8 p-6 bg-white border border-gray-100 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] transition-all duration-500"
    >
      <div className="w-full md:w-2/5 h-64 overflow-hidden rounded-2xl">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
      </div>

      <div className="w-full md:w-3/5">
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mb-6 rounded-full" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-indigo-600 transition-colors">
          {title}
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed line-clamp-3">
          {description}
        </p>
        

        <a 
          href={linkUrl} 
          className="inline-flex items-center gap-2 px-6 py-3 commonbgcolor text-white rounded-full font-semibold hover:bg-indigo-600 transition-all duration-300 group/btn"
        >
          Read More 
          <motion.span 
            className="inline-block"
            whileHover={{ x: 5 }} 
          >
            <FaArrowRight size={14} />
          </motion.span>
        </a>
      </div>

      
    </motion.div>

    
  );
};

export default BlogComn;