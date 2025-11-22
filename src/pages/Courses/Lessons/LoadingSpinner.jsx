// src/components/lessons/LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
    <div className="text-center">
      <div className="relative">
        <div className="w-20 h-20 border-4 rounded-full border-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
      </div>
      <p className="mt-4 text-lg font-medium text-slate-600">Loading course content...</p>
    </div>
  </div>
);

export default LoadingSpinner;