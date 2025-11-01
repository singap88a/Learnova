import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/course/${course.id}`);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <defs>
            <linearGradient id={`half-${course.id}`}>
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path fill={`url(#half-${course.id})`} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-2xl hover:border-primary/20 group">
      {/* Course Image/Placeholder */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {renderStars(course.rating_average)}
            </div>
            <span className="text-sm font-medium text-white">{course.rating_average}</span>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors line-clamp-2 group-hover:text-primary">
          {course.title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm text-gray-600 line-clamp-3">
          {course.short_description}
        </p>

        {/* Course Details */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {course.duration_hours}h
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {course.total_lessons} lessons
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary">
              ${course.price * 0.8}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ${course.price}
            </span>
          </div>
          <button
            onClick={handleDetailsClick}
            className="px-6 py-2 font-semibold text-white transition-all duration-200 transform rounded-lg shadow-md bg-primary hover:bg-primary/90 hover:scale-105 hover:shadow-lg"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
