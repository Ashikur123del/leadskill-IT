
import { motion } from 'framer-motion';
import { FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="comon text-white pt-10  md:pt-24 pb-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          
          <div className="lg:col-span-1 space-y-8">
            <img src="/logo.png" alt="Leadswin Logo" className="h-20 w-auto object-contain" />
            <p className="text-base font-light opacity-90 leading-relaxed italic tracking-wide max-w-[220px]">
              "Building a Better Future through Systemic Solutions"
            </p>
          </div>

          <FooterColumn title="About" links={['Our History', 'Vision & Mission', 'Leadership', 'Business Model', 'Our Innovation']} />
          <FooterColumn title="Solutions" links={['MentorERP', 'DailyLedger']} />
          <FooterColumn title="Investors" links={['Code of Conduct', 'Corporate Partners', 'Our Clients',  'Investors Query']} />
          <FooterColumn title="Important" links={['Career', 'Blog', 'Job List', 'General Enquiries']} />
        </div>

        {/* Footer Bottom Section */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm font-medium opacity-80 tracking-wide">
            ©2026 Leadswin Limited. All rights reserved.
          </p>
          
          <div className="flex items-center gap-10">
            <div className="flex gap-6">
              <SocialIcon Icon={FaFacebookF} />
              <SocialIcon Icon={FaYoutube} />
              <SocialIcon Icon={FaLinkedinIn} />
            </div>
            <div className="flex gap-8 text-sm font-medium opacity-80">
              <a href="#" className="hover:text-white transition-colors tracking-wide">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors tracking-wide">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


const FooterColumn = ({ title, links }) => (
  <div className="space-y-8">
    <h4 className="font-bold text-sm uppercase text-white/60">{title}</h4>
    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="group flex items-center gap-2 text-[15px] opacity-90 hover:opacity-100 transition-all duration-300">
            <motion.span 
              className="text-white inline-block"
              animate={{ x: [0, 10, 0] }}   
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* <FaArrowRightLong size={16} /> */}
            </motion.span>

            <span className="group-hover:translate-x-1 transition-transform duration-300">
              {link}
            </span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ Icon }) => (
  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300">
    <Icon size={16} />
  </a>
);

export default Footer;