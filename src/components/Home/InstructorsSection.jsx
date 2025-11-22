import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Users, Award, ArrowRight } from 'lucide-react';
import InstructorCard from '../Instructors/InstructorCard';
import coursesData from '../../data/instructors.json';

const InstructorsSection = () => {
  const navigate = useNavigate();
  const instructors = coursesData.instructors.slice(0, 3); // Show first 3 instructors

  const handleViewAll = () => {
    navigate('/instructors');
  };

  return (
    <section className="py-20 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
            <Award size={16} />
            Expert Educators
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Learn from <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Industry Experts</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
            Get mentored by professionals who are passionate about sharing their knowledge 
            and helping you achieve your learning goals.
          </p>
        </div>

 

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {instructors.map((instructor, index) => (
            <div 
              key={instructor.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <InstructorCard instructor={instructor} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <button
            onClick={handleViewAll}
            className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-white transition-all duration-300 shadow-lg group rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:scale-105"
          >
            View All Instructors
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          
          {/* Additional Info */}
          <p className="mt-6 text-gray-500">
            Join 100,000+ students learning from our expert instructors
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;