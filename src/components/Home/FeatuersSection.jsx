import React from 'react'
import { BookOpen, Users, Award, Video,} from 'lucide-react';
const FeaturesSection = () => {

  const features = [
    {
      icon: <BookOpen size={40} />,
      title: "Expert-Led Courses",
      description: "Learn from industry professionals with years of real-world experience"
    },
    {
      icon: <Users size={40} />,
      title: "Community Support",
      description: "Join a thriving community of learners and get help whenever you need it"
    },
    {
      icon: <Award size={40} />,
      title: "Certified Learning",
      description: "Earn recognized certificates upon completion of your courses"
    },
    {
      icon: <Video size={40} />,
      title: "Lifetime Access",
      description: "Access your courses anytime, anywhere, on any device"
    }
  ];

  return (
    <div className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            We provide the best learning experience with cutting-edge technology and expert instructors
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center text-blue-600 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FeaturesSection;