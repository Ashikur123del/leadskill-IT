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
    title: "আইটি স্কিল অর্জন করুন",
    embedUrl: "https://www.youtube.com/embed/k1SsWGaZ2TY?autoplay=1",  
  },
  {
    id: 2,
    thumbnail: VideoMan1, 
    title: "রিয়েল-ওয়ার্ল্ড প্রজেক্ট",
    embedUrl: "https://www.youtube.com/embed/NS9z723Eauo?autoplay=1",  
  },
  {
    id: 3,
    thumbnail: VideoMan2,
    title: "গ্লোবাল মার্কেটের জন্য প্রস্তুত",
    embedUrl: "https://www.youtube.com/embed/0NoQjrKhXiY?autoplay=1",
  },
];

const JobsVideo = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="py-20 md:pt-32 bg-base-200 min-h-[500px] flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Text (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4 md:space-y-6 text-center lg:text-left">
            <p className="badge badge-primary badge-sm md:badge-md font-bold px-3 py-3 shadow-sm">
              Lead Skill IT — আপনার স্কিল Entwicklung পার্টনার
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-base-content leading-tight">
              আইটি স্কিল অর্জন করুন <br className="hidden sm:inline" />
              নিজেকে রাখুন <span className="text-primary">সবার চেয়ে এগিয়ে</span>
            </h1>
            <p className="text-base-content/80 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              বর্তমান যুগের ডিমান্ডিং আইটি স্কিলগুলো শিখুন প্রফেশনাল মেন্টরদের গাইডলাইনে।
            </p>
          </div>
          <div className="lg:col-span-7 w-full max-w-2xl mx-auto">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="rounded-2xl overflow-hidden shadow-2xl bg-base-100"
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
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex flex-col items-center justify-center z-10 gap-3">
                      <div className="btn btn-primary btn-circle btn-md md:btn-lg shadow-lg shadow-primary/40 transform transition-transform group-hover:scale-110 duration-300 relative">
                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60"></span>
                        <svg className="w-5 h-5 md:w-6 md:h-6 fill-current relative z-10 ml-1" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-white font-bold text-sm md:text-lg drop-shadow">{video.title}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mt-6 bg-base-100 rounded-xl shadow-xl p-2.5 md:p-3 flex items-center gap-2 md:gap-3 border border-base-300 w-fit">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-success rounded-full flex items-center justify-center text-success-content text-xs md:text-sm font-bold">
                ✓
              </div>
              <div>
                <p className="text-[9px] md:text-[10px] uppercase tracking-wider text-base-content/50 font-bold">আপডেটেড</p>
                <p className="text-xs md:text-sm font-extrabold text-base-content">স্মার্ট লার্নিং মেথড</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {activeVideo && (
        <dialog open className="modal modal-open modal-middle backdrop-blur-sm z-[9999] p-2 sm:p-4">
          <div className="modal-backdrop bg-black/70 absolute inset-0" onClick={() => setActiveVideo(null)}></div>
          <div className="modal-box p-0 bg-black max-w-4xl w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-2xl relative border border-white/10">
            <button
              onClick={() => setActiveVideo(null)}
              className="btn btn-sm btn-circle btn-ghost text-white/80 hover:text-white absolute top-2 right-2 md:top-4 md:right-4 z-50 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10"
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