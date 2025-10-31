import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import { logout } from "../Services/authService.jsx";
const NavbarLogedIn = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and navigation links */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-12 w-auto"
                src="/logo.png"
                alt="Educational Institution Logo"
              />
              <span className="ml-3 text-xl font-bold text-indigo-600">
                Knowledge Academy
              </span>
            </div>

            {/* Links */}
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-1">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
              >
                Dashboard
              </Link>
              <Link
                to="/my-courses"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
              >
                My Courses
              </Link>
              <Link
                to="/instructors"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
              >
                Instructors
              </Link>
            </div>
          </div>

          {/* User Info + Logout */}
          <div className="hidden md:flex items-center space-x-4">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border"
              />
            ) : (
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
                {user?.displayName?.charAt(0).toUpperCase() || "U"}
              </div>
            )}
            <span className="text-gray-800 font-medium">
              {user?.displayName || user?.email}
            </span>
            <button
              onClick={logout}
              className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
            >
              {!isMenuOpen ? (
                <svg
                  className="h-6 w-6"
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
                  className="h-6 w-6"
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

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
            >
              Dashboard
            </Link>
            <Link
              to="/my-courses"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
            >
              My Courses
            </Link>
            <Link
              to="/instructors"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
            >
              Instructors
            </Link>

            <div className="pt-4 pb-3 border-t border-gray-200 flex flex-col items-start space-y-2">
              <span className="text-gray-800 font-medium">
                {user?.displayName || user?.email}
              </span>
              <button
                onClick={logout}
                className="px-4 py-2 text-base font-medium text-white bg-red-500 rounded-md hover:bg-red-600 w-full"
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
