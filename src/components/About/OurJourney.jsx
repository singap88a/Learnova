import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurJourney = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
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
  );
};

export default OurJourney;
