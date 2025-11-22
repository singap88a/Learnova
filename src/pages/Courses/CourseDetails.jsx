import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import coursesData from '../../data/courses.json';
import { useAuth } from '../../hooks/useAuth';

// مكونات فرعية لتحسين التنظيم
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
      <p className="text-gray-600">جاري تحميل تفاصيل الدورة...</p>
    </div>
  </div>
);

const StarRating = ({ rating, id }) => {
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

  return <div className="flex items-center">{stars}</div>;
};

const CourseHeader = ({ course, onEnroll, formatDuration }) => (
  <div className="relative overflow-hidden text-white bg-gradient-to-br from-blue-700 via-blue-600 to-purple-700">
    <div className="absolute inset-0 bg-black/20"></div>
    <div className="absolute top-0 right-0 w-64 h-64 transform translate-x-32 -translate-y-32 rounded-full bg-white/10"></div>
    <div className="absolute bottom-0 left-0 transform -translate-x-48 translate-y-48 rounded-full w-96 h-96 bg-white/5"></div>

    <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="relative z-10">
          <div className="flex items-center mb-4 space-x-4 space-x-reverse">
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
              <StarRating rating={course.rating_average} id={course.id} />
              <span className="ml-2 text-lg font-semibold">{course.rating_average}</span>
              <span className="mr-2 text-white/80">({course.enrollments.toLocaleString()} طالب)</span>
            </div>

            <div className="flex items-center text-white/80">
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {formatDuration(course.duration_hours)}
            </div>

            <div className="flex items-center text-white/80">
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {course.total_lessons} درس
            </div>
          </div>

          {/* Instructor Info */}
          <div className="flex items-center mb-8">
            <div className="flex items-center justify-center w-12 h-12 ml-4 rounded-full bg-white/20">
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
              <span className="mr-2 text-white/80">دولار</span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={onEnroll}
                className="px-8 py-3 font-semibold text-blue-600 transition-all duration-200 transform bg-white rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                اشترك الآن
              </button>
              <button className="px-6 py-3 font-semibold text-white transition-all duration-200 border-2 border-white rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white">
                أضف إلى المفضلة
              </button>
            </div>
          </div>
        </div>

        {/* Course Preview Image */}
        <div className="lg:ml-auto">
          <div className="relative">
            <div className="p-8 border bg-white/10 backdrop-blur-sm rounded-2xl border-white/20 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="relative flex items-center justify-center overflow-hidden cursor-pointer aspect-video bg-white/20 rounded-xl group">
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100">
                  <div className="flex items-center justify-center w-16 h-16 transition-transform duration-300 transform rounded-full bg-white/90 group-hover:scale-110">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <svg className="w-24 h-24 transition-opacity duration-300 text-white/60 group-hover:opacity-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-white/80">معاينة الدورة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CourseContent = ({ course, isEnrolled, formatDuration, navigate }) => (
  <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
      {/* Main Content */}
      <div className="lg:col-span-2">
        {/* Description */}
        <div className="p-8 mb-8 bg-white shadow-xl rounded-2xl">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">وصف الدورة</h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-600">
            {course.long_description}
          </p>

          {/* Learning Outcomes */}
          <div className="mb-6">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">ما ستتعلمه</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {course.learning_outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start p-3 rounded-lg bg-gray-50">
                  <svg className="w-5 h-5 text-green-500 ml-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          <div className="mb-6">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">المتطلبات الأساسية</h3>
            <ul className="space-y-2">
              {course.prerequisites.map((prereq, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 ml-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">{prereq}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Syllabus */}
        <div className="p-8 mb-8 bg-white shadow-xl rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">منهج الدورة</h2>
            <div className="flex items-center text-gray-500">
              <span className="ml-2">{course.total_lessons} درس</span>
              <span> • </span>
              <span className="mr-2">{formatDuration(course.duration_hours)}</span>
            </div>
          </div>
          <div className="space-y-3">
            {course.syllabus.map((lesson, index) => (
              <div key={lesson.lesson_id} className="flex items-start p-4 transition-all border border-gray-100 rounded-xl hover:border-blue-200 hover:bg-blue-50 group">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 ml-4 transition-colors bg-blue-100 rounded-full group-hover:bg-blue-200">
                  <span className="text-sm font-semibold text-blue-600">{index + 1}</span>
                </div>
                <div className="flex-grow">
                  <h4 className="mb-1 font-semibold text-gray-900">{lesson.title}</h4>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ml-3 ${
                      lesson.type === 'video' ? 'bg-blue-100 text-blue-700' :
                      lesson.type === 'project' ? 'bg-green-100 text-green-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {lesson.type === 'video' ? 'فيديو' : 
                       lesson.type === 'project' ? 'مشروع' : 'مقال'}
                    </span>
                    <span>{lesson.duration_min} دقيقة</span>
                  </div>
                </div>
                {isEnrolled ? (
                  <button className="flex-shrink-0 px-4 py-2 text-sm text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
                    شاهد
                  </button>
                ) : (
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="p-8 bg-white shadow-xl rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">تقييمات الطلاب</h2>
            <div className="flex items-center">
              <StarRating rating={course.rating_average} id={course.id} />
              <span className="mr-2 text-lg font-semibold">{course.rating_average}</span>
              <span className="text-gray-500">({course.reviews.length} تقييم)</span>
            </div>
          </div>
          <div className="space-y-6">
            {course.reviews.map((review) => (
              <div key={review.review_id} className="pb-6 border-b border-gray-100 last:border-b-0 last:pb-0">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 ml-4 bg-blue-100 rounded-full">
                    <span className="font-semibold text-blue-600">
                      {review.user.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{review.user}</h4>
                      <div className="flex items-center">
                        <StarRating rating={review.rating} id={review.review_id} />
                        <span className="mr-2 text-sm text-gray-500">{review.rating}</span>
                      </div>
                    </div>
                    <p className="mb-2 text-gray-600">{review.comment}</p>
                    <p className="text-sm text-gray-400">{new Date(review.date).toLocaleDateString('ar-EG')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        <div className="sticky p-6 bg-white shadow-xl rounded-2xl top-8">
          <h3 className="mb-6 text-xl font-bold text-gray-900">مميزات الدورة</h3>

          <div className="space-y-4">
            <div className="flex items-center p-3 rounded-lg bg-gray-50">
              <svg className="w-5 h-5 ml-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">وصول مدى الحياة</span>
            </div>

            <div className="flex items-center p-3 rounded-lg bg-gray-50">
              <svg className="w-5 h-5 ml-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700">شهادة إتمام</span>
            </div>

            <div className="flex items-center p-3 rounded-lg bg-gray-50">
              <svg className="w-5 h-5 ml-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-700">وصول عبر الجوال والكمبيوتر</span>
            </div>

            <div className="flex items-center p-3 rounded-lg bg-gray-50">
              <svg className="w-5 h-5 ml-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700">دعم فني 24/7</span>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8">
            <h4 className="mb-3 font-semibold text-gray-900">الكلمات الدلالية</h4>
            <div className="flex flex-wrap gap-2">
              {course.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 text-sm text-gray-600 transition-colors bg-gray-100 rounded-full cursor-pointer hover:bg-blue-100 hover:text-blue-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Course */}
          <div className="mt-8">
            <h4 className="mb-3 font-semibold text-gray-900">شارك الدورة</h4>
            <div className="flex gap-2">
              <button className="flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-full hover:bg-blue-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button className="flex items-center justify-center w-10 h-10 text-white bg-blue-400 rounded-full hover:bg-blue-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                </svg>
              </button>
              <button className="flex items-center justify-center w-10 h-10 text-white bg-red-500 rounded-full hover:bg-red-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Related Courses */}
          {course.related_courses && course.related_courses.length > 0 && (
            <div className="mt-8">
              <h4 className="mb-3 font-semibold text-gray-900">دورات ذات صلة</h4>
              <div className="space-y-3">
                {course.related_courses.map((relatedId) => {
                  const relatedCourse = coursesData.courses.find(c => c.id === relatedId);
                  return relatedCourse ? (
                    <button
                      key={relatedId}
                      onClick={() => navigate(`/course/${relatedId}`)}
                      className="w-full p-3 text-right transition-all border border-gray-100 rounded-xl hover:border-blue-200 hover:bg-blue-50 group"
                    >
                      <h5 className="text-sm font-medium text-gray-900 group-hover:text-blue-700">{relatedCourse.title}</h5>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-500">${relatedCourse.price} دولار</span>
                        <StarRating rating={relatedCourse.rating_average} id={relatedCourse.id} />
                      </div>
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
);

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useAuth();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    // محاكاة جلب البيانات من API
    const fetchCourse = async () => {
      setLoading(true);
      try {
        // في التطبيق الحقيقي، هنا سيتم جلب البيانات من API
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

  // التحقق من حالة الاشتراك
  useEffect(() => {
    if (user) {
      const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
      setIsEnrolled(enrolledCourses.includes(id));
    }
  }, [id, user]);

  const formatDuration = (hours) => {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h} ساعة ${m} دقيقة`;
  };

  const handleEnroll = () => {
    // الانتقال إلى صفحة الشراء
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
          <h2 className="mb-2 text-xl font-semibold text-gray-700">الدورة غير موجودة</h2>
          <p className="mb-4 text-gray-500">عذراً، لم نتمكن من العثور على الدورة المطلوبة.</p>
          <button 
            onClick={() => navigate('/courses')}
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            العودة إلى الدورات
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <CourseHeader
        course={course}
        isEnrolled={isEnrolled}
        onEnroll={handleEnroll}
        onWatchLessons={handleWatchLessons}
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