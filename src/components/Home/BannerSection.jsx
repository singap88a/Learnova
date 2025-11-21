import React from 'react';

const BannerSection = () => {
  return (
    <div className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"></div>
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&h=600&fit=crop"
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center text-white" data-aos="zoom-in">
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Join thousands of students already learning on our platform. Get unlimited access to all courses with our premium membership.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 font-semibold text-purple-600 transition-all transform bg-white rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105">
              Get Started Now
            </button>
            <button className="px-8 py-4 font-semibold transition-all transform border-2 border-white rounded-lg hover:bg-white hover:text-purple-600 hover:scale-105">
              View Pricing
            </button>
          </div>

          <div className="grid gap-8 mt-16 md:grid-cols-3">
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="mb-2 text-4xl font-bold">30-Day</div>
              <div className="text-blue-100">Money Back Guarantee</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="mb-2 text-4xl font-bold">24/7</div>
              <div className="text-blue-100">Student Support</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="mb-2 text-4xl font-bold">Lifetime</div>
              <div className="text-blue-100">Course Access</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
