import React from 'react';
import HeroSection from '../../components/Home/HeroSection';
import FeaturesSection from '../../components/Home/FeaturesSection';
import CoursesSection from '../../components/Home/CoursesSection';
import InstructorsSection from '../../components/Home/InstructorsSection';
import FAQSection from '../../components/Home/FAQSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <InstructorsSection />
      <FAQSection />
    </div>
  );
};

export default Home;
