import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import coursesData from '../../data/courses.json';

const InstructorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the instructor from instructors data
  const instructor = coursesData.instructors.find(inst => inst.id === id);

  if (!instructor) {
    return (
      <div className="min-h-screen py-12 bg-secondary">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-textPrimary">Instructor Not Found</h1>
          <button
            onClick={() => navigate('/instructors')}
            className="px-6 py-2 font-semibold text-white transition-all duration-200 transform rounded-lg shadow-md bg-primary hover:bg-primary/90 hover:scale-105 hover:shadow-lg"
          >
            Back to Instructors
          </button>
        </div>
      </div>
    );
  }

  // Get courses by this instructor
  const instructorCourses = coursesData.courses.filter(course => course.instructor.id === id);

  return (
    <div className="min-h-screen py-12 bg-secondary">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            {/* Avatar */}
            <div className="flex-shrink-0">
              {instructor.avatar ? (
                <img
                  src={instructor.avatar}
                  alt={instructor.name}
                  className="object-cover w-48 h-48 border-4 rounded-full shadow-lg border-primary/20"
                />
              ) : (
                <div className="flex items-center justify-center w-48 h-48 rounded-full shadow-lg bg-gradient-to-r from-primary to-accent">
                  <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="mb-2 text-4xl font-bold text-textPrimary">{instructor.name}</h1>
              <p className="mb-4 text-xl font-medium text-primary">{instructor.title}</p>

              {/* Stats */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-6 md:justify-start">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-1 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-lg font-semibold text-textPrimary">{instructor.rating}</span>
                </div>
                <span className="text-textSecondary">•</span>
                <span className="text-textSecondary">{instructor.total_students.toLocaleString()} students</span>
                <span className="text-textSecondary">•</span>
                <span className="text-textSecondary">{instructor.experience_years} years experience</span>
              </div>

              {/* Location & Availability */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-6 text-sm md:justify-start text-textSecondary">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  {instructor.location}
                </div>
                <span className="text-textSecondary">•</span>
                <span className="font-medium text-green-600">{instructor.availability}</span>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 md:justify-start">
                {instructor.social?.linkedin && (
                  <a href={instructor.social.linkedin} target="_blank" rel="noopener noreferrer" className="transition duration-300 text-primary hover:text-accent">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
                {instructor.social?.github && (
                  <a href={instructor.social.github} target="_blank" rel="noopener noreferrer" className="transition duration-300 text-primary hover:text-accent">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
                {instructor.social?.twitter && (
                  <a href={instructor.social.twitter} target="_blank" rel="noopener noreferrer" className="transition duration-300 text-primary hover:text-accent">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                )}
                {instructor.social?.youtube && (
                  <a href={instructor.social.youtube} target="_blank" rel="noopener noreferrer" className="transition duration-300 text-primary hover:text-accent">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                )}
                {instructor.social?.website && (
                  <a href={instructor.social.website} target="_blank" rel="noopener noreferrer" className="transition duration-300 text-primary hover:text-accent">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                    </svg>
                  </a>
                )}
                {instructor.social?.dribbble && (
                  <a href={instructor.social.dribbble} target="_blank" rel="noopener noreferrer" className="transition duration-300 text-primary hover:text-accent">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm6.622 10.618c-.094.092-.164.19-.21.3-.045.11-.067.22-.067.33 0 .11.022.22.067.33.046.11.116.208.21.3.094.092.19.164.3.21.11.045.22.067.33.067.11 0 .22-.022.33-.067.11-.046.208-.118.3-.21.092-.094.164-.19.21-.3.045-.11.067-.22.067-.33 0-.11-.022-.22-.067-.33-.046-.11-.118-.208-.21-.3-.094-.092-.19-.164-.3-.21-.11-.045-.22-.067-.33-.067-.11 0-.22.022-.33.067-.11.046-.208.118-.3.21zm-6.622 6.382c-1.657 0-3.086-.552-4.287-1.656-.236-.236-.354-.515-.354-.83 0-.315.118-.594.354-.83.236-.236.515-.354.83-.354.315 0 .594.118.83.354.236.236.354.515.354.83 0 .315-.118.594-.354.83-.236.236-.515.354-.83.354zm6.622-6.382c-.11 0-.22.022-.33.067-.11.046-.208.118-.3.21-.092.094-.164.19-.21.3-.045.11-.067.22-.067.33 0 .11.022.22.067.33.046.11.116.208.21.3.094.092.19.164.3.21.11.045.22.067.33.067.11 0 .22-.022.33-.067.11-.046.208-.118.3-.21.092-.094.164-.19.21-.3.045-.11.067-.22.067-.33 0-.11-.022-.22-.067-.33-.046-.11-.118-.208-.21-.3-.094-.092-.19-.164-.3-.21-.11-.045-.22-.067-.33-.067z"/>
                    </svg>
                  </a>
                )}
                {instructor.social?.behance && (
                  <a href={instructor.social.behance} target="_blank" rel="noopener noreferrer" className="transition duration-300 text-primary hover:text-accent">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.151.078.472.078.498 0 .807h-8.536c.067.914.784 1.409 1.843 1.409 1.06 0 1.774-.545 2.221-1.843h2.858zm-11.726 0c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.151.078.472.078.498 0 .807h-8.536c.067.914.784 1.409 1.843 1.409 1.06 0 1.774-.545 2.221-1.843h2.858z"/>
                    </svg>
                  </a>
                )}
                {instructor.social?.instagram && (
                  <a href={instructor.social.instagram} target="_blank" rel="noopener noreferrer" className="transition duration-300 text-primary hover:text-accent">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="p-8 mb-12 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-textPrimary">About</h2>
          <p className="leading-relaxed text-textSecondary">{instructor.bio}</p>
        </div>

        {/* Specializations Section */}
        {instructor.specializations && instructor.specializations.length > 0 && (
          <div className="p-8 mb-12 bg-white rounded-lg shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-textPrimary">Specializations</h2>
            <div className="flex flex-wrap gap-3">
              {instructor.specializations.map((spec, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        {instructor.education && (
          <div className="p-8 mb-12 bg-white rounded-lg shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-textPrimary">Education</h2>
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-primary/10">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-textPrimary">{instructor.education.degree}</h3>
                <p className="font-medium text-primary">{instructor.education.university}</p>
                <p className="text-textSecondary">Graduated {instructor.education.graduation_year}</p>
              </div>
            </div>
          </div>
        )}

        {/* Certifications Section */}
        {instructor.certifications && instructor.certifications.length > 0 && (
          <div className="p-8 mb-12 bg-white rounded-lg shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-textPrimary">Certifications</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {instructor.certifications.map((cert, index) => (
                <div key={index} className="flex items-center p-4 space-x-3 rounded-lg bg-gray-50">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-accent/10">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-medium text-textPrimary">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Teaching Philosophy Section */}
        {instructor.teaching_philosophy && (
          <div className="p-8 mb-12 bg-white rounded-lg shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-textPrimary">Teaching Philosophy</h2>
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-accent/10">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="text-lg leading-relaxed text-textSecondary">{instructor.teaching_philosophy}</p>
            </div>
          </div>
        )}

        {/* Achievements Section */}
        {instructor.achievements && instructor.achievements.length > 0 && (
          <div className="p-8 mb-12 bg-white rounded-lg shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-textPrimary">Achievements</h2>
            <div className="space-y-4">
              {instructor.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 bg-yellow-100 rounded-full">
                    <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="leading-relaxed text-textSecondary">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Languages Section */}
        {instructor.languages && instructor.languages.length > 0 && (
          <div className="p-8 mb-12 bg-white rounded-lg shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-textPrimary">Languages</h2>
            <div className="flex flex-wrap gap-3">
              {instructor.languages.map((language, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm font-medium border border-gray-200 rounded-full bg-secondary text-textPrimary"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Courses Section */}
        <div className="p-8 mb-12 bg-white rounded-lg shadow-md">
          <h2 className="mb-8 text-3xl font-bold text-center text-textPrimary">
            Courses by {instructor.name}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {instructorCourses.map(course => (
              <div key={course.id} className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-2xl hover:border-primary/20 group">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-medium text-white">{course.rating_average}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors line-clamp-2 group-hover:text-primary">
                    {course.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                    {course.short_description}
                  </p>
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
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
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-primary">
                        ${course.price * 0.8}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        ${course.price}
                      </span>
                    </div>
                    <button
                      onClick={() => navigate(`/course/${course.id}`)}
                      className="px-6 py-2 font-semibold text-white transition-all duration-200 transform rounded-lg shadow-md bg-primary hover:bg-primary/90 hover:scale-105 hover:shadow-lg"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate('/instructors')}
            className="px-8 py-3 font-semibold text-white transition duration-300 rounded-md bg-primary hover:bg-accent"
          >
            Back to All Instructors
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetails;
