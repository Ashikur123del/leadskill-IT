import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaArrowUp } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Thambul from "../../assets/thumbnail.jpg.jpeg";
import Thambul2 from "../../assets/mentor erp thumbnail .jpg.jpeg";
import Thambul3 from "../../assets/mentor erp proggram  .png";

const Hero = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const slides = [
        { bgImage: Thambul3 },
        { bgImage: Thambul2 },
        { bgImage: Thambul },
    ];

    return (
        <div className="relative w-full h-[350px] sm:h-[500px] md:h-screen">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                loop={true}
                speed={1000}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation={{ nextEl: ".my-next", prevEl: 
                  
                  ".my-prev" }}
                pagination={{ clickable: true }}
                className="h-full w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative w-full h-full flex items-center bg-no-repeat bg-center"
                            style={{
                                backgroundImage: `url(${slide.bgImage})`,
                                backgroundSize: "contain", 
                                backgroundColor: "#002B5B",
                            }}
                        >
                            <div className="absolute inset-0 bg-[#002B5B]/10" />
                        </div>
                    </SwiperSlide>
                ))}

                <div
                    className="my-prev absolute left-5 top-1/2 z-30 cursor-pointer text-white 
                                w-12 h-12 bg-white/10 hidden md:flex items-center justify-center 
                                rounded-full backdrop-blur-md hover:bg-white/30 transition-all"
                >
                    <FaChevronLeft size={20} />
                </div>

                <div
                    className="my-next absolute right-5 top-1/2 z-30 cursor-pointer text-white 
                                w-12 h-12 bg-white/10 hidden md:flex items-center justify-center 
                                rounded-full backdrop-blur-md hover:bg-white/30 transition-all"
                >
                    <FaChevronRight size={20} />
                </div>
            </Swiper>

            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-10 right-10 z-50 p-4 commonbgcolor rounded-full shadow-lg 
                               transition-all hover:bg-orange-700 animate-bounce"
                >
                    <FaArrowUp size={20} />
                </button>
            )}
        </div>
    );
};

export default Hero;