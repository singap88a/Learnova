import React from 'react'

const Banner = () => {
  return (
    <>
       <div className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"></div>
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&h=600&fit=crop" 
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white" data-aos="zoom-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students already learning on our platform. Get unlimited access to all courses with our premium membership.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Get Started Now
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all transform hover:scale-105">
              View Pricing
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl font-bold mb-2">30-Day</div>
              <div className="text-blue-100">Money Back Guarantee</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Student Support</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl font-bold mb-2">Lifetime</div>
              <div className="text-blue-100">Course Access</div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Banner
