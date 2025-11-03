import React from 'react';
import { useNavigate } from 'react-router-dom';
import InstructorCard from '../Instructors/InstructorCard';
import coursesData from '../../data/courses.json';

const InstructorsSection = () => {
  const navigate = useNavigate();
  const instructors = coursesData.instructors.slice(0, 3); // Show first 3 instructors

  const handleViewAll = () => {
    navigate('/instructors');
  };

  return (
    <section className="py-16 bg-secondary">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-textPrimary">
            Meet Our Instructors
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-textSecondary">
            Learn from industry experts who are passionate about sharing their knowledge.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {instructors.map(instructor => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={handleViewAll}
            className="px-8 py-3 font-semibold text-white transition duration-300 rounded-md bg-primary hover:bg-accent"
          >
            View All Instructors
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
