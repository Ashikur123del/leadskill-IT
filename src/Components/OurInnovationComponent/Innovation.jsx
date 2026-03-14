import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Innovation = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white via-zinc-50 to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading with subtle accent */}
        <div className="text-center mb-14 md:mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 rounded-full">
            Innovation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
            Systems That Build Nations
          </h2>
          <p className="mt-5 text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto">
            Redefining education, healthcare, finance & family well-being through purposeful technology
          </p>
        </div>

        {/* Main Card – better hover, better mobile feel, glass-like touch */}
        <div
          className="
            group relative 
            bg-white/70 backdrop-blur-sm 
            border border-zinc-200/80 
            rounded-2xl md:rounded-3xl 
            overflow-hidden 
            shadow-xl shadow-zinc-100/70 
            hover:shadow-2xl hover:shadow-zinc-200/50 
            transition-all duration-500 ease-out
            hover:-translate-y-1
          "
        >
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Image side – better aspect + overlay gradient */}
            <div className="lg:w-5/12 relative min-h-[320px] lg:min-h-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/30 via-transparent to-blue-900/10 mix-blend-multiply z-10" />
              <img
                src="./innovr.webp"
                alt="LeadSkill-It Innovation"
                className="
                  absolute inset-0 w-full h-full 
                  object-cover object-center 
                  transition-transform duration-700 
                  group-hover:scale-105
                "
                loading="lazy"
              />
            </div>

            {/* Content side */}
            <div className="lg:w-7/12 p-8 md:p-10 lg:p-12 xl:p-14 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-5 leading-tight">
                LeadSkill-It Limited
                <br />
                <span className="text-blue-600">Innovating for Impact</span>
              </h3>

              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
                Over the past decade, we have grown into Bangladesh’s most trusted EdTech 
                and social impact innovation company — seamlessly connecting 
                <strong className="text-zinc-800"> education</strong>, 
                <strong className="text-zinc-800"> healthcare</strong>, 
                <strong className="text-zinc-800"> finance</strong> and 
                <strong className="text-zinc-800"> family well-being</strong> 
                through intelligent, inclusive systems that empower millions.
              </p>

              <div className="flex items-center gap-4 flex-wrap">
                <button
                  className="
                    group/btn inline-flex items-center gap-3 
                    px-7 py-3.5 rounded-full font-semibold text-white 
                    commonbgcolor
                    shadow-lg shadow-blue-200/40 
                    transition-all duration-300 
                    hover:shadow-xl hover:shadow-blue-300/30 
                    hover:scale-[1.02] active:scale-[0.98]
                  "
                >
                  Discover Our Journey
                  <FaArrowRightLong className="text-lg transition-transform group-hover/btn:translate-x-1.5 duration-300" />
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;