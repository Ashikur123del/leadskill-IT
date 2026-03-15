import { motion } from "framer-motion";
import { 
  FaProjectDiagram, FaUserMd, FaHospital, FaUserGraduate, 
  FaAward, FaHandHoldingUsd, FaUserFriends 
} from "react-icons/fa";
import { 
  MdFamilyRestroom, MdOutlineGroups, MdOutlineCastForEducation, 
  MdOutlineEmojiEvents, MdOutlineLiveTv 
} from "react-icons/md";

// ইমেজ ইম্পোর্ট লাইনগুলো মুছে ফেলা হয়েছে কারণ এগুলো public ফোল্ডারে আছে

const contributions = [
  { title: "Parenting Guidance", icon: <MdFamilyRestroom /> },
  { title: "Career Path Guidance", icon: <FaProjectDiagram /> },
  { title: "Parenting Support Community", icon: <MdOutlineGroups /> },
  { title: "24/7 Family Doctor", icon: <FaUserMd /> },
  { title: "Medical Test Discounts", icon: <FaHospital /> },
  { title: "Student Guidance (HSC)", icon: <FaUserGraduate /> },
  { title: "Smart Teaching Guidance", icon: <MdOutlineCastForEducation /> },
  { title: "Mentorship & Competitions", icon: <MdOutlineEmojiEvents /> },
  { title: "Certificate & Award", icon: <FaAward /> },
  { title: "Funding Support", icon: <FaHandHoldingUsd /> },
];

const cards = [
  { title: "Parenting Support Community", img: "/G-1.webp" },
  { title: "Student Mentorship Community", img: "/G-2.webp" },
  { title: "Teacher Networking Community", img: "/G-3.webp" },
  { title: "Live Q&A Webinars", img: "/G-4.webp" },
];

const DailyLedger = () => {
  return (
    <section className="py-20 max-w-5xl mx-auto px-4">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-7xl text-[#4C4AC3] font-bold">HoushVara</h2>
        <div className="h-[5px] w-32 commonbgcolor rounded-2xl mx-auto mt-3"></div>
        <p className="text-lg py-3 font-semibold">Empowering Education with Purpose and Protection</p>
        <p className="text-start leading-relaxed text-lg text-gray-700">
          DailyLedger is a national initiative designed to enhance the education system by connecting schools and families. 
          Its mission is to support parents, students, and teachers in developing essential life skills.
        </p>
      </div>

      {/* Corporate Contribution Section */}
      <div className="text-center py-10">
        <h2 className="text-3xl font-bold mb-10">Corporate & Community Contribution Project</h2>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="commonbgcolor p-10 rounded-3xl text-white shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {contributions.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-30 h-30 bg-white text-[#2b3d7a] rounded-full flex items-center justify-center text-5xl mb-3 shadow-lg hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <p className="text-sm font-semibold uppercase">{item.title}</p> 
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Our Community Section */}
      <div className="text-center py-10">
        <h2 className="text-4xl font-bold text-[#2b3d7a]">Our Community</h2>
        <div className="h-[5px] w-32 commonbgcolor mx-auto mt-2 rounded-2xl"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
  {cards.map((item, index) => (
    <motion.div 
  key={index}
  whileHover={{ y: -10 }}
  /* ইনফিনিট গ্লো এনিমেশন */
  animate={{
    boxShadow: [
      "0 0 0 0px rgba(76, 74, 195, 0.3)",
      "0 0 0 10px rgba(76, 74, 195, 0)",
      "0 0 0 0px rgba(76, 74, 195, 0)"
    ]
  }}
  transition={{
    duration: 2,
    repeat: Infinity, // এটি ইনফিনিটলি চলবে
    repeatType: "loop",
    ease: "easeInOut"
  }}
  className="flex flex-col items-center text-center p-4 border-2 border-[#4C4AC3] rounded-xl shadow-lg"
>
  <div className="w-24 h-24 mb-4 rounded-full overflow-hidden shadow-lg border-2 border-gray-100">
    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
  </div>
  <p className="font-semibold text-gray-800 leading-tight">{item.title}</p>
</motion.div>
  ))}
</div>
      </div>
    </section>
  );
};

export default DailyLedger;