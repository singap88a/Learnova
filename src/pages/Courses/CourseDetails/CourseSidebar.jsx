import React from 'react';
import StarRating from './StarRating';
import coursesData from '../../../data/courses.json';

const CourseSidebar = ({ course, navigate }) => (
  <div className="lg:col-span-1">
    <div className="sticky p-8 border border-gray-100 shadow-2xl bg-gradient-to-br from-white to-gray-50/50 rounded-3xl top-8 backdrop-blur-sm">
      
      {/* Header */}
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text">
          Course Features
        </h3>
        <div className="w-16 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
      </div>

      {/* Features List */}
      <div className="mb-8 space-y-4">
        <div className="flex items-center p-4 transition-all duration-300 border border-gray-100 shadow-sm bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-md hover:border-blue-100 group">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 transition-transform duration-300 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl group-hover:scale-110">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Lifetime Access</h4>
            <p className="text-sm text-gray-600">Access forever, updates included</p>
          </div>
        </div>

        <div className="flex items-center p-4 transition-all duration-300 border border-gray-100 shadow-sm bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-md hover:border-green-100 group">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 transition-transform duration-300 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl group-hover:scale-110">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Completion Certificate</h4>
            <p className="text-sm text-gray-600">Shareable career credential</p>
          </div>
        </div>

        <div className="flex items-center p-4 transition-all duration-300 border border-gray-100 shadow-sm bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-md hover:border-purple-100 group">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 transition-transform duration-300 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl group-hover:scale-110">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Cross-Platform</h4>
            <p className="text-sm text-gray-600">Mobile & desktop optimized</p>
          </div>
        </div>

        <div className="flex items-center p-4 transition-all duration-300 border border-gray-100 shadow-sm bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-md hover:border-orange-100 group">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 transition-transform duration-300 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl group-hover:scale-110">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">24/7 Support</h4>
            <p className="text-sm text-gray-600">Always here to help you</p>
          </div>
        </div>
      </div>

 

      {/* Share Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          <h4 className="text-lg font-bold text-gray-900">Share this course</h4>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center justify-center flex-1 gap-2 p-3 text-white transition-all duration-300 bg-blue-600 shadow-lg rounded-xl hover:bg-blue-700 hover:shadow-xl hover:scale-105 group">
            <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
           </button>
          <button className="flex items-center justify-center flex-1 gap-2 p-3 text-white transition-all duration-300 shadow-lg bg-cyan-500 rounded-xl hover:bg-cyan-600 hover:shadow-xl hover:scale-105 group">
            <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
            </svg>
           </button>
          <button className="flex items-center justify-center flex-1 gap-2 p-3 text-white transition-all duration-300 bg-blue-700 shadow-lg rounded-xl hover:bg-blue-800 hover:shadow-xl hover:scale-105 group">
            <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
           </button>
        </div>
      </div>

 
    </div>
  </div>
);

export default CourseSidebar;