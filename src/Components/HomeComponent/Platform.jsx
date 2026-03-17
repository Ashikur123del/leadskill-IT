import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';

const services = [
  { title: "Education Market", sab: "Over 50,000 educational institutions with more than 40 million active students.", img: "/Video-Editing-600x472.jpg" },
  { title: "Parenting & Digital Addiction", sab: "Over 15 million school-age children are exposed to mobile overuse. Practical AI tools needed.", img: "/Graphic-Design-600x472.jpg" },
  { title: "Healthcare & Education Safety", sab: "Growing middle-class demand for affordable education-insurance-linked healthcare.", img: "/WordPress-Website-Deign-600x472.jpg" },
  { title: "Financial Literacy Crisis", sab: "70%+ of families lack structured financial knowledge for wealth management.", img: "/mans.jpg" },
];

const Platform = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-10 md:py-24 bg-[#1a1a1a] text-white overflow-hidden relative">
      <div className="container mx-auto px-6 text-center">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-purple-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">What we do?</p>
          <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            Opportunities in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Bangladesh</span>
          </h2>
        </motion.div>

        {/* Slider Section */}
        <div className="relative max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="py-10">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#1e1e1e] p-8 rounded-[40px] border border-gray-800 hover:border-purple-500 transition-all shadow-2xl h-[550px] flex flex-col items-start text-left"
                >
                  <div className="h-60 w-full mb-6 overflow-hidden rounded-[30px]">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">{service.sab}</p>
                  
                  <button className="mt-6 flex items-center gap-2 text-purple-400 font-bold hover:text-white transition-all">
                    LEARN MORE <FaArrowRight />
                  </button>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div ref={prevRef} className="absolute top-[45%] -left-6 z-20 cursor-pointer bg-white/10 p-5 rounded-full text-white hover:bg-purple-600 transition-all shadow-lg hidden md:block">
            <FaArrowLeft />
          </div>
          <div ref={nextRef} className="absolute top-[45%] -right-6 z-20 cursor-pointer bg-white/10 p-5 rounded-full text-white hover:bg-purple-600 transition-all shadow-lg hidden md:block">
            <FaArrowRight />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Platform;