// src/components/lessons/LessonSidebar.jsx
import React from 'react';

const LessonSidebar = ({ lessons, currentLesson, onLessonClick, formatDuration }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/60 
                    sticky top-32 h-[calc(100vh-10rem)] overflow-hidden flex flex-col">
      
      {/* Header */}
      <div className="p-6 border-b border-slate-200/60 bg-gradient-to-r from-slate-50 to-white">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl font-bold text-slate-900">Course Content</h2>
          <span className="px-3 py-1.5 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm">
            {lessons.length} lessons
          </span>
        </div>
        <p className="text-sm font-medium text-slate-600">
          Follow the curriculum to master the course material
        </p>
      </div>

      {/* Lessons List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-4 space-y-2">
          {lessons.map((lesson, index) => {
            const isActive = currentLesson?.lesson_id === lesson.lesson_id;
            const isCompleted = false; // Removed progress tracking
            
            return (
              <button
                key={lesson.lesson_id}
                onClick={() => onLessonClick(lesson)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 group border-2
                          ${isActive 
                            ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg shadow-blue-500/20 transform scale-[1.02]' 
                            : 'border-transparent hover:border-slate-300 hover:bg-slate-50/80 hover:shadow-md'
                          }`}
              >
                <div className="flex items-start space-x-4">
                  {/* Lesson Number */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center 
                                transition-all duration-300 border-2 font-semibold text-sm
                                ${isActive 
                                  ? 'bg-blue-500 text-white border-blue-600 shadow-lg' 
                                  : 'bg-white text-slate-700 border-slate-300 group-hover:border-slate-400 group-hover:bg-slate-100'
                                }`}>
                    {index + 1}
                  </div>

                  {/* Lesson Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className={`font-semibold text-sm leading-snug pr-2
                                   ${isActive ? 'text-blue-900' : 'text-slate-900'}`}>
                        {lesson.title}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold
                                     ${lesson.type === 'video' 
                                       ? 'bg-blue-100 text-blue-700' 
                                       : lesson.type === 'project'
                                       ? 'bg-emerald-100 text-emerald-700'
                                       : 'bg-purple-100 text-purple-700'
                                     }`}>
                        {lesson.type === 'video' ? 'Video' : 
                         lesson.type === 'project' ? 'Project' : 'Article'}
                      </span>
                      
                      <span className="flex items-center text-xs font-medium text-slate-500">
                        <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {formatDuration(lesson.duration_min)}
                      </span>
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {isActive && (
                    <div className="flex-shrink-0">
                      <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-200/60 bg-slate-50/50">
        <div className="text-center">
          <p className="text-sm font-medium text-slate-600">
            Complete all lessons to finish the course
          </p>
        </div>
      </div>
    </div>
  );
};

export default LessonSidebar;