import React from 'react';
import InstructorCard from '../../components/Instructors/InstructorCard';

const Instructors = () => {
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
    },
    {
      id: 4,
      name: 'Emma Thompson',
      title: 'UX/UI Design Lead',
      bio: 'Award-winning designer with expertise in user-centered design and design systems.'
    },
    {
      id: 5,
      name: 'David Kim',
      title: 'Cloud Solutions Architect',
      bio: 'AWS certified architect with extensive experience in cloud infrastructure and DevOps.'
    },
    {
      id: 6,
      name: 'Lisa Wang',
      title: 'Cybersecurity Expert',
      bio: 'Certified ethical hacker and security consultant with 12 years in cybersecurity.'
    }
  ];

  return (
    <div className="min-h-screen bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-textPrimary mb-4">
            Our Expert Instructors
          </h1>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            Meet our team of experienced professionals dedicated to providing you with
            high-quality education and mentorship.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map(instructor => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
