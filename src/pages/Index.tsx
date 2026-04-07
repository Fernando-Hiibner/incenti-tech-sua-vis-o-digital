import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechSection from "@/components/TechSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <AdvantagesSection />
    <ProjectsSection />
    <TechSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
