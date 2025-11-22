import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import coursesData from '../../data/courses.json';

const PurchaseSuccess = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundCourse = coursesData.courses.find(c => c.id === id);
    setCourse(foundCourse);
    
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, [id]);

  useEffect(() => {
    if (course) {
      const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
      if (!enrolledCourses.includes(id)) {
        enrolledCourses.push(id);
        localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
        
        const courseProgress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
        if (!courseProgress[id]) {
          courseProgress[id] = {
            progress: 0,
            completedLessons: [],
            lastAccessed: new Date().toISOString(),
            enrolledAt: new Date().toISOString()
          };
          localStorage.setItem('courseProgress', JSON.stringify(courseProgress));
        }
      }
    }
  }, [course, id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen ">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
          <p className="text-gray-600">Processing your purchase...</p>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 ">
        <div className="w-full max-w-md p-8 text-center bg-white shadow-lg rounded-2xl">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full">
            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-gray-900">Course Not Found</h2>
          <p className="mb-6 text-gray-600">The course you're looking for is not available or has been removed.</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <button
              onClick={() => navigate('/courses')}
              className="px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Browse Courses
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 font-medium text-gray-700 transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl px-4 py-8 mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="relative inline-block mb-6">
            <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full shadow-2xl bg-gradient-to-br from-green-500 to-emerald-600">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="absolute -top-2 -right-2">
              <span className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full shadow-lg animate-bounce">
                <span className="text-xl">🎉</span>
              </span>
            </div>
          </div>

          <h1 className="mb-4 text-4xl font-bold text-gray-900">Welcome to the Course!</h1>
          <p className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-600">
            You're now enrolled in <span className="font-semibold text-blue-600">{course.title}</span>. 
            Start your learning journey immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Course Card */}
            <div className="overflow-hidden bg-white border border-gray-100 shadow-xl rounded-2xl">
              <div className="p-8">
                <div className="flex flex-col gap-8 md:flex-row">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="flex-shrink-0 object-cover w-full h-48 shadow-md md:w-48 rounded-xl"
                  />
                  <div className="flex-1">
                    <h2 className="mb-4 text-2xl font-bold text-gray-900">{course.title}</h2>
                    <p className="mb-6 leading-relaxed text-gray-600">
                      {course.description || "Join thousands of learners who have advanced their skills through this premium course."}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6 md:grid-cols-3">
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="font-medium">{course.instructor?.name || "Expert Instructor"}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{course.duration_hours || 10}h</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{course.total_lessons || 24} lessons</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex mr-2 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="font-medium text-gray-600">{course.rating || 4.8}</span>
                      <span className="ml-1 text-gray-500">({course.reviews?.length || 124})</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="p-8 bg-white border border-gray-100 shadow-xl rounded-2xl">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">Start Learning Now</h2>
              <p className="mb-8 text-gray-600">Get the most out of your course with these next steps</p>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="p-6 transition-shadow border border-blue-100 bg-blue-50 rounded-xl hover:shadow-md">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 mr-4 bg-blue-500 rounded-lg shadow-md">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-gray-900">Watch First Lessons</h3>
                      <p className="text-sm text-gray-600">Begin with introductory content</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 transition-shadow border border-green-100 bg-green-50 rounded-xl hover:shadow-md">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 mr-4 bg-green-500 rounded-lg shadow-md">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-gray-900">Earn Certificate</h3>
                      <p className="text-sm text-gray-600">Complete all lessons for certification</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 transition-shadow border border-purple-100 bg-purple-50 rounded-xl hover:shadow-md">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 mr-4 bg-purple-500 rounded-lg shadow-md">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-gray-900">Join Community</h3>
                      <p className="text-sm text-gray-600">Connect with instructor and peers</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 transition-shadow border border-orange-100 bg-orange-50 rounded-xl hover:shadow-md">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 mr-4 bg-orange-500 rounded-lg shadow-md">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-gray-900">Track Progress</h3>
                      <p className="text-sm text-gray-600">Monitor your learning journey</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="p-6 bg-white border border-gray-100 shadow-xl rounded-2xl">
              <h3 className="mb-6 text-xl font-bold text-gray-900">Quick Actions</h3>
              <div className="space-y-4">
                <button
                  onClick={() => navigate(`/course/${id}/lessons`)}
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                  Start Learning
                </button>
                
                <button
                  onClick={() => navigate('/courses')}
                  className="flex items-center justify-center w-full px-6 py-3 font-medium text-gray-700 transition-colors bg-white border border-gray-300 rounded-xl hover:bg-gray-50"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Browse More Courses
                </button>
                
                <button
                  onClick={() => navigate('/dashboard')}
                  className="flex items-center justify-center w-full px-6 py-3 font-medium text-gray-700 transition-colors bg-white border border-gray-300 rounded-xl hover:bg-gray-50"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Go to Dashboard
                </button>
              </div>
            </div>

            {/* Course Benefits */}
            <div className="p-6 border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 mr-3 bg-blue-500 rounded-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-blue-900">What You Get</h3>
              </div>
              <ul className="space-y-3 text-sm text-blue-800">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Lifetime access with future updates
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Certificate of completion
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Downloadable resources
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 support access
                </li>
              </ul>
            </div>

            {/* Guarantee */}
            <div className="p-6 border border-green-200 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-lg font-bold text-green-900">30-Day Guarantee</h3>
              </div>
              <p className="text-sm text-green-800">
                Full refund available if you're not satisfied within 30 days of purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSuccess;