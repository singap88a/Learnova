import React, { useState } from 'react';
import StarRating from './StarRating';
import coursesData from '../../../data/courses.json';
import CourseSidebar from './CourseSidebar';

const CourseContent = ({ course, isEnrolled, formatDuration, navigate }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const TabButton = ({ id, label, icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
        activeTab === id
          ? 'bg-blue-100 text-blue-700'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
      }`}
    >
      <svg className={`w-5 h-5 mr-2 ${activeTab === id ? 'text-blue-600' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {icon}
      </svg>
      {label}
    </button>
  );

  return (
    <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Tab Navigation */}
          <div className="flex mb-8 overflow-x-auto bg-white shadow-sm rounded-xl">
            <TabButton
              id="overview"
              label="Overview"
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />}
            />
            <TabButton
              id="curriculum"
              label="Curriculum"
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />}
            />
            <TabButton
              id="instructor"
              label="Instructor"
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />}
            />
            <TabButton
              id="reviews"
              label="Reviews"
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />}
            />
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Description */}
              <div className="p-8 bg-white shadow-xl rounded-2xl">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Course Description</h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-600">
                  {course.long_description}
                </p>

                {/* Learning Outcomes */}
                <div className="mb-6">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">What You'll Learn</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {course.learning_outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start p-3 rounded-lg bg-gray-50">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prerequisites */}
                <div className="mb-6">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">Prerequisites</h3>
                  <ul className="space-y-2">
                    {course.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">{prereq}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'curriculum' && (
            <div className="p-8 bg-white shadow-xl rounded-2xl">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Course Curriculum</h2>
              <div className="space-y-4">
                {course.modules && course.modules.map((module, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between p-4 rounded-t-lg bg-gray-50">
                      <h3 className="font-semibold text-gray-900">{module.title}</h3>
                      <span className="text-sm text-gray-500">{module.lessons} lessons • {formatDuration(module.duration)}</span>
                    </div>
                    <div className="p-4">
                      {module.lessons_list && module.lessons_list.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                          <div className="flex items-center">
                            {isEnrolled ? (
                              <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            )}
                            <span className="text-gray-700">{lesson.title}</span>
                          </div>
                          <span className="text-sm text-gray-500">{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'instructor' && (
            <div className="p-8 bg-white shadow-xl rounded-2xl">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">About the Instructor</h2>
              <div className="flex flex-col items-center md:flex-row md:items-start">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <div className="flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full">
                    <span className="text-2xl font-bold text-blue-600">
                      {course.instructor.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{course.instructor.name}</h3>
                  <p className="mb-4 text-gray-600">{course.instructor.title}</p>
                  <p className="text-gray-700">{course.instructor.bio}</p>

                  <div className="flex flex-wrap gap-4 mt-6">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-sm text-gray-600">{course.instructor.students} students</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-sm text-gray-600">{course.instructor.courses} courses</span>
                    </div>
                    <div className="flex items-center">
                      <StarRating rating={course.instructor.rating} id={`instructor-${course.id}`} />
                      <span className="ml-2 text-sm text-gray-600">{course.instructor.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="p-8 bg-white shadow-xl rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Student Reviews</h2>
                <div className="flex items-center">
                  <StarRating rating={course.rating_average} id={course.id} />
                  <span className="ml-2 text-lg font-semibold">{course.rating_average}</span>
                  <span className="ml-2 text-gray-500">({course.reviews.length} reviews)</span>
                </div>
              </div>
              <div className="space-y-6">
                {course.reviews.map((review) => (
                  <div key={review.review_id} className="pb-6 border-b border-gray-100 last:border-b-0 last:pb-0">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 mr-4 bg-blue-100 rounded-full">
                        <span className="font-semibold text-blue-600">
                          {review.user.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{review.user}</h4>
                          <div className="flex items-center">
                            <StarRating rating={review.rating} id={review.review_id} />
                            <span className="ml-2 text-sm text-gray-500">{review.rating}</span>
                          </div>
                        </div>
                        <p className="mb-2 text-gray-600">{review.comment}</p>
                        <p className="text-sm text-gray-400">{new Date(review.date).toLocaleDateString('en-US')}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
            <CourseSidebar course={course} navigate={navigate} />
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
