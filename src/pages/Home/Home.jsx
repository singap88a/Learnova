import React from 'react';
import HeroSection from '../../components/Home/HeroSection';
import CoursesSection from '../../components/Home/CoursesSection';
import InstructorsSection from '../../components/Home/InstructorsSection';
import FAQSection from '../../components/Home/FAQSection';
import FeaturesSection from '../../components/Home/FeatuersSection';
import AnalysisSection from '../../components/Home/AnalysisSection';
import Banner from '../../components/Home/Banner';
import NewsLetter from '../../components/Home/NewsLetter';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection/>
      <AnalysisSection/>
      <CoursesSection />
      <InstructorsSection />
      <Banner/>
      <FAQSection />
      <NewsLetter/>
    </div>
  );
};

export default Home;
