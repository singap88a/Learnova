import React from 'react';
import InstructorCard from '../Instructors/InstructorCard';

const InstructorsSection = () => {
  const instructors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior Web Developer',
      bio: '10+ years of experience in full-stack web development. Expert in React, Node.js, and cloud technologies.'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      title: 'Data Science Professor',
      bio: 'PhD in Statistics with 15 years of experience in machine learning and big data analytics.'
    },
    {
      id: 3,
      name: 'Alex Rodriguez',
      title: 'Mobile App Architect',
      bio: 'Former Google engineer specializing in cross-platform mobile development and app architecture.'
    }
  ];

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
          <button className="px-8 py-3 font-semibold text-white transition duration-300 rounded-md bg-primary hover:bg-accent">
            View All Instructors
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
