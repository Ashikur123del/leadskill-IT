import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { number: "1", title: "Apply", desc: "Take the first step toward your career with Leadswin. Submit your application and let us know why you’re ready to grow with us." },
  { number: "2", title: "Initial Screening", desc: "We review your skills, experiences, and aspirations to understand how you can contribute to our vision." },
  { number: "3", title: "Assessment", desc: "Showcase your strengths through a structured assessment tailored to highlight your abilities and potential." },
  { number: "4", title: "Final Interview", desc: "Meet our team, share your ideas, and explore how you can make an impact at Leadswin." },
  { number: "5", title: "Onboarding", desc: "Welcome aboard! We’ll provide the tools, guidance, and support you need to start strong and succeed with us." }
];

const HiringProcess = () => {
  return (
    <section className="py-16  px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-green-800 text-center mb-2">Our Hiring Process</h2>
      <div className="h-2 w-100 commonbgcolor mx-auto rounded-2xl mb-10"></div>
      
      <div className="flex flex-col gap-8">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-6 items-start"
          >
            {/* Number Badge */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full commonbgcolor text-white flex items-center justify-center font-bold text-2xl shadow-lg">
              {step.number}
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-green-900 mb-1">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <div className="">
            <h2 className='text-4xl md:text-6xl text-green-800'>Join Our Team</h2>
            <p className='text-xl py-4'>Let's Grow Together!</p>
            <button className='commonbgcolor btn px-6 py-3'>See All Jobs</button>
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;