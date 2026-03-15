import { motion } from "framer-motion";
import {
  FaAward,
  FaMapMarkerAlt,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaGraduationCap,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import {
  MdOutlineFingerprint,
  MdOutlinePayments,
  MdOutlineWorkspacePremium,
  MdOutlineAssignmentTurnedIn,
  MdSms,
} from "react-icons/md";

const Mentorerp = () => {
  const achievements = [
    { icon: <FaAward />, title: "10 Years", desc: "Uninterrupted Service" },
    {
      icon: (
        <div className="relative flex items-center justify-center">
          <FaMapMarkerAlt size={40} />
          <FaGraduationCap className="absolute text-[12px] top-[6px] text-[#2b3d7a]" />
        </div>
      ),
      title: "5 Thousand",
      desc: "Educational Institutions",
    },
    { icon: <FaChalkboardTeacher />, title: "60 Thousand", desc: "Teacher" },
    { icon: <FaUserGraduate />, title: "30 Lac", desc: "Student & Parent" },
  ];

  const features = [
    { title: "Digital Attendance", icon: <MdOutlineFingerprint /> },
    { title: "Digital Fees Collection", icon: <MdOutlinePayments /> },
    { title: "Automated Accounting", icon: <FaFileInvoiceDollar /> },
    { title: "Layout & Certificate", icon: <MdOutlineWorkspacePremium /> },
    { title: "Result Process & Publishing", icon: <MdOutlineAssignmentTurnedIn /> },
    { title: "Bulk SMS & Notification", icon: <MdSms /> },
  ];

  return (
    <section className="py-16 px-5 overflow-hidden">
      {/* Top Content */}
      <div className="text-center max-w-5xl mx-auto mb-16">
        <img src="./logo.png" alt="Eduman Logo" className="h-24 mx-auto mb-6" />
        <h3 className="text-[#2b3d7a] text-3xl font-bold mb-6">
          A Comprehensive Education Management System
        </h3>
        <p className="text-gray-700 text-lg text-justify leading-relaxed">
          MentorERP is a cloud-based school management system for small to mid-sized educational institutions. 
          It centralizes academic and administrative tasks like attendance tracking, exam scheduling, 
          grade publication, fee collection, and staff management.
        </p>
      </div>

      {/* Achievements Section with Left-Right Animation */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-[#2b3d7a] text-3xl font-bold mb-10">
          Eduman Achievements
          <div className="h-[5px] w-20 commonbgcolor mx-auto rounded-xl mt-2"></div>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 commonbgcolor rounded-full flex items-center justify-center text-white text-4xl mb-4 shadow-lg">
                {item.icon}
              </div>
              <h4 className="text-[#2b3d7a] text-xl font-bold">{item.title}</h4>
              <p className="text-gray-600 text-sm mt-1 uppercase">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto text-center">
        <img src="./eduman-2.webp" alt="" className="mx-auto" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 commonbgcolor text-white rounded-full flex items-center justify-center text-4xl mb-4 hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-[#2b3d7a] font-semibold text-md leading-relaxed max-w-[120px]">
                {item.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentorerp;