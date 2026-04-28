import { Suspense, lazy, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import ServicesSection from "@/components/ServicesSection";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import type { CaseStudy } from "@/lib/cases";
import type { HomeContent } from "@/lib/homeContent";
import type { Locale } from "@/lib/locale";

type IndexProps = {
  locale: Locale;
  content: HomeContent;
  caseStudies: CaseStudy[];
};

type AnalyticsModule = typeof import("@/lib/analytics");

const TRACKED_HOME_SECTIONS = [
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
] as const;

const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const TechSection = lazy(() => import("@/components/TechSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

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

const DeferredHomeFallback = () => (
  <>
    <section id="projetos" className="section-padding" aria-hidden="true">
      <div className="container mx-auto">
        <div className="mb-12 max-w-3xl">
          <div className="h-4 w-28 rounded-full bg-secondary/70" />
          <div className="mt-5 h-14 max-w-2xl rounded-[1.25rem] bg-secondary/80" />
          <div className="mt-6 h-24 max-w-xl rounded-[1.25rem] bg-secondary/55" />
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <div className="glass-card min-h-[31rem] bg-secondary/35" />
          <div className="glass-card min-h-[31rem] bg-secondary/35" />
          <div className="glass-card min-h-[31rem] bg-secondary/35" />
        </div>
      </div>
    </section>

    <section
      id="tecnologias"
      className="bg-secondary/20 px-4 py-5 sm:px-6 md:py-6 lg:px-8"
      aria-hidden="true"
    >
      <div className="container mx-auto">
        <div className="h-[5rem] rounded-[1.25rem] bg-secondary/45" />
      </div>
    </section>

    <section id="contato" className="section-padding" aria-hidden="true">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto h-14 max-w-2xl rounded-[1.25rem] bg-secondary/80" />
          <div className="mx-auto mt-6 h-20 max-w-xl rounded-[1.25rem] bg-secondary/55" />
          <div className="home-shell mt-10 min-h-[42rem] bg-secondary/25" />
        </div>
      </div>
    </section>

    <footer
      className="border-t border-border bg-secondary/45 px-4 py-14 sm:px-6"
      aria-hidden="true"
    >
      <div className="container mx-auto">
        <div className="h-40 rounded-[1.25rem] bg-secondary/40" />
      </div>
    </footer>
  </>
);

const DeferredHomeSections = ({ locale, content, caseStudies }: IndexProps) => (
  <Suspense fallback={<DeferredHomeFallback />}>
    <ProjectsSection
      locale={locale}
      content={content.projects}
      caseStudies={caseStudies}
    />
    <TechSection content={content.tech} />
    <ContactSection content={content.contact} />
    <Footer content={content.footer} />
  </Suspense>
);

const Index = ({ locale, content, caseStudies }: IndexProps) => {
  const [analyticsModule, setAnalyticsModule] = useState<AnalyticsModule | null>(
    null,
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    let cancelled = false;
    let started = false;
    let timeoutId = 0;

    const loadAnalytics = async () => {
      if (cancelled || started) {
        return;
      }

      started = true;
      const module = await import("@/lib/analytics");

      if (!cancelled) {
        setAnalyticsModule(module);
      }
    };

    const scheduleLoad = () => {
      timeoutId = window.setTimeout(loadAnalytics, 1200);
    };

    const cancelIdleWork = scheduleIdleWork(() => {
      timeoutId = window.setTimeout(loadAnalytics, 4000);
    });

    window.addEventListener("scroll", scheduleLoad, {
      once: true,
      passive: true,
    });
    window.addEventListener("pointerdown", scheduleLoad, {
      once: true,
      passive: true,
    });
    window.addEventListener("keydown", scheduleLoad, { once: true });

    return () => {
      cancelled = true;
      cancelIdleWork();
      window.clearTimeout(timeoutId);
      window.removeEventListener("scroll", scheduleLoad);
      window.removeEventListener("pointerdown", scheduleLoad);
      window.removeEventListener("keydown", scheduleLoad);
    };
  }, []);

  useEffect(() => {
    if (!analyticsModule) {
      return;
    }

    return analyticsModule.registerAnalyticsClickTracking();
  }, [analyticsModule]);

  useEffect(() => {
    if (!analyticsModule) {
      return;
    }

    return analyticsModule.registerSectionViewTracking([
      ...TRACKED_HOME_SECTIONS,
    ]);
  }, [analyticsModule]);

  return (
    <div className="min-h-screen">
      <Navbar locale={locale} content={content.nav} />
      <HeroSection content={content.hero} />
      <PainSection content={content.pain} />
      <ServicesSection content={content.services} />
      <DeferredHomeSections
        locale={locale}
        content={content}
        caseStudies={caseStudies}
      />
      <FloatingWhatsAppButton locale={locale} />
    </div>
  );
};

export default Index;
