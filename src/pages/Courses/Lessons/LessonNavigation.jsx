// src/components/lessons/LessonNavigation.jsx
import React from 'react';

const LessonNavigation = ({ currentLesson, lessons, onLessonChange }) => {
  const currentIndex = lessons.findIndex(l => l.lesson_id === currentLesson.lesson_id);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < lessons.length - 1;

  return (
    <div className="flex items-center justify-between pt-8 mt-8 border-t border-slate-200/60">
      {/* Previous Button */}
      <button
        onClick={() => hasPrevious && onLessonChange(lessons[currentIndex - 1])}
        className={`flex items-center space-x-3 px-8 py-4 rounded-2xl transition-all duration-300 border-2
                  ${hasPrevious
                    ? 'text-slate-700 border-slate-300 bg-white hover:bg-slate-50 hover:border-slate-400 hover:shadow-lg hover:scale-105' 
                    : 'text-slate-400 border-slate-200 bg-slate-50 cursor-not-allowed'
                  }`}
        disabled={!hasPrevious}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="font-semibold">Previous</span>
      </button>

      {/* Lesson Counter */}
      <div className="flex items-center px-6 py-3 space-x-4 border bg-slate-100/80 rounded-2xl border-slate-200/60">
        <span className="text-sm font-semibold text-slate-700">Lesson</span>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-slate-900 bg-white px-3 py-1.5 rounded-xl shadow-sm">
            {currentIndex + 1}
          </span>
          <span className="text-sm font-semibold text-slate-500">of</span>
          <span className="text-lg font-bold text-slate-900 bg-white px-3 py-1.5 rounded-xl shadow-sm">
            {lessons.length}
          </span>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={() => hasNext && onLessonChange(lessons[currentIndex + 1])}
        className={`flex items-center space-x-3 px-8 py-4 rounded-2xl transition-all duration-300
                  ${hasNext
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl hover:scale-105 shadow-lg' 
                    : 'text-slate-400 bg-slate-200 cursor-not-allowed'
                  }`}
        disabled={!hasNext}
      >
        <span className="font-semibold">Next Lesson</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default LessonNavigation;