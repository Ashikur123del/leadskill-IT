
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); 

  const handleLogout = () => {
    navigate('/');
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden relative">
      
      <Sidebar 
        isOpen={isOpen} 
        toggleSidebar={toggleSidebar} 
        handleLogout={handleLogout} 
      />
      <div className="flex-1 flex flex-col overflow-y-auto">
        
        <header className="bg-white border-b border-gray-200 py-4 px-4 md:px-8 flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleSidebar} 
              className="text-slate-600 hover:text-slate-900 focus:outline-none md:hidden p-1 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h2 className="text-lg md:text-xl font-bold text-slate-800">স্বাগতম, ইউজার!</h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">
              U
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 md:px-8 py-6">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default DashboardLayout;