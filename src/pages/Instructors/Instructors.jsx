import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaGlobe, FaDribbble, FaBehance, FaInstagram, FaSearch } from 'react-icons/fa';
import coursesData from '../../data/instructors.json';

const socialIcons = {
  linkedin: <FaLinkedin className="w-5 h-5" />,
  github: <FaGithub className="w-5 h-5" />,
  twitter: <FaTwitter className="w-5 h-5" />,
  youtube: <FaYoutube className="w-5 h-5" />,
  website: <FaGlobe className="w-5 h-5" />,
  dribbble: <FaDribbble className="w-5 h-5" />,
  behance: <FaBehance className="w-5 h-5" />,
  instagram: <FaInstagram className="w-5 h-5" />
};

const InstructorCard = ({ instructor, index }) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleDetailsClick = () => {
    navigate(`/instructors/${instructor.id}`);
  };

  return (
    <div 
      ref={cardRef}
      className={`relative overflow-hidden transition-all duration-700 bg-white shadow-lg group rounded-2xl hover:shadow-2xl ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-64 overflow-hidden rounded-t-2xl">
        <img 
          src={instructor.avatar} 
          alt={instructor.name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="relative p-6">
        <h3 className="mb-1 text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
          {instructor.name}
        </h3>
        <p className="mb-2 font-medium text-purple-600">{instructor.title}</p>
        
        <div className="flex gap-3 mb-4">
          {Object.entries(instructor.social).map(([key, url]) => (
            <a 
              key={key} 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-gray-100 rounded-full hover:bg-blue-100 hover:scale-110"
            >
              <div className="transition-colors duration-300 hover:text-blue-600">
                {socialIcons[key]}
              </div>
            </a>
          ))}
        </div>
        
        <p className="mb-4 text-gray-600">{instructor.bio}</p>
        
        <div className="flex items-center gap-2 mb-4 text-gray-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
          </svg>
          <span className="font-medium">{instructor.total_students.toLocaleString()} Students</span>
        </div>
        
        <button
          onClick={handleDetailsClick}
          className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

const InstructorCardList = ({ instructor, index }) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleDetailsClick = () => {
    navigate(`/instructors/${instructor.id}`);
  };

  return (
    <div 
      ref={cardRef}
      className={`flex flex-col gap-6 p-6 transition-all duration-700 bg-white shadow-lg md:flex-row rounded-2xl hover:shadow-xl ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="overflow-hidden md:w-64 md:h-64 rounded-xl">
        <img 
          src={instructor.avatar} 
          alt={instructor.name}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="mb-2 text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
          {instructor.name}
        </h3>
        <p className="mb-3 font-medium text-purple-600">{instructor.title}</p>
        
        <div className="flex gap-3 mb-4">
          {Object.entries(instructor.social).map(([key, url]) => (
            <a 
              key={key} 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-gray-100 rounded-full hover:bg-blue-100 hover:scale-110"
            >
              <div className="transition-colors duration-300 hover:text-blue-600">
                {socialIcons[key]}
              </div>
            </a>
          ))}
        </div>
        
        <p className="mb-4 text-gray-600">{instructor.bio}</p>
        
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-gray-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
            </svg>
            <span className="font-medium">{instructor.total_students.toLocaleString()} Students</span>
          </div>
          
          <button
            onClick={handleDetailsClick}
            className="px-6 py-2.5 font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const InstructorsComponent = () => {
  const instructors = coursesData.instructors;
  const [sortBy, setSortBy] = React.useState('Most Popular');
  const [viewMode, setViewMode] = React.useState('grid');
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isHeaderVisible, setIsHeaderVisible] = React.useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  // Filter instructors based on search query
  const filteredInstructors = React.useMemo(() => {
    if (!searchQuery.trim()) return instructors;
    
    const query = searchQuery.toLowerCase().trim();
    return instructors.filter(inst => 
      inst.name.toLowerCase().includes(query) ||
      inst.title.toLowerCase().includes(query) ||
      inst.bio.toLowerCase().includes(query)
    );
  }, [instructors, searchQuery]);

  // Sort instructors based on selected option
  const sortedInstructors = React.useMemo(() => {
    const sorted = [...filteredInstructors];
    
    switch(sortBy) {
      case 'Most Popular':
        return sorted.sort((a, b) => b.total_students - a.total_students);
      case 'Highest Rated':
        return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case 'Price: Low to High':
        return sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
      case 'Price: High to Low':
        return sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
      case 'Newest First':
        return sorted.reverse();
      default:
        return sorted;
    }
  }, [filteredInstructors, sortBy]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Background Image */}
      <div className="relative">
        {/* Background Image with Black Overlay Filter */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
            alt="Background"
            className="object-cover w-full h-full"
          />
          {/* Black Transparent Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div 
          ref={headerRef}
          className={`relative z-10 px-4 pt-40 pb-20 mx-auto max-w-7xl sm:px-6 lg:px-8 transition-all duration-1000 ${
            isHeaderVisible 
              ? 'opacity-100' 
              : 'opacity-0'
          }`}
        >
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl drop-shadow-lg">
              Our Expert <span className="text-yellow-300">Instructors</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-white md:text-xl drop-shadow-md">
              Meet our team of experienced professionals dedicated to providing you with 
              high-quality education and mentorship.
            </p>
          </div>

          {/* Search Bar with Controls - Positioned to overlap */}
          <div className="absolute left-0 right-0 px-4 bottom-0 transform translate-y-1/2 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="p-6 bg-white shadow-2xl rounded-3xl">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-4">
                  {/* Search Input */}
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <FaSearch className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search instructors, courses..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full py-3.5 pl-12 pr-4 text-base bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* View Toggle Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-3 rounded-lg transition-all duration-300 ${
                        viewMode === 'grid' 
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-3 rounded-lg transition-all duration-300 ${
                        viewMode === 'list' 
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>

                  {/* Sort Dropdown */}
                  <div className="relative w-full md:w-56">
                    <button
                      onClick={() => setShowDropdown(!showDropdown)}
                      className="flex items-center justify-between w-full gap-3 px-4 py-3.5 text-base font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    >
                      <span className="truncate">{sortBy}</span>
                      <svg className={`flex-shrink-0 w-5 h-5 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {showDropdown && (
                      <div className="absolute right-0 z-10 w-full mt-2 bg-white border border-gray-200 shadow-lg rounded-xl">
                        {['Most Popular', 'Highest Rated', 'Price: Low to High', 'Price: High to Low', 'Newest First'].map((option) => (
                          <button
                            key={option}
                            onClick={() => {
                              setSortBy(option);
                              setShowDropdown(false);
                            }}
                            className={`w-full px-4 py-3 text-left text-sm transition-colors duration-200 hover:bg-gray-50 first:rounded-t-xl last:rounded-b-xl ${
                              sortBy === option ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White Section for Content */}
      <div className="bg-white rounded-t-[3rem] px-4 py-12 pt-32">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Showing courses count */}
          <div className="mb-8">
            <p className="text-sm text-gray-600">Showing <span className="font-semibold text-blue-600">{sortedInstructors.length}</span> instructors</p>
          </div>

          {/* Instructors Grid or List */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
              {sortedInstructors.map((inst, index) => (
                <InstructorCard key={inst.id} instructor={inst} index={index} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {sortedInstructors.map((inst, index) => (
                <InstructorCardList key={inst.id} instructor={inst} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructorsComponent;