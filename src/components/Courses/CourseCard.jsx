import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Clock, Eye, Info } from 'lucide-react';

const CourseCard = ({ course }) => {

  return (
    <Link to={`/course/${course.id}`} className="block group">
      <div className="relative overflow-hidden transition-all duration-500 transform bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-3 group-hover:shadow-blue-500/20">
        {/* Course Image */}
        <div className="relative overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="object-cover w-full h-48 transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay Badges */}
          <div className="absolute flex gap-2 top-4 left-4">
            <span className="px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full shadow-lg">
              {course.category}
            </span>
            <span className="px-3 py-1 text-xs font-semibold text-gray-900 rounded-full shadow-lg bg-white/95 backdrop-blur-sm">
              {course.level}
            </span>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/50 group-hover:opacity-100">
            <div className="flex items-center gap-2 px-4 py-2 text-white rounded-full bg-white/20 backdrop-blur-sm">
              <Eye size={16} />
              <span className="text-sm font-medium">View Details</span>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="p-6">
          {/* Title and Instructor */}
          <h3 className="mb-3 text-lg font-bold text-gray-900 transition-colors line-clamp-1 group-hover:text-blue-600">
            {course.title}
          </h3>
          <p className="mb-4 text-sm text-gray-600">By {course.instructor.name}</p>

          {/* Course Stats */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="text-yellow-400 fill-current" size={16} />
                <span className="font-semibold text-gray-900">{course.rating_average}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users size={16} />
                <span>{course.enrollments}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{course.duration}</span>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="flex items-center justify-between py-3 mb-4 text-xs text-gray-500 border-t border-b border-gray-100">
            <span>{course.total_lessons} lessons</span>
            <span>Certificate included</span>
          </div>

          {/* Price and Details Button */}
          <div className="flex items-center justify-between">
            <div>
              <span className={`text-2xl font-bold ${course.price === 0 ? 'text-green-600' : 'text-blue-600'}`}>
                {course.price === 0 ? 'Free' : `$${Math.round(course.price * 0.8)}`}
              </span>
              {course.price !== 0 && (
                <span className="ml-2 text-sm text-gray-500 line-through">$129</span>
              )}
            </div>

            {/* Details Button - على اليمين جنب السعر */}
            <Link
              to={`/course/${course.id}`}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 transition-all duration-300 rounded-lg bg-blue-50 hover:bg-blue-100 hover:text-blue-700 hover:scale-105"
            >
              <Info size={16} />
              Details
            </Link>
          </div>
        </div>

        {/* Popular Badge */}
        {course.enrollments > 1000 && (
          <div className="absolute top-44 right-6">
            <div className="px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-orange-500 to-red-500">
              Popular
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CourseCard;
