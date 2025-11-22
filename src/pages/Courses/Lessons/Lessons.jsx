// src/pages/Lessons.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import coursesData from '../../../data/courses.json';

// Import Components
import LoadingSpinner from './LoadingSpinner';
import CourseHeader from './CourseHeader';
import LessonSidebar from './LessonSidebar';
import VideoPlayer from './VideoPlayer';
import NoLessonSelected from './NoLessonSelected';

const Lessons = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const foundCourse = coursesData.courses.find(c => c.id === id);
        if (foundCourse) {
          setCourse(foundCourse);
          if (foundCourse.syllabus && foundCourse.syllabus.length > 0) {
            setCurrentLesson(foundCourse.syllabus[0]);
          }
        }
      } catch (error) {
        console.error('Error fetching course:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const handleLessonClick = (lesson) => {
    setCurrentLesson(lesson);
    // Close sidebar on mobile after selecting a lesson
    if (window.innerWidth < 1280) {
      setSidebarOpen(false);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartLearning = () => {
    if (course?.syllabus?.length > 0) {
      setCurrentLesson(course.syllabus[0]);
    }
  };

  const formatDuration = (minutes) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return h > 0 ? `${h}h ${m}m` : `${m}m`;
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-slate-50 to-slate-100 sm:px-6 lg:px-8">
        <div className="w-full max-w-md p-8 text-center bg-white border shadow-xl rounded-2xl border-slate-200/60">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-red-100 rounded-3xl sm:w-24 sm:h-24">
            <svg className="w-10 h-10 text-red-600 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} 
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">Course Not Found</h2>
          <p className="max-w-md mb-8 text-base text-slate-600 sm:text-lg">
            The course you're looking for doesn't exist or may have been moved.
          </p>
          <button 
            onClick={() => navigate('/courses')}
            className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl 
                     hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl sm:w-auto sm:px-8 sm:py-3.5"
          >
            Browse All Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <CourseHeader 
        course={course} 
        currentLesson={currentLesson}
        onBack={() => navigate(`/course/${id}`)}
        onToggleSidebar={toggleSidebar}
        sidebarOpen={sidebarOpen}
      />

      {/* Main Content */}
      <main className="px-4 py-6 sm:px-6 lg:px-20 lg:py-8">
        <div className="grid grid-cols-1 gap-6 lg:gap-8 xl:grid-cols-7">
          {/* Sidebar - Mobile Overlay */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden" onClick={() => setSidebarOpen(false)}>
              <div 
                className="absolute top-0 left-0 w-4/5 h-full max-w-sm transition-transform transform bg-white shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4">
                  <LessonSidebar
                    lessons={course.syllabus}
                    currentLesson={currentLesson}
                    onLessonClick={handleLessonClick}
                    formatDuration={formatDuration}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Sidebar - Desktop */}
          <div className="xl:col-span-2">
            <div className="sticky hidden xl:block top-6">
              <LessonSidebar
                lessons={course.syllabus}
                currentLesson={currentLesson}
                onLessonClick={handleLessonClick}
                formatDuration={formatDuration}
              />
            </div>
          </div>

          {/* Content Area */}
          <div className="xl:col-span-5">
            {currentLesson ? (
              <VideoPlayer
                lesson={currentLesson}
                formatDuration={formatDuration}
                lessons={course.syllabus}
                onLessonChange={handleLessonClick}
              />
            ) : (
              <NoLessonSelected onStartLearning={handleStartLearning} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Lessons;