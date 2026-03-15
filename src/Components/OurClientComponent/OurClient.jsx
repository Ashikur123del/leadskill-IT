import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const clients = [
  { img: "/E-1.webp" }, { img: "/E-2.webp" }, { img: "/E-3.webp" },
  { img: "/E-4.webp" }, { img: "/E-5.webp" }, { img: "/E-6.webp" },
  { img: "/E-7.webp" }, { img: "/E-8.webp" }, { img: "/E-9.webp" },
  { img: "/E-10.webp" }, { img: "/E-11.webp" }, { img: "/E-12.webp" },
  { img: "/E-13.webp" }, { img: "/E-14.webp" }, { img: "/E-15.webp" },
  { img: "/E-16.webp" }, { img: "/E-17.webp" }, { img: "/E-18.webp" },
];

const OurClient = () => {
  return (
    <section className="pb-20 pt-40 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-3">Some of our Clients</h2>
        <div className="h-[5px] rounded-2xl w-100 commonbgcolor mx-auto mb-10"></div>
        
        <Swiper
          modules={[Autoplay, Grid]}
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={3} 
          loop={true} 
          grid={{
            rows: 2, 
            fill: 'row'
          }}
          breakpoints={{
            640: { slidesPerView: 4, grid: { rows: 2 } },
            1024: { slidesPerView: 6, grid: { rows: 2 } },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mySwiper h-[280px]  md:h-[350px]" 
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center p-4 hover:border-green-500 transition-all duration-300">
                <img src={client.img} alt={`Client ${index}`} className="max-h-full object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurClient;