    import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MissionVision = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
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
        interactive courses and meaningful mentorship. Our vision is to
        become the global hub of online education — connecting knowledge
        with opportunity.
      </p>
    </section>
  );
};

export default MissionVision;
