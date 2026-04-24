import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechSection from "@/components/TechSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import SeoHead from "@/components/SeoHead";
import {
  registerAnalyticsClickTracking,
  registerSectionViewTracking,
} from "@/lib/analytics";
import { getHomeStructuredData, homeSeo } from "@/lib/seo";
import type { Locale } from "@/lib/siteContent";

type IndexProps = {
  locale: Locale;
};

const Index = ({ locale }: IndexProps) => {
  const seo = homeSeo[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const removeClickTracking = registerAnalyticsClickTracking();
    const removeSectionTracking = registerSectionViewTracking([
      {
        id: "inicio",
        eventName: "home_scroll_inicio",
        label: "Inicio",
        page: "home",
      },
      {
        id: "servicos",
        eventName: "home_scroll_servicos",
        label: "Servicos",
        page: "home",
      },
      {
        id: "vantagens",
        eventName: "home_scroll_vantagens",
        label: "Vantagens",
        page: "home",
      },
      {
        id: "projetos",
        eventName: "home_scroll_projetos",
        label: "Projetos",
        page: "home",
      },
      {
        id: "contato",
        eventName: "home_scroll_contato",
        label: "Contato",
        page: "home",
      },
      {
        id: "tecnologias",
        eventName: "home_scroll_tecnologias",
        label: "Tecnologias",
        page: "home",
      },
    ]);

    return () => {
      removeClickTracking();
      removeSectionTracking();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SeoHead
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        lang={seo.lang}
        ogLocale={seo.ogLocale}
        keywords={seo.keywords}
        alternates={seo.alternates}
        structuredData={getHomeStructuredData(locale)}
      />
      <Navbar locale={locale} />
      <HeroSection locale={locale} />
      <ServicesSection locale={locale} />
      <AdvantagesSection locale={locale} />
      <ProjectsSection locale={locale} />
      <ContactSection locale={locale} />
      <TechSection locale={locale} />
      <Footer locale={locale} />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Index;
