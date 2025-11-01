import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to Knowledge Academy
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Empowering learners worldwide with quality education and innovative courses.
          Join our community and start your learning journey today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
