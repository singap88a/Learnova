import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import { logout } from "../Services/authService.jsx";
const NavbarLogedIn = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useAuth();
  console.log(user);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and navigation links */}
          <div className="flex items-center">
            <div className="flex items-center flex-shrink-0">
              <img
                className="w-auto h-12"
                src="/logo.png"
                alt="Educational Institution Logo"
              />
              <span className="ml-3 text-xl font-bold text-indigo-600">
                Knowledge Academy
              </span>
            </div>

            {/* Navigation links - visible on medium and large screens */}
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-1">
              <Link
                to="/"
                className="px-3 py-2 text-sm font-medium text-gray-700 transition duration-300 rounded-md hover:text-indigo-600 hover:bg-gray-100"
              >
                Home
              </Link>
              <Link
                to="/courses"
                className="px-3 py-2 text-sm font-medium text-gray-700 transition duration-300 rounded-md hover:text-indigo-600 hover:bg-gray-100"
              >
                Courses
              </Link>
              <Link
                to="/instructors"
                className="px-3 py-2 text-sm font-medium text-gray-700 transition duration-300 rounded-md hover:text-indigo-600 hover:bg-gray-100"
              >
                Instructors
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 text-sm font-medium text-gray-700 transition duration-300 rounded-md hover:text-indigo-600 hover:bg-gray-100"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 text-sm font-medium text-gray-700 transition duration-300 rounded-md hover:text-indigo-600 hover:bg-gray-100"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* User Info + Logout */}
          <div className="items-center hidden space-x-4 md:flex">
            {/* {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="User Avatar"
                className="w-10 h-10 border rounded-full"
              />
            ) : (
              <div className="flex items-center justify-center w-10 h-10 font-bold text-white bg-indigo-600 rounded-full">
                {user?.displayName?.charAt(0).toUpperCase() || "U"}
              </div>
            )} */}
            <span className="font-medium text-gray-800">
              {user?.displayName || user?.email}
            </span>
            <button
              onClick={logout}
              className="px-4 py-2 text-sm font-medium text-white transition duration-300 bg-red-500 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 rounded-md hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
            >
              {!isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - visible on small screens when toggled */}
      {isMenuOpen && (
        <div className="bg-white border-t border-gray-200 md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-indigo-600 hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-indigo-600 hover:bg-gray-50"
            >
              Courses
            </Link>
            <Link
              to="/instructors"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-indigo-600 hover:bg-gray-50"
            >
              Instructors
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-indigo-600 hover:bg-gray-50"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-indigo-600 hover:bg-gray-50"
            >
              Contact
            </Link>
            <div className="flex flex-col items-start pt-4 pb-3 space-y-2 border-t border-gray-200">
              <span className="font-medium text-gray-800">
                {user?.displayName || user?.email}
              </span>
              <button
                onClick={logout}
                className="w-full px-4 py-2 text-base font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
              >
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
