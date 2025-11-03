import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CTA from "../../assets/CTA.jpg";

const CTASection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative py-20 text-center text-white overflow-hidden">
      
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${CTA})`,
        }}
      ></div>

      
      <div className="absolute inset-0 bg-gradient-to-r from-accent/80 to-primary/80"></div>


      <div className="relative z-10 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-aos="fade-up">
          Ready to Start Learning?
        </h2>

        <p
          className="mb-8 text-lg max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Join thousands of learners shaping their future with Learnova today!
        </p>

        <button
          className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-secondary hover:text-white transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Explore Courses
        </button>
      </div>
    </section>
  );
};

export default CTASection;
