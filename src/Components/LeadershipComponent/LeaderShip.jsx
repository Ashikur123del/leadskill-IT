import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Shohal",
    role: "Founder & Managing Director",
    bio: '<span class="font-bold text-emerald-700 dark:text-emerald-400">Shohal</span> is the founder and Managing Director of Leadswin Limited, a technology-driven company focused on improving education. He believes that as the world changes, education must grow with it. This belief inspired him to build Leadswin — a place where practical, system-based innovations help schools, teachers, and students thrive in the future.',
    img: "CEO.webp",
  },
  {
    name: "Zihad Hasan",
    role: "Director, Finance",
    bio: "Zihad Hasan leads financial strategy and core operations at Leadswin Limited. He drives financial planning, budgeting, performance management, and long-term sustainability — ensuring every decision supports the mission of transforming education through thoughtful technology.",
    img: "video-editor-team-photo.webp",
  },
  {
    name: "Md. Sahid Hossain",
    role: "Director, Compliance",
    bio: "With over 20 years in finance and 12 years focused on business excellence, Md. Sahid Hossain brings deep expertise in financial analysis, auditing, and governance. Known for discipline, punctuality, and uncompromising ethics, he strengthens Leadswin’s compliance framework and financial transparency.",
    img: "Video-Editing-600x472.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.4 },
  },
};

const memberVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 14,
      duration: 0.8,
    },
  },
};

const LeaderShip = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-base-200/40 to-base-100 relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-base-content tracking-tight">
            Board of <span className='text-yellow-500'>Directors</span>
          </h2>
          <div className="mt-5 mx-auto w-96 h-1.5 commonbgcolor rounded-full"></div>

          <p className="mt-6 text-lg md:text-xl text-base-content/70 max-w-4xl mx-auto leading-relaxed">
            Visionary leaders building the future of education through innovation, integrity, and impact.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-24 md:space-y-32"
        >
          {teamMembers.map((member, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={member.name}
                variants={memberVariants}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                <div className={`lg:col-span-5 flex ${isEven ? 'lg:justify-start' : 'lg:justify-end'} justify-center`}>
                  <motion.div
                    whileHover={{ scale: 1.035, y: -10, rotate: isEven ? 0.6 : -0.6 }}
                    transition={{ type: "spring", stiffness: 280, damping: 18 }}
                    className="group relative w-80 sm:w-96 max-w-full"
                  >
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-base-content/8 bg-base-100">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img
                        src={member.img}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full aspect-[4/4.4] object-cover transition-transform duration-800 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 w-[92%] max-w-sm pointer-events-none">
                      <div className="bg-gradient-to-br from-emerald-900/95 to-emerald-700/95 backdrop-blur-md text-white rounded-2xl py-6 px-7 shadow-2xl text-center border border-emerald-500/20 transform transition-all duration-300 group-hover:-translate-y-2">
                        <h3 className="font-bold text-2xl md:text-2.5xl tracking-tight drop-shadow-sm">
                          {member.name}
                        </h3>
                        <p className="mt-1.5 text-base font-medium text-emerald-100/90">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="lg:col-span-7">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="card bg-base-100/70 backdrop-blur-sm shadow-xl border border-base-300/40 hover:shadow-2xl transition-all duration-400 rounded-3xl overflow-hidden"
                  >
                    <div className="card-body text-base p-8 md:p-11 lg:p-12 prose prose-base md:prose-lg prose-emerald dark:prose-invert max-w-none leading-relaxed text-base-content/90">
                      <div dangerouslySetInnerHTML={{ __html: member.bio }} />
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </motion.div> 
        <div className="mt-24 md:mt-32 text-center">
          <p className="text-base-content/60 italic text-sm md:text-base tracking-wide">
            Committed to redefining education through technology, integrity, and excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeaderShip;

 