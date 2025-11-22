// src/components/lessons/VideoPlayer.jsx
import React from 'react';
import LessonNavigation from './LessonNavigation';

const VideoPlayer = ({ lesson, formatDuration, lessons, onLessonChange }) => {
  const currentIndex = lessons.findIndex(l => l.lesson_id === lesson.lesson_id);
  
  return (
    <div className="overflow-hidden bg-white border shadow-xl rounded-2xl border-slate-200/60">
      
      {/* Video Player Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 aspect-video">
        {/* Video Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="relative mb-8">
              <div className="flex items-center justify-center w-32 h-32 mx-auto mb-6 transition-all duration-500 transform border shadow-2xl cursor-pointer bg-white/10 backdrop-blur-lg rounded-3xl hover:scale-110 hover:bg-white/20 border-white/20 shadow-black/30">
                <svg className="w-16 h-16 text-white transition-transform transform hover:scale-110" 
                     fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="absolute inset-0 border-4 border-white/30 rounded-3xl animate-ping"></div>
            </div>
            
            <h3 className="mb-4 text-4xl font-bold tracking-tight text-transparent bg-gradient-to-r from-white to-slate-200 bg-clip-text">
              {lesson.title}
            </h3>
            <p className="mb-8 text-xl font-light text-slate-300">
              Click to start this lesson
            </p>
            
            <button className="px-12 py-4 font-semibold text-white transition-all duration-300 transform border shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-blue-500/30 hover:scale-105 hover:shadow-3xl hover:from-blue-700 hover:to-purple-700 border-white/20">
              Start Learning
            </button>
          </div>
        </div>

        {/* Video Controls Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
          <div className="flex items-center justify-between">
            {/* Left Controls */}
            <div className="flex items-center space-x-4">
              <button className="p-3.5 bg-white/10 hover:bg-white/20 rounded-xl transition-all 
                               duration-300 hover:scale-110 backdrop-blur-sm border border-white/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button className="p-4 transition-all duration-300 border bg-white/20 hover:bg-white/30 rounded-xl hover:scale-110 backdrop-blur-sm border-white/30">
                <svg className="text-white w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
              </button>
              
              <button className="p-3.5 bg-white/10 hover:bg-white/20 rounded-xl transition-all 
                               duration-300 hover:scale-110 backdrop-blur-sm border border-white/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Progress Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-white/80">0:00</span>
                <div className="flex-1 h-2 overflow-hidden rounded-full bg-white/30">
                  <div className="w-1/4 h-2 rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 shadow-blue-500/50"></div>
                </div>
                <span className="text-sm font-medium text-white/80">{formatDuration(lesson.duration_min)}</span>
              </div>
            </div>

            {/* Right Controls */}
            <div className="flex items-center space-x-3">
              <button className="p-3 transition-all duration-300 border bg-white/10 hover:bg-white/20 rounded-xl hover:scale-110 backdrop-blur-sm border-white/20">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </button>
              
              <button className="p-3 transition-all duration-300 border bg-white/10 hover:bg-white/20 rounded-xl hover:scale-110 backdrop-blur-sm border-white/20">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M15.536 8.464a5 5 0 010 7.072m2.828-2.828a9 9 0 010-12.728M9.172 9.172a3 3 0 000 4.243m2.828-2.828a5 5 0 010 7.07" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="p-8">
        {/* Lesson Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h2 className="text-3xl font-bold leading-tight text-slate-900">
                {lesson.title}
              </h2>
              <div className="flex items-center space-x-3">
                <span className={`px-4 py-2.5 rounded-xl text-sm font-semibold
                               ${lesson.type === 'video' 
                                 ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                                 : lesson.type === 'project'
                                 ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                                 : 'bg-purple-100 text-purple-700 border border-purple-200'
                               }`}>
                  {lesson.type === 'video' ? 'Video Lesson' : 
                   lesson.type === 'project' ? 'Hands-on Project' : 'Reading Material'}
                </span>
                <span className="px-3.5 py-2 text-sm font-semibold text-slate-700 
                               bg-slate-100 border border-slate-200 rounded-xl">
                  Lesson {currentIndex + 1} of {lessons.length}
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="flex items-center font-medium text-slate-600">
                <svg className="w-5 h-5 mr-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {formatDuration(lesson.duration_min)}
              </div>
              <div className="flex items-center font-medium text-slate-600">
                <svg className="w-5 h-5 mr-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {lesson.level || 'Intermediate'} Level
              </div>
            </div>
          </div>
        </div>

        {/* Lesson Description */}
        <div className="mb-8">
          <h3 className="mb-6 text-2xl font-bold text-slate-900">About This Lesson</h3>
          <div className="p-8 border shadow-sm bg-gradient-to-br from-slate-50 to-white rounded-2xl border-slate-200/60">
            <p className="text-lg font-medium leading-relaxed text-slate-700">
              In this comprehensive lesson, you'll dive deep into {lesson.title.toLowerCase()}. 
              We'll explore practical techniques, industry best practices, and real-world applications 
              that you can immediately implement in your projects to enhance your skills and productivity.
            </p>
          </div>
        </div>

        {/* Learning Resources */}
        <div className="mb-8">
          <h3 className="mb-6 text-2xl font-bold text-slate-900">Learning Resources</h3>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[
              { name: 'Source Files & Code', description: 'Download all project files', icon: '💻', color: 'blue' },
              { name: 'Presentation Slides', description: 'Lesson slides and notes', icon: '📊', color: 'purple' },
              { name: 'Reference Materials', description: 'Additional reading materials', icon: '📚', color: 'emerald' },
              { name: 'Practice Exercises', description: 'Hands-on coding challenges', icon: '⚡', color: 'orange' }
            ].map((resource, index) => (
              <a
                key={index}
                href="#"
                className={`group p-6 bg-white border-2 border-slate-200/60 rounded-2xl 
                          hover:border-${resource.color}-300 hover:shadow-xl hover:scale-[1.02] 
                          transition-all duration-300 flex items-center space-x-5`}
              >
                <div className={`text-2xl transform transition-transform group-hover:scale-110`}>
                  {resource.icon}
                </div>
                <div className="flex-1">
                  <h4 className="mb-1 text-lg font-semibold text-slate-900 group-hover:text-slate-950">
                    {resource.name}
                  </h4>
                  <p className="text-sm font-medium text-slate-600">{resource.description}</p>
                </div>
                <svg className="w-5 h-5 transition-all transform text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
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
};

export default VideoPlayer;