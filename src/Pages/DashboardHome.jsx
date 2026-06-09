"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdSync, MdSearch } from 'react-icons/md';
import UserData from '../Components/UserData';

const DashboardHome = () => {
  const [users, setUsers] = useState([]); 
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const statuses = ["All", "PENDING", "PROCESSING", "COMPLETED", "CANCELLED"];
  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('https://lead-skill-server.vercel.app/api/users');
      const data = await response.json();
      
      const fetchedData = data.success ? (data.data || data) : (Array.isArray(data) ? data : []);
      const sortedData = Array.isArray(fetchedData) ? [...fetchedData].reverse() : [];
      setUsers(sortedData);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error('ইউজার ডেটা লোড করা যায়নি!');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const matchStatus = (userStatus, tabName) => {
    const currentStatus = (userStatus || "pending").trim().toUpperCase();
    if (tabName === "All") return true;
    return currentStatus === tabName;
  };


  const getTabCount = (tabName) => {
    return users.filter(u => matchStatus(u.status, tabName)).length;
  };

  const handleUpdateStatus = async (userId, nextStatus, successMessage) => {
  try {
    const response = await fetch(`https://lead-skill-server.vercel.app/api/users/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: nextStatus }),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success(successMessage || `স্ট্যাটাস সফলভাবে ${nextStatus} করা হয়েছে!`);
      setUsers(prevUsers => 
        prevUsers.map(u => (u._id === userId || u.id === userId) ? { ...u, status: nextStatus } : u)
      );
    } else {
      toast.error(data.message || 'স্ট্যাটাস আপডেট করা সম্ভব হয়নি!');
    }
  } catch (error) {
    console.error('Error updating status:', error);
    toast.error('সার্ভারে কানেক্ট করা যাচ্ছে না!');
  }
};

  useEffect(() => {
    let result = [...users];

    if (activeTab !== "All") {
      result = result.filter(u => matchStatus(u.status, activeTab));
    }

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(u => 
        u.name?.toLowerCase().includes(query) || 
        u.phone?.includes(query) ||
        u.whatsapp?.includes(query) ||
        u.district?.toLowerCase().includes(query)
      );
    }

    setFilteredUsers(result);
  }, [activeTab, searchQuery, users]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black/20 flex items-center justify-center text-neutral-400 font-mono text-xs tracking-widest">
        <div className="flex flex-col items-center gap-3">
          <div className="w-6 h-6 border-2 border-white/15 border-t-white rounded-full animate-spin"></div>
          <span>
            <span className="loading loading-bars loading-xl"></span>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 bg-black min-h-screen text-neutral-400 p-4 md:p-6 font-sans antialiased">
      <ToastContainer theme="dark" position="top-right" />
      <div className="border-b border-neutral-800 pb-4">
        <h1 className="text-xl font-bold text-white tracking-tight">আবেদনকারীদের তালিকা</h1>
        <p className="text-xs text-neutral-500 mt-0.5">এখানে আপনার ওয়েবসাইটে ফর্ম সাবমিট করা ইউজারদের স্ট্যাটাস ও ডিটেইলস দেখতে পাবেন।</p>
      </div>

      <div className="flex items-center gap-1 overflow-x-auto pb-2 border-b border-neutral-800 scrollbar-none">
        {statuses.map((tab) => {
          const isActive = activeTab === tab;
          const count = getTabCount(tab);

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all duration-200 relative ${
                isActive ? "text-white font-bold" : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span>{tab}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono transition-all ${
                  isActive ? 'bg-neutral-800 text-white' : 'bg-neutral-900 text-neutral-600'
                }`}>
                  {count}
                </span>
              </div>
              {isActive && (
                <div className="absolute bottom-[-9px] left-0 right-0 h-0.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] z-10" />
              )}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        <div className="lg:col-span-9 relative group">
          <span className="absolute inset-y-0 left-3 flex items-center text-neutral-500 group-focus-within:text-white transition-colors">
            <MdSearch size={18} />
          </span>
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search name, phone, district..." 
            className="w-full h-10 bg-black border border-neutral-800 rounded-xl pl-10 pr-4 text-sm text-white outline-none focus:border-neutral-700 transition-all placeholder-neutral-700"
          />
        </div>
        <div className="lg:col-span-3">
          <button onClick={fetchUsers} className="w-full bg-black border border-neutral-800 text-neutral-300 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 h-10 hover:bg-neutral-950 active:scale-[0.98] transition-all">
            <MdSync size={16} className="text-neutral-500" /> Sync Data
          </button>
        </div>
      </div>
      <div className="bg-black border border-neutral-800 rounded-2xl overflow-hidden shadow-[0_24px_50px_-12px_rgba(0,0,0,0.9)]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-950 text-[10px] font-bold text-neutral-500 uppercase tracking-widest whitespace-nowrap">
                <th className="p-4 w-12"><input type="checkbox" className="rounded bg-neutral-950 border-neutral-800 text-white focus:ring-0 cursor-pointer" /></th>
                <th className="p-4">USER ID</th>
                <th className="p-4">APPLICANT INFO</th>
                <th className="p-4">PROFESSION</th>
                <th className="p-4">ADDRESS / AREA</th>
                <th className="p-4 text-center">STATUS</th>
                <th className="p-4 text-right">JOIN DATE</th>
                <th className="p-4 text-center">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-900 text-xs text-neutral-400">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="8" className="p-16 text-center text-neutral-700 font-mono tracking-wider">
                    NO USER RECORDS FOUND IN THIS TAB.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user, index) => (
                  <UserData 
                    key={user._id || user.id || index} 
                    user={user} 
                    index={index}
                    onStatusUpdate={handleUpdateStatus} 
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;