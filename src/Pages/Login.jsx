import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const DEFAULT_PHONE = '01688667870';
  const DEFAULT_PASSWORD = 'admin016';

  const handleLogin = (e) => {
    e.preventDefault();

    if (phone === DEFAULT_PHONE && password === DEFAULT_PASSWORD) {
      // লগইন স্টেট এবং বর্তমান সময় সেভ করা
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('loginTime', new Date().getTime().toString());
      
      toast.success('লগইন সফল হয়েছে!');
      navigate('/dashboard'); 
    } else {
      toast.error('ভুল ফোন নম্বর অথবা পাসওয়ার্ড!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 w-full max-w-md">
        <h2 className="text-3xl font-black text-slate-900 mb-2 text-center">অ্যাডমিন লগইন</h2>
        <p className="text-gray-500 text-sm text-center mb-6">ড্যাশবোর্ডে প্রবেশ করতে লগইন করুন</p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">ফোন নম্বর</label>
            <input 
              type="tel" required placeholder="017XXXXXXXX" 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 text-sm"
              value={phone} onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">পাসওয়ার্ড</label>
            <input 
              type="password" required placeholder="••••••••" 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 text-sm"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-black rounded-xl shadow-lg transition-all active:scale-[0.98]">
            লগইন করুন
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;