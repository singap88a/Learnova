import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, ChevronRight, Clock, BookOpen, Eye, Info } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import coursesData from '../../data/courses.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CoursesSection = () => {
  const courses = coursesData.courses.slice(0, 6).map(course => ({
    id: course.id,
    image: course.image,
    category: course.category,
    title: course.title,
    instructor: course.instructor.name,
    rating: course.rating_average,
    students: course.enrollments,
    price: course.price === 0 ? 'Free' : `$${course.price}`,
    level: course.level,
    duration: course.duration || '8 weeks',
    lessons: course.lessons || 24
  }));

  return (
    <section className="px-20 py-20">
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            <BookOpen size={16} />
            Featured Courses
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Popular Courses</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-600">
            Handpicked courses from industry experts to boost your skills and advance your career
          </p>
        </div>

        {/* Swiper Slider - يعرض 3 وباقي الكورسات تظهر في الجنب */}
        <div className="relative mb-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="courses-swiper"
          >
            {courses.map((course, idx) => (
              <SwiperSlide key={course.id}>
                <Link
                  to={`/course/${course.id}`}
                  className="block group"
                >
                  <div
                    className="relative overflow-hidden transition-all duration-500 transform bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-3 group-hover:shadow-blue-500/20"
                    data-aos="zoom-in"
                    data-aos-delay={idx * 100}
                  >
                    {/* Course Image */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="object-cover w-full h-48 transition-transform duration-700 group-hover:scale-110" 
                      />
                      
                      {/* Overlay Badges */}
                      <div className="absolute flex gap-2 top-4 left-4">
                        <span className="px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full shadow-lg">
                          {course.category}
                        </span>
                        <span className="px-3 py-1 text-xs font-semibold text-gray-900 rounded-full shadow-lg bg-white/95 backdrop-blur-sm">
                          {course.level}
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/50 group-hover:opacity-100">
                        <div className="flex items-center gap-2 px-4 py-2 text-white rounded-full bg-white/20 backdrop-blur-sm">
                          <Eye size={16} />
                          <span className="text-sm font-medium">View Details</span>
                        </div>
                      </div>
                    </div>

                    {/* Course Content */}
                    <div className="p-6">
                      {/* Title and Instructor */}
                      <h3 className="mb-3 text-lg font-bold text-gray-900 transition-colors line-clamp-1 group-hover:text-blue-600">
                        {course.title}
                      </h3>
                      <p className="mb-4 text-sm text-gray-600">By {course.instructor}</p>

                      {/* Course Stats */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Star className="text-yellow-400 fill-current" size={16} />
                            <span className="font-semibold text-gray-900">{course.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users size={16} />
                            <span>{course.students.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{course.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div className="flex items-center justify-between py-3 mb-4 text-xs text-gray-500 border-t border-b border-gray-100">
                        <span>{course.lessons} lessons</span>
                        <span>Certificate included</span>
                      </div>

                      {/* Price and Details Button */}
                      <div className="flex items-center justify-between">
                        <div>
                          <span className={`text-2xl font-bold ${
                            course.price === 'Free' ? 'text-green-600' : 'text-blue-600'
                          }`}>
                            {course.price}
                          </span>
                          {course.price !== 'Free' && (
                            <span className="ml-2 text-sm text-gray-500 line-through">$129</span>
                          )}
                        </div>
                        
                        {/* Details Button - على اليمين جنب السعر */}
                        <Link
                          to={`/course/${course.id}`}
                          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 transition-all duration-300 rounded-lg bg-blue-50 hover:bg-blue-100 hover:text-blue-700 hover:scale-105"
                        >
                          <Info size={16} />
                          Details
                        </Link>
                      </div>
                    </div>

                    {/* Popular Badge */}
                    {course.students > 1000 && (
                      <div className="absolute top-44 right-6">
                        <div className="px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-orange-500 to-red-500">
                          Popular
                        </div>
                      </div>
                    )}
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}

          
          {/* Pagination */}
          <div className="swiper-pagination !relative !mt-8"></div>
        </div>

        {/* CTA Section */}
        <div className="text-center" data-aos="fade-up">
          <Link
            to="/courses"
            className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-white transition-all duration-300 shadow-lg group bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl hover:scale-105"
          >
            Explore All Courses
            <ChevronRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          
          <p className="mt-4 text-gray-500">
            Join 50,000+ students already learning with us
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;