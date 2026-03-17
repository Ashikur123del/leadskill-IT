import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const JobList = () => {
  return (
    <section className="pb-10 pt-40 bg-white">
      <div className="max-w-6xl mx-auto px-6">
    
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1a6b3e] mb-4 tracking-tight">
            At MentorERP Limited
          </h2>
          <p className="text-xl md:text-3xl font-light text-gray-600 italic">
            we believe the right people always shape success.
          </p>
        </div>

    
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-20">
          <div className="shrink-0 bg-white p-4 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50">
            <img
              src="./ch1.webp" 
              alt="Creative Visualizer Hiring"
              className="w-70 rounded-[1.8rem] object-cover"
            />
          </div>

          <div className="flex-1 space-y-6 text-xl md:text-2xl text-gray-800 max-w-2xl">
            
            <div className="flex items-baseline gap-3">
              <span className="font-bold text-[#1a6b3e] shrink-0">Job Type:</span>
              <span className="font-medium text-gray-700">Full Time</span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-bold text-[#1a6b3e] shrink-0">Salary Range:</span>
              <span className="font-medium text-gray-700">Negotiable</span>
            </div>

            <div className="flex flex-col sm:flex-row items-baseline gap-2 sm:gap-3 leading-snug">
              <span className="font-bold text-[#1a6b3e] shrink-0">Job Location:</span>
              <span className="font-medium text-gray-700">
                Chourangi Super Market, 5th Floor (Lift–4), Savar Bus Stand, Savar, Dhaka – 1340
              </span>
            </div>

            <div className="pt-6">
              <button className="btn commonbgcolor py-4 px-6">
                Details
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1"><FaArrowRightLong /></span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default JobList; 



