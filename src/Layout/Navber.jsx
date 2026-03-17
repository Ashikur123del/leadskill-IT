import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp, FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name) => setOpenDropdown(openDropdown === name ? null : name);
  const closeMobileMenu = () => { setMobileMenuOpen(false); setOpenDropdown(null); };

  const menuItems = [
    { name: "Home", path: "/", hasDropdown: false },
    { name: "About", path: "/about", hasDropdown: true, dropdown: [{ name: "Our History", path: "/history" }, { name: "Vision & Mission", path: "/vision-mission" }, { name: "Leadership", path: "/leadership" }, { name: "Business Model", path: "/business-model" }, { name: "Our Innovation", path: "/innovation" }] },
    { name: "Solutions", path: "/services", hasDropdown: true, dropdown: [{ name: "ERP Solutions", path: "/erp" }, { name: "DailyLedger", path: "/daily" }] },
    { name: "Investors", path: "/investors", hasDropdown: true, dropdown: [{ name: "Code of Conduct", path: "/code-of-conduct" }, { name: "Corporate Partners", path: "/partners" }, { name: "Our Clients", path: "/clients" }, { name: "Investors Query", path: "/investors-query" }] },
    { name: "Media", path: "/media", hasDropdown: true, dropdown: [{ name: "Blog", path: "/blogs" }] },
    { name: "Career", path: "/career", hasDropdown: true, dropdown: [{ name: "Career", path: "/career" }] },
    { name: "Contact", path: "/contact", hasDropdown: true, dropdown: [{ name: "General Enquiries", path: "/general-enquiries" }, { name: "Job List", path: "/job-list" }] },
  ];

  return (
    <motion.nav
      animate={{
        backgroundColor: scrolled ? "#57C785" : "#2A7B9B",
        borderRadius: scrolled ? "0px" : "50px",
        marginTop: scrolled ? "0px" : "15px",
        padding: scrolled ? "15px 5%" : "10px 40px",
        width: scrolled ? "100%" : "90%",
        boxShadow: scrolled ? "0 4px 15px rgba(0,0,0,0.1)" : "0 10px 25px rgba(0,0,0,0.3)",
      }}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-in-out flex items-center justify-between text-white"
    >
      {/* Logo */}
      <Link to="/" className="flex-shrink-0 z-50">
        <img src="/logo.png" className="h-10 md:h-15 w-auto" alt="Logo" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-4 xl:gap-8 font-medium">
        {menuItems.map((item) => (
          <div key={item.name} className="relative group">
            {item.hasDropdown ? (
              <button className="uppercase text-[14px] tracking-widest font-semibold hover:text-white/80 flex items-center gap-1 py-4">
                {item.name} <FaChevronDown size={8} />
              </button> 
            ) : (
              <NavLink to={item.path} className="uppercase text-[14x] tracking-widest hover:text-white/80">{item.name}</NavLink>
            )}
            {item.hasDropdown && (
              <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white text-[#002B5B] rounded-lg shadow-2xl py-2">
                  {item.dropdown.map((sub) => (
                    <Link key={sub.name} to={sub.path} className="block px-5 py-2.5 text-xs font-semibold hover:bg-indigo-50 transition-colors">{sub.name}</Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        <Link to="/contact" className="flex items-center gap-2 border border-white px-5 py-2 rounded-full font-bold text-[14px] hover:bg-white hover:text-[#2A7B9B] transition-all whitespace-nowrap">
          Contact us <FaArrowRight size={12} />
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button className="lg:hidden text-2xl z-50 p-2" onClick={() => setMobileMenuOpen(true)}>
        <FaBars />
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            className="fixed inset-0 z-[101] bg-gradient-to-br from-[#2A7B9B] to-[#1C314F] text-white p-6 overflow-y-auto lg:hidden h-[600px]"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="font-bold text-xl">Menu</span>
              <button onClick={closeMobileMenu} className="p-2"><FaTimes size={24}/></button>
            </div>
            {menuItems.map((item) => (
              <div key={item.name} className="py-4 border-b border-white/20">
                <div className="flex justify-between items-center" onClick={() => item.hasDropdown && toggleDropdown(item.name)}>
                  <Link to={item.path} onClick={closeMobileMenu} className="text-lg font-medium">{item.name}</Link>
                  {item.hasDropdown && (openDropdown === item.name ? <FaChevronUp/> : <FaChevronDown/>)}
                </div>
                {item.hasDropdown && openDropdown === item.name && (
                  <div className="pl-4 mt-3 flex flex-col gap-2">
                    {item.dropdown.map((sub) => (
                      <Link key={sub.name} to={sub.path} className="block py-1 text-white/80 hover:text-white text-sm" onClick={closeMobileMenu}>{sub.name}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Gradient/Shadow Line */}
      <div className="absolute -bottom-[2px] left-0 w-full h-[7px] bg-gradient-to-r from-transparent via-[#D9007B] to-transparent opacity-70" />
    </motion.nav>
  );
};

export default Navbar;