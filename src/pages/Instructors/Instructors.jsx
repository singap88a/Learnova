import React from 'react';
import InstructorCard from '../../components/Instructors/InstructorCard';
import coursesData from '../../data/courses.json';

const Instructors = () => {
  const instructors = coursesData.instructors;
  return (
    <div className="min-h-screen py-12 bg-secondary">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-textPrimary">
            Our Expert Instructors
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-textSecondary">
            Meet our team of experienced professionals dedicated to providing you with
            high-quality education and mentorship.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {instructors.map(instructor => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
