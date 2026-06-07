import React from 'react';

const VisionMission = () => {
  const sections = [
    {
      title: "Vision",
      content: (
        <div className="space-y-4 text-slate-300 text-sm md:text-base font-medium leading-relaxed">
          <p>
            Our vision is to become a leading education technology provider by empowering educational institutions with innovative, intelligent, and sustainable digital solutions.
          </p>
          <p>
            We envision a future where every school, college, madrasa, university, and training institute can efficiently manage its academic and administrative operations through technology, creating a more connected, transparent, and productive learning environment.
          </p>
          <p>
            Through continuous innovation, exceptional service, and a commitment to excellence, MentorERP aims to contribute to the development of a smarter education ecosystem and support the digital transformation of educational institutions across Bangladesh and beyond.
          </p>
          <p>
            We aspire to be the trusted technology partner that helps institutions achieve operational excellence, improve educational outcomes, and prepare future generations for a technology-driven world.
          </p>
          <p className="pt-2 italic font-bold text-indigo-400 border-t border-white/10">
            "Our vision is to build a smarter, more efficient, and digitally empowered education system for the future."
          </p>
        </div>
      ),
      image: "/Group-1.webp",
      gradient: "from-slate-900 via-slate-800 to-indigo-950",
      reverse: false
    },
    {
      title: "Mission",
      content: (
        <div className="space-y-4 text-slate-300 text-sm md:text-base font-medium leading-relaxed">
          <p>
            At MentorERP, our mission is to empower educational institutions with innovative, reliable, and technology-driven management solutions that simplify operations, enhance efficiency, and support academic excellence.
          </p>
          <p>
            We are committed to helping schools, colleges, madrasas, universities, and training institutes streamline their administrative, academic, and financial activities through a secure and user-friendly digital platform.
          </p>
          <p>
            By delivering quality software, continuous innovation, and dedicated customer support, we aim to create a smarter, more transparent, and more connected education ecosystem that benefits administrators, teachers, students, and parents alike.
          </p>
          <p>
            Our focus is to enable educational institutions to embrace digital transformation, improve decision-making, reduce operational complexity, and achieve sustainable growth.
          </p>
          <p className="pt-2 italic font-bold text-indigo-400 border-t border-white/10">
            "MentorERP's mission is to make education management smarter, simpler, and more efficient through technology."
          </p>
        </div>
      ),
      image: "/Group-1.webp", // Fallback, original configuration used text-reverse for grid 2
      gradient: "from-slate-900 via-slate-800 to-slate-900",
      reverse: true
    },
    {
      title: "Value",
      content: (
        <div className="space-y-5 text-slate-300 text-sm md:text-base font-medium leading-relaxed max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
          <p className="text-slate-200">
            At MentorERP, our values define who we are, how we work, and how we serve educational institutions. They guide every decision we make and inspire us to deliver excellence in everything we do.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
              <h4 className="font-black text-indigo-400 text-sm tracking-wider uppercase mb-1">Innovation</h4>
              <p className="text-xs text-slate-400">We continuously embrace new technologies and ideas to develop smarter and more effective solutions for educational institutions.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
              <h4 className="font-black text-indigo-400 text-sm tracking-wider uppercase mb-1">Integrity</h4>
              <p className="text-xs text-slate-400">We conduct our business with honesty, transparency, and accountability, building trust with our clients, partners, and team members.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
              <h4 className="font-black text-indigo-400 text-sm tracking-wider uppercase mb-1">Customer Success</h4>
              <p className="text-xs text-slate-400">Our clients' success is our success. We are committed to providing exceptional service, support, and solutions that create real value.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
              <h4 className="font-black text-indigo-400 text-sm tracking-wider uppercase mb-1">Excellence</h4>
              <p className="text-xs text-slate-400">We strive for the highest standards in product quality, performance, and customer experience.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
              <h4 className="font-black text-indigo-400 text-sm tracking-wider uppercase mb-1">Collaboration</h4>
              <p className="text-xs text-slate-400">We believe in teamwork, partnership, and open communication to achieve shared goals and sustainable growth.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
              <h4 className="font-black text-indigo-400 text-sm tracking-wider uppercase mb-1">Reliability</h4>
              <p className="text-xs text-slate-400">We provide dependable and secure solutions that educational institutions can trust for their daily operations.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
              <h4 className="font-black text-indigo-400 text-sm tracking-wider uppercase mb-1">Continuous Improvement</h4>
              <p className="text-xs text-slate-400">We are committed to learning, evolving, and improving our products, services, and processes to meet changing needs.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
              <h4 className="font-black text-indigo-400 text-sm tracking-wider uppercase mb-1">Social Impact</h4>
              <p className="text-xs text-slate-400">We believe technology can transform education and contribute to building a smarter and more digitally empowered society.</p>
            </div>
          </div>

          <p className="pt-2 italic font-bold text-indigo-400 border-t border-white/10 block w-full">
            "At MentorERP, our values drive our commitment to innovation, integrity, excellence, and customer success."
          </p>
        </div>
      ),
      image: "/Group-3.webp",
      gradient: "from-slate-900 via-indigo-950 to-slate-900",
      reverse: false
    }
  ];

  return (
    <section className="max-w-7xl mx-auto py-12 md:py-24 px-4 sm:px-6 bg-transparent">
      <div className="space-y-1 gap-1 overflow-hidden rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-100">
        {sections.map((item, index) => (
          <div 
            key={index} 
            className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[550px]"
          >
            {/* Text Content Block */}
            <div 
              className={`p-8 sm:p-12 md:p-16 xl:p-20 flex flex-col justify-center bg-gradient-to-br ${item.gradient} text-white ${item.reverse ? 'lg:order-last' : ''}`}
            >
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-black tracking-widest uppercase text-indigo-300">
                  Lead-Skill-IT Strategy
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
                  {item.title}
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                
                {/* Embedded JSX Content safely rendered here */}
                <div className="max-w-xl">
                  {item.content}
                </div>
              </div>
            </div>

            {/* Image Block with responsive sizing fixes */}
            <div className="bg-white relative group overflow-hidden flex items-center justify-center p-8 lg:p-12 min-h-[300px] lg:min-h-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-indigo-50/30 opacity-60"></div>
              
              <img 
                src={item.image} 
                alt={item.title} 
                className="relative z-10 w-full max-w-[450px] lg:max-w-full h-auto object-contain transition-all duration-700 ease-out group-hover:scale-105 group-hover:-rotate-1"
              />

              {/* Glowing Background Ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl group-hover:bg-indigo-300/30 transition-colors duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionMission;