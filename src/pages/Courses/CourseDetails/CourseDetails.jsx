import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import coursesData from '../../../data/courses.json';
import { useAuth } from '../../../hooks/useAuth';
import LoadingSpinner from './LoadingSpinner';
import CourseHeader from './CourseHeader';
import CourseContent from './CourseContent';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useAuth();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    // Simulate API data fetching
    const fetchCourse = async () => {
      setLoading(true);
      try {
        // In a real app, this would fetch data from an API
        const foundCourse = coursesData.courses.find(c => c.id === id);
        if (foundCourse) {
          setCourse(foundCourse);
        }
      } catch (error) {
        console.error('Error fetching course:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  // Check enrollment status
  useEffect(() => {
    if (user) {
      const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
      setIsEnrolled(enrolledCourses.includes(id));
    }
  }, [id, user]);

  const formatDuration = (hours) => {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h}h ${m}m`;
  };

  const handleEnroll = () => {
    // Navigate to purchase page
    navigate(`/course/${id}/purchase`);
  };

  const handleWatchLessons = () => {
    if (isEnrolled) {
      navigate(`/course/${id}/lessons`);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="mb-2 text-xl font-semibold text-gray-700">Course Not Found</h2>
          <p className="mb-4 text-gray-500">Sorry, we couldn't find the course you're looking for.</p>
          <button 
            onClick={() => navigate('/courses')}
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <CourseHeader
        course={course}
        onEnroll={handleEnroll}
        formatDuration={formatDuration}
      />
      <CourseContent
        course={course}
        isEnrolled={isEnrolled}
        formatDuration={formatDuration}
        navigate={navigate}
      />
    </div>
  );
};

export default CourseDetails;