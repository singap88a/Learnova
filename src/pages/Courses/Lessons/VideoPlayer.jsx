// src/components/lessons/VideoPlayer.jsx
import React from 'react';
import LessonNavigation from './LessonNavigation';

const VideoPlayer = ({ lesson, formatDuration, lessons, onLessonChange }) => {
  const currentIndex = lessons.findIndex(l => l.lesson_id === lesson.lesson_id);

  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(lesson.video_url);

  return (
    <div className="overflow-hidden bg-white border shadow-xl rounded-2xl border-slate-200/60">
      
      {/* Video Player Section */}
      <div className="relative bg-slate-900 aspect-video">
        {videoId ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={lesson.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <p>No video available</p>
          </div>
        )}
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