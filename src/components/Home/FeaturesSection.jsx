import React, { useRef, useEffect } from 'react';
import { BookOpen, Users, Award, Video, Target, Clock, Smartphone, Sparkles } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Expert-Led Courses",
      description: "Learn from industry professionals with years of real-world  ",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a thriving community of learners and get help whenever  ",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: Award,
      title: "Certified Learning",
      description: "Earn recognized certificates upon completion of your courses",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      icon: Video,
      title: "Lifetime Access",
      description: "Access your courses anytime, anywhere, on any device",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: Target,
      title: "Project-Based Learning",
      description: "Build real-world projects that enhance your portfolio",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50"
    },
    {
      icon: Clock,
      title: "Self-Paced Learning",
      description: "Learn at your own pace with flexible scheduling",
      gradient: "from-rose-500 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50"
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Seamless learning experience across all devices",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50"
    },
    {
      icon: Sparkles,
      title: "Cutting-Edge Content",
      description: "Always updated with the latest technologies and trends",
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-50 to-purple-50"
    }
  ];

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <div className="relative py-20 overflow-hidden ">
 

      <div className="relative px-4 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 bg-white border border-blue-100 rounded-full shadow-lg">
            <Sparkles className="text-blue-600" size={24} />
            <span className="text-lg font-semibold text-blue-600">Why We're Different</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text">
            Unmatched Learning Experience
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-slate-600">
            We've redefined online education with a perfect blend of cutting-edge technology, 
            expert mentorship, and community-driven learning.
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              el: paginationRef.current,
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} bg-blue-500 opacity-50 hover:opacity-100 transition-opacity duration-300"></span>`;
              },
            }}
            loop={true}
            speed={1000}
            onInit={(swiper) => {
              // Override navigation elements after init
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
              swiper.pagination.init();
              swiper.pagination.update();
            }}
            className="features-swiper"
          >
            {features.map((feature, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative h-full p-6 transition-all duration-500 border shadow-lg group bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-2xl border-white/20 hover:-translate-y-2">
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 transition-opacity duration-300 bg-white opacity-50 rounded-xl blur-lg group-hover:opacity-75"></div>
                    <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="text-white" size={28} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-lg font-bold transition-colors duration-300 text-slate-800 group-hover:text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed transition-colors duration-300 text-slate-600 group-hover:text-slate-700">
                    {feature.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            ref={navigationPrevRef}
            className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 -ml-5 text-blue-600 transition-all duration-300 transform -translate-y-1/2 border rounded-full shadow-lg top-1/2 bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            ref={navigationNextRef}
            className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 -mr-5 text-blue-600 transition-all duration-300 transform -translate-y-1/2 border rounded-full shadow-lg top-1/2 bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Pagination */}
          <div ref={paginationRef} className="flex justify-center mt-8 space-x-2"></div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="800">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Industry-Recognized Certifications</span>
            </div>
            <div className="w-px h-4 bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Hands-On Projects</span>
            </div>
            <div className="w-px h-4 bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Lifetime Access</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .features-swiper {
          padding: 20px 10px;
        }
        
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          margin: 0 6px;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
        
        @media (max-width: 1024px) {
          .features-swiper {
            padding: 10px 5px;
          }
        }
      `}</style>
    </div>
  );
};

export default FeaturesSection;