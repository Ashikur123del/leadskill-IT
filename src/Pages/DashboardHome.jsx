import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import UserData from '../Components/UserData';

const DashboardHome = () => {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true); 


  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/users');
      const data = await response.json();
      
      if (data.success) {
        setUsers(data.data || data); 
      } else {

        setUsers(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error('ইউজার ডেটা লোড করা যায়নি!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

 const handleDelete = async (userId) => {
  if (window.confirm('আপনি কি নিশ্চিত যে এই ইউজারটি ডিলিট করতে চান?')) {
    try {
      const response = await fetch(`http://localhost:8000/api/users/${userId}`, {
        method: 'DELETE',
      });
      const data = await response.json();

      if (data.success) {
        toast.success(data.message || 'ইউজার সফলভাবে ডিলিট হয়েছে!');
        setUsers(users.filter(user => user._id !== userId)); 
      } else {
        toast.error(data.message || 'ডিলিট করা সম্ভব হয়নি!');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('সার্ভারে সমস্যা হয়েছে!');
    }
  }
};

  return (
    <div>
      <h1 className="text-2xl font-black text-slate-900 mb-2">আবেদনকারীদের তালিকা</h1>
      <p className="text-gray-500 text-sm mb-6">এখানে আপনার ওয়েবসাইটে ফর্ম সাবমিট করা ইউজারদের দেখতে পাবেন।</p>
      
      {loading ? (
        <div className="text-center py-10 text-gray-500 font-medium">লোড হচ্ছে...</div>
      ) : users.length === 0 ? (
        <div className="text-center py-10 text-gray-400 bg-white rounded-2xl border border-gray-100">
          কোনো ইউজার পাওয়া যায়নি।
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {users.map((user) => (
            <UserData 
              key={user._id || user.id} 
              user={user} 
              onDelete={handleDelete} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardHome;