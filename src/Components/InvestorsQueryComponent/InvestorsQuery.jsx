import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';

const InvestorsQuery = () => {
  // কমন স্টাইল ক্লাসের জন্য ভেরিয়েবল
  const inputStyle = "w-full p-4 bg-[#f3f4f6] border border-gray-300 rounded-sm outline-none focus:border-red-500 focus:ring-0 transition-all duration-300 placeholder:text-gray-400";

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl text-center md:text-5xl font-bold text-[#1a4d2e] mb-16"
        >
          Come collaborate with us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:col-span-5 space-y-10"
          >
            <div>
              <h3 className="text-3xl font-bold text-[#1a4d2e] leading-tight mb-6">
                Please feel free to get in touch <br /> for a consultation.
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
                Ready to grow your business with a trusted partner? Contact our team today to explore collaboration opportunities.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-[#1a4d2e]">Contact Details</h4>
              <div className="flex items-center gap-3 text-gray-700">
                <HiOutlineMail className="text-xl text-[#1a4d2e]" />
                <a href="mailto:info@leadswin.biz" className="hover:underline">info@leadswin.biz</a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <FiPhone className="text-xl text-[#1a4d2e]" />
                <a href="tel:+8801708437621" className="hover:underline">+8801708437621</a>
              </div>
            </div>
          </motion.div>

          {/* Right Side (Form) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:col-span-7"
          >
            <p className="text-xl text-[#1a4d2e] font-medium mb-8">
              Send us a message and we will get back to you shortly.
            </p>

            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Enter Full Name" 
                className={inputStyle}
              />
              <input 
                type="text" 
                placeholder="Enter Phone Number" 
                className={inputStyle}
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className={inputStyle}
              />
              <textarea 
                rows="5" 
                placeholder="Your Message"
                className={`${inputStyle} resize-none`}
              ></textarea>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit" 
                className="commonbgcolor px-10 py-3 rounded-lg font-bold text-lg  "
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsQuery;