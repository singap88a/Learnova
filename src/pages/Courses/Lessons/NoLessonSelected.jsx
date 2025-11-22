// src/components/lessons/NoLessonSelected.jsx
import React from 'react';

const NoLessonSelected = ({ onStartLearning }) => (
  <div className="overflow-hidden bg-white border shadow-xl rounded-2xl border-slate-200/60">
    <div className="p-12 text-center">
      <div className="max-w-2xl mx-auto">
        {/* Icon */}
        <div className="flex items-center justify-center w-32 h-32 mx-auto mb-8 shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl">
          <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Content */}
        <h2 className="mb-4 text-4xl font-bold text-transparent text-slate-900 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text">
          Ready to Start Learning?
        </h2>
        <p className="mb-8 text-xl font-medium leading-relaxed text-slate-600">
          Select a lesson from the sidebar to begin your journey. Each lesson is carefully crafted 
          to help you master new skills through practical examples and real-world projects.
        </p>

        {/* Action Button */}
        <button 
          onClick={onStartLearning}
          className="px-12 py-4 text-lg font-semibold text-white transition-all duration-300 transform border shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:shadow-2xl hover:scale-105 hover:from-blue-700 hover:to-purple-700 border-white/20"
        >
          Start with First Lesson
        </button>

        {/* Additional Info */}
        <div className="p-6 mt-8 border bg-slate-50/80 rounded-2xl border-slate-200/60">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="mb-1 text-2xl font-bold text-slate-900">12+</div>
              <div className="text-sm font-medium text-slate-600">Lessons</div>
            </div>
            <div>
              <div className="mb-1 text-2xl font-bold text-slate-900">8h+</div>
              <div className="text-sm font-medium text-slate-600">Content</div>
            </div>
            <div>
              <div className="mb-1 text-2xl font-bold text-slate-900">100%</div>
              <div className="text-sm font-medium text-slate-600">Practical</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NoLessonSelected;