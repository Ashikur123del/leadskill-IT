import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaArrowLeft,
    FaArrowRight,
} from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import Unus from '../../assets/pls.png';
import Sohel from '../../assets/Sohel.jpeg';
import Alom from '../../assets/alom.png';
import Zehad from '../../assets/zehad.jpeg';
import Jahed from '../../assets/jahed.jpeg';
import Ashik from '../../assets/Ashik Khan.jpg';
import Mohammad from '../../assets/Mohammad.jpeg';
import Shyamoli from '../../assets/girl .jpg.jpeg';

import 'swiper/css';
import 'swiper/css/navigation';

const teamMembers = [
    { id: 1, name: 'Unus Hossain', role: 'Founder CEO', image: Unus, alt: 'Unus' },
    { id: 2, name: 'Mohammad Sohel Rana', role: 'Founder CEO', image: Sohel, alt: 'Sohel' },
    { id: 3, name: 'Sha Alam Islam', role: 'Director & Chief Advisor', image: Alom, alt: 'Alom' },
    { id: 4, name: 'Jihad Ferdaus Khan', role: 'Director & Chief Advisor', image: Zehad, alt: 'Zehad' },
    { id: 5, name: 'Jahed Islam', role: 'Developer', image: Jahed, alt: 'Jahed' },
    { id: 6, name: 'Ashik Khan', role: 'Developer', image: Ashik, alt: 'Ashik' },
    { id: 7, name: 'Mohammad Ali', role: 'Developer', image: Mohammad, alt: 'Mohammad Ali' },
    { id: 8, name: 'Shyamoli-Jahan-Shimu', role: 'Digital Marketing', image: Shyamoli, alt: 'Shyamoli-Jahan-Shimu' },
];

const SocialIcon = ({ Icon }) => (
    <motion.div
        whileHover={{ scale: 1.2, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-9 h-9 flex items-center justify-center border border-white/30 rounded-full text-white hover:text-white transition-all cursor-pointer backdrop-blur-md bg-black/30 hover:bg-gradient-to-r hover:from-pink-500 hover:to-amber-500 hover:border-transparent shadow-lg hover:shadow-pink-500/25"
    >
        <Icon size={14} />
    </motion.div>
);

const TeamCard = ({ member, index }) => {
    const [imageError, setImageError] = useState(false);
    const gradientColors = [
        'from-pink-500/20 to-amber-500/20',
        'from-blue-500/20 to-purple-500/20',
        'from-emerald-500/20 to-cyan-500/20',
        'from-rose-500/20 to-orange-500/20',
        'from-violet-500/20 to-indigo-500/20',
        'from-teal-500/20 to-blue-500/20',
    ];
    const gradient = gradientColors[index % gradientColors.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: (index % 4) * 0.08 }}
            className="flex flex-col items-center group py-4 px-2"
        >
            <div className="relative mb-6 w-full max-w-[220px] mx-auto">
                <div className={`absolute -inset-4 rounded-full bg-gradient-to-r ${gradient} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                <div className="absolute -inset-2 rounded-full border-2 border-transparent group-hover:border-pink-500/30 transition-all duration-700 group-hover:rotate-180"></div>
                {/* 🔥 FIX: Use aspect-[3/4] instead of aspect-square to avoid cropping portrait images */}
                <div className="relative w-full aspect-[3/4] rounded-full overflow-hidden border-[6px] border-[#1a1a1a] bg-[#1a1a1a] z-10 ring-1 ring-gray-800 group-hover:ring-pink-500/50 transition-all duration-500 shadow-2xl shadow-black/50">
                    {imageError ? (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-gray-500 text-xs font-bold">
                            {member.name.split(' ')[0]}
                        </div>
                    ) : (
                        <img
                            src={member.image}
                            alt={member.alt || member.name}
                            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                            onError={() => setImageError(true)}
                            loading="lazy"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-6 group-hover:translate-y-0">
                        <SocialIcon Icon={FaFacebookF} />
                        <SocialIcon Icon={FaTwitter} />
                        <SocialIcon Icon={FaLinkedinIn} />
                        <SocialIcon Icon={FaInstagram} />
                    </div>
                </div>
            </div>

            <div className="text-center space-y-1.5">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-amber-500 transition-all duration-300">
                    {member.name}
                </h3>
                <p className={`text-xs font-black uppercase tracking-[0.15em] transition-colors duration-300 ${member.role.includes('CEO') ? 'text-amber-400 group-hover:text-pink-400' : 'text-gray-500 group-hover:text-gray-300'}`}>
                    {member.role}
                </p>
                <div className="w-8 h-0.5 mx-auto bg-gradient-to-r from-pink-500 to-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-12"></div>
            </div>
        </motion.div>
    );
};

const OurTeamMember = () => {
    const swiperRef = useRef(null);

    return (
        <section className="bg-[#111111] text-white py-10 md:py-24 px-6 min-h-screen overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 md:mb-20 gap-4">
                    <div className="max-w-xl mx-auto lg:mx-0">
                        <span className="text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest mb-4 inline-block bg-gradient-to-r from-pink-500 to-amber-500 text-white">
                            Our Team Member
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
                            Our team provide <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-500">
                                the best service
                            </span>
                        </h2>
                    </div>

                    <div className="max-w-md flex flex-col items-start lg:items-end gap-6">
                        <p className="text-gray-400 text-sm leading-relaxed lg:text-right">
                            We love what we do and we value the experimentation of the message
                            and smart incentives. Let's talk about your project.
                        </p>

                        <div className="flex items-center gap-4">
                            <button onClick={() => swiperRef.current?.slidePrev()} className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-amber-500 hover:border-transparent transition-all duration-300 group" aria-label="Previous">
                                <FaArrowLeft />
                            </button>
                            <button onClick={() => swiperRef.current?.slideNext()} className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-amber-500 hover:border-transparent transition-all duration-300 group" aria-label="Next">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <Swiper
                        onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
                        modules={[Autoplay, Navigation]}
                        spaceBetween={30}
                        loop={true}
                        speed={800}
                        autoplay={{ 
                            delay: 3000, 
                            disableOnInteraction: false 
                        }}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                        className="team-swiper"
                    >
                        {teamMembers.map((member, index) => (
                            <SwiperSlide key={member.id} className="py-4">
                                <TeamCard member={member} index={index} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default OurTeamMember;