import hero from "../../assets/hero.jpg"; 
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="relative text-center py-32 text-white bg-cover bg-center bg-fixed overflow-hidden"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 px-6">
        <h1
          className="text-5xl md:text-6xl font-bold mb-6"
          data-aos="fade-up"
        >
          About Learnova
        </h1>
        <p
          className="text-lg max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Empowering learners worldwide through innovative online education and a
          passion for growth.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
