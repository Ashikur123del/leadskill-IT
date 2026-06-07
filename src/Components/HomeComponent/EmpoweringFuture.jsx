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

  // All your original detailed text kept intact, tailored for the Partnership Model
  const tabContent = {
    mission: {
      icon: <FaCogs />,
      text: (
        <div className="space-y-3 text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
          <p>
            Our mission is to empower educational institutions through
            innovative, reliable, and user-friendly technology solutions that
            simplify administration, enhance academic management, and improve
            communication among students, teachers, parents, and administrators.
          </p>
          <p>
            We are committed to supporting the digital transformation of
            schools, colleges, madrasas, coaching centers, and other educational
            organizations by providing efficient management tools that increase
            productivity, transparency, and operational excellence.
          </p>
          <p>
            Through continuous innovation and dedicated customer support, we
            strive to become a trusted partner in building smarter, more
            connected, and future-ready educational institutions.
          </p>
          <p className="font-bold text-slate-900 border-l-2 border-blue-500 pl-2 bg-blue-50/50 py-1 rounded-r-lg">
            MentorERP's mission is to make education management simple, smart,
            and accessible for every institution.
          </p>
        </div>
      ),
    },
    work: {
      icon: <FaCheckCircle />,
      text: (
        <div className="space-y-4 text-slate-600 text-xs md:text-sm font-medium leading-relaxed pr-1">
          <p className="font-bold text-slate-800">
            At MentorERP, we follow a simple, efficient, and customer-focused
            approach to help educational institutions achieve successful digital
            transformation alongside our partners:
          </p>

          <div className="space-y-3">
            <div>
              <h5 className="font-bold text-slate-900 text-sm">
                1. Understanding Institutional Needs
              </h5>
              <p className="text-slate-500">
                We begin by understanding the unique requirements, challenges,
                and goals of each educational institution to ensure the best
                possible solution.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 text-sm">
                2. Solution Planning & Customization
              </h5>
              <p className="text-slate-500">
                Based on the institution's requirements, we configure and
                customize MentorERP to match their academic, administrative, and
                financial processes.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 text-sm">
                3. Implementation & Data Setup
              </h5>
              <p className="text-slate-500">
                Our technical team assists with system setup, data migration,
                and configuration to ensure a smooth and hassle-free
                implementation process.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 text-sm">
                4. Training & Capacity Building
              </h5>
              <p className="text-slate-500">
                We provide comprehensive training for administrators, teachers,
                accountants, and staff members, enabling them to use the system
                confidently and effectively.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 text-sm">
                5. Ongoing Support & Maintenance
              </h5>
              <p className="text-slate-500">
                Our dedicated support team offers continuous technical
                assistance, troubleshooting, system updates, and guidance
                whenever needed.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 text-sm">
                6. Continuous Improvement
              </h5>
              <p className="text-slate-500">
                We regularly enhance MentorERP by introducing new features,
                improving performance, and adopting the latest technologies to
                meet the evolving needs of educational institutions.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 text-sm">
                7. Building Long-Term Partnerships
              </h5>
              <p className="text-slate-500">
                We believe in creating long-term relationships with our clients
                by delivering reliable service, maintaining transparency, and
                ensuring their continued success.
              </p>
            </div>
          </div>

          <p className="italic font-bold text-blue-600 bg-blue-50/50 p-2.5 rounded-xl border border-blue-100 text-center">
            "Our goal is not just to provide software, but to become a trusted
            technology partner for every educational institution."
          </p>
        </div>
      ),
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
    <section className="py-12 md:py-24 bg-gradient-to-b from-white to-slate-50/40 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
      >
        {/* Left: Image Stack */}
        <motion.div
          variants={leftItem}
          className="relative h-[480px] md:h-[600px] w-full lg:sticky lg:top-10"
        >
          <img
            src="/banner-1.jpg"
            alt="Team Coordination"
            className="absolute top-0 left-0 w-[75%] h-[90%] object-cover rounded-[32px] shadow-[0_20px_40px_rgba(15,23,42,0.12)] border border-slate-100 z-10"
          />
          <img
            src="/banner-2.jpg"
            alt="ERP System Presentation"
            className="absolute bottom-0 right-0 w-[45%] h-[70%] object-cover rounded-[24px] shadow-[0_25px_50px_rgba(15,23,42,0.2)] border-4 border-white z-20"
          />

          {/* Experience Badge - Blue Theme */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute top-8 right-4 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white p-5 rounded-2xl w-36 md:w-40 z-30 shadow-[0_15px_30px_rgba(59,130,246,0.3)] cursor-pointer border-b-4 border-indigo-800"
          >
            <h3 className="text-2xl md:text-3xl font-black">6+</h3>
            <p className="text-xs font-bold opacity-90 mt-1">Years of</p>
            <p className="text-xs font-black uppercase tracking-wider">
              Experiences
            </p>
          </motion.div>

          {/* Clients Badge */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] z-30 flex items-center gap-4 border border-slate-100"
          >
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-xl shadow-inner">
              🎓
            </div>
            <div>
              <p className="font-black text-slate-900 text-xl leading-none">
                350+
              </p>
              <p className="text-xs text-slate-500 font-bold mt-1">
                Registered Clients
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <motion.div variants={rightItem} className="w-full">
          <h4 className="text-blue-600 font-black mb-3 uppercase tracking-[0.2em] text-xs md:text-sm">
            Become A Partner
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.2] tracking-tight">
            Empowering Education <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Growth Together
            </span>
          </h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium leading-relaxed">
            MentorERP is a comprehensive Educational Institution Management
            Software developed by Lead Skill IT. We are committed to
            transforming educational institutions through innovative technology
            solutions that simplify administration, enhance communication, and
            improve overall operational efficiency.
            <br />
            <br />
            Our platform empowers schools, colleges, madrasas, coaching centers,
            and other educational organizations to manage admissions, student
            information, attendance, examinations, fee collection, accounting,
            SMS notifications, and administrative activities from a single
            integrated system. By partnering with us, you can lead the digital
            transformation journey in your region while establishing a highly
            profitable revenue model.
          </p>

          {/* Tabs Navigation */}
          <div className="border-b border-slate-200 mb-6 flex gap-6 md:gap-8">
            {["mission", "work"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm md:text-base font-bold transition-all relative capitalize ${
                  activeTab === tab
                    ? "text-blue-600 font-black border-b-4 border-blue-600"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {tab === "mission" ? "Our Mission" : "How We Work"}
              </button>
            ))}
          </div>

          {/* Dynamic Tab Content Box (With structured JSX to prevent layout breaking) */}
          <div className="max-h-[380px] min-h-[200px] mb-8 overflow-y-auto bg-slate-50 border border-slate-100 p-5 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] custom-scrollbar">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <div className="p-3 bg-white rounded-xl text-blue-600 text-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] flex-shrink-0">
                  {tabContent[activeTab].icon}
                </div>
                <div className="flex-1">{tabContent[activeTab].text}</div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action Footer */}
          <div className="flex flex-wrap items-center gap-5">
            {/* Consulting/Join Button */}
            <button
              onClick={() => {
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                });
              }}
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-4 rounded-2xl font-black text-sm md:text-base flex items-center gap-2 shadow-[0_10px_25px_rgba(59,130,246,0.3)] hover:shadow-[0_15px_30px_rgba(59,130,246,0.5)] border-b-4 border-indigo-800 active:border-b-0 active:translate-y-[4px] transition-all duration-150"
            >
              Apply For Partnership <FaArrowRight className="text-sm" />
            </button>

            {/* Contact Info Card */}
            <div className="flex items-center gap-3.5 p-1.5 pr-5 rounded-2xl bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)] border border-slate-100 hover:shadow-md transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-inner">
                <FaPhoneAlt className="text-sm" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-slate-400 font-black leading-none">
                  Call Anytime
                </p>
                <p className="font-black text-slate-800 text-sm md:text-base mt-1">
                  +8801676761887
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EmpoweringFuture;
