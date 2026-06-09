// src/components/Dashboard/Sidebar.jsx
import React from 'react';
import { CiSettings } from 'react-icons/ci';
import { FaUserCircle } from 'react-icons/fa';
import { IoHomeOutline } from 'react-icons/io5';
import { MdDashboardCustomize } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar, handleLogout }) => {
  const location = useLocation();

  const isActive = (path) => 
    location.pathname === path 
      ? "bg-slate-800 text-blue-400" 
      : "text-gray-300 hover:bg-slate-800 hover:text-white";

  return (
    <>
      
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white flex flex-col justify-between p-5 transform transition-transform duration-300 ease-in-out
        md:relative md:transform-none md:flex
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div>
        
          <div className="flex justify-between items-center mb-10">
            <div className="text-2xl font-black tracking-wider text-blue-400">
              ADMIN PANEL
            </div>
            <button 
              onClick={toggleSidebar} 
              className="md:hidden text-gray-400 hover:text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="space-y-2">
            <Link 
              to="/dashboard" 
              onClick={toggleSidebar} 
              className={`px-4 py-3 rounded-xl transition-all flex items-center gap-2 font-medium ${isActive('/dashboard')}`}
            >
              <MdDashboardCustomize /> ড্যাশবোর্ড হোম
            </Link>
            <Link 
              to="/dashboard/dashboard-contact" 
              onClick={toggleSidebar} 
              className={`px-4 py-3 rounded-xl transition-all flex items-center gap-2 font-medium ${isActive('/dashboard/profile')}`}
            >
              <FaUserCircle /> যোগাযোগের তথ্য   
            </Link>
            
          </nav>
        </div>

        {/* লগআউট বাটন */}
        <button 
          onClick={handleLogout}
          className="w-full bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white py-3 rounded-xl font-bold transition-all mt-auto"
        >
          লগআউট
        </button>
      </aside>
    </>
  );
};

export default Sidebar;