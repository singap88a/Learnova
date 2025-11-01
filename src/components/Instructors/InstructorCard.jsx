import React from 'react';
import { useNavigate } from 'react-router-dom';

const InstructorCard = ({ instructor }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/instructor/${instructor.id}`);
  };

  return (
    <div className="overflow-hidden transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
      <div className="p-6 text-center">
        <div className="flex items-center justify-center w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent">
          <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">

          </svg>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-textPrimary">{instructor.name}</h3>
        <p className="mb-2 font-medium text-primary">{instructor.title}</p>
        <p className="mb-4 text-textSecondary">{instructor.bio}</p>
        <div className="flex justify-center mb-4 space-x-4">
          <a href="#" className="transition duration-300 text-primary hover:text-accent">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" className="transition duration-300 text-primary hover:text-accent">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
        <button
          onClick={handleDetailsClick}
          className="px-6 py-2 font-semibold text-white transition-all duration-200 transform rounded-lg shadow-md bg-primary hover:bg-primary/90 hover:scale-105 hover:shadow-lg"
        >
          View Details
        </button>
      </div>
    </div>
  );
};
export default InstructorCard;




