import React from 'react';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
      <p className="text-gray-600">Loading course details...</p>
    </div>
  </div>
);

export default LoadingSpinner;
