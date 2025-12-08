import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BookOpen,
  Users,
  UserCircle,
  Menu,
  X,
  ChevronDown,
  Home,
  Info,
  Phone,
  Search
} from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { path: "/", label: "Home", icon: <Home size={18} /> },
    { path: "/courses", label: "Courses", icon: <BookOpen size={18} /> },
    { path: "/instructors", label: "Instructors", icon: <Users size={18} /> },
    { path: "/about", label: "About", icon: <Info size={18} /> },
    { path: "/contact", label: "Contact", icon: <Phone size={18} /> },
  ];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 border-b border-gray-100" 
        : "bg-white/90 backdrop-blur-lg"
    }`}>
      <div className="mx-auto md:px-20 sm:px-6 ">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img
                className="w-[160px] h-auto transition-all duration-300 group-hover:scale-105"
                src={logo}
                alt="Educational Institution Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <div key={item.path} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.path)}
                      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-2xl ${
                        isActiveLink(item.path) 
                          ? "text-blue-600 bg-blue-50 shadow-sm" 
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      {item.icon}
                      {item.label}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-300 ${
                          activeDropdown === item.path ? "rotate-180" : ""
                        }`} 
                      />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {activeDropdown === item.path && (
                      <div className="absolute left-0 w-64 mt-2 overflow-hidden border border-gray-100 shadow-2xl top-full bg-white/95 backdrop-blur-xl rounded-2xl shadow-blue-500/20">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className="flex items-center px-4 py-3 text-sm text-gray-700 transition-all duration-300 border-b hover:bg-blue-50 hover:text-blue-600 hover:pl-6 border-gray-50 last:border-b-0"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-2xl ${
                      isActiveLink(item.path) 
                        ? "text-blue-600 bg-blue-50 shadow-sm" 
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="items-center hidden space-x-3 md:flex">
            {/* Auth Buttons */}
            <div className="flex items-center gap-2 ml-4">
              <Link
                to="/login"
                className="px-5 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-300 border border-gray-300 rounded-2xl hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                className="px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:scale-105 shadow-md"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-3 text-gray-700 transition-all duration-300 rounded-2xl hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <Menu size={24} />
              ) : (
                <X size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 shadow-2xl bg-white/95 backdrop-blur-xl md:hidden">
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" size={20} />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full py-3 pl-10 pr-4 border border-gray-200 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Mobile Navigation Links */}
            {navItems.map((item) => (
              <div key={item.path}>
                {item.dropdown ? (
                  <div className="mb-2">
                    <button
                      onClick={() => toggleDropdown(`mobile-${item.path}`)}
                      className={`flex items-center justify-between w-full px-4 py-3 text-base font-medium transition-all duration-300 rounded-2xl ${
                        isActiveLink(item.path) 
                          ? "text-blue-600 bg-blue-50" 
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        {item.label}
                      </div>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-300 ${
                          activeDropdown === `mobile-${item.path}` ? "rotate-180" : ""
                        }`} 
                      />
                    </button>
                    
                    {/* Mobile Dropdown */}
                    {activeDropdown === `mobile-${item.path}` && (
                      <div className="mt-2 ml-6 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-gray-600 transition-all duration-300 rounded-xl hover:bg-blue-50 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 text-base font-medium transition-all duration-300 rounded-2xl ${
                      isActiveLink(item.path) 
                        ? "text-blue-600 bg-blue-50" 
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Auth Buttons */}
            <div className="pt-6 mt-6 space-y-3 border-t border-gray-200">
              <Link
                to="/login"
                className="flex items-center justify-center w-full px-4 py-3 text-base font-semibold text-gray-700 transition-all duration-300 border border-gray-300 rounded-2xl hover:border-blue-500 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                className="flex items-center justify-center w-full px-4 py-3 text-base font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:from-blue-700 hover:to-purple-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;