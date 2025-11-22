import React from 'react';
import StarRating from './StarRating';

const CourseHeader = ({ course, onEnroll, formatDuration, isEnrolled, navigate }) => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 border-b border-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column - Course Info */}
            <div className="lg:col-span-2">
              
              {/* Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  course.level === 'Advanced' ? 'bg-red-100 text-red-800 border border-red-200' :
                  course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' :
                  'bg-green-100 text-green-800 border border-green-200'
                }`}>
                  {course.level}
                </span>
                
                {/* Price Badge - Mobile */}
                <div className="lg:hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-xl font-bold">${course.price}</div>
                  <div className="text-xs opacity-90">USD</div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {course.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {course.short_description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border">
                  <StarRating rating={course.rating_average} id={course.id} />
                  <span className="text-lg font-semibold text-gray-900 ml-1">
                    {course.rating_average}
                  </span>
                  <span className="text-gray-500 text-sm">
                    ({course.enrollments.toLocaleString()} students)
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm border">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">{formatDuration(course.duration_hours)}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm border">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="font-medium">{course.total_lessons} lessons</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                {isEnrolled ? (
                  <button
                    onClick={() => navigate(`/course/${course.id}/lessons`)}
                    className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Continue Learning
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={onEnroll}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Enroll Now - ${course.price}
                  </button>
                )}
                
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Add to Wishlist
                </button>
              </div>

              {/* Guarantee & Features */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">30-Day Money-Back Guarantee</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Full lifetime access
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Certificate of completion
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Preview Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                
                {/* Video Preview */}
                <div className="relative group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center relative overflow-hidden">
                    {/* Video Thumbnail Placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Play Button */}
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 border border-white/30">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <span className="text-white font-medium text-sm tracking-wide">Watch Preview</span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium">
                      {formatDuration(course.duration_hours)}
                    </div>
                  </div>
                </div>

                {/* Price & Info */}
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <div className="text-4xl font-bold text-gray-900">${course.price}</div>
                      <div className="text-gray-500 text-lg">USD</div>
                    </div>
                    <div className="text-sm text-gray-500">One-time payment</div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Full lifetime access</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>30-Day money-back guarantee</span>
                    </div>
                  </div>

                  {/* Enroll Button */}
                  <button
                    onClick={isEnrolled ? () => navigate(`/course/${course.id}/lessons`) : onEnroll}
                    className={`w-full py-4 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl ${
                      isEnrolled 
                        ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    }`}
                  >
                    {isEnrolled ? 'Continue Learning' : `Enroll Now - $${course.price}`}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;