import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import coursesData from '../data/courses.json';

// Sub-components for better organization
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
      <p className="text-gray-600">Loading your courses...</p>
    </div>
  </div>
);

const EmptyState = ({ navigate }) => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="max-w-md px-4 mx-auto text-center">
      <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full">
        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <h2 className="mb-3 text-2xl font-bold text-gray-800">No Courses Yet</h2>
      <p className="mb-6 text-gray-600">Start your learning journey by enrolling in your first course.</p>
      <button
        onClick={() => navigate('/courses')}
        className="px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Explore Courses
      </button>
    </div>
  </div>
);

const CourseCard = ({ course, onContinue }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Get actual progress from localStorage
    const courseProgress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
    const currentProgress = courseProgress[course.id]?.progress || 0;
    setProgress(currentProgress);
  }, [course.id]);

  const formatDuration = (hours) => {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 20) return 'bg-yellow-500';
    return 'bg-gray-300';
  };

  return (
    <div className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-xl">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="object-cover w-full h-40"
        />
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 text-xs font-medium text-white bg-blue-600 rounded-full">
            {progress > 0 ? 'In Progress' : 'Not Started'}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="mb-2 font-bold text-gray-900 line-clamp-2">{course.title}</h3>
        <p className="mb-1 text-sm text-gray-600">by {course.instructor?.name || 'Expert Instructor'}</p>
        
        {/* Progress Section */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm font-semibold text-blue-600">{progress}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(progress)}`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {formatDuration(course.duration_hours || 0)}
          </div>
          <button
            onClick={() => onContinue(course.id)}
            className="px-4 py-2 text-sm font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {progress > 0 ? 'Continue' : 'Start'}
          </button>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ number, label, color }) => (
  <div className="p-6 text-center bg-white border border-gray-100 shadow-lg rounded-xl">
    <div className={`text-3xl font-bold mb-2 ${
      color === 'blue' ? 'text-blue-600' :
      color === 'green' ? 'text-green-600' :
      'text-purple-600'
    }`}>
      {number}
    </div>
    <div className="font-medium text-gray-600">{label}</div>
  </div>
);

const MyCourses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalCourses: 0,
    totalLessons: 0,
    totalHours: 0,
    completedCourses: 0
  });

  useEffect(() => {
    const loadEnrolledCourses = () => {
      setLoading(true);
      try {
        const enrolledCourseIds = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
        const enrolledCourses = coursesData.courses.filter(course =>
          enrolledCourseIds.includes(course.id)
        );
        
        setCourses(enrolledCourses);

        // Calculate stats
        const totalLessons = enrolledCourses.reduce((total, course) => 
          total + (course.total_lessons || 0), 0
        );
        
        const totalHours = enrolledCourses.reduce((total, course) => 
          total + (course.duration_hours || 0), 0
        );

        const courseProgress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
        const completedCourses = enrolledCourses.filter(course => 
          courseProgress[course.id]?.progress === 100
        ).length;

        setStats({
          totalCourses: enrolledCourses.length,
          totalLessons,
          totalHours: Math.round(totalHours * 10) / 10,
          completedCourses
        });

      } catch (error) {
        console.error('Error loading enrolled courses:', error);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    loadEnrolledCourses();
  }, []);

  const handleContinueCourse = (courseId) => {
    navigate(`/course/${courseId}/lessons`);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (courses.length === 0) {
    return <EmptyState navigate={navigate} />;
  }

  return (
    <div className="min-h-screen py-20 ">
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
 

 

        {/* Courses Grid */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Your Courses</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onContinue={handleContinueCourse}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="p-8 text-white bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl">
            <h3 className="mb-3 text-2xl font-bold">Ready to learn more?</h3>
            <p className="max-w-md mx-auto mb-6 text-blue-100">
              Explore our catalog and discover new skills to master.
            </p>
            <button
              onClick={() => navigate('/courses')}
              className="px-8 py-3 font-medium text-blue-600 transition-colors bg-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Browse All Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;