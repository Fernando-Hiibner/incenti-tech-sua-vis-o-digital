import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechSection from "@/components/TechSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import type { Locale } from "@/lib/siteContent";

type IndexProps = {
  locale: Locale;
};

const Index = ({ locale }: IndexProps) => {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <div className="min-h-screen">
      <Navbar locale={locale} />
      <HeroSection locale={locale} />
      <ServicesSection locale={locale} />
      <AdvantagesSection locale={locale} />
      <ProjectsSection locale={locale} />
      <TechSection locale={locale} />
      <ContactSection locale={locale} />
      <Footer locale={locale} />
    </div>
  );
};

export default Index;
