import React from 'react';
import { 
  ArrowRight, 
  Laptop, 
  RefreshCw, 
  TrendingUp, 
  Users, 
  Rocket, 
  Handshake, 
  Lightbulb 
} from 'lucide-react'; 

import Image from '/11111.png'

const Innovation = () => {
  const innovationPillars = [
    {
      title: "Technology-Driven Solutions",
      description: "We leverage the latest technologies to create powerful tools that help educational institutions automate administrative, academic, and financial operations through a single integrated platform.",
      icon: <Laptop className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Continuous Product Development",
      description: "Our team continuously researches, develops, and improves MentorERP by introducing new features, enhancing system performance, strengthening security, and optimizing the user experience.",
      icon: <RefreshCw className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Smart Digital Transformation",
      description: "We help educational institutions transition from manual processes to intelligent digital systems that reduce workload, improve accuracy, and support data-driven decision-making.",
      icon: <TrendingUp className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Customer-Centric Innovation",
      description: "We actively listen to feedback from our clients and partners to ensure that every improvement and new feature addresses real-world challenges and delivers practical value.",
      icon: <Users className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Future-Ready Platform",
      description: "MentorERP is designed to adapt to emerging technologies and evolving educational requirements, ensuring that institutions remain competitive and prepared for the future.",
      icon: <Rocket className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Innovation Through Partnership",
      description: "We collaborate with educators, administrators, technology experts, and business partners to create innovative solutions that support sustainable growth and operational excellence.",
      icon: <Handshake className="w-5 h-5 text-blue-600" />
    }
  ];

  return (
    <section className="py-16 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
          <span className="bg-blue-600/10 text-blue-600 text-[10px] md:text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block border border-blue-500/10">
            Our Innovation
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mt-2">
            Shaping Tomorrow's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Education</span>
          </h2>
          <div className="mt-5 mx-auto w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          
          <div className="mt-8 space-y-4 max-w-4xl mx-auto text-base md:text-lg font-medium text-slate-600 leading-relaxed">
            <p>
              Innovation is at the heart of everything we do at MentorERP. We believe that technology should continuously evolve to meet the changing needs of educational institutions and create smarter, more efficient ways to manage education.
            </p>
            <p className="text-slate-500 text-sm md:text-base">
              Our commitment to innovation drives us to develop modern, user-friendly, and scalable solutions that simplify institutional management while enhancing productivity, transparency, and communication.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {innovationPillars.map((pillar, index) => (
              <div 
                key={index} 
                className="p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.02)] hover:shadow-[0_15px_35px_rgba(15,23,42,0.05)] hover:border-slate-200 transition-all duration-300 flex flex-col gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-sm md:text-base mb-1.5 tracking-tight group-hover:text-blue-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-12 flex flex-col gap-6">
            <div className="relative w-full max-w-md mx-auto lg:max-w-full group">
              <div className="absolute inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2.5rem] blur-2xl opacity-10" />
          
              <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)] z-10 aspect-square">
                <img
                  src={Image}
                  alt="MentorERP System Technology and Smart Corporate Innovation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 text-white rounded-2xl py-4 px-6 shadow-[0_15px_35px_rgba(59,130,246,0.25)] text-center border border-white/10 w-[85%] z-20">
                <button className="w-full flex items-center justify-center gap-3 font-black text-xs md:text-sm tracking-wider uppercase text-white group/btn">
                  Discover Our Journey
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1.5 duration-300" />
                </button>
              </div>
            </div>
            <div className="mt-6 p-6 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-2xl border border-blue-500/10 shadow-sm">
              <h4 className="font-black text-slate-900 text-sm md:text-base mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-blue-600" /> Our Commitment
              </h4>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                Innovation is not just about technology—it is about creating meaningful solutions that empower educational institutions, improve efficiency, and contribute to a smarter education ecosystem.
              </p>
            </div>
          </div>

        </div>

        <p className="text-center text-xs md:text-sm font-black text-slate-400 italic tracking-wide uppercase mt-24 border-t border-slate-100 pt-8 w-full">
          "At MentorERP, innovation is the driving force behind our mission to transform education through technology."
        </p>

      </div>
    </section>
  );
};

export default Innovation;