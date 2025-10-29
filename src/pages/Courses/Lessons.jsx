import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import coursesData from '../../data/courses.json';

const Lessons = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState(new Set()); // Mock completion tracking

  useEffect(() => {
    const foundCourse = coursesData.courses.find(c => c.id === id);
    if (foundCourse) {
      setCourse(foundCourse);
      // Set first lesson as current if available
      if (foundCourse.syllabus && foundCourse.syllabus.length > 0) {
        setCurrentLesson(foundCourse.syllabus[0]);
      }
    }
  }, [id]);

  const handleLessonClick = (lesson) => {
    setCurrentLesson(lesson);
  };

  const handleLessonComplete = (lessonId) => {
    setCompletedLessons(prev => new Set([...prev, lessonId]));
  };

  const formatDuration = (minutes) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return h > 0 ? `${h}h ${m}m` : `${m}m`;
  };

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-secondary">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 border-b-2 rounded-full animate-spin border-primary"></div>
          <p className="text-textSecondary">Loading course content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => navigate(`/course/${id}`)}
                className="flex items-center mr-4 text-gray-600 hover:text-gray-900"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Course
              </button>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">{course.title}</h1>
                <p className="text-sm text-gray-500">
                  Lesson {course.syllabus.findIndex(l => l.lesson_id === currentLesson?.lesson_id) + 1} of {course.syllabus.length}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                Progress: {completedLessons.size}/{course.syllabus.length} lessons
              </div>
              <div className="w-32 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 transition-all duration-300 rounded-full bg-primary"
                  style={{ width: `${(completedLessons.size / course.syllabus.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Lessons Sidebar */}
          <div className="lg:col-span-1">
            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Course Content</h3>
              <div className="space-y-2 overflow-y-auto max-h-96">
                {course.syllabus.map((lesson, index) => (
                  <button
                    key={lesson.lesson_id}
                    onClick={() => handleLessonClick(lesson)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                      currentLesson?.lesson_id === lesson.lesson_id
                        ? 'bg-primary text-white shadow-md'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5 ${
                        completedLessons.has(lesson.lesson_id)
                          ? 'bg-green-500 text-white'
                          : currentLesson?.lesson_id === lesson.lesson_id
                          ? 'bg-white text-primary'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {completedLessons.has(lesson.lesson_id) ? (
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          index + 1
                        )}
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className={`text-sm font-medium truncate ${
                          currentLesson?.lesson_id === lesson.lesson_id ? 'text-white' : 'text-gray-900'
                        }`}>
                          {lesson.title}
                        </h4>
                        <div className="flex items-center mt-1">
                          <span className={`text-xs ${
                            currentLesson?.lesson_id === lesson.lesson_id ? 'text-white/80' : 'text-gray-500'
                          }`}>
                            {formatDuration(lesson.duration_min)}
                          </span>
                          <span className={`ml-2 px-1.5 py-0.5 text-xs rounded ${
                            lesson.type === 'video'
                              ? currentLesson?.lesson_id === lesson.lesson_id
                                ? 'bg-white/20 text-white'
                                : 'bg-blue-100 text-blue-700'
                              : lesson.type === 'project'
                              ? currentLesson?.lesson_id === lesson.lesson_id
                                ? 'bg-white/20 text-white'
                                : 'bg-green-100 text-green-700'
                              : currentLesson?.lesson_id === lesson.lesson_id
                              ? 'bg-white/20 text-white'
                              : 'bg-purple-100 text-purple-700'
                          }`}>
                            {lesson.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Lesson Content */}
          <div className="lg:col-span-3">
            {currentLesson ? (
              <div className="overflow-hidden bg-white shadow-lg rounded-xl">
                {/* Video Player Placeholder */}
                <div className="relative bg-gray-900 aspect-video">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="w-20 h-20 mx-auto mb-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l.707.707A1 1 0 0012.414 11H15m-3 7.5A9.5 9.5 0 1121.5 12 9.5 9.5 0 0112 2.5z" />
                      </svg>
                      <h3 className="mb-2 text-xl font-semibold">{currentLesson.title}</h3>
                      <p className="mb-6 text-gray-300">Video content would be displayed here</p>
                      <button className="px-6 py-3 font-semibold text-white transition-colors rounded-lg bg-primary hover:bg-primary/90">
                        Play Video
                      </button>
                    </div>
                  </div>

                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-4">
                        <button className="p-2 transition-colors rounded-full hover:bg-white/20">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button className="p-3 transition-colors rounded-full bg-white/20 hover:bg-white/30">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l.707.707A1 1 0 0012.414 11H15m2 0h1a2 2 0 002-2V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2h1m0 4v6a2 2 0 002 2h1a2 2 0 002-2v-1" />
                          </svg>
                        </button>
                        <button className="p-2 transition-colors rounded-full hover:bg-white/20">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">0:00 / {formatDuration(currentLesson.duration_min)}</span>
                        <button className="p-2 transition-colors rounded-full hover:bg-white/20">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-2.828a9 9 0 010-12.728m-9 9a3 3 0 010 4.243m2.121-2.122a5 5 0 010-7.07" />
                          </svg>
                        </button>
                        <button className="p-2 transition-colors rounded-full hover:bg-white/20">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m0 0l-5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lesson Info */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="mb-2 text-2xl font-bold text-gray-900">{currentLesson.title}</h2>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Duration: {formatDuration(currentLesson.duration_min)}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          currentLesson.type === 'video' ? 'bg-blue-100 text-blue-700' :
                          currentLesson.type === 'project' ? 'bg-green-100 text-green-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {currentLesson.type}
                        </span>
                      </div>
                    </div>
                    {!completedLessons.has(currentLesson.lesson_id) && (
                      <button
                        onClick={() => handleLessonComplete(currentLesson.lesson_id)}
                        className="px-6 py-2 font-semibold text-white transition-colors bg-green-500 rounded-lg hover:bg-green-600"
                      >
                        Mark as Complete
                      </button>
                    )}
                  </div>

                  {/* Lesson Description */}
                  <div className="prose prose-gray max-w-none">
                    <p className="leading-relaxed text-gray-600">
                      This lesson covers the fundamental concepts of {currentLesson.title.toLowerCase()}.
                      You'll learn practical techniques and best practices that you can immediately apply to your projects.
                    </p>

                    {currentLesson.resources && currentLesson.resources.length > 0 && (
                      <div className="mt-6">
                        <h3 className="mb-3 text-lg font-semibold text-gray-900">Resources</h3>
                        <ul className="space-y-2">
                          {currentLesson.resources.map((resource, index) => (
                            <li key={index}>
                              <a
                                href="#"
                                className="flex items-center transition-colors text-primary hover:text-primary/80"
                              >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                {resource}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between pt-6 mt-8 border-t border-gray-200">
                    <button
                      onClick={() => {
                        const currentIndex = course.syllabus.findIndex(l => l.lesson_id === currentLesson.lesson_id);
                        if (currentIndex > 0) {
                          setCurrentLesson(course.syllabus[currentIndex - 1]);
                        }
                      }}
                      className="flex items-center px-4 py-2 text-gray-600 transition-colors rounded-lg hover:text-gray-900 hover:bg-gray-50"
                      disabled={course.syllabus.findIndex(l => l.lesson_id === currentLesson.lesson_id) === 0}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Previous Lesson
                    </button>

                    <button
                      onClick={() => {
                        const currentIndex = course.syllabus.findIndex(l => l.lesson_id === currentLesson.lesson_id);
                        if (currentIndex < course.syllabus.length - 1) {
                          setCurrentLesson(course.syllabus[currentIndex + 1]);
                        }
                      }}
                      className="flex items-center px-4 py-2 text-white transition-colors rounded-lg bg-primary hover:bg-primary/90"
                      disabled={course.syllabus.findIndex(l => l.lesson_id === currentLesson.lesson_id) === course.syllabus.length - 1}
                    >
                      Next Lesson
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center bg-white shadow-lg rounded-xl">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">No Lesson Selected</h3>
                <p className="text-gray-600">Select a lesson from the sidebar to start learning.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
