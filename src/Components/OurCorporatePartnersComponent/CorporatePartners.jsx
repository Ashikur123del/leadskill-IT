import React from 'react';
import { Handshake } from 'lucide-react'; // মডার্ন ও লাইটওয়েট আইকন

const partners = [
  { 
    name: "SSLCOMMERZ", 
    img: "/public/P-2.webp", // স্ট্যান্ডার্ড পিএনজি লিঙ্ক বা আপনার লোকাল "/P-2.webp" ব্যবহার করতে পারেন
    desc: "SSLCOMMERZ is a leading fintech and payment automation company in Bangladesh that provides secure payment gateway services to businesses. As our corporate partner, they collaborate with Lead-Skill-IT Limited to facilitate digital fee collection and support all types of online transactions with reliability and efficiency." 
  },
  { 
    name: "bKash", 
    img: "https://1000logos.net/wp-content/uploads/2021/02/Bkash-logo.jpg", // bKash অফিশিয়াল প্লেসহোল্ডার লোগো লিঙ্ক
    desc: "bKash is the premier Mobile Financial Service (MFS) provider in Bangladesh, offering a fast, secure, and incredibly convenient way to make digital payments. Through this partnership, institutions can seamlessly collect academic fees, tuition, and other dues instantly from guardians anywhere in the country." 
  },
  { 
    name: "Nagad", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV0h3dDGdSUiOzsJDiCKw8pvk3ujXc5tezTQ&s", // Nagad অফিশিয়াল প্লেসহোল্ডার লোগো লিঙ্ক
    desc: "Nagad, the digital financial service of the Bangladesh Post Office, is one of the fastest-growing MFS operators in the region. Our integration with Nagad ensures highly cost-effective, transparent, and user-friendly digital transaction solutions for efficient educational fund and institutional management." 
  },
];

const CorporatePartners = () => {
  return (
    <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Subtle 3D Ambient Lighting Background Effect */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-green-50/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-50/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Title Section */}
        <div className="text-center mb-16 md:mb-24">
          <span className="bg-green-800/10 text-green-800 text-[10px] md:text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block border border-green-800/20 shadow-sm">
            Ecosystem & Alliances
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-green-800 tracking-tight mt-1 drop-shadow-sm">
            Our Corporate Partners
          </h2>
          <div className="mt-4 h-[6px] w-28 mx-auto commonbgcolor rounded-full shadow-inner"></div>
        </div>

        {/* 3D Flex/Grid Logo Gallery Showcase */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 md:mb-24">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="
                w-64 h-28 p-5 rounded-2xl bg-white
                border-t border-l border-white border-b border-r border-slate-200/80
                shadow-[0_10px_25px_-5px_rgba(0,0,0,0.02),_0_8px_16px_-6px_rgba(0,0,0,0.02)]
                hover:shadow-[0_20px_40px_-10px_rgba(22,163,74,0.12)]
                hover:-translate-y-1.5
                transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                flex items-center justify-center group relative overflow-hidden
              "
            >
              {/* Soft Inner Glow Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-600/10 rounded-2xl transition-all duration-300 pointer-events-none" />
              <img 
                src={partner.img} 
                alt={partner.name} 
                className="max-h-full max-w-[85%] object-contain transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          ))}
        </div>

        {/* Detailed Professional Text Content Grid */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="
                group p-6 md:p-8 bg-white border border-slate-100 rounded-3xl
                shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)]
                transition-all duration-300 flex flex-col md:flex-row items-start gap-5 relative overflow-hidden
              "
            >
              {/* Dynamic Accent Line on Hover */}
              <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-2 commonbgcolor transition-all duration-300" />
              
              {/* Small Minimal Icon Indicator */}
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-50 transition-colors duration-300">
                <Handshake className="w-5 h-5 text-green-700" />
              </div>

              {/* Main Content Area */}
              <div className="space-y-2 flex-1">
                <h3 className="text-green-800 text-xl font-black tracking-tight group-hover:text-green-700 transition-colors duration-300">
                  {partner.name}
                </h3>
                {/* Description Text: bold, clean, and highly readable */}
                <p className="text-slate-600 text-sm md:text-base font-bold leading-relaxed text-justify group-hover:text-slate-700 transition-colors duration-300">
                  {partner.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CorporatePartners;