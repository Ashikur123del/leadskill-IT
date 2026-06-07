import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  HeartHandshake, 
  Lock, 
  Award 
} from 'lucide-react';

const CodeConduct = () => {
  // Array storing all Code of Conduct items with distinct professional icons
  const conductItems = [
    {
      id: "1",
      title: "Integrity Above All",
      description: "Always act honestly, ethically, and transparently in every business activity. Misrepresentation, fraud, or dishonest conduct will not be tolerated.",
      icon: <ShieldCheck className="w-5 h-5 text-[#1e5631] group-hover:scale-110 transition-transform duration-300" />
    },
    {
      id: "2",
      title: "Respect for Everyone",
      description: "Treat clients, colleagues, partners, and stakeholders with dignity, fairness, and respect, regardless of position, background, religion, gender, or culture.",
      icon: <Users className="w-5 h-5 text-[#1e5631] group-hover:scale-110 transition-transform duration-300" />
    },
    {
      id: "3",
      title: "Customer First",
      description: "Prioritize customer satisfaction by delivering quality service, timely support, and professional solutions that create lasting value.",
      icon: <HeartHandshake className="w-5 h-5 text-[#1e5631] group-hover:scale-110 transition-transform duration-300" />
    },
    {
      id: "4",
      title: "Confidentiality & Data Security",
      description: "Protect all company, client, and partner information. Unauthorized sharing, misuse, or disclosure of confidential data is strictly prohibited.",
      icon: <Lock className="w-5 h-5 text-[#1e5631] group-hover:scale-110 transition-transform duration-300" />
    },
    {
      id: "5",
      title: "Professional Excellence",
      description: "Maintain high standards of performance, continuous learning, and accountability to deliver the best results for the organization and our clients.",
      icon: <Award className="w-5 h-5 text-[#1e5631] group-hover:scale-110 transition-transform duration-300" />
    }
  ];

  return (
    <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-slate-100 via-white to-slate-50 relative overflow-hidden">
      {/* 3D Ambient Blur Spheres in Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-100/40 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <span className="bg-[#1e5631]/10 text-[#1e5631] text-[10px] md:text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block border border-[#1e5631]/20 shadow-sm">
            Ethics & Corporate Values
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-[#1e5631] tracking-tight mt-1 drop-shadow-sm">
            Code of Conduct
          </h2>
          <div className="mt-5 h-[6px] w-28 mx-auto commonbgcolor rounded-full shadow-inner"></div>
          
          <p className="mt-8 text-base md:text-xl font-bold text-slate-700 max-w-3xl mx-auto leading-relaxed">
            At MentorERP, we are committed to maintaining the highest standards of professionalism, integrity, and ethical business practices. Every employee, director, partner, consultant, and representative of the organization is expected to follow these principles.
          </p>
        </div>

        {/* 3D Glassmorphic Smart Cards Container */}
        <div className="space-y-8">
          {conductItems.map((item) => (
            <div 
              key={item.id} 
              className="
                group p-6 md:p-8 
                bg-white/90 backdrop-blur-md
                border-t border-l border-white/60 border-b border-r border-slate-200/80
                rounded-3xl 
                shadow-[0_10px_25px_-5px_rgba(0,0,0,0.03),_0_8px_16px_-6px_rgba(0,0,0,0.03)]
                hover:shadow-[0_25px_50px_-12px_rgba(30,86,49,0.12),_0_0_0_1px_rgba(30,86,49,0.05)]
                hover:-translate-y-1.5
                active:translate-y-0
                transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                flex flex-col sm:flex-row items-start gap-6 relative overflow-hidden
              "
            >
              {/* Left Smart Neon-Glow Indicator Stripe */}
              <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-2 commonbgcolor transition-all duration-300 shadow-[2px_0_15px_rgba(30,86,49,0.4)]" />
              
              {/* 3D Styled Icon Box */}
              <div className="
                w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-slate-100/80 
                border-t border-l border-white border-b border-r border-slate-200
                shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),_0_4px_12px_rgba(0,0,0,0.04)] 
                flex items-center justify-center flex-shrink-0 
                group-hover:from-emerald-50 group-hover:to-emerald-100/50
                group-hover:shadow-[0_8px_20px_rgba(30,86,49,0.1)]
                transition-all duration-300
              ">
                {item.icon}
              </div>

              {/* Content Core Block */}
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3.5">
                  <span className="text-sm font-black text-[#1e5631]/40 font-mono tracking-widest bg-[#1e5631]/5 px-2.5 py-0.5 rounded-md">
                    0{item.id}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-[#1e5631] transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                
                {/* 100% Bold and Smart High-Contrast Description Text */}
                <p className="text-sm md:text-base font-bold text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CodeConduct;