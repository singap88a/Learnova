import React, { useEffect } from 'react';
import HeroSection from '../../components/Home/HeroSection';
import FeaturesSection from '../../components/Home/FeaturesSection';
import AnalysisSection from '../../components/Home/AnalysisSection';
import CoursesSection from '../../components/Home/CoursesSection';
import BannerSection from '../../components/Home/BannerSection';
import InstructorsSection from '../../components/Home/InstructorsSection';
import NewsletterSection from '../../components/Home/NewsletterSection';
import FAQSection from '../../components/Home/FAQSection';

// Initialize AOS
const Home = () => {
  useEffect(() => {
    // AOS Animation styles
    const style = document.createElement('style');
    style.textContent = `
      [data-aos] {
        opacity: 0;
        transition-property: opacity, transform;
      }
      [data-aos].aos-animate {
        opacity: 1;
      }
      [data-aos="fade-up"] {
        transform: translateY(50px);
      }
      [data-aos="fade-up"].aos-animate {
        transform: translateY(0);
      }
      [data-aos="fade-down"] {
        transform: translateY(-50px);
      }
      [data-aos="fade-down"].aos-animate {
        transform: translateY(0);
      }
      [data-aos="fade-left"] {
        transform: translateX(50px);
      }
      [data-aos="fade-left"].aos-animate {
        transform: translateX(0);
      }
      [data-aos="fade-right"] {
        transform: translateX(-50px);
      }
      [data-aos="fade-right"].aos-animate {
        transform: translateX(0);
      }
      [data-aos="zoom-in"] {
        transform: scale(0.8);
      }
      [data-aos="zoom-in"].aos-animate {
        transform: scale(1);
      }
    `;
    document.head.appendChild(style);

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('[data-aos]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans">
      {/* Global Background for All Sections */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 bg-blue-200 rounded-full w-72 h-72 mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute top-0 right-0 delay-1000 bg-purple-200 rounded-full w-72 h-72 mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 delay-500 transform -translate-x-1/2 rounded-full left-1/2 w-72 h-72 bg-cyan-200 mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <AnalysisSection />
        <CoursesSection />
        <BannerSection />
        <InstructorsSection />
        <FAQSection />
        <NewsletterSection />
      </div>
    </div>
  );
};

export default Home;