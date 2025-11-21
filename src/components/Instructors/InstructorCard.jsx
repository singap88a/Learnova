import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaGlobe, FaDribbble, FaBehance, FaInstagram, FaStar } from 'react-icons/fa';
import { Award, Users, BookOpen, ExternalLink } from 'lucide-react';

const socialIcons = {
  linkedin: <FaLinkedin className="w-4 h-4" />,
  github: <FaGithub className="w-4 h-4" />,
  twitter: <FaTwitter className="w-4 h-4" />,
  youtube: <FaYoutube className="w-4 h-4" />,
  website: <FaGlobe className="w-4 h-4" />,
  dribbble: <FaDribbble className="w-4 h-4" />,
  behance: <FaBehance className="w-4 h-4" />,
  instagram: <FaInstagram className="w-4 h-4" />
};

const socialColors = {
  linkedin: 'hover:bg-blue-500 hover:text-white',
  github: 'hover:bg-gray-800 hover:text-white',
  twitter: 'hover:bg-blue-400 hover:text-white',
  youtube: 'hover:bg-red-600 hover:text-white',
  website: 'hover:bg-green-500 hover:text-white',
  dribbble: 'hover:bg-pink-500 hover:text-white',
  behance: 'hover:bg-blue-600 hover:text-white',
  instagram: 'hover:bg-purple-600 hover:text-white'
};

const InstructorCard = ({ instructor }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/instructor/${instructor.id}`);
  };

  return (
    <div className="relative overflow-hidden transition-all duration-500 bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-2xl hover:border-gray-200">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
      
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <div className="w-full h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          {instructor.avatar ? (
            <img
              src={instructor.avatar}
              alt={instructor.name}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gradient-to-r from-blue-500 to-purple-600">
              <div className="text-center text-white">
                <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="text-sm font-medium">Instructor Photo</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Rating Badge */}
        {instructor.rating && (
          <div className="absolute flex items-center gap-1 px-3 py-1 rounded-full shadow-sm top-4 right-4 bg-white/90 backdrop-blur-sm">
            <FaStar className="w-3 h-3 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold text-gray-700">{instructor.rating}</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Name and Title */}
        <div className="mb-3 text-center">
          <h3 className="mb-1 text-xl font-bold text-gray-900">{instructor.name}</h3>
          <p className="text-sm font-semibold text-primary">{instructor.title}</p>
        </div>

        {/* Bio */}
        <p className="mb-4 text-sm leading-relaxed text-center text-gray-600 line-clamp-2">
          {instructor.bio}
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-4 mb-4 text-center">
          {instructor.students && (
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Users size={14} />
              <span>{instructor.students}+</span>
            </div>
          )}
          {instructor.courses && (
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <BookOpen size={14} />
              <span>{instructor.courses} courses</span>
            </div>
          )}
          {instructor.experience && (
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Award size={14} />
              <span>{instructor.experience}y exp</span>
            </div>
          )}
        </div>

        {/* Social Links */}
        {instructor.social && Object.keys(instructor.social).length > 0 && (
          <div className="flex justify-center mb-4">
            <div className="flex gap-2 p-2 bg-gray-50 rounded-xl">
              {Object.entries(instructor.social).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all duration-300 text-gray-600 hover:scale-110 ${socialColors[key] || 'hover:bg-gray-200'}`}
                >
                  {socialIcons[key]}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={handleDetailsClick}
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 transform shadow-md group/btn bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:scale-105"
          >
            View Profile
            <ExternalLink size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 transition-all duration-500 border-2 border-transparent pointer-events-none rounded-2xl group-hover:border-blue-500/20"></div>
    </div>
  );
};

export default InstructorCard;