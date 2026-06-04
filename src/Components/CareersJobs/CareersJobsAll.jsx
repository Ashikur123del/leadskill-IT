import React, { useState, useMemo } from 'react';
import JobsVideo from '../Jobs-video/JobsVideo';
import { toast } from 'react-toastify';
import Contact from "../../assets/contact.avif";

const CareersJobsAll = () => {
  const divisionsList = [
    'Barishal', 'Chattogram', 'Dhaka', 'Khulna', 
    'Mymensingh', 'Rajshahi', 'Rangpur', 'Sylhet'
  ];

  const professionsList = ['Teacher', 'Student', 'Businessman', 'Others'];

  const allDistricts = {
    'Barishal': ['Barguna', 'Barishal', 'Bhola', 'Jhalokati', 'Patuakhali', 'Pirojpur'],
    'Chattogram': ['Bandarban', 'Brahmanbaria', 'Chandpur', 'Chattogram', 'Cumilla', 'Cox\'s Bazar', 'Feni', 'Khagrachhari', 'Lakshmipur', 'Noakhali', 'Rangamati'],
    'Dhaka': ['Dhaka', 'Faridpur', 'Gazipur', 'Gopalganj', 'Kishoreganj', 'Madaripur', 'Manikganj', 'Munshiganj', 'Narayanganj', 'Narsingdi', 'Rajbari', 'Shariatpur', 'Tangail'],
    'Khulna': ['Bagerhat', 'Chuadanga', 'Jessore', 'Jhenaidah', 'Khulna', 'Kushtia', 'Magura', 'Meherpur', 'Narail', 'Satkhira'],
    'Mymensingh': ['Jamalpur', 'Mymensingh', 'Netrokona', 'Sherpur'],
    'Rajshahi': ['Bogura', 'Joypurhat', 'Naogaon', 'Natore', 'Chapainawabganj', 'Pabna', 'Rajshahi', 'Sirajganj'],
    'Rangpur': ['Dinajpur', 'Gaibandha', 'Kurigram', 'Lalmonirhat', 'Nilphamari', 'Panchagarh', 'Rangpur', 'Thakurgaon'],
    'Sylhet': ['Habiganj', 'Moulvibazar', 'Sunamganj', 'Sylhet']
  };

  const allThanas = {
    'Natore': ['Natore Sadar', 'Baraigram', 'Bagatipara', 'Lalpur', 'Singra', 'Gurudaspur', 'Naldanga'],
    'Dhaka': ['Mirpur', 'Uttara', 'Gulshan', 'Dhanmondi', 'Motijheel', 'Savar', 'Dhamrai', 'Keraniganj'],
    'Gazipur': ['Sreepur', 'Kaliakair', 'Kapasia', 'Tongi', 'Gazipur Sadar'],
    'Bogura': ['Bogura Sadar', 'Sherpur', 'Shajahanpur', 'Dhunat', 'Adamdighi', 'Shibganj'],
    'Rajshahi': ['Boalia', 'Motihar', 'Rajpara', 'Shah Makdum', 'Paba', 'Godagari', 'Tanore', 'Bagmara'],
    'Chattogram': ['Pahartali', 'Patenga', 'Hathazari', 'Kotwali', 'Sitakunda', 'Patiya', 'Anwara'],
    'Sylhet': ['Sadar', 'Beanibazar', 'Golapganj', 'Fenchuganj', 'Balaganj'],
  };

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState(''); 
  const [selectedProfession, setSelectedProfession] = useState('All');
  const [selectedDivision, setSelectedDivision] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedThana, setSelectedThana] = useState('All');
  const [area, setArea] = useState('');

  const filteredDistricts = useMemo(() => {
    if (selectedDivision === 'All') return [];
    return allDistricts[selectedDivision] || [];
  }, [selectedDivision]);

  const filteredThanas = useMemo(() => {
    if (selectedDistrict === 'All') return [];
    return allThanas[selectedDistrict] || [];
  }, [selectedDistrict]);

  const handleDivisionChange = (e) => {
    setSelectedDivision(e.target.value);
    setSelectedDistrict('All');
    setSelectedThana('All'); // ডিস্ট্রিক্ট ও থানা দুটোই রিসেট হবে
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setSelectedThana('All'); // পূর্বের সিলেক্ট করা থানা রিসেট হবে (Bug Fix)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      name, 
      phone, 
      whatsapp,
      profession: selectedProfession, 
      division: selectedDivision, 
      district: selectedDistrict, 
      thana: selectedThana, 
      area
    };

    try {
      const response = await fetch('http://localhost:8000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success('ডেটা সফলভাবে সাবমিট হয়েছে!');
        setName('');
        setPhone('');
        setWhatsapp('');
        setSelectedProfession('All');
        setSelectedDivision('All');
        setSelectedDistrict('All');
        setSelectedThana('All');
        setArea('');
      } else {
        toast.error('কিছু একটা সমস্যা হয়েছে!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('সার্ভারের সাথে যোগাযোগ করা যাচ্ছে না!');
    }
  };

  const inputStyle = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 text-sm";
  
  // এখানে SVG URL-এর ভাঙা ক্যারেক্টারগুলো ফিক্স করা হয়েছে
  const selectStyle = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 text-sm appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23475569%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_16px_center] bg-no-repeat";

  return (
    <div>
      <JobsVideo />
      <div className='pt-0 pb-10 md:pt-10 md:pb-20 bg-gray-50 min-h-screen flex items-center'>
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-16">
            
            <div className="w-full lg:w-1/2 hidden lg:block">
              <div className="relative h-full min-h-[600px] overflow-hidden rounded-3xl group shadow-2xl bg-gradient-to-b from-blue-600 to-blue-900">
                <img
                  src={Contact}
                  alt="Contact Support"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/30 to-transparent flex flex-col justify-end p-10 text-white">
                  <h3 className="text-3xl font-bold mb-3">আমাদের সাথে সরাসরি কথা বলুন</h3>
                  <p className="text-blue-100 opacity-90 text-lg">
                    আপনার প্রতিষ্ঠানের জন্য সঠিক সমাধানটি বেছে নিতে আমাদের টিম সবসময় প্রস্তুত।
                  </p>
                </div>
              </div>
            </div>

            {/* ডান পাশের ফর্ম */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-black text-slate-900 mb-6 border-b pb-4">যোগাযোগ করুন</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* নাম */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">আপনার নাম</label>
                      <input 
                        type="text" 
                        required
                        placeholder="নাম লিখুন" 
                        className={inputStyle}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    {/* ফোন নম্বর */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">ফোন নম্বর</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="017XXXXXXXX" 
                        className={inputStyle}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    {/* হোয়াটসঅ্যাপ নম্বর */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">WhatsApp Number</label>
                      <input 
                        type="tel" 
                        placeholder="017XXXXXXXX" 
                        className={inputStyle}
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                      />
                    </div>

                    {/* পেশা */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">পেশা (Profession)</label>
                      <select 
                        className={selectStyle}
                        value={selectedProfession}
                        onChange={(e) => setSelectedProfession(e.target.value)}
                      >
                        <option value="All">All</option>
                        {professionsList.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>

                    {/* বিভাগ */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">বিভাগ (Division)</label>
                      <select 
                        className={selectStyle}
                        value={selectedDivision}
                        onChange={handleDivisionChange}
                      >
                        <option value="All">All</option>
                        {divisionsList.map((div) => (
                          <option key={div} value={div}>{div}</option>
                        ))}
                      </select>
                    </div>

                    {/* জেলা */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">জেলা (District)</label>
                      <select 
                        className={`${selectStyle} disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed`}
                        value={selectedDistrict}
                        onChange={handleDistrictChange}
                        disabled={selectedDivision === 'All'}
                      >
                        <option value="All">All</option>
                        {filteredDistricts.map((dist) => (
                          <option key={dist} value={dist}>{dist}</option>
                        ))}
                      </select>
                    </div>

                    {/* থানা */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">থানা (Thana)</label>
                      <select 
                        className={`${selectStyle} disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed`}
                        value={selectedThana}
                        onChange={(e) => setSelectedThana(e.target.value)}
                        disabled={selectedDistrict === 'All'}
                      >
                        <option value="All">All</option>
                        {filteredThanas.map((thana) => (
                          <option key={thana} value={thana}>{thana}</option>
                        ))}

                        {selectedDistrict !== 'All' && filteredThanas.length === 0 && (
                          <option value="Not-Available" disabled>Data Not Added Yet</option>
                        )}
                      </select>
                    </div>
                  </div>

                  {/* এলাকা */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">এলাকা (Area)</label>
                    <input 
                      type="text" 
                      placeholder="এলাকার নাম লিখুন" 
                      className={inputStyle}
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                    />
                  </div>

                  {/* সাবমিট বাটন */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-black rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]"
                  >
                    সাবমিট করুন
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersJobsAll;