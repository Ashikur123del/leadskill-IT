import React, { useRef } from 'react';
import { FaStar, FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  { id: 1, name: "John Doe", role: "Tech Corp", rating: 5, comment: "Their approach to design is truly next-level. Highly professional and efficient.", avatar: "https://i.pravatar.cc/150?u=1" },
  { id: 2, name: "Sarah Smith", role: "Marketing Head", rating: 5, comment: "I am amazed by the creativity. They brought our vision to life perfectly.", avatar: "https://i.pravatar.cc/150?u=2" },
  { id: 3, name: "Michael Lee", role: "Founder, Startup Inc", rating: 5, comment: "Best service I have received so far. The team is very supportive and skilled.", avatar: "https://i.pravatar.cc/150?u=3" },
  { id: 4, name: "Emily Davis", role: "Product Manager", rating: 5, comment: "They understood our requirements and delivered beyond our expectations.", avatar: "https://i.pravatar.cc/150?u=4" },
];

const ClientRating = () => {
  const swiperRef = useRef(null);

  return (
    <section className="bg-[#F8F9FE] py-10  md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-lg">
            <span className="text-[#4F46E5] font-bold uppercase tracking-[0.2em] text-[11px] bg-[#4F46E5]/10 px-4 py-1 rounded-full">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#0F172A]">
              Our clients trust us
            </h2>
          </div>
          
          {/* Custom Navigation Buttons */}
          <div className="flex items-center   gap-3">
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full bg-amber-500 border  border-[#E2E8F0] flex items-center justify-center hover:bg-[#4F46E5] text-white transition-all duration-300"
            >
              <FaArrowLeft size={14} />
            </button>
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full border border-[#E2E8F0] flex items-center justify-center hover:bg-[#4F46E5] text-white transition-all duration-300 bg-amber-500"
            >
              <FaArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="!pb-10"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <RatingCard t={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const RatingCard = ({ t }) => (
  <div className="bg-white p-8 rounded-[2rem] border border-[#E2E8F0] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.15)] transition-all duration-500 h-full flex flex-col justify-between group">
    <div>
      <div className="text-[#4F46E5]/20 text-4xl mb-6 group-hover:scale-110 transition-transform"><FaQuoteLeft /></div>
      <div className="flex gap-1 text-[#F59E0B] mb-4">
        {[...Array(t.rating)].map((_, i) => <FaStar key={i} size={14} />)}
      </div>
      <p className="text-[#334155] text-[15px] leading-relaxed mb-6">"{t.comment}"</p>
    </div>

    <div className="flex items-center gap-4 pt-6 border-t border-[#F1F5F9]">
      <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-[#F8F9FE]" />
      <div>
        <h4 className="font-bold text-[#0F172A] text-sm">{t.name}</h4>
        <p className="text-[10px] text-[#64748B] uppercase tracking-widest font-bold">{t.role}</p>
      </div>
    </div>
  </div>
);

export default ClientRating;