import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import DailyScheduleSection from "@/components/DailyScheduleSection";
import GallerySection from "@/components/GallerySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-display">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <DailyScheduleSection />
      <GallerySection />
      <FooterSection />
    </div>
  );
};

export default Index;
