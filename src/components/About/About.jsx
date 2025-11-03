import HeroSection from "./HeroSection";
import WhoWeAre from "./WhoWeAre";
import MissionVision from "./MissionVision";
import OurJourney from "./OurJourney";
import Testimonials from "./Testimonials";
import CTASection from "./CTASection";

const About = () => {
  return (
    <div className="bg-secondary text-textPrimary">
      <HeroSection />
      <WhoWeAre />
      <MissionVision />
      <OurJourney />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default About;
