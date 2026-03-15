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

  const toggleDropdown = (name) =>
    setOpenDropdown(openDropdown === name ? null : name);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const menuItems = [
    { name: "Home", path: "/", hasDropdown: false },
    {
      name: "About",
      path: "/about",
      hasDropdown: true,
      dropdown: [
        { name: "Our History", path: "/history" },
        { name: "Vision & Mission", path: "/vision-mission" },
        { name: "Leadership", path: "/leadership" },
        { name: "Business Model", path: "/business-model" },
        { name: "Our Innovation", path: "/innovation" },
      ],
    },
    {
      name: "Solutions",
      path: "/services",
      hasDropdown: true,
      dropdown: [
        { name: "ERP Solutions", path: "/erp" },
        { name: "DailyLedger", path: "/daily" },
      ],
    },
    {
      name: "Investors",
      path: "/investors",
      hasDropdown: true,
      dropdown: [
        { name: "Code of Conduct", path: "/code-of-conduct" },
        { name: "Corporate Partners", path: "/partners" },
        { name: "Our Clients", path: "/clients" },   
        { name: "Investors Query", path: "/investors-query" },
      ],
    },
    {
      name: "Insights",
      path: "/insights",
      hasDropdown: true,
      dropdown: [{ name: "Blog", path: "/blogs" }],
    },
    {
      name: "Contact",
      path: "/contact",
      hasDropdown: true,
      dropdown: [{ name: "General Enquiries", path: "/general-enquiries" }],
    },
  ];

  return (
    <motion.nav
      animate={{
        backgroundColor: scrolled ? "#6366f1" : "#1C314F",
        padding: scrolled ? "10px 0" : "20px 0",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg"
    >
      <div className="container mx-auto px-5 lg:px-8 flex items-center justify-between text-white">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 z-50">
          <img src="/logo.png" className="h-12 lg:h-16 w-auto" alt="Logo" />
        </Link>

        {/* Desktop Menu - বড় স্ক্রিনের জন্য */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.hasDropdown ? (
                <button className="uppercase text-[13px] tracking-widest hover:text-indigo-200 flex items-center gap-1 py-6">
                  {item.name} <FaChevronDown size={10} />
                </button>
              ) : (
                <NavLink
                  to={item.path}
                  className="uppercase text-[13px] tracking-widest hover:text-indigo-200 py-6 block"
                >
                  {item.name}
                </NavLink>
              )}
              {/* Desktop Dropdown */}
              {item.hasDropdown && (
                <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white text-[#002B5B] rounded-lg shadow-2xl py-2">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-5 py-2.5 text-sm hover:bg-indigo-50 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
           <Link className="flex items-center gap-2 commonbgcolor px-8 py-2.5 rounded-md font-bold  tracking-widest text-white shadow-lg transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] group">
                Get In Touch <FaArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <button
          className="lg:hidden text-2xl z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col bg-white overflow-y-auto"
          >
            <div className="flex items-center justify-between p-6 bg-[#1C314F] text-white">
              <Link to="/" onClick={closeMobileMenu}>
                <img src="/logo.png" className="h-10 w-auto" alt="Logo" />
              </Link>
              <button
                className="text-3xl p-2 hover:bg-white/10 rounded-full transition-colors"
                onClick={closeMobileMenu}
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex flex-col">
              {menuItems.map((item) => (
                <div key={item.name} className="border-b border-gray-200">
                  <div
                    className={`flex justify-between items-center px-6 py-4 font-bold uppercase text-lg cursor-pointer ${
                      item.name === "Home"
                        ? "bg-[#28a745] text-white"
                        : item.name === "Insights" || item.name === "Contact"
                          ? "bg-[#2a2d7a] text-white"
                          : "text-gray-800"
                    }`}
                    onClick={() =>
                      item.hasDropdown
                        ? toggleDropdown(item.name)
                        : closeMobileMenu()
                    }
                  >
                    {item.hasDropdown ? (
                      <span>{item.name}</span>
                    ) : (
                      <Link to={item.path} onClick={closeMobileMenu}>
                        {item.name}
                      </Link>
                    )}
                    {item.hasDropdown &&
                      (openDropdown === item.name ? (
                        <FaChevronUp size={14} />
                      ) : (
                        <FaChevronDown size={14} />
                      ))}
                  </div>

                  {item.hasDropdown && openDropdown === item.name && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      className="flex flex-col bg-gray-50 px-10 py-2 text-gray-600"
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={closeMobileMenu}
                          className="py-3 hover:text-[#1C314F] border-b border-gray-100 last:border-0"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
