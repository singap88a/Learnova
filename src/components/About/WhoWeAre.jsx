import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import teamwork from "../../assets/teamwork.jpg";


const WhoWeAre = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src={teamwork}
          alt="Our Team"
          className="rounded-2xl shadow-lg"
          data-aos="fade-right"
        />

        <div data-aos="fade-left">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-textSecondary text-lg leading-relaxed">
            Learnova is a digital learning platform built to make education
            engaging, practical, and accessible. Our platform connects students
            with expert instructors and hands-on learning experiences that
            prepare them for real-world success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
