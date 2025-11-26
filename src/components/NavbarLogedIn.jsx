import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import { logout } from "../Services/authService.jsx";
import {
  BookOpen,
  Users,
  Menu,
  X,
  ChevronDown,
  User,
  Settings,
  LogOut,
  BookMarked,
  Award,
  Home,
  Info,
  Phone,
} from "lucide-react";
import logo from "../assets/logo.png";

const NavbarLogedIn = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const user = useAuth();
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

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
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

  const userMenuItems = [
    { label: "My Profile", path: "/profile", icon: <User size={18} /> },
    {
      label: "My Courses",
      path: "/my-courses",
      icon: <BookMarked size={18} />,
    },
  ];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 border-b border-gray-100"
          : "bg-white/90 backdrop-blur-lg"
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
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
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
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
          <div className="items-center hidden space-x-3 lg:flex">
            {/* User Profile Menu */}
            <div className="relative ml-4">
              <button
                onClick={toggleUserMenu}
                className="flex items-center gap-3 p-2 transition-all duration-300 rounded-2xl hover:bg-gray-50"
              >
                {/* User Avatar */}
                <div className="flex items-center justify-center w-10 h-10 font-bold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg">
                  {user?.displayName?.charAt(0).toUpperCase() || "U"}
                </div>

                {/* User Info */}
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">
                    {user?.displayName || "User"}
                  </p>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </div>

                <ChevronDown
                  size={16}
                  className={`text-gray-500 transition-transform duration-300 ${
                    isUserMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* User Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 w-64 mt-2 overflow-hidden border border-gray-100 shadow-2xl top-full bg-white/95 backdrop-blur-xl rounded-2xl shadow-blue-500/20">
                  {/* User Header */}
                  <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
                    <p className="text-sm font-semibold text-gray-900">
                      {user?.displayName || "User"}
                    </p>
                    <p className="text-xs text-gray-600 truncate">
                      {user?.email}
                    </p>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2">
                    {userMenuItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  {/* Logout Button */}
                  <div className="p-2 border-t border-gray-100">
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full gap-3 px-4 py-3 text-sm font-medium text-red-600 transition-all duration-300 rounded-lg hover:bg-red-50"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-3 text-gray-700 transition-all duration-300 rounded-2xl hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? <Menu size={24} /> : <X size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 shadow-2xl bg-white/95 backdrop-blur-xl lg:hidden">
          <div className="px-4 py-6 space-y-4">
            {/* User Info Mobile */}
            <div className="flex items-center gap-3 p-4 mb-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User Avatar"
                  className="w-12 h-12 border-2 border-white rounded-full"
                />
              ) : (
                <div className="flex items-center justify-center w-12 h-12 font-bold text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                  {user?.displayName?.charAt(0).toUpperCase() || "U"}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {user?.displayName || "User"}
                </p>
                <p className="text-xs text-gray-600 truncate">{user?.email}</p>
              </div>
            </div>

            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search
                className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
                size={20}
              />
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
                          activeDropdown === `mobile-${item.path}`
                            ? "rotate-180"
                            : ""
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

            {/* Mobile User Menu */}
            <div className="pt-4 mt-4 space-y-2 border-t border-gray-200">
              {userMenuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 transition-all duration-300 rounded-2xl hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}

              {/* Mobile Logout Button */}
              <button
                onClick={handleLogout}
                className="flex items-center w-full gap-3 px-4 py-3 text-base font-medium text-red-600 transition-all duration-300 rounded-2xl hover:bg-red-50"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarLogedIn;
