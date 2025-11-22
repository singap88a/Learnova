import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import instructorsData from '../../data/instructors.json';
import coursesData from '../../data/courses.json';

const InstructorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the instructor from instructors data
  const instructor = instructorsData.instructors.find(inst => inst.id === id);

  if (!instructor) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-full max-w-md p-8 text-center bg-white shadow-xl rounded-2xl">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full">
            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="mb-4 text-2xl font-bold text-gray-900">Instructor Not Found</h1>
          <p className="mb-6 text-gray-600">The instructor you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate('/instructors')}
            className="w-full px-4 py-3 font-medium text-white transition duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Back to Instructors
          </button>
        </div>
      </div>
    );
  }

  // Get courses by this instructor (safe default if courses missing)
  const instructorCourses = (coursesData.courses || []).filter(course => course.instructor?.id === id);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="">
        <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/instructors')}
            className="inline-flex items-center font-medium text-gray-600 transition duration-150 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Instructors
          </button>
        </div>
      </div>

      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Instructor Profile Header */}
        <div className="mb-8 overflow-hidden bg-white shadow-lg rounded-2xl">
          <div className="md:flex">
            {/* Avatar Section */}
            <div className="flex flex-col items-center justify-center p-8 md:w-1/3 bg-gradient-to-br from-indigo-50 to-purple-50">
              {instructor.avatar ? (
                <img
                  src={instructor.avatar}
                  alt={instructor.name}
                  className="object-cover w-48 h-48 mb-6 border-4 border-white rounded-full shadow-lg"
                />
              ) : (
                <div className="flex items-center justify-center w-48 h-48 mb-6 rounded-full shadow-lg bg-gradient-to-r from-indigo-500 to-purple-600">
                  <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              )}
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 mr-1 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-lg font-bold text-gray-900">{instructor.rating}</span>
                  <span className="ml-1 text-gray-500">({instructor.total_students.toLocaleString()})</span>
                </div>
                
                <div className="flex justify-center mt-4 space-x-4">
                  {instructor.social?.linkedin && (
                    <a href={instructor.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 transition duration-200 hover:text-indigo-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                  {instructor.social?.github && (
                    <a href={instructor.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 transition duration-200 hover:text-gray-900">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {instructor.social?.twitter && (
                    <a href={instructor.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 transition duration-200 hover:text-blue-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-8 md:w-2/3">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h1 className="mb-2 text-3xl font-bold text-gray-900">{instructor.name}</h1>
                  <p className="mb-4 text-xl font-medium text-indigo-600">{instructor.title}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      {instructor.location}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {instructor.experience_years} years experience
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${instructor.availability === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {instructor.availability}
                    </span>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 text-center rounded-lg bg-gray-50">
                      <div className="text-2xl font-bold text-gray-900">{instructor.total_students.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                    <div className="p-4 text-center rounded-lg bg-gray-50">
                      <div className="text-2xl font-bold text-gray-900">{instructorCourses.length}</div>
                      <div className="text-sm text-gray-600">Courses</div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => document.getElementById('courses-section').scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center justify-center w-full px-4 py-3 font-medium text-white transition duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700"
                  >
                    View Courses
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - About & Details */}
          <div className="space-y-8 lg:col-span-2">
            {/* Bio Section */}
            <div className="p-6 bg-white shadow-lg rounded-2xl">
              <h2 className="flex items-center mb-4 text-xl font-bold text-gray-900">
                <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                About
              </h2>
              <p className="leading-relaxed text-gray-700">{instructor.bio}</p>
            </div>

            {/* Teaching Philosophy Section */}
            {instructor.teaching_philosophy && (
              <div className="p-6 bg-white shadow-lg rounded-2xl">
                <h2 className="flex items-center mb-4 text-xl font-bold text-gray-900">
                  <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Teaching Philosophy
                </h2>
                <p className="leading-relaxed text-gray-700">{instructor.teaching_philosophy}</p>
              </div>
            )}

            {/* Courses Section */}
            <div id="courses-section" className="p-6 bg-white shadow-lg rounded-2xl">
              <h2 className="flex items-center mb-6 text-xl font-bold text-gray-900">
                <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Courses by {instructor.name}
              </h2>
              
              {instructorCourses.length > 0 ? (
                <div className="space-y-6">
                  {instructorCourses.map(course => (
                    <div key={course.id} className="overflow-hidden transition duration-200 border border-gray-200 rounded-xl hover:shadow-md">
                      <div className="md:flex">
                        <div className="flex items-center justify-center p-6 md:w-1/3 bg-gradient-to-r from-indigo-500 to-purple-600">
                          <div className="text-center text-white">
                            <div className="text-2xl font-bold">${course.price * 0.8}</div>
                            <div className="text-sm line-through opacity-75">${course.price}</div>
                          </div>
                        </div>
                        <div className="p-6 md:w-2/3">
                          <h3 className="mb-2 text-lg font-bold text-gray-900">{course.title}</h3>
                          <p className="mb-4 text-sm text-gray-600 line-clamp-2">{course.short_description}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {course.duration_hours}h
                              </div>
                              <div className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                {course.total_lessons} lessons
                              </div>
                              <div className="flex items-center">
                                <svg className="w-4 h-4 mr-1 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                {course.rating_average}
                              </div>
                            </div>
                            
                            <button
                              onClick={() => navigate(`/course/${course.id}`)}
                              className="px-4 py-2 font-medium text-white transition duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700"
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <h3 className="mb-2 text-lg font-medium text-gray-900">No courses available</h3>
                  <p className="text-gray-500">This instructor doesn't have any published courses yet.</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Details & Stats */}
          <div className="space-y-8">
            {/* Specializations Section */}
            {instructor.specializations && instructor.specializations.length > 0 && (
              <div className="p-6 bg-white shadow-lg rounded-2xl">
                <h2 className="flex items-center mb-4 text-xl font-bold text-gray-900">
                  <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Specializations
                </h2>
                <div className="flex flex-wrap gap-2">
                  {instructor.specializations.map((spec, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Education Section */}
            {instructor.education && (
              <div className="p-6 bg-white shadow-lg rounded-2xl">
                <h2 className="flex items-center mb-4 text-xl font-bold text-gray-900">
                  <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  Education
                </h2>
                <div>
                  <h3 className="font-semibold text-gray-900">{instructor.education.degree}</h3>
                  <p className="font-medium text-indigo-600">{instructor.education.university}</p>
                  <p className="text-sm text-gray-600">Graduated {instructor.education.graduation_year}</p>
                </div>
              </div>
            )}

            {/* Certifications Section */}
            {instructor.certifications && instructor.certifications.length > 0 && (
              <div className="p-6 bg-white shadow-lg rounded-2xl">
                <h2 className="flex items-center mb-4 text-xl font-bold text-gray-900">
                  <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Certifications
                </h2>
                <div className="space-y-3">
                  {instructor.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Languages Section */}
            {instructor.languages && instructor.languages.length > 0 && (
              <div className="p-6 bg-white shadow-lg rounded-2xl">
                <h2 className="flex items-center mb-4 text-xl font-bold text-gray-900">
                  <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  Languages
                </h2>
                <div className="flex flex-wrap gap-2">
                  {instructor.languages.map((language, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium text-gray-800 bg-gray-100 rounded-full"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Achievements Section */}
            {instructor.achievements && instructor.achievements.length > 0 && (
              <div className="p-6 bg-white shadow-lg rounded-2xl">
                <h2 className="flex items-center mb-4 text-xl font-bold text-gray-900">
                  <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Achievements
                </h2>
                <div className="space-y-3">
                  {instructor.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetails;