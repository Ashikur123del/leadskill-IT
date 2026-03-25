import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaHeadset } from 'react-icons/fa';

const GeneralEnquiries = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 pb-16 pt-10 md:pt-40">
      {/* Header */}
      <div className="text-center mb-12 pt-16 md:pt-0">
        <h1 className="text-4xl font-bold text-green-800 mb-4">General Enquiries</h1>
        <p className="text-gray-600">Reach out to us from our contact form and we will get back to you shortly.</p>
      </div>

      {/* Top Section: Map and Contact Info */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="h-80 rounded-2xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.51348398104!2d90.39572971536214!3d23.86311099039055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c42171694f4d%3A0x67c293156291e0a2!2sUttara%20Sector%2014%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v164823482348!5m2!1sen!2sbd"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Location"
          ></iframe>
        </div>
        
        <div className="space-y-4">
          {[
            { icon: FaMapMarkerAlt, title: "Address", text: "চৌরঙ্গী সুপার মার্কেট, ৫ম তলা (লিফট - ৪), সাভার বাস স্ট্যান্ড, সাভার, ঢাকা - ১৩৪০" },
            { icon: FaEnvelope, title: "Email", text: "info@leadswin.biz" },
            { icon: FaPhoneAlt, title: "Phone", text: "09678221191" },
            { icon: FaHeadset, title: "Phone Alt", text: "09678221191" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="text-green-600 mt-1"><item.icon size={20} /></div>
              <div>
                <h4 className="font-bold text-sm text-gray-800">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Contact Form */}
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-200 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-2">Drop Us A Line</h2>
        <p className="text-center text-gray-500 mb-8 text-sm">Reach out to us from our contact form and we will get back to you shortly.</p>
        
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
            <input type="text" className="w-full p-3 bg-gray-100 border border-gray-200 rounded outline-none focus:border-green-600" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
            <input type="tel" className="w-full p-3 bg-gray-100 border border-gray-200 rounded outline-none focus:border-green-600" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
            <input type="email" className="w-full p-3 bg-gray-100 border border-gray-200 rounded outline-none focus:border-green-600" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
            <textarea rows="4" className="w-full p-3 bg-gray-100 border border-gray-200 rounded outline-none focus:border-green-600"></textarea>
          </div>
          <button className="bg-green-800 text-white font-bold py-3 px-8 rounded hover:bg-green-900 transition-all">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GeneralEnquiries;
   