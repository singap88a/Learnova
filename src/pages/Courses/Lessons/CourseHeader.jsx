// src/components/lessons/CourseHeader.jsx
import React from 'react';

const CourseHeader = ({ course, currentLesson, onBack, onToggleSidebar }) => {
  const currentIndex = course.syllabus.findIndex(l => l.lesson_id === currentLesson?.lesson_id) + 1;
  const totalLessons = course.syllabus.length;
 
  const getLevelStyles = (level) => {
    switch(level) {
      case 'Beginner': 
        return { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' };
      case 'Intermediate': 
        return { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' };
      case 'Advanced': 
        return { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' };
      default: 
        return { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' };
    }
  };

  const levelStyles = getLevelStyles(course.level);

  return (
    <div className="pt-20 bg-white border-b border-slate-200">
      {/* Main Header */}
      <div className="px-6 py-8 mx-auto max-w-7xl">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center px-4 py-2 space-x-3 transition-all duration-300 rounded-lg group text-slate-600 hover:text-slate-900 hover:bg-slate-50"
          >
            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to course</span>
          </button>

          <button
            onClick={onToggleSidebar}
            className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-lg lg:hidden text-slate-600 hover:text-slate-900 hover:bg-slate-50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Course Information */}
        <div className="grid items-start gap-8 lg:grid-cols-3">
          {/* Left Column - Course Details */}
          <div className="space-y-6 lg:col-span-2">
            {/* Course Title and Level */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className={`px-3 py-1 rounded-full border ${levelStyles.bg} ${levelStyles.border} ${levelStyles.text} text-sm font-medium`}>
                  {course.level}
                </div>
                <div className="text-sm font-medium text-slate-500">
                  Lesson {currentIndex} of {totalLessons}
                </div>
              </div>
              
              <h1 className="text-3xl font-bold leading-tight lg:text-4xl text-slate-900">
                {course.title}
              </h1>
              
              <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
                {course.description || 'Master essential concepts through comprehensive lessons designed for practical learning.'}
              </p>
            </div>

 
          </div>

          {/* Right Column - Instructor */}
          <div className="p-6 border bg-slate-50 rounded-2xl border-slate-200">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src={course.instructor.avatar} 
                  alt={course.instructor.name}
                  className="object-cover w-16 h-16 border-2 border-white shadow-sm rounded-xl"
                />
                <div className="absolute w-4 h-4 bg-green-500 border-2 border-white rounded-full -bottom-1 -right-1"></div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="mb-1 text-lg font-semibold text-slate-900">
                  {course.instructor.name}
                </h3>
                <p className="mb-2 text-sm text-slate-600">
                  {course.instructor.title}
                </p>
                <div className="flex items-center space-x-1 text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm text-slate-500">4.9</span>
                </div>
              </div>
            </div>
            
            <div className="pt-4 mt-4 border-t border-slate-200">
              <p className="text-sm leading-relaxed text-slate-600">
                Experienced instructor with passion for teaching and helping students achieve their learning goals.
              </p>
            </div>
            
            <button className="w-full mt-4 px-4 py-2.5 bg-white border border-slate-300 text-slate-700 
                            rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 
                            font-medium text-sm">
              Send Message
            </button>
          </div>
        </div>
      </div>

 
    </div>
  );
};

export default CourseHeader;