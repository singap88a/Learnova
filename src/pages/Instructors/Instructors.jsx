 

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaGlobe } from 'react-icons/fa';
import coursesData from '../../data/courses.json';

const socialIcons = {
  linkedin: <FaLinkedin className="w-5 h-5 text-blue-600" />,
  github: <FaGithub className="w-5 h-5 text-gray-800" />,
  twitter: <FaTwitter className="w-5 h-5 text-blue-400" />,
  youtube: <FaYoutube className="w-5 h-5 text-red-600" />,
  website: <FaGlobe className="w-5 h-5 text-green-600" />,
  dribbble: <FaGlobe className="w-5 h-5 text-pink-600" />, // Assuming dribbble uses globe or add specific if needed
  behance: <FaGlobe className="w-5 h-5 text-blue-500" />, // Assuming behance uses globe
  instagram: <FaGlobe className="w-5 h-5 text-purple-600" /> // Assuming instagram uses globe
};

const InstructorCard = ({ instructor }) => {
  const navigate = useNavigate();
  const handleDetailsClick = () => {
    navigate(`/instructors/${instructor.id}`);
  };
  return (
    <div className="relative overflow-hidden transition-all duration-500 transform bg-white shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={instructor.avatar} 
          alt={instructor.name}
          className="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-110"
        />
      </div>
      <div className="relative p-6">
        <h3 className="mb-1 text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
          {instructor.name}
        </h3>
        <p className="mb-2 font-medium text-purple-600">{instructor.title}</p>
        <div className="flex gap-3 mb-4">
          {Object.entries(instructor.social).map(([key, url]) => (
            <a key={key} href={url} target="_blank" rel="noopener noreferrer">
              {socialIcons[key]}
            </a>
          ))}
        </div>
        <p className="mb-4 text-gray-600">{instructor.bio}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {instructor.specializations.map((spec, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-sm text-blue-700 transition-transform duration-300 transform border border-blue-200 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 group-hover:scale-105"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {spec}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 mb-4 text-gray-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
          </svg>
          <span className="font-medium">{instructor.total_students.toLocaleString()} Students</span>
        </div>
        <button
          onClick={handleDetailsClick}
          className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-xl"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

const InstructorsComponent = () => {
  const instructors = coursesData.instructors;
  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">Our Expert Instructors</h1>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">Meet our team of experienced professionals dedicated to providing you with high-quality education and mentorship.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:gap-10">
          {instructors.map(inst => (
            <InstructorCard key={inst.id} instructor={inst} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorsComponent;
