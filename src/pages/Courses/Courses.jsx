import React, { useState } from 'react';
import CourseCard from '../../components/Courses/CourseCard';
import coursesData from '../../data/courses.json';
import { Search, Filter, Grid, List, ChevronDown, X } from 'lucide-react';

const Courses = () => {
  const courses = coursesData.courses;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

 

  // Filter and sort courses
  const filteredCourses = courses
    .filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.instructor.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
      
      return matchesSearch && matchesCategory && matchesLevel;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.enrollments - a.enrollments;
        case 'rating':
          return b.rating_average - a.rating_average;
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return new Date(b.created_at) - new Date(a.created_at);
        default:
          return 0;
      }
    });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedLevel('All');
  };

  const activeFiltersCount = [searchTerm, selectedCategory, selectedLevel].filter(
    filter => filter !== '' && filter !== 'All'
  ).length;

  return (
    <div className="min-h-screen py-20">
      {/* Header Section */}
      <div className="relative z-20 py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        {/* <div className="absolute inset-0 bg-black/20"></div> */}
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Courses</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-blue-100 md:text-2xl">
              Unlock your potential with expertly crafted courses. Learn from industry leaders 
              and transform your career with hands-on projects and real-world skills.
            </p>
          </div>
        </div>
        
 
      </div>

      {/* Main Content */}
      <div className="px-4 mx-auto -mt-8 max-w-7xl sm:px-6 lg:px-8">
        {/* Filters and Search Section */}
        <div className="relative z-30 p-6 mb-8 bg-white border border-gray-100 shadow-lg rounded-2xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                placeholder="Search courses, instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-10 pr-4 transition-all duration-200 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              {/* View Toggle */}
              <div className="flex items-center p-1 bg-gray-100 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-white shadow-md text-blue-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-white shadow-md text-blue-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <List size={20} />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white cursor-pointer transition-all duration-200"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
                <ChevronDown className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 pointer-events-none right-3 top-1/2" />
              </div>

              {/* Filter Toggle for Mobile */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200"
              >
                <Filter size={20} />
                <span>Filters</span>
                {activeFiltersCount > 0 && (
                  <span className="px-2 py-1 text-xs font-bold text-white bg-blue-600 rounded-full">
                    {activeFiltersCount}
                  </span>
                )}
              </button>
            </div>
          </div>


        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredCourses.length}</span> courses
            {activeFiltersCount > 0 && ' (filtered)'}
          </p>
          <div className="text-sm text-gray-500">
            Total: {courses.length} courses
          </div>
        </div>

        {/* Courses Grid/List */}
        {filteredCourses.length > 0 ? (
          <div className={
            viewMode === 'grid' 
              ? "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
              : "space-y-6"
          }>
            {filteredCourses.map(course => (
              <CourseCard 
                key={course.id} 
                course={course} 
                viewMode={viewMode}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-16 text-center">
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-100 to-purple-100">
                <Search className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">No courses found</h3>
              <p className="mb-6 text-gray-600">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 font-medium text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}

 
      </div>
    </div>
  );
};

export default Courses;