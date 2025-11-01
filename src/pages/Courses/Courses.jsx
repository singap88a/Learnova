import React from 'react';
import CourseCard from '../../components/Courses/CourseCard';
import coursesData from '../../data/courses.json';

const Courses = () => {
  const courses = coursesData.courses;

  return (
    <div className="min-h-screen py-12 bg-secondary">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-textPrimary">
            Our Courses
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-textSecondary">
            Discover a wide range of courses designed to help you succeed in your career.
            Learn from industry experts and gain practical skills.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
