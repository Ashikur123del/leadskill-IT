import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const teamMembers = [
  { id: 1, name: "Mohammad Ali", role: "Founder CEO", image: "/CEO.webp" },
  { id: 2, name: "Mohammad Ali", role: "Web Designer", image: "/Video-Editing-600x472.jpg" },
  { id: 3, name: "Jihad Ferdaus Khan", role: "Video Editor", image: "/video-editor-team-photo.webp" },
  { id: 4, name: "Shyamoli Jahan Shimu", role: "Digital Marketing", image: "/Shyamoli-Jahan-Shimu.webp" },
  { id: 5, name: "Next Member", role: "App Developer", image: "/CEO.webp" },
];

const OurTeamMember = () => {
  const swiperRef = useRef(null);

  return (
    <section className="bg-[#111111] text-white py-10 md:py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-xl mx-auto">
            <span className="commonbgcolor text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest mb-4 inline-block">
              Our Team Member
            </span>
            <h2 className="text-4xl md:text-6xl font-bold  mt-2 text-pink-500 ">
              Our team provide <br /> the best service
            </h2>
          </div>
          
          <div className="max-w-md flex flex-col items-start lg:items-end gap-6">
            <p className="text-gray-400 text-sm leading-relaxed lg:text-right">
              We love what we do and we value the experimentation of the message and smart incentives. 
              Let's talk about your project.
            </p>
            
            {/* Custom Smart Navigation Buttons */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-12 h-12 rounded-full border border-gray-700 flex  bg-amber-500 items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group"
              >
                <FaArrowLeft className="text-white group-hover:text-white" />
              </button>
              <button 
                onClick={() => swiperRef.current?.slideNext()}
                className="w-12 h-12 rounded-full border bg-amber-500  border-gray-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group"
              >
                <FaArrowRight className="text-white group-hover:text-white" />
              </button>
              <div className="h-8 w-[1px] bg-gray-700 mx-2 hidden md:block"></div>
              <a href="#" className="text-white font-bold text-sm border-b-2 border-white pb-1 hover:text-blue-500 transition-all">
                View more
              </a>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="team-swiper"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <TeamCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const TeamCard = ({ member }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center group py-4"
    >
      <div className="relative mb-8">
        {/* Outer Glow Effect */}
        <div className="absolute -inset-5 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-blue-500"></div>
        
        {/* Profile Circle */}
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-[8px] border-[#1a1a1a] bg-[#1a1a1a52] z-10 ring-1 ring-gray-800">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />
          
          {/* Social Icons Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
            <SocialIcon Icon={FaFacebookF} />
            <SocialIcon Icon={FaTwitter} />
            <SocialIcon Icon={FaLinkedinIn} />
            <SocialIcon Icon={FaInstagram} />
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-bold tracking-tight mb-1 group-hover:text-blue-500 transition-colors">
          {member.name}
        </h3>
        <p className={`text-xs font-black uppercase tracking-[0.2em] ${member.role.includes("CEO") ? 'text-secondary' : 'text-gray-500'}`}>
          {member.role}
        </p>
      </div>
    </motion.div>
  );
};

const SocialIcon = ({ Icon }) => (
  <div className="w-9 h-9 flex items-center justify-center border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition-all cursor-pointer backdrop-blur-sm">
    <Icon size={14} />
  </div>
);

export default OurTeamMember;