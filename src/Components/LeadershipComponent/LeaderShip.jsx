import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Mohammad Yunus",
    role: "Managing Director",
    bio: `<p class="mb-4">
            <span class="font-extrabold text-blue-600 dark:text-blue-400">Mohammad Yunus</span> is the founder and Managing Director of Lead-Skill-IT Limited, a technology-driven company focused on improving education.
          </p>
          <p>
            At MentorERP, we believe that technology has the power to transform education and create opportunities for future generations. Our goal is to provide innovative, reliable, and user-friendly solutions that help educational institutions manage their operations more efficiently and effectively.

Since our inception, we have remained committed to delivering quality services and building long-term relationships with our clients. We continuously invest in innovation, research, and customer support to ensure that our solutions meet the evolving needs of educational institutions.

I would like to thank our clients, partners, and dedicated team members for their trust and support. Together, we will continue to contribute to the digital transformation of education and build a smarter future.
          </p>`,
    image: "https://placehold.co/600x600",
  },
  {
    name: "Mohammad Sohel Rana",
    role: "Director, Finance",
    bio: `Education is the foundation of a progressive nation, and technology is the driving force behind modern educational management. At MentorERP, we are committed to bridging these two powerful elements through innovative digital solutions.

Our mission is to simplify institutional management, improve operational efficiency, and create a seamless experience for administrators, teachers, students, and parents. We strive to ensure that every educational institution can benefit from modern technology regardless of its size or location.

As we move forward, we remain focused on excellence, innovation, and customer satisfaction. We appreciate the trust placed in us by our clients and look forward to achieving greater success together.`,
    image: "https://placehold.co/600x600",
  },
  {
    name: "MD. Sha Alam Islam",
    role: "Director",
    bio: `At MentorERP, our vision is to create a technology-driven education ecosystem where institutions can operate more efficiently, transparently, and productively.

We understand the challenges faced by educational institutions in managing academic and administrative activities. That is why we have developed solutions that streamline processes, reduce complexity, and improve communication among all stakeholders.

Our commitment extends beyond software development. We are dedicated to supporting our clients through continuous training, technical assistance, and innovation. We believe that sustainable growth is achieved through trust, partnership, and shared success.

Thank you for being a part of our journey as we continue to shape the future of educational management.`,
    image: "https://placehold.co/600x600",
  },
  {
    name: "Jihad Ferdaus Khan",
    role: "Director",
    bio: `Innovation, dedication, and customer success are the core principles that guide MentorERP. Our objective is not only to provide software solutions but also to become a trusted partner in the digital transformation journey of educational institutions.

We continuously work to improve our products and services by embracing new technologies and understanding the changing needs of the education sector. Our team is committed to delivering value-driven solutions that empower institutions to achieve operational excellence.

As we expand our reach and strengthen our partnerships, we remain focused on creating positive impact through technology and contributing to a smarter, more connected educational environment.

Together, we can build a future where education management is simple, efficient, and accessible for all.
`,
    image: "https://placehold.co/600x600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const memberVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 15,
      duration: 0.8,
    },
  },
};

const LeaderShip = () => {
  return (
    <section className="py-16 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 relative overflow-hidden">
      {/* Decorative Blur Background Circles */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-28"
        >
          <span className="bg-blue-600/10 text-blue-600 text-[10px] md:text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block border border-blue-500/10">
            Leadership
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mt-2">
            Board of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Directors
            </span>
          </h2>
          <div className="mt-5 mx-auto w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>

          <p className="mt-6 text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Visionary leaders building the future of education through
            innovation, integrity, and impact.
          </p>
        </motion.div>

        {/* Members Grid List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-32 md:space-y-40"
        >
          {teamMembers.map((member, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={member.name}
                variants={memberVariants}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Image Container with Dynamic Order */}
                <div
                  className={`lg:col-span-5 flex justify-center ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative w-full max-w-[340px] md:max-w-[360px] mb-8 lg:mb-0"
                  >
                    {/* Shadow Layer */}
                    <div className="absolute inset-4 bg-blue-600/10 rounded-[2.5rem] blur-2xl group-hover:bg-blue-600/20 transition-all duration-500"></div>

                    {/* Main Image Frame */}
                    <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] z-10 aspect-square">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* NEW: Floating Text Badge with Blue-Indigo Gradient (Matched with Title) */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] z-20 pointer-events-none">
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl py-4 px-5 shadow-[0_15px_35px_rgba(59,130,246,0.25)] text-center border border-white/10 transform transition-all duration-300 group-hover:-translate-y-1">
                        <h3 className="font-black text-xl md:text-2xl tracking-tight text-white drop-shadow-sm">
                          {member.name}
                        </h3>
                        <p className="mt-1 text-xs md:text-sm font-bold text-blue-100/90 tracking-wide uppercase">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Biography Text Container */}
                <div
                  className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.05)] transition-all duration-400 rounded-[2rem] p-6 sm:p-10 lg:p-12"
                  >
                    <div className="text-sm sm:text-base font-medium leading-relaxed text-slate-600 dark:text-slate-700">
                      <div
                        className="space-y-4"
                        dangerouslySetInnerHTML={{ __html: member.bio }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default LeaderShip;
