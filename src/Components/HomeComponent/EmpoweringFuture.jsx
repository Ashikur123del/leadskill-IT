import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaCogs,
  FaCheckCircle,
} from "react-icons/fa";

const EmpoweringFuture = () => {
  const [activeTab, setActiveTab] = useState("mission");

  // ট্যাব কন্টেন্ট ডেটা
  const tabContent = {
    mission: {
      icon: <FaCogs />,
      text: "Our mission is to empower businesses with innovative IT solutions and software development services worldwide, focusing on scalable growth.",
    },
    work: {
      icon: <FaCheckCircle />,
      text: "We follow a streamlined process: Analysis, Design, Development, and Deployment to ensure professional quality in every project.",
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const leftItem = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightItem = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center"
      >
        {/* Left: Image Stack */}
        <motion.div variants={leftItem} className="relative h-[550px]">
          <img
            src="/banner-1.jpg"
            alt="Team"
            className="absolute top-0 left-0 w-[70%] h-full object-cover rounded-3xl shadow-2xl z-10"
          />
          <img
            src="/banner-2.jpg"
            alt="Work"
            className="absolute bottom-0 right-0 w-[40%] h-[80%] object-cover rounded-3xl shadow-2xl z-20"
          />

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute top-10 right-0 bg-gradient-to-br from-purple-600 to-pink-600 text-white p-6 rounded-2xl w-40 z-30 shadow-lg cursor-pointer"
          >
            <h3 className="text-3xl font-bold">6</h3>
            <p className="text-xl">Years of</p>
            <p className="text-xl">Experiences</p>
          </motion.div>

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-5 bg-white p-4 rounded-xl shadow-2xl z-30 flex items-center gap-4 border border-gray-100"
          >
            <img
              src="/banner-3.jpg"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-xl">350+</p>
              <p className="text-sm text-gray-500">Satisfied Clients</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <motion.div variants={rightItem}>
          <h4 className="text-purple-600 font-bold mb-4 uppercase tracking-[0.2em] text-xs">
            Who We Are
          </h4>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 leading-[1.1]">
            Empowering Brand <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Growth Together
            </span>
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Website Design Agency And Software Development Services. I Have
            Completed 400+ Projects In My Work Experience.
          </p>

          <div className="border-b border-gray-100 mb-8 flex gap-8">
            {["mission", "work"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-bold capitalize transition-all ${activeTab === tab ? "text-purple-600 border-b-4 border-purple-600" : "text-gray-400"}`}
              >
                {tab === "mission" ? "Our Mission" : "How we Work"}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-4 mb-8 bg-gray-50 p-6 rounded-2xl"
            >
              <div className="p-3 bg-white rounded-xl text-purple-600 text-2xl shadow-sm">
                {tabContent[activeTab].icon}
              </div>
              <p className="text-gray-600">{tabContent[activeTab].text}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-wrap items-center gap-6">
            {/* Consulting Button */}
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 hover:shadow-xl transition-all duration-300">
              Consulting Now <FaArrowRight />
            </button>

            {/* Contact Info Card */}
            <div className="flex items-center gap-4 p-2 pr-6 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shadow-inner">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                  Call Anytime
                </p>
                <p className="font-bold text-gray-900">+8801676761887</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EmpoweringFuture;
