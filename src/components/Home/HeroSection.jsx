import React from "react";
import { motion } from "framer-motion";
import { Play, Users, Award, Star, ArrowRight, BookOpen } from "lucide-react";
import HeroPic from "../../assets/Hero-Pic.png";

const HeroSection = () => {
  const stats = [
    {
      icon: BookOpen,
      value: "1000+",
      label: "Courses Available",
      color: "text-yellow-400"
    },
    {
      icon: Users,
      value: "5000+",
      label: "Students Trained",
      color: "text-blue-400"
    },
    {
      icon: Award,
      value: "200+",
      label: "Expert Instructors",
      color: "text-orange-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden text-white ">
      {/* Background - Same as Features Section */}
      <div className="relative px-20 overflow-hidden ">
 

        {/* Content */}
        <div className="container relative mx-auto">
          <motion.div 
            className="flex flex-col-reverse items-center justify-center min-h-screen py-20 md:grid md:grid-cols-2 md:gap-12 lg:gap-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Column - Text Content */}
            <motion.div 
              className="flex flex-col items-center w-full mt-12 space-y-8 md:mt-0 md:items-start md:space-y-12"
              variants={itemVariants}
            >
              {/* Main Heading */}
              <div className="space-y-6 text-center md:text-left">
                <motion.h1 
                  className="text-4xl font-bold leading-tight text-transparent md:text-5xl lg:text-6xl bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text"
                  variants={itemVariants}
                >
                  Learn A New Skill{" "}
                  <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                    Everyday, Anywhere
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="max-w-2xl text-xl leading-relaxed text-slate-600"
                  variants={itemVariants}
                >
                  1000+ Courses covering all tech domains for you to learn and explore
                  new opportunities. Learn from Industry Experts and land your Dream Job.
                </motion.p>
              </div>

              {/* Buttons */}
              <motion.div 
                className="flex flex-col gap-4 sm:flex-row sm:gap-6"
                variants={itemVariants}
              >
                <motion.button 
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl min-w-[200px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-700 to-purple-700 group-hover:opacity-100"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    Start Free Trial
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
                  </span>
                </motion.button>

                <motion.button 
                  className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-800 font-semibold rounded-xl border border-slate-200 transition-all duration-300 hover:bg-white hover:shadow-lg min-w-[200px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center gap-3">
                    <Play size={20} className="text-blue-600" />
                    Meet Instructors
                  </span>
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3"
                variants={itemVariants}
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-4 p-4 transition-all duration-300 border bg-white/80 backdrop-blur-sm rounded-xl border-white/20 hover:bg-white"
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-3 rounded-lg bg-slate-100">
                      <stat.icon className={`${stat.color}`} size={24} />
                    </div>
                    <div className="text-left">
                      <div className={`text-2xl font-bold ${stat.color}`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-600">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Rating */}
              <motion.div 
                className="flex items-center gap-4 p-4 border bg-white/80 backdrop-blur-sm rounded-xl border-white/20"
                variants={itemVariants}
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-800">4.9/5</span> rating from 2,000+ students
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div 
              className="relative flex justify-center w-full"
              variants={imageVariants}
            >
              <div className="relative">
                {/* Floating Elements */}
                <motion.div
                  className="absolute w-24 h-24 rounded-full -top-4 -right-4 bg-yellow-400/20 blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute w-32 h-32 rounded-full -bottom-4 -left-4 bg-blue-400/20 blur-xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Main Image */}
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={HeroPic} 
                    alt="Hero-Picture" 
                    loading="eager" 
                    className="object-cover h-auto max-w-full drop-shadow-2xl"
                  />
                </motion.div>

                {/* Floating Card 1 */}
                <motion.div
                  className="absolute p-4 border shadow-2xl top-4 -left-4 md:top-8 md:-left-8 bg-white/80 backdrop-blur-sm rounded-2xl border-slate-200"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-green-500/20">
                      <Award className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800">Certified</span>
                  </div>
                </motion.div>

                {/* Floating Card 2 */}
                <motion.div
                  className="absolute p-4 border shadow-2xl bottom-8 -right-4 md:bottom-16 md:-right-8 bg-white/80 backdrop-blur-sm rounded-2xl border-slate-200"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800">Live Classes</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;