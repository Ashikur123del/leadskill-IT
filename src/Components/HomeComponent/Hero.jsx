import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaArrowUp } from "react-icons/fa"; // FaArrowUp যোগ করা হয়েছে

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // ১০০ পিক্সেল স্ক্রল ট্র্যাক করার জন্য
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ওপরে নিয়ে যাওয়ার ফাংশন
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const slides = [
    { title: "Empowering Schools with Smart Management", subtitle: "Streamline administration, enhance collaboration, and automate workflows with MentorERP.", bgImage: "slide-1.webp" },
    { title: "Simplifying Education, One Click at a Time", subtitle: "From attendance to fee processing—we handle the heavy lifting for your school.", bgImage: "slide-2.webp" },
    { title: "The Future of Digital Education", subtitle: "Connect students, teachers, and parents in real-time on one unified platform.", bgImage: "slide-3.png" },
  ];

  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{ nextEl: ".my-next", prevEl: ".my-prev" }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center bg-cover bg-center" style={{ backgroundImage: `url(${slide.bgImage})` }}>
              <div className="absolute inset-0 bg-[#002B5B]/10" />
              <div className="container mx-auto px-6 lg:px-20 text-white relative z-10">
                <h1 className="text-4xl lg:text-7xl font-bold mb-6 max-w-3xl leading-tight">{slide.title}</h1>
                <p className="text-lg lg:text-xl mb-8 max-w-2xl text-blue-100">{slide.subtitle}</p>
                <button className="flex items-center gap-2 commonbgcolor px-8 py-4 rounded-md font-bold  tracking-widest text-white shadow-lg transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] group">
                  Visit the Website <FaArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="my-prev absolute left-5 top-1/2 z-30 cursor-pointer text-white w-12 h-12 bg-white/10 flex items-center justify-center rounded-full backdrop-blur-md hover:bg-white/30 transition-all"><FaChevronLeft size={20} /></div>
        <div className="my-next absolute right-5 top-1/2 z-30 cursor-pointer text-white w-12 h-12 bg-white/10 flex items-center justify-center rounded-full backdrop-blur-md hover:bg-white/30 transition-all"><FaChevronRight size={20} /></div>
      </Swiper>

      {/* স্ক্রল-টু-টপ বাটন */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-50 p-4 commonbgcolor rounded-full shadow-lg transition-all hover:bg-orange-700 animate-bounce"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Hero;