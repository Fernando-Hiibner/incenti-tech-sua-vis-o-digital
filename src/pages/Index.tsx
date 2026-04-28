import { Suspense, lazy, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import ServicesSection from "@/components/ServicesSection";
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

const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const TechSection = lazy(() => import("@/components/TechSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));
const FloatingWhatsAppButton = lazy(
  () => import("@/components/FloatingWhatsAppButton"),
);

const scheduleIdleWork = (callback: () => void) => {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  let cancelled = false;
  let idleId = 0;
  let timeoutId = 0;

  const run = () => {
    if (!cancelled) {
      callback();
    }
  };

  const schedule = () => {
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(run, { timeout: 1400 });
      return;
    }

    timeoutId = window.setTimeout(run, 800);
  };

  if (document.readyState === "complete") {
    schedule();
  } else {
    window.addEventListener("load", schedule, { once: true });
  }

  return () => {
    cancelled = true;
    window.removeEventListener("load", schedule);

    if (idleId && "cancelIdleCallback" in window) {
      window.cancelIdleCallback(idleId);
    }

    if (timeoutId) {
      window.clearTimeout(timeoutId);
    }
  };
};

const DeferredHomeSections = ({ locale }: IndexProps) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const reveal = () => setShouldRender(true);
    const cleanupIdleWork = scheduleIdleWork(reveal);

    window.addEventListener("pointerdown", reveal, { once: true, passive: true });
    window.addEventListener("keydown", reveal, { once: true });

    return () => {
      cleanupIdleWork();
      window.removeEventListener("pointerdown", reveal);
      window.removeEventListener("keydown", reveal);
    };
  }, []);

  if (!shouldRender) {
    return (
      <>
        <div id="projetos" aria-hidden="true" />
        <div id="tecnologias" aria-hidden="true" />
        <div id="contato" aria-hidden="true" />
      </>
    );
  }

  return (
    <Suspense fallback={null}>
      <ProjectsSection locale={locale} />
      <TechSection locale={locale} />
      <ContactSection locale={locale} />
      <Footer locale={locale} />
      <FloatingWhatsAppButton locale={locale} />
    </Suspense>
  );
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
        id: "desafios",
        eventName: "home_scroll_desafios",
        label: "Desafios",
        page: "home",
      },
      {
        id: "servicos",
        eventName: "home_scroll_servicos",
        label: "Servicos",
        page: "home",
      },
      {
        id: "projetos",
        eventName: "home_scroll_projetos",
        label: "Projetos",
        page: "home",
      },
      {
        id: "tecnologias",
        eventName: "home_scroll_tecnologias",
        label: "Tecnologias",
        page: "home",
      },
      {
        id: "contato",
        eventName: "home_scroll_contato",
        label: "Contato",
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
      <PainSection locale={locale} />
      <ServicesSection locale={locale} />
      <DeferredHomeSections locale={locale} />
    </div>
  );
};

export default Index;
