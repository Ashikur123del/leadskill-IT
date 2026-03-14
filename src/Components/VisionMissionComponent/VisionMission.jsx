import React from 'react';

const VisionMission = () => {
  const sections = [
    {
      title: "Vision",
      content: "To build a sustainable ecosystem where innovation, technology, and human potential come together to create opportunities and drive national progress. Leadswin envisions a future where every initiative contributes to employment, empowerment, and a smarter, more sustainable Bangladesh.",
      image: "/Group-1.webp",
      // Modern Indigo Gradient
      gradient: "from-slate-900 via-slate-800 to-indigo-950",
      reverse: false
    },
    {
      title: "Mission",
      content: "To transform lives through technology by creating meaningful convenience, lasting value, and positive impact. We are committed to empowering individuals, organizations, and communities with innovative solutions that inspire growth, strengthen connections, and shape a better future for all.",
      image: "/Group-2.webp",
      // Slightly different shade for depth
      gradient: "from-slate-900 via-slate-800 to-slate-900",
      reverse: true
    },
    {
      title: "Value",
      content: "Leadswin values business focus, integrity, and ethics while nurturing an open, growth-oriented mindset. We inspire creativity, foster innovation, build mutually beneficial relationships, and act with care and responsibility toward people and the progress we make.",
      image: "/Group-3.webp",
      gradient: "from-slate-900 via-indigo-950 to-slate-900",
      reverse: false
    }
  ];

  return (
    <section className="max-w-7xl mx-auto py-30 px-6 bg-base-200/30">
      <div className="space-y-1 gap-1 overflow-hidden rounded-[2rem] shadow-2xl">
        {sections.map((item, index) => (
          <div 
            key={index} 
            className="grid grid-cols-1 md:grid-cols-2 min-h-[450px]"
          >
            {/* Text Content with Dynamic Gradient */}
            <div 
              className={`p-12 md:p-20 flex flex-col justify-center bg-gradient-to-br ${item.gradient} text-white ${item.reverse ? 'md:order-last' : ''}`}
            >
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-widest uppercase">
                  Leadswin Strategy
                </div>
                <h2 className="text-5xl font-black tracking-tighter italic">
                  {item.title}
                </h2>
                <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
                <p className="text-lg leading-relaxed text-slate-300 font-medium max-w-lg">
                  {item.content}
                </p>
              </div>
            </div>

            {/* Image Content with hover effect */}
            <div className="bg-white relative group overflow-hidden flex items-center justify-center">
              {/* Subtle Background Pattern or Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-indigo-50/50 opacity-50"></div>
              <img 
                src={item.image} 
                alt={item.title} 
                className="relative z-10 w-full h-auto transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-2"
              />

              {/* Decorative circle for latest UI feel */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl group-hover:bg-indigo-300/30 transition-colors"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionMission;