import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-secondary py-20 text-center">
      <h2 className="text-3xl font-semibold mb-10" data-aos="fade-up">
        What Our Students Say
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          {
            text: "“Learnova helped me grow my coding skills and land my first tech job!”",
            author: "Sarah M.",
            rating: 5,
          },
          {
            text: "“The courses are well structured and the instructors are truly inspiring.”",
            author: "Ahmed K.",
            rating: 4,
          },
          {
            text: "“A fun and flexible learning platform that keeps me motivated.”",
            author: "Lina T.",
            rating: 5,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            
            <div className="mb-4 text-yellow-400">
              {Array(item.rating)
                .fill("⭐")
                .map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
            </div>

            <p className="text-textSecondary italic">{item.text}</p>
            <h4 className="mt-4 font-semibold text-primary">— {item.author}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
