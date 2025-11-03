import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaGlobe, FaDribbble, FaBehance, FaInstagram } from 'react-icons/fa';

const socialIcons = {
  linkedin: <FaLinkedin className="w-5 h-5 text-blue-600" />,
  github: <FaGithub className="w-5 h-5 text-gray-800" />,
  twitter: <FaTwitter className="w-5 h-5 text-blue-400" />,
  youtube: <FaYoutube className="w-5 h-5 text-red-600" />,
  website: <FaGlobe className="w-5 h-5 text-green-600" />,
  dribbble: <FaDribbble className="w-5 h-5 text-pink-600" />,
  behance: <FaBehance className="w-5 h-5 text-blue-500" />,
  instagram: <FaInstagram className="w-5 h-5 text-purple-600" />
};

const InstructorCard = ({ instructor }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/instructor/${instructor.id}`);
  };

  return (
    <div className="overflow-hidden transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
      <div className="w-full h-48 overflow-hidden">
        {instructor.avatar ? (
          <img
            src={instructor.avatar}
            alt={instructor.name}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gradient-to-r from-primary to-accent">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-6 text-center">
        <h3 className="mb-2 text-xl font-semibold text-textPrimary">{instructor.name}</h3>
        <p className="mb-2 font-medium text-primary">{instructor.title}</p>
        <p className="mb-4 text-textSecondary">{instructor.bio}</p>
        <div className="flex justify-center mb-4 space-x-4">
          {Object.entries(instructor.social || {}).map(([key, url]) => (
            <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="transition duration-300 text-primary hover:text-accent">
              {socialIcons[key]}
            </a>
          ))}
        </div>
        <button
          onClick={handleDetailsClick}
          className="px-6 py-2 font-semibold text-white transition-all duration-200 transform rounded-lg shadow-md bg-primary hover:bg-primary/90 hover:scale-105 hover:shadow-lg"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default InstructorCard;




