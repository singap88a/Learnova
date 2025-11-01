// import React from 'react';
// import InstructorCard from '../../components/Instructors/InstructorCard';
// import coursesData from '../../data/courses.json';

// // const Instructors = () => {
// //   const instructors = coursesData.instructors;
// //   return (
// //     <div className="min-h-screen py-12 bg-secondary">
// //       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
// //         <div className="mb-12 text-center">
// //           <h1 className="m-8 text-4xl font-bold text-textPrimary">
// //             Our Expert Instructors
// //           </h1>
// //           <p className="max-w-3xl mx-auto text-xl text-textSecondary">
// //             Meet our team of experienced professionals dedicated to providing you with
// //             high-quality education and mentorship.
// //           </p>
// //         </div>
// //         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
// //           {instructors.map(instructor => (
// //             <InstructorCard key={instructor.id} instructor={instructor} />
// //           ))}
// //         </div>
// //       </div><q></q>
// //     </div>
// //         <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
// //           <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
// //             <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
// //               50+
// //             </div>
// //             <p className="text-gray-600">Expert Instructors</p>
// //           </div>
// //           <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
// //             <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
// //               15,000+
// //             </div>
// //             <p className="text-gray-600">Active Students</p>
// //           </div>
// //           <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
// //             <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-2">
// //               4.8
// //             </div>
// //             <p className="text-gray-600">Average Rating</p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );

// // };

// // export default Instructors;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import coursesData from '../../data/courses.json';

const socialIcons = {
  linkedin: (
    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.23 8h4.54v16H.23V8zm7.44 0h4.36v2.18h.06c.61-1.16 2.11-2.38 4.34-2.38 4.64 0 5.49 3.06 5.49 7.04v8.16h-4.54v-7.24c0-1.72-.03-3.93-2.4-3.93-2.41 0-2.78 1.88-2.78 3.82v7.35H7.67V8z"/>
    </svg>
  ),
  github: (
    <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.28 3.44 9.75 8.21 11.34.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.76.08-.75.08-.75 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.48 11.48 0 0 1 3-.41c1.02.01 2.05.14 3 .41 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.47 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.88-.01 3.28 0 .32.22.7.82.58C20.57 22.25 24 17.78 24 12.5 24 5.87 18.63.5 12 .5z"/>
    </svg>
  ),
  twitter: (
    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.95 4.57a10 10 0 0 1-2.82.78 4.94 4.94 0 0 0 2.16-2.72 9.86 9.86 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.38 4.48 13.96 13.96 0 0 1-10.15-5.14 4.92 4.92 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.62v.06a4.93 4.93 0 0 0 3.95 4.83 4.93 4.93 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42 9.87 9.87 0 0 1-6.1 2.1c-.39 0-.77-.02-1.15-.07a13.94 13.94 0 0 0 7.56 2.21c9.06 0 14.02-7.5 14.02-14.02 0-.21 0-.42-.02-.63A10.02 10.02 0 0 0 24 4.59z"/>
    </svg>
  ),
  youtube: (
    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.5 6.2s-.2-1.66-.81-2.39c-.78-.82-1.65-.83-2.05-.88C17.16 3 12 3 12 3s-5.16 0-8.64.05c-.4.05-1.27.06-2.05.88C.7 4.54.5 6.2.5 6.2S0 8.02 0 9.85v4.3c0 1.83.5 3.65.5 3.65s.2 1.66.81 2.39c.78.82 1.81.79 2.27.88 1.65.14 7.42.05 7.42.05s5.16 0 8.64-.05c.4-.05 1.27-.06 2.05-.88.61-.73.81-2.39.81-2.39s.5-1.82.5-3.65v-4.3c0-1.83-.5-3.65-.5-3.65zM9.75 15.02V8.98l6.25 3.02-6.25 3.02z"/>
    </svg>
  ),
  website: (
    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm6.54 17.49h-2.34c-.13 0-.25.08-.29.21l-.88 2.43a8.963 8.963 0 0 1-3.04.56c-1.1 0-2.15-.24-3.05-.66l-.91-2.43a.27.27 0 0 0-.28-.19h-2.33a9.014 9.014 0 0 1 0-2H7.6c.13 0 .25-.08.29-.21l.88-2.43c.91-.42 1.96-.66 3.05-.66 1.1 0 2.15.24 3.04.56l.88 2.43c.05.13.16.21.29.21h2.34c-.05.66-.13 1.31-.25 1.96z"/>
    </svg>
  )
};

const InstructorCard = ({ instructor }) => {
  const navigate = useNavigate();
  const handleDetailsClick = () => {
    navigate(`/instructors/${instructor.id}`);
  };
  return (
    <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative overflow-hidden h-64">
        <img 
          src={instructor.avatar} 
          alt={instructor.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6 relative">
        <h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
          {instructor.name}
        </h3>
        <p className="text-purple-600 font-medium mb-2">{instructor.title}</p>
        <div className="flex gap-3 mb-4">
          {Object.entries(instructor.social).map(([key, url]) => (
            <a key={key} href={url} target="_blank" rel="noopener noreferrer">
              {socialIcons[key]}
            </a>
          ))}
        </div>
        <p className="text-gray-600 mb-4">{instructor.bio}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {instructor.specializations.map((spec, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm rounded-full border border-blue-200 transform group-hover:scale-105 transition-transform duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {spec}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-gray-500 mb-4">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
          </svg>
          <span className="font-medium">{instructor.total_students.toLocaleString()} Students</span>
        </div>
        <button
          onClick={handleDetailsClick}
          className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-xl"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

const InstructorsComponent = () => {
  const instructors = coursesData.instructors;
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Expert Instructors</h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">Meet our team of experienced professionals dedicated to providing you with high-quality education and mentorship.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:gap-10">
          {instructors.map(inst => (
            <InstructorCard key={inst.id} instructor={inst} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorsComponent;
