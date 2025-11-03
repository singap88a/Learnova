<<<<<<< Updated upstream
import React from "react";
import coursesData from "../../data/courses.json";
=======
import React from 'react';
import { Link } from 'react-router-dom';
import coursesData from '../../data/courses.json';
import { BookOpen, Users, Star,  ChevronRight} from 'lucide-react';
>>>>>>> Stashed changes

const CoursesSection = () => {
  const courses = coursesData.courses.slice(0, 6); // show 6 courses (you can change this)

  return (
<<<<<<< Updated upstream
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Featured Courses
          </h2>
          <p className="text-gray-500">
            Explore the latest courses from top instructors and start learning today.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              {/* Thumbnail (optional) */}
              {course.image && (
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {course.short_description}
                </p>

                {/* Instructor + Rating (optional) */}
                {course.instructor && (
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-2">
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        className="w-6 h-6 rounded-full"
                      />
                      {course.instructor.name}
                    </span>
                    {course.rating && (
                      <span className="text-yellow-500">⭐ {course.rating}</span>
                    )}
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-indigo-600 font-bold">
                    ${course.price}
                  </span>
                  <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition">
=======
    
   <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Courses</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our most popular courses and start your learning journey today
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="relative">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {course.category}
                </span>
                <span className="absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  {course.level}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">By {course.slug}</p>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400 fill-current" size={18} />
                    <span className="font-semibold">{course.rating_average}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Users size={18} />
                    <span>{}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
>>>>>>> Stashed changes
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
<<<<<<< Updated upstream

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition">
=======
        
        <div className="text-center mt-12" data-aos="fade-up">
         <Link to={"/courses"}>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
>>>>>>> Stashed changes
            View All Courses
            <ChevronRight size={20} />
          </button>
         </Link>
        </div>
      </div>
    </div>
  )
};

export default CoursesSection;
