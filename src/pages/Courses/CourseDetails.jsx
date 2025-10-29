import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import coursesData from '../../data/courses.json';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false); // Mock enrollment status

  useEffect(() => {
    const foundCourse = coursesData.courses.find(c => c.id === id);
    if (foundCourse) {
      setCourse(foundCourse);
    }
  }, [id]);

  const formatDuration = (hours) => {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h}h ${m}m`;
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <defs>
            <linearGradient id={`half-${id}`}>
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path fill={`url(#half-${id})`} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  const handleEnroll = () => {
    // Mock enrollment process
    setIsEnrolled(true);
    // In real app, this would handle payment and enrollment
  };

  const handleWatchLessons = () => {
    if (isEnrolled) {
      navigate(`/course/${id}/lessons`);
    }
  };

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-secondary">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 border-b-2 rounded-full animate-spin border-primary"></div>
          <p className="text-textSecondary">Loading course details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <div className="relative text-white bg-gradient-to-br from-primary via-primary/90 to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center mb-4 space-x-4">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  course.level === 'Advanced' ? 'bg-red-500 text-white' :
                  course.level === 'Intermediate' ? 'bg-yellow-500 text-white' :
                  'bg-green-500 text-white'
                }`}>
                  {course.level}
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/20">
                  {course.category}
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
                {course.title}
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-white/90">
                {course.short_description}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center">
                  <div className="flex items-center mr-2">
                    {renderStars(course.rating_average)}
                  </div>
                  <span className="text-lg font-semibold">{course.rating_average}</span>
                  <span className="ml-2 text-white/80">({course.enrollments.toLocaleString()} students)</span>
                </div>

                <div className="flex items-center text-white/80">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {formatDuration(course.duration_hours)}
                </div>

                <div className="flex items-center text-white/80">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {course.total_lessons} lessons
                </div>
              </div>

              {/* Instructor Info */}
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-white/20">
                  <span className="text-lg font-bold text-white">
                    {course.instructor.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-semibold">{course.instructor.name}</p>
                  <p className="text-white/80">{course.instructor.title}</p>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">${course.price}</span>
                  <span className="ml-2 text-white/80">USD</span>
                </div>
                <div className="flex gap-3">
                  {!isEnrolled ? (
                    <button
                      onClick={handleEnroll}
                      className="px-8 py-3 font-semibold transition-all duration-200 transform bg-white rounded-lg shadow-lg text-primary hover:bg-gray-100 hover:scale-105"
                    >
                      Enroll Now
                    </button>
                  ) : (
                    <button
                      onClick={handleWatchLessons}
                      className="px-8 py-3 font-semibold text-white transition-all duration-200 transform bg-green-500 rounded-lg shadow-lg hover:bg-green-600 hover:scale-105"
                    >
                      Watch Lessons
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Course Preview Image */}
            <div className="lg:ml-auto">
              <div className="relative">
                <div className="p-8 border bg-white/10 backdrop-blur-sm rounded-2xl border-white/20">
                  <div className="flex items-center justify-center aspect-video bg-white/20 rounded-xl">
                    <svg className="w-24 h-24 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-white/80">Course Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="p-8 mb-8 bg-white shadow-lg rounded-xl">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Course Description</h2>
              <p className="mb-6 leading-relaxed text-gray-600">
                {course.long_description}
              </p>

              {/* Learning Outcomes */}
              <div className="mb-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">What You'll Learn</h3>
                <ul className="space-y-3">
                  {course.learning_outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{outcome}</span>
                    </li>
                  ))}
                </ul>
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

            {/* Syllabus */}
            <div className="p-8 mb-8 bg-white shadow-lg rounded-xl">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Course Syllabus</h2>
              <div className="space-y-4">
                {course.syllabus.map((lesson, index) => (
                  <div key={lesson.lesson_id} className="flex items-start p-4 transition-colors border border-gray-100 rounded-lg hover:border-primary/20">
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-4 rounded-full bg-primary/10">
                      <span className="text-sm font-semibold text-primary">{index + 1}</span>
                    </div>
                    <div className="flex-grow">
                      <h4 className="mb-1 font-semibold text-gray-900">{lesson.title}</h4>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium mr-3 ${
                          lesson.type === 'video' ? 'bg-blue-100 text-blue-700' :
                          lesson.type === 'project' ? 'bg-green-100 text-green-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {lesson.type}
                        </span>
                        <span>{lesson.duration_min} min</span>
                      </div>
                    </div>
                    {isEnrolled && (
                      <button className="flex-shrink-0 px-4 py-2 ml-4 text-sm text-white transition-colors rounded-lg bg-primary hover:bg-primary/90">
                        Watch
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Student Reviews</h2>
              <div className="space-y-6">
                {course.reviews.map((review) => (
                  <div key={review.review_id} className="pb-6 border-b border-gray-100 last:border-b-0 last:pb-0">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-primary/20">
                        <span className="font-semibold text-primary">
                          {review.user.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{review.user}</h4>
                          <div className="flex items-center">
                            {renderStars(review.rating)}
                            <span className="ml-2 text-sm text-gray-500">{review.rating}</span>
                          </div>
                        </div>
                        <p className="mb-2 text-gray-600">{review.comment}</p>
                        <p className="text-sm text-gray-400">{new Date(review.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky p-6 bg-white shadow-lg rounded-xl top-8">
              <h3 className="mb-6 text-xl font-bold text-gray-900">Course Features</h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Lifetime access</span>
                </div>

                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">Certificate of completion</span>
                </div>

                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">Mobile and desktop access</span>
                </div>

                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">24/7 support</span>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-8">
                <h4 className="mb-3 font-semibold text-gray-900">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Courses */}
              {course.related_courses && course.related_courses.length > 0 && (
                <div className="mt-8">
                  <h4 className="mb-3 font-semibold text-gray-900">Related Courses</h4>
                  <div className="space-y-2">
                    {course.related_courses.map((relatedId) => {
                      const relatedCourse = coursesData.courses.find(c => c.id === relatedId);
                      return relatedCourse ? (
                        <button
                          key={relatedId}
                          onClick={() => navigate(`/course/${relatedId}`)}
                          className="w-full p-3 text-left transition-colors border border-gray-100 rounded-lg hover:border-primary/20"
                        >
                          <h5 className="text-sm font-medium text-gray-900">{relatedCourse.title}</h5>
                          <p className="mt-1 text-xs text-gray-500">${relatedCourse.price} USD</p>
                        </button>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
