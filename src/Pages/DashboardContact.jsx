import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const DashboardContact = () => {  
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://lead-skill-system.vercel.app/api/enquiries`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setContacts(data.data);
        } else {
          toast.error("ডেটা লোড করতে সমস্যা হয়েছে!");
        }
      })
      .catch((error) => console.error("Error:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center mt-10 text-white">Loading...</div>;

  return (
    <div className="p-6 min-h-screen bg-black text-white">
      <h2 className="text-2xl font-bold mb-6 text-green-500">Customer Contact Data</h2>
    
      <div className="overflow-x-auto bg-gray-900 rounded-lg shadow border border-gray-700">
        <table className="table w-full text-white">

          <thead className="bg-black text-green-400">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-gray-700">
            {contacts.map((item, index) => (
              <tr key={item._id} className="hover:bg-gray-800 transition-colors">
                <th>{index + 1}</th>
                <td>{item.fullName}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td className="max-w-xs truncate">{item.message}</td>
                <td>{new Date(item.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {contacts.length === 0 && (
          <p className="p-8 text-center text-gray-400">কোনো ডেটা পাওয়া যায়নি।</p>
        )}
      </div>
    </div>
  );
};

export default DashboardContact;