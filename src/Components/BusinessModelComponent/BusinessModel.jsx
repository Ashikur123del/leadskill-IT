import React from "react";
import { 
  FaCheckCircle, 
  FaCloudDownloadAlt, 
  FaGraduationCap, // FaUserGraduation এর বদলে সঠিক আইকন নাম
  FaHandshake, 
  FaHeadset, 
  FaLightbulb, 
  FaNetworkWired 
} from "react-icons/fa";

const BusinessModel = () => {
  // Array mapping your complete provided revenue streams with proper semantic matching icons
  const revenueStreams = [
    { title: "Software Subscription Fees", icon: <FaCloudDownloadAlt className="text-blue-500" /> },
    { title: "Implementation & Setup Charges", icon: <FaCheckCircle className="text-blue-500" /> },
    { title: "Training & Consultation Services", icon: <FaGraduationCap className="text-blue-500" /> }, // আইকন আপডেট করা হয়েছে
    { title: "Annual Maintenance & Support Services", icon: <FaHeadset className="text-blue-500" /> },
    { title: "Premium Features & Customization Services", icon: <FaLightbulb className="text-blue-500" /> },
    { title: "Business Partner Network Expansion", icon: <FaNetworkWired className="text-blue-500" /> },
  ];

  return (
    <section className="py-16 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 relative overflow-hidden">
      {/* Decorative premium blur elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <span className="bg-blue-600/10 text-blue-600 text-[10px] md:text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block border border-blue-500/10">
            SaaS Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mt-2">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Business</span> Model
          </h2>
          <div className="mt-5 h-1.5 w-24 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
          <p className="mt-6 text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            MentorERP operates on a scalable Software-as-a-Service (SaaS) business model, providing comprehensive educational institution management solutions to schools, colleges, madrasas, coaching centers, universities, and training institutes.
          </p>
        </div>

        {/* Core Philosophy & Strategy Card */}
        <div className="mb-16 md:mb-24">
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(15,23,42,0.04)] border border-slate-100 overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />
            <div className="p-8 md:p-12 lg:p-16">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 tracking-tight">
                Sustainable Growth Strategy
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium mb-8">
                Our business model is designed to create long-term value for educational institutions while ensuring sustainable growth through innovation, customer satisfaction, and strategic partnerships.
              </p>
              
              {/* Detailed Operational Strategy Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100/80">
                  <h4 className="font-black text-slate-900 text-base mb-2">Software Subscription Model</h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                    We offer flexible subscription plans based on the size and requirements of educational institutions. Clients can choose suitable packages and enjoy continuous access to our software, updates, and support services.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100/80">
                  <h4 className="font-black text-slate-900 text-base mb-2">Implementation & Training Services</h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                    We provide software implementation, system setup, data migration, and professional training to ensure successful adoption and maximum utilization of the platform.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100/80">
                  <h4 className="font-black text-slate-900 text-base mb-2">Business Development Partner (BDP) Network</h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                    MentorERP expands its market presence through a nationwide network of Business Development Partners (BDPs). These partners promote our solutions, support clients locally, and contribute to business growth while earning attractive commissions and incentives.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100/80">
                  <h4 className="font-black text-slate-900 text-base mb-2">Customer Support & Retention</h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                    Our dedicated support team provides ongoing technical assistance, troubleshooting, and consultation services to ensure customer satisfaction and long-term client retention.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100/80">
                  <h4 className="font-black text-slate-900 text-base mb-2">Continuous Innovation</h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                    We continuously invest in research and development to enhance MentorERP with new features, improved security, better user experience, and emerging technologies that meet the evolving needs of educational institutions.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100/80">
                  <h4 className="font-black text-slate-900 text-base mb-2">Strategic Partnerships</h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                    We collaborate with educational organizations, technology providers, payment gateways, and service partners to deliver a complete and integrated digital ecosystem for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two-column Layout: Revenue Streams + Visual Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Revenue Streams List Box */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-slate-100 p-6 sm:p-10 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">
                Diversified Revenue Streams
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {revenueStreams.map((stream, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50/50 border border-slate-100">
                    <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      {stream.icon}
                    </div>
                    <span className="text-slate-700 text-xs md:text-sm font-bold leading-snug">
                      {stream.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Approach Bottom Highlight */}
            <div className="p-6 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-2xl border border-blue-500/10">
              <h4 className="font-black text-slate-900 text-base mb-2 flex items-center gap-2">
                <FaHandshake className="text-blue-600" /> Our Approach
              </h4>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                We believe in building long-term relationships rather than one-time transactions. By combining innovative technology, professional support, and strong partnerships, MentorERP creates sustainable value for educational institutions and contributes to the digital transformation of education.
              </p>
            </div>
          </div>

          {/* Visual/Image Layout Side */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] md:max-w-md lg:max-w-full">
              {/* Soft glow matching background layout profile */}
              <div className="absolute inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2rem] blur-2xl opacity-10" />
              
              <img
                src="./Group-220.webp"
                alt="MentorERP Operational and Revenue Flow Business Model Overview"
                className="w-full h-auto rounded-[2.5rem] shadow-[0_20px_50px_rgba(15,23,42,0.06)] object-contain border border-slate-100 transform hover:scale-[1.015] transition-transform duration-500 relative z-10"
                loading="lazy"
              />
              
              {/* Dynamic Overlay Tag */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 text-white px-6 py-2.5 rounded-full font-black shadow-xl text-xs md:text-sm tracking-wider uppercase backdrop-blur-sm z-20 border border-white/10 whitespace-nowrap">
                Innovation & Partnership
              </div>
            </div>
          </div>

        </div>

        {/* Footer Catchphrase Block */}
        <p className="text-center text-xs md:text-sm font-black text-slate-400 italic tracking-wide uppercase mt-16 md:mt-24 border-t border-slate-100 pt-8">
          "MentorERP's business model is built on innovation, partnership, customer success, and sustainable growth."
        </p>

      </div>
    </section>
  );
};

export default BusinessModel;