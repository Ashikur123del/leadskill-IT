import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaHeadset } from 'react-icons/fa';
import { toast } from 'react-toastify';

const contactSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  phone: z.string().min(11, "Valid phone number is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const GeneralEnquiries = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(contactSchema)
  });

const onSubmit = async (data) => {
    try {
  
      const response = await fetch('https://lead-skill-server.vercel.app/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে!");
        reset(); 
      } else {
        toast.error(result.message || "কিছু সমস্যা হয়েছে, আবার চেষ্টা করুন।");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("সার্ভারের সাথে সংযোগ করা সম্ভব হচ্ছে না!");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 pb-16 pt-10 md:pt-40">
      <div className="text-center mb-12 pt-16 md:pt-0">
        <h1 className="text-4xl font-bold text-green-800 mb-4">General Enquiries</h1>
        <p className="text-gray-600">Reach out to us from our contact form and we will get back to you shortly.</p>
      </div>

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
            { icon: FaPhoneAlt, title: "Phone", text: "+880 1327-019017" },
            { icon: FaHeadset, title: "Phone Alt", text: "+880 1688-667870" }
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

      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-200 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-2">Drop Us A Line</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Inputs with Error Handling */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
            <input {...register("fullName")} className="w-full p-3 bg-gray-100 border border-gray-200 rounded outline-none focus:border-green-600" />
            {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
            <input {...register("phone")} className="w-full p-3 bg-gray-100 border border-gray-200 rounded outline-none focus:border-green-600" />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
            <input {...register("email")} className="w-full p-3 bg-gray-100 border border-gray-200 rounded outline-none focus:border-green-600" />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
            <textarea {...register("message")} rows="4" className="w-full p-3 bg-gray-100 border border-gray-200 rounded outline-none focus:border-green-600"></textarea>
            {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
          </div>

          <button 
            disabled={isSubmitting}
            className="w-full bg-green-800 text-white font-bold py-3 px-8 rounded hover:bg-green-900 transition-all disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GeneralEnquiries;