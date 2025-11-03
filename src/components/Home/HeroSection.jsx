import React from "react";
import HeroPic from "../../assets/Hero-Pic.png";
const HeroSection = () => {
  return (
<<<<<<< Updated upstream
    <section className="Hero bg-white text-white  h-screen md:px-16 px-8">
=======
    <section className="Hero bg-white text-white mb-16  h-full md:px-16 px-8">
>>>>>>> Stashed changes
      {/* Text And Image */}
      <div className="Container md:grid md:grid-cols-2 flex flex-col-reverse justify-center items-center text-center  md:space-x-8">
        <div className="flex flex-col justify-center items-center  md:items-start space-y-10 w-full ">
        {/* Text And Description-Top */}
        <div className="text-black md:text-left md:w-8/12 space-y-4">
          <h1 className="md:text-4xl text-2xl font-semibold md:tracking-wider md:leading-[3rem] ">Learn A New Skill Everyday, AnyTime, And Anywhere.</h1>
          <p>
            1000+ Courses covering all tech domains for you to learn and explore
            new oppurtunities. Learn from Industry Experts and land your Dream
            Job.
          </p>
        </div>
          {/* Buttons-Center */}
          <div className=" flex items-center text-center  space-x-8">
          <button className=" text-white md:text-lg font-semibold bg-blue-500 rounded-3xl md:px-8 px-2 md:py-2 py-1 hover:text-blue-600 hover:bg-white outline outline-2 outline-blue-500 border-blue-500 transition duration-300">Start Trial</button>
          <button className=" text-blue-500 md:text-lg font-semibold bg-white rounded-3xl md:px-8 px-2 md:py-2 py-1 hover:text-white hover:bg-blue-500 outline outline-2 outline-blue-500 border-blue-500 transition duration-300">Discover Instractors</button>
          </div>
          {/* Rating-Bottom */}
          <div className="Rating flex  items-center space-x-4">
<<<<<<< Updated upstream
            <p>Courses To Choose From
              <span className="text-yellow-400 font-bold text-2xl mb-4">1000+</span>
              </p>
            <p>Student Trained<span className="text-blue-400 font-bold text-2xl mb-4">5000+</span></p>
            <p>Professional Trainers<span className="text-orange-400 font-bold text-2xl mb-4">200+</span></p>
=======
            <p className="text-black flex flex-col-reverse">Courses To Choose From
              <span className="text-yellow-400 font-bold text-2xl mb-4">1000+</span>
              </p>
            <p className="text-black flex flex-col-reverse">Student Trained<span className="text-blue-400 font-bold text-2xl mb-4">5000+</span></p>
            <p className="text-black flex flex-col-reverse">Professional Trainers<span className="text-orange-400 font-bold text-2xl mb-4">200+</span></p>
>>>>>>> Stashed changes
          </div>
        </div>
        {/* Image */}
        <div className="h-auto">
          <img src={HeroPic} alt="Hero-Picture" loading="lazy" className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
