import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import teamwork from "../../assets/teamwork.jpg";



const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-secondary text-textPrimary">
      {/* HERO SECTION */}
      <section className="text-center py-24 bg-gradient-to-r from-primary to-accent text-white">
        <h1 className="text-5xl font-bold mb-6" data-aos="fade-up">
          About Learnova
        </h1>
        <p
          className="text-lg max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Empowering learners worldwide through innovative online education and
          a passion for growth.
        </p>
      </section>

      {/* WHO WE ARE */}
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

      {/* MISSION & VISION */}
      <section className="py-20 bg-secondary text-center">
        <h2 className="text-3xl font-semibold mb-6" data-aos="fade-up">
          Our Mission & Vision
        </h2>
        <p
          className="text-textSecondary max-w-3xl mx-auto text-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our mission is to empower learners to achieve their dreams through
          interactive courses and meaningful mentorship. Our vision is to become
          the global hub of online education — connecting knowledge with
          opportunity.
        </p>
      </section>

      {/* OUR JOURNEY */}
      <section className="py-20 bg-white px-6">
        <h2
          className="text-3xl font-semibold text-center mb-12"
          data-aos="fade-up"
        >
          Our Journey
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              year: "2023 — The Beginning",
              text: "Learnova started as a vision to make online education more interactive and accessible to everyone.",
            },
            {
              year: "2024 — Growth & Innovation",
              text: "We introduced new features, expanded our courses, and reached 10,000+ students worldwide.",
            },
            {
              year: "2025 — The Future",
              text: "We continue to evolve, focusing on AI-powered learning experiences and global reach.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border-l-4 border-accent pl-6"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <h3 className="text-xl font-semibold mb-1">{item.year}</h3>
              <p className="text-textSecondary">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary py-20 text-center">
        <h2
          className="text-3xl font-semibold mb-10"
          data-aos="fade-up"
        >
          What Our Students Say
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              text: "“Learnova helped me grow my coding skills and land my first tech job!”",
              author: "Sarah M.",
            },
            {
              text: "“The courses are well structured and the instructors are truly inspiring.”",
              author: "Ahmed K.",
            },
            {
              text: "“A fun and flexible learning platform that keeps me motivated.”",
              author: "Lina T.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <p className="text-textSecondary italic">{item.text}</p>
              <h4 className="mt-4 font-semibold text-primary">— {item.author}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center bg-gradient-to-r from-accent to-primary text-white">
        <h2 className="text-3xl font-semibold mb-4" data-aos="fade-up">
          Ready to Start Learning?
        </h2>
        <p
          className="mb-8 text-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Join thousands of learners shaping their future with Learnova today!
        </p>
        <button
          className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-secondary transition"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Explore Courses
        </button>
      </section>
    </div>
  );
};

export default About;
