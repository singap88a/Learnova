import React from 'react';
import CourseCard from '../../components/Courses/CourseCard';

const Courses = () => {
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
    },
    {
      id: 4,
      title: 'UI/UX Design Principles',
      description: 'Learn design thinking and create user-centered digital experiences.',
      instructor: 'Emma Thompson',
      duration: '6 weeks',
      price: 89
    },
    {
      id: 5,
      title: 'Cloud Computing with AWS',
      description: 'Master Amazon Web Services and cloud architecture fundamentals.',
      instructor: 'David Kim',
      duration: '14 weeks',
      price: 199
    },
    {
      id: 6,
      title: 'Cybersecurity Essentials',
      description: 'Protect systems and networks from cyber threats and attacks.',
      instructor: 'Lisa Wang',
      duration: '8 weeks',
      price: 119
    }
  ];

  return (
    <div className="min-h-screen bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-textPrimary mb-4">
            Our Courses
          </h1>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            Discover a wide range of courses designed to help you succeed in your career.
            Learn from industry experts and gain practical skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
