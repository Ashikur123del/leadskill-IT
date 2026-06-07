import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import VideoMan from "../../assets/video-man.avif";
import VideoMan1 from "../../assets/video-man-1.avif";
import VideoMan2 from "../../assets/video-man-2.jpg";

const videos = [
  {
    id: 1,
    thumbnail: VideoMan,
    title: "মেন্টরইআরপি পার্টনারশিপ মডেল",
    embedUrl: "https://www.youtube.com/embed/k1SsWGaZ2TY?autoplay=1",  
  },
  {
    id: 2,
    thumbnail: VideoMan1, 
    title: "স্কুল ম্যানেজমেন্ট সফটওয়্যার ডেমো",
    embedUrl: "https://www.youtube.com/embed/NS9z723Eauo?autoplay=1",  
  },
  {
    id: 3,
    thumbnail: VideoMan2,
    title: "বিজনেস গ্রোথ ও রেভিনিউ প্ল্যান",
    embedUrl: "https://www.youtube.com/embed/0NoQjrKhXiY?autoplay=1",
  },
];

const JobsVideo = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(VideoMan);

  return (
    <div 
      className="w-full h-full min-h-[550px] lg:min-h-[680px] flex flex-col justify-start relative overflow-hidden bg-cover bg-center transition-all duration-700 ease-in-out p-5 md:p-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-blue-950/75 to-slate-900/90 backdrop-blur-md z-0"></div> 
      <div className="w-full z-10 relative flex flex-col gap-6 h-full">
        <div className="w-full transform transition-all duration-500 hover:scale-[1.01]">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="rounded-2xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)] border border-white/10 bg-slate-900/40"
            onSlideChange={(swiper) => {
              setBackgroundImage(videos[swiper.realIndex].thumbnail);
            }}
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div
                  onClick={() => setActiveVideo(video)}
                  className="relative w-full aspect-video flex items-center justify-center cursor-pointer group overflow-hidden"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/50 transition-colors flex flex-col items-center justify-center z-10 gap-3">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.4)] transform transition-all duration-500 group-hover:scale-110 group-hover:border-blue-400">
                      <span className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping opacity-70"></span>
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white fill-current translate-x-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-white font-bold text-sm md:text-base tracking-wide bg-slate-950/50 px-4 py-1 rounded-full border border-white/5 backdrop-blur-sm shadow-md">
                      {video.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex-1 flex flex-col justify-between bg-white/[0.04] border border-white/10 rounded-2xl p-4 md:p-5 backdrop-blur-sm shadow-inner">
          <div className="space-y-3 mb-4">
            <h3 className="text-white font-black text-lg md:text-xl tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-5 bg-blue-500 rounded-full block"></span>
              কেন আমাদের অফিশিয়াল পার্টনার হবেন?
            </h3>
            
            <ul className="space-y-2.5 text-slate-300 text-xs md:text-sm font-medium">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">💰</span>
                <span><strong className="text-white font-bold">আকর্ষণীয় রেভিনিউ শেয়ার:</strong> প্রতিটি স্কুল অনবোর্ডিং এবং লাইফটাইম রিনিউয়ালের উপর নিশ্চিত প্রফিট মার্জিন।</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">🛠️</span>
                <span><strong className="text-white font-bold">সম্পূর্ণ টেকনিক্যাল সাপোর্ট:</strong> সফটওয়্যার মেইনটেইন্যান্স, কাস্টমাইজেশন ও সার্ভার ম্যানেজমেন্টের দায়িত্ব আমাদের।</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">📊</span>
                <span><strong className="text-white font-bold">মার্কেটিং ও সেলস মেটেরিয়ালস:</strong> আপনার এলাকায় বিজনেস গ্রোথ বাড়ানোর জন্য লিফলেট, ব্যানার ও সেলস গাইডলাইন দেওয়া হবে।</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/[0.06] rounded-xl p-2.5 flex items-center gap-3 border border-white/10 w-fit shadow-md">
            <div className="w-8 h-8 bg-gradient-to-tr from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-[0_2px_10px_rgba(16,185,129,0.3)]">
              ✓
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-emerald-400 font-black leading-none">সার্টিফাইড</p>
              <p className="text-xs font-black text-white tracking-wide mt-0.5">এডু-টেক বিজনেস মডেল</p>
            </div>
          </div>

        </div>

      </div>

      {activeVideo && (
        <dialog open className="modal modal-open modal-middle backdrop-blur-md z-[9999] p-3 sm:p-4">
          <div className="modal-backdrop bg-slate-950/80 absolute inset-0" onClick={() => setActiveVideo(null)}></div>
          <div className="modal-box p-0 bg-black max-w-4xl w-full aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] relative border border-white/10">
            <button
              onClick={() => setActiveVideo(null)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white/80 hover:text-white absolute top-3 right-3 z-50 bg-slate-900/60 hover:bg-slate-900/90 backdrop-blur-md border border-white/10 transition-all shadow-lg"
            >
              ✕
            </button>
            <iframe
              className="w-full h-full"
              src={activeVideo.embedUrl}
              title={activeVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default JobsVideo;