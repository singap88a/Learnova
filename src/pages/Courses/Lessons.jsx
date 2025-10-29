import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import coursesData from '../../data/courses.json';

// مكونات فرعية لتحسين التنظيم
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
      <p className="text-gray-600">جاري تحميل محتوى الدورة...</p>
    </div>
  </div>
);

const ProgressBar = ({ completed, total }) => {
  const percentage = (completed / total) * 100;
  
  return (
    <div className="flex items-center space-x-4 space-x-reverse">
      <div className="text-sm text-gray-600">
        التقدم: {completed}/{total} درس
      </div>
      <div className="w-32 h-3 overflow-hidden bg-gray-200 rounded-full">
        <div
          className="h-3 transition-all duration-500 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="text-sm font-medium text-gray-700">{Math.round(percentage)}%</span>
    </div>
  );
};

const LessonSidebar = ({ 
  lessons, 
  currentLesson, 
  completedLessons, 
  onLessonClick, 
  formatDuration 
}) => (
  <div className="p-6 bg-white shadow-xl rounded-2xl">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-bold text-gray-900">محتوى الدورة</h3>
      <span className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full">
        {lessons.length} درس
      </span>
    </div>
    
    <div className="space-y-3 overflow-y-auto max-h-[500px]">
      {lessons.map((lesson, index) => {
        const isActive = currentLesson?.lesson_id === lesson.lesson_id;
        const isCompleted = completedLessons.has(lesson.lesson_id);
        
        return (
          <button
            key={lesson.lesson_id}
            onClick={() => onLessonClick(lesson)}
            className={`w-full text-right p-4 rounded-xl transition-all duration-300 group ${
              isActive
                ? 'bg-gradient-to-l from-blue-600 to-blue-500 text-white shadow-lg transform scale-[1.02]'
                : 'hover:bg-gray-50 text-gray-700 hover:shadow-md border border-transparent hover:border-gray-200'
            }`}
          >
            <div className="flex items-start">
              <div className="flex-grow min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`text-sm font-semibold truncate ${
                    isActive ? 'text-white' : 'text-gray-900'
                  }`}>
                    {lesson.title}
                  </h4>
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium mr-3 ${
                    isCompleted
                      ? 'bg-green-500 text-white'
                      : isActive
                      ? 'bg-white text-blue-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {isCompleted ? (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <span className={`text-xs ${
                      isActive ? 'text-white/90' : 'text-gray-500'
                    }`}>
                      {formatDuration(lesson.duration_min)}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                      lesson.type === 'video'
                        ? isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-blue-100 text-blue-700'
                        : lesson.type === 'project'
                        ? isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-green-100 text-green-700'
                        : isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {lesson.type === 'video' ? 'فيديو' : 
                       lesson.type === 'project' ? 'مشروع' : 'مقال'}
                    </span>
                  </div>
                  
                  {isCompleted && !isActive && (
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  </div>
);

const VideoPlayer = ({ lesson, onComplete, isCompleted, formatDuration, lessons, onLessonChange }) => (
  <div className="overflow-hidden bg-white shadow-xl rounded-2xl">
    {/* Video Player */}
    <div className="relative bg-gray-900 aspect-video group">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="relative mb-6">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 transition-transform duration-300 rounded-full bg-white/10 group-hover:scale-110">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <div className="absolute inset-0 border-4 rounded-full border-white/30 animate-ping"></div>
          </div>
          <h3 className="mb-2 text-2xl font-bold">{lesson.title}</h3>
          <p className="mb-6 text-gray-300">انقر للبدء في مشاهدة الفيديو</p>
          <button className="px-8 py-3 font-semibold text-white transition-all duration-300 transform bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105">
            تشغيل الفيديو
          </button>
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/90 to-transparent group-hover:opacity-100">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center space-x-4 space-x-reverse">
            <button className="p-3 transition-all duration-200 rounded-full hover:bg-white/20 hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-4 transition-all duration-200 rounded-full bg-white/20 hover:bg-white/30 hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l.707.707A1 1 0 0012.414 11H15m2 0h1a2 2 0 002-2V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2h1m0 4v6a2 2 0 002 2h1a2 2 0 002-2v-1" />
              </svg>
            </button>
            <button className="p-3 transition-all duration-200 rounded-full hover:bg-white/20 hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="flex items-center space-x-2 space-x-reverse">
              <span className="text-sm">0:00</span>
              <div className="w-64 h-1 overflow-hidden rounded-full bg-white/30">
                <div className="w-1/3 h-1 bg-white rounded-full"></div>
              </div>
              <span className="text-sm">{formatDuration(lesson.duration_min)}</span>
            </div>
            
            <div className="flex items-center space-x-2 space-x-reverse">
              <button className="p-2 transition-all duration-200 rounded-full hover:bg-white/20 hover:scale-110">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-2.828a9 9 0 010-12.728m-9 9a3 3 0 010 4.243m2.121-2.122a5 5 0 010-7.07" />
                </svg>
              </button>
              <button className="p-2 transition-all duration-200 rounded-full hover:bg-white/20 hover:scale-110">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m0 0l-5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Lesson Info */}
    <div className="p-8">
      <div className="flex items-start justify-between mb-6">
        <div className="flex-grow">
          <div className="flex items-center mb-4 space-x-4 space-x-reverse">
            <h2 className="text-2xl font-bold text-gray-900">{lesson.title}</h2>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              lesson.type === 'video' ? 'bg-blue-100 text-blue-700' :
              lesson.type === 'project' ? 'bg-green-100 text-green-700' :
              'bg-purple-100 text-purple-700'
            }`}>
              {lesson.type === 'video' ? 'فيديو' : 
               lesson.type === 'project' ? 'مشروع' : 'مقال'}
            </span>
          </div>
          
          <div className="flex items-center space-x-6 space-x-reverse text-sm text-gray-600">
            <div className="flex items-center">
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              المدة: {formatDuration(lesson.duration_min)}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              المستوى: {lesson.level || 'متوسط'}
            </div>
          </div>
        </div>
        
        {!isCompleted && (
          <button
            onClick={onComplete}
            className="flex items-center px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-green-500 rounded-lg shadow-lg hover:bg-green-600 hover:scale-105"
          >
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            تم الإكمال
          </button>
        )}
        
        {isCompleted && (
          <div className="flex items-center px-4 py-2 text-green-700 bg-green-100 rounded-lg">
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            مكتمل
          </div>
        )}
      </div>

      {/* Lesson Description */}
      <div className="mb-8">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">عن هذا الدرس</h3>
        <div className="p-4 bg-gray-50 rounded-xl">
          <p className="text-lg leading-relaxed text-gray-700">
            هذا الدرس يغطي المفاهيم الأساسية لـ {lesson.title.toLowerCase()}.
            ستتعلم تقنيات عملية وأفضل الممارسات التي يمكنك تطبيقها فوراً على مشاريعك.
          </p>
        </div>
      </div>

      {/* Resources */}
      <div className="p-6 bg-blue-50 rounded-xl">
        <h3 className="mb-4 text-lg font-semibold text-blue-900">الموارد التعليمية</h3>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {[
            'ملفات المصدر للتحميل',
            'الشرائح التقديمية',
            'المراجع والروابط',
            'تمارين عملية'
          ].map((resource, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center p-3 transition-all duration-200 bg-white rounded-lg hover:shadow-md group"
            >
              <div className="flex items-center justify-center w-10 h-10 ml-3 text-blue-600 transition-colors bg-blue-100 rounded-lg group-hover:bg-blue-600 group-hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="font-medium text-gray-700 group-hover:text-blue-600">{resource}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <LessonNavigation
        currentLesson={lesson}
        lessons={lessons}
        onLessonChange={onLessonChange}
      />
    </div>
  </div>
);

const LessonNavigation = ({ currentLesson, lessons, onLessonChange }) => {
  const currentIndex = lessons.findIndex(l => l.lesson_id === currentLesson.lesson_id);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < lessons.length - 1;

  return (
    <div className="flex items-center justify-between pt-8 mt-8 border-t border-gray-200">
      <button
        onClick={() => hasPrevious && onLessonChange(lessons[currentIndex - 1])}
        className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 ${
          hasPrevious
            ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:shadow-md'
            : 'text-gray-400 cursor-not-allowed'
        }`}
        disabled={!hasPrevious}
      >
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        الدرس السابق
      </button>

      <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500">
        <span>الدرس</span>
        <span className="font-semibold text-gray-700">{currentIndex + 1}</span>
        <span>من</span>
        <span className="font-semibold text-gray-700">{lessons.length}</span>
      </div>

      <button
        onClick={() => hasNext && onLessonChange(lessons[currentIndex + 1])}
        className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 ${
          hasNext
            ? 'text-white bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform hover:scale-105'
            : 'text-gray-400 cursor-not-allowed'
        }`}
        disabled={!hasNext}
      >
        الدرس التالي
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

const NoLessonSelected = () => (
  <div className="flex flex-col items-center justify-center p-12 text-center bg-white shadow-xl rounded-2xl">
    <div className="flex items-center justify-center w-24 h-24 mb-6 text-blue-600 bg-blue-100 rounded-full">
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    </div>
    <h3 className="mb-3 text-2xl font-bold text-gray-900">لم يتم اختيار درس</h3>
    <p className="mb-6 text-lg text-gray-600">اختر درساً من القائمة الجانبية لبدء التعلم</p>
    <button className="px-6 py-3 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
      ابدأ بالدرس الأول
    </button>
  </div>
);

const Lessons = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      try {
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
    // Scroll to top when lesson changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLessonComplete = (lessonId) => {
    setCompletedLessons(prev => new Set([...prev, lessonId]));
  };

  const formatDuration = (minutes) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return h > 0 ? `${h} ساعة ${m} دقيقة` : `${m} دقيقة`;
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
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-6 space-x-reverse">
              <button
                onClick={() => navigate(`/course/${id}`)}
                className="flex items-center px-4 py-2 text-gray-600 transition-all duration-300 rounded-lg hover:text-gray-900 hover:bg-gray-100"
              >
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                العودة للدورة
              </button>
              <div className="h-8 border-r border-gray-300"></div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{course.title}</h1>
                <p className="text-sm text-gray-500">
                  الدرس {course.syllabus.findIndex(l => l.lesson_id === currentLesson?.lesson_id) + 1} من {course.syllabus.length}
                </p>
              </div>
            </div>
            
            <ProgressBar 
              completed={completedLessons.size} 
              total={course.syllabus.length} 
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Lessons Sidebar */}
          <div className="lg:col-span-1">
            <LessonSidebar
              lessons={course.syllabus}
              currentLesson={currentLesson}
              completedLessons={completedLessons}
              onLessonClick={handleLessonClick}
              formatDuration={formatDuration}
            />
          </div>

          {/* Lesson Content */}
          <div className="lg:col-span-3">
            {currentLesson ? (
              <VideoPlayer
                lesson={currentLesson}
                onComplete={() => handleLessonComplete(currentLesson.lesson_id)}
                isCompleted={completedLessons.has(currentLesson.lesson_id)}
                formatDuration={formatDuration}
                lessons={course.syllabus}
                onLessonChange={handleLessonClick}
              />
            ) : (
              <NoLessonSelected />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;