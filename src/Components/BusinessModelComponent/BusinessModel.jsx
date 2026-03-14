import React from "react";

const BusinessModel = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header with accent */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Our <span className="text-yellow-600">Business</span> Model
          </h2>
          <div className="mt-5 h-1.5 w-32 md:w-48 mx-auto bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-600 rounded-full shadow-sm" />
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Diversified revenue streams + system-first operations = scalable, sustainable growth.
          </p>
        </div>

        {/* Core Philosophy Card */}
        <div className="mb-16 md:mb-20">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100/80 overflow-hidden">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed prose prose-yellow max-w-none">
                <strong className="text-gray-900 text-2xl block mb-4">Lead-skill-it</strong> follows a multi-revenue, low-friction model built for longevity.
              </p>
              <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                We earn through:
              </p>
              <ul className="mt-4 space-y-3 text-lg text-gray-700 list-none">
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold text-xl mr-4 mt-1">→</span>
                  <span><strong>SaaS subscriptions</strong> for schools & institutions (Eduman, EduCare, DailyLedger)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold text-xl mr-4 mt-1">→</span>
                  <span><strong>B2C family plans</strong> (EduCare + ValuePlus)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold text-xl mr-4 mt-1">→</span>
                  <span><strong>Course & skill fees</strong> (PROSPER, SkillDeal)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold text-xl mr-4 mt-1">→</span>
                  <span><strong>Revenue-share partnerships</strong> (Barakah)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold text-xl mr-4 mt-1">→</span>
                  <span><strong>CSR-driven B2B licensing</strong></span>
                </li>
              </ul>
              <p className="mt-8 text-lg md:text-xl text-gray-700 leading-relaxed">
                Everything runs on <strong>system-driven execution</strong>: SOPs, automation, AI-powered onboarding & support — keeping HR lean and operations scalable.
              </p>
            </div>
          </div>
        </div>

        {/* Two-column: Operational Pillars + Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Operational Pillars */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Operational Strengths</h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-emerald-600 font-bold mr-3 text-xl">✓</span>
                  Policy + SOP + Checklist driven execution
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 font-bold mr-3 text-xl">✓</span>
                  Minimal HR dependency via tech & AI
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 font-bold mr-3 text-xl">✓</span>
                  Fully automated onboarding & success flows
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 font-bold mr-3 text-xl">✓</span>
                  Lean structure — scalable across platforms
                </li>
              </ul>
            </div>

            <p className="text-center lg:text-left text-xl font-semibold text-gray-800 italic">
              System-Driven. Scalable. Low-Cost.
            </p>
          </div>

          {/* Visual / Diagram */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img
                src="./Group-220.webp"
                alt="Leadswin Business Model Overview"
                className="w-full h-auto rounded-3xl shadow-2xl object-contain border border-gray-200 transform hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl pointer-events-none" />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-yellow-600/90 text-white px-8 py-3 rounded-full font-semibold shadow-lg text-base backdrop-blur-sm">
                Diversified & Efficient
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;