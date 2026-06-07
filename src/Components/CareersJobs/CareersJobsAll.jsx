import React, { useState, useMemo } from 'react';
import JobsVideo from '../Jobs-video/JobsVideo';
import { toast } from 'react-toastify';

const CareersJobsAll = () => {
  const divisionsList = [
    'Barishal', 'Chattogram', 'Dhaka', 'Khulna', 
    'Mymensingh', 'Rajshahi', 'Rangpur', 'Sylhet'
  ];

  // পার্টনারদের প্রফেশনাল ক্যাটাগরি অনুযায়ী লিস্ট মডিফাই করা হয়েছে
  const professionsList = ['Business Owner', 'IT Professional', 'Teacher/Academician', 'Freelancer', 'Others'];

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
    setSelectedThana('All'); 
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setSelectedThana('All'); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, phone, whatsapp, profession: selectedProfession, division: selectedDivision, district: selectedDistrict, thana: selectedThana, area };

    try {
      const response = await fetch('http://localhost:8000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        toast.success('আবেদনটি সফলভাবে জমা হয়েছে! আমাদের টিম শীঘ্রই যোগাযোগ করবে।');
        setName(''); setPhone(''); setWhatsapp(''); setSelectedProfession('All');
        setSelectedDivision('All'); setSelectedDistrict('All'); setSelectedThana('All'); setArea('');
      } else {
        toast.error('কিছু একটা সমস্যা হয়েছে!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('সার্ভারের সাথে যোগাযোগ করা যাচ্ছে না!');
    }
  };

  const inputStyle = "w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)] transition-all duration-300 text-slate-800 text-sm font-medium";
  const selectStyle = "w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)] transition-all duration-300 text-slate-800 text-sm font-medium appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23475569%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:11px_11px] bg-[right_18px_center] bg-no-repeat";

  return (
    <div className='py-12 md:py-30 bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50/70 min-h-screen flex items-center overflow-hidden relative'>
      {/* ব্যাকগ্রাউন্ড ফ্লোটিং স্ফিয়ার */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-10 lg:gap-12">
          
          {/* বাম পাশ: ভিডিও প্লেয়ার কন্টেইনার */}
          <div className="w-full lg:w-1/2 flex">
            <div className="w-full rounded-[32px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(15,23,42,0.3)] border border-slate-200/60 bg-slate-900 group transform transition-all duration-500 hover:translate-y-[-4px]">
              <JobsVideo />
            </div>
          </div>

          {/* ডান পাশ: ৩D এলিভেটেড ফর্ম কার্ড (পার্টনারশিপ ফোকাসড) */}
          <div className="w-full lg:w-1/2 flex">
            <div className="w-full bg-white p-6 md:p-10 rounded-[32px] shadow-[0_30px_60px_-15px_rgba(15,23,42,0.15)] border border-slate-100/80 flex flex-col justify-between transform transition-all duration-500 hover:translate-y-[-4px]">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 tracking-tight">বিজনেস পার্টনার হোন</h2>
                <p className="text-slate-600 text-xs md:text-sm font-semibold mb-6">
                  আপনার এলাকার শিক্ষাপ্রতিষ্ঠানগুলোকে ডিজিটালাইজড করতে এবং MentorERP-এর অফিশিয়াল ফ্র্যাঞ্চাইজি/পার্টনার হিসেবে নতুন আয়ের উৎস তৈরি করতে আজই ফর্মটি পূরণ করুন। আমাদের রিজিওনাল পার্টনার স্লট সীমিত।
                </p>
                <div className="h-[1px] w-full bg-gradient-to-r from-blue-500/30 via-slate-200 to-transparent mb-6"></div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* নাম */}
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 ml-1">আপনার নাম</label>
                      <input type="text" required placeholder="নাম লিখুন" className={inputStyle} value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    {/* ফোন নম্বর */}
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 ml-1">ফোন নম্বর</label>
                      <input type="tel" required placeholder="017XXXXXXXX" className={inputStyle} value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>

                    {/* হোয়াটসঅ্যাপ নম্বর */}
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 ml-1">WhatsApp Number</label>
                      <input type="tel" placeholder="017XXXXXXXX" className={inputStyle} value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
                    </div>

                    {/* বর্তমান পেশা */}
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 ml-1">বর্তমান পেশা (Profession)</label>
                      <select className={selectStyle} value={selectedProfession} onChange={(e) => setSelectedProfession(e.target.value)}>
                        <option value="All">Select Profession</option>
                        {professionsList.map((p) => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>

                    {/* টার্গেটেড এরিয়া - বিভাগ */}
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 ml-1">আপনার বিভাগ (Division)</label>
                      <select className={selectStyle} value={selectedDivision} onChange={handleDivisionChange}>
                        <option value="All">All Division</option>
                        {divisionsList.map((div) => <option key={div} value={div}>{div}</option>)}
                      </select>
                    </div>

                    {/* টার্গেটেড এরিয়া - জেলা */}
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 ml-1">আপনার জেলা (District)</label>
                      <select className={`${selectStyle} disabled:opacity-60 disabled:cursor-not-allowed`} value={selectedDistrict} onChange={handleDistrictChange} disabled={selectedDivision === 'All'}>
                        <option value="All">All District</option>
                        {filteredDistricts.map((dist) => <option key={dist} value={dist}>{dist}</option>)}
                      </select>
                    </div>

                    {/* টার্গেটেড এরিয়া - থানা */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 ml-1">পার্টনারশিপের থানা এরিয়া (Thana)</label>
                      <select className={`${selectStyle} disabled:opacity-60 disabled:cursor-not-allowed`} value={selectedThana} onChange={(e) => setSelectedThana(e.target.value)} disabled={selectedDistrict === 'All'}>
                        <option value="All">Select Thana</option>
                        {filteredThanas.map((thana) => <option key={thana} value={thana}>{thana}</option>)}
                        {selectedDistrict !== 'All' && filteredThanas.length === 0 && (
                          <option value="Not-Available" disabled>Data Not Added Yet</option>
                        )}
                      </select>
                    </div>
                  </div>

                  {/* নির্দিষ্ট এলাকা/গ্রাম/ইউনিয়ন */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 ml-1">নির্দিষ্ট এলাকা/রোড (Area)</label>
                    <input type="text" placeholder="যেমন: উত্তরা সেক্টর ৪ বা সাভার বাসস্ট্যান্ড" className={inputStyle} value={area} onChange={(e) => setArea(e.target.value)} />
                  </div>

                  {/* সাবমিট বাটন */}
                  <button
                    type="submit"
                    className="w-full py-4 mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-black text-base rounded-2xl shadow-[0_10px_25px_rgba(59,130,246,0.4)] hover:shadow-[0_15px_30px_rgba(59,130,246,0.6)] border-b-4 border-indigo-800 active:border-b-0 active:translate-y-[4px] transition-all duration-150"
                  >
                    পার্টনারশিপের জন্য আবেদন করুন
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