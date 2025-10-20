import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="overflow-hidden transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
      <div className="flex items-center justify-center h-48 bg-gradient-to-r from-primary to-accent">
        <div className="text-center text-white">
          <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <h3 className="text-lg font-semibold">{course.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-textPrimary">{course.title}</h3>
        <p className="mb-4 text-textSecondary">{course.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-textSecondary">Instructor: {course.instructor}</span>
          <span className="text-sm text-textSecondary">Duration: {course.duration}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">${course.price}</span>
          <button className="px-4 py-2 text-white transition duration-300 rounded-md bg-primary hover:bg-accent">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
