import React from 'react';
import CourseCard from '../Courses/CourseCard';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      description: 'Learn HTML, CSS, and JavaScript to build modern websites from scratch.',
      instructor: 'Sarah Johnson',
      duration: '8 weeks',
      price: 99
    },
    {
      id: 2,
      title: 'Data Science with Python',
      description: 'Master data analysis, visualization, and machine learning with Python.',
      instructor: 'Dr. Michael Chen',
      duration: '12 weeks',
      price: 149
    },
    {
      id: 3,
      title: 'Mobile App Development',
      description: 'Build cross-platform mobile applications using React Native.',
      instructor: 'Alex Rodriguez',
      duration: '10 weeks',
      price: 129
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-textPrimary">
            Featured Courses
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-textSecondary">
            Explore our top courses designed to boost your skills and career.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="px-8 py-3 font-semibold text-white transition duration-300 rounded-md bg-primary hover:bg-accent">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
