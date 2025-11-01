import React from "react";
import coursesData from "../../data/courses.json";

const CoursesSection = () => {
  const courses = coursesData.courses.slice(0, 6); // show 6 courses (you can change this)

  return (
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
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
