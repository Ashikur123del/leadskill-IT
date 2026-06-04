import React, { useState } from 'react';
import VideoMan from "../../assets/video-man.avif";

const JobsVideo = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

  return (
    <div className="py-20 md:pt-40 bg-base-200 min-h-[500px] flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
   
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-2 md:space-y-6 text-center lg:text-left">
            <p className="badge badge-primary badge-sm md:badge-md font-bold px-3 py-3 shadow-sm ">
              Lead Skill IT — আপনার স্কিল ডেভেলপমেন্ট পার্টনার
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-base-content leading-tight">
              আইটি স্কিল অর্জন করুন <br className="hidden sm:inline" />
              নিজেকে রাখুন <span className="text-primary">সবার চেয়ে এগিয়ে</span>
            </h1>
            <p className="text-base-content/80 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              বর্তমান যুগের ডিনন্দিং আইটি স্কিলগুলো শিখুন প্রফেশনাল মেন্টরদের গাইডলাইনে। আমরা কেবল কোডিং বা থিওরি শেখাই না, বরং রিয়েল-ওয়ার্ল্ড প্রজেক্টের মাধ্যমে আপনাকে তৈরি করি গ্লোবাল মার্কেটের জন্য উপযুক্ত করে।
            </p>
          </div>
          <div className="lg:col-span-5 relative flex justify-center mt-2 lg:mt-0 px-4 sm:px-0 w-full max-w-md mx-auto">
        
            <div 
              onClick={() => setIsOpen(true)}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-base-100 w-full aspect-4/3 flex items-center justify-center cursor-pointer group"
            >
              <img 
                src={VideoMan} 
                alt="Lead Skill IT Promo Video" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center z-10">
                <div className="btn btn-primary btn-circle btn-md md:btn-lg shadow-lg shadow-primary/40 transform transition-transform group-hover:scale-110 duration-300 relative">
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60"></span>
                  <svg className="w-5 h-5 md:w-6 md:h-6 fill-current relative z-10 ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

              </div>
            </div>
            <div className="absolute -bottom-6 left-4 sm:-left-6 bg-base-100 rounded-xl md:rounded-2xl shadow-xl p-2.5 md:p-3 flex items-center gap-2 md:gap-3 border border-base-300">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-success rounded-full flex items-center justify-center text-success-content text-xs md:text-sm font-bold shadow-md shadow-success/20">
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

      {/* --- daisyUI 5.x ভিডিও মডাল (মোবাইল ফ্রেন্ডলি) --- */}
      {isOpen && (
        <dialog open className="modal modal-open modal-middle backdrop-blur-sm z-[9999] p-2 sm:p-4">
          <div className="modal-backdrop bg-black/70 absolute inset-0" onClick={() => setIsOpen(false)}></div>
          
          {/* মডাল বক্সটি মোবাইলের উইডথ অনুযায়ী পারফেক্টলি রেসপন্সিভ (`w-full`) করা হয়েছে */}
          <div className="modal-box p-0 bg-black max-w-3xl w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-2xl relative border border-white/10">
            
            {/* ক্লোজ বাটন */}
            <button 
              onClick={() => setIsOpen(false)}
              className="btn btn-sm btn-circle btn-ghost text-white/80 hover:text-white absolute top-2 right-2 md:top-4 md:right-4 z-50 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10"
            >
              ✕
            </button>

            {/* ভিডিও আইফ্রেম */}
            <iframe
              className="w-full h-full"
              src={videoUrl}
              title="Lead Skill IT Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

          </div>
        </dialog>
      )}
    </div>
  );
};

export default JobsVideo;