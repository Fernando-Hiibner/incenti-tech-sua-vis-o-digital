import { Suspense, lazy, useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import ServicesSection from "@/components/ServicesSection";
import SeoHead from "@/components/SeoHead";
import { getHomeStructuredData, homeSeo } from "@/lib/seo";
import type { Locale } from "@/lib/siteContent";

type IndexProps = {
  locale: Locale;
};

type AnalyticsModule = typeof import("@/lib/analytics");

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

const DeferredHomeSections = ({
  isReady,
  locale,
  onReveal,
}: IndexProps & {
  isReady: boolean;
  onReveal: () => void;
}) => {
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isReady || typeof window === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          onReveal();
        }
      },
      { rootMargin: "900px 0px" },
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => observer.disconnect();
  }, [isReady, onReveal]);

  if (!isReady) {
    return (
      <>
        <div id="projetos" ref={triggerRef} aria-hidden="true" />
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
  const [analyticsModule, setAnalyticsModule] = useState<AnalyticsModule | null>(
    null,
  );
  const [shouldRenderDeferredSections, setShouldRenderDeferredSections] =
    useState(false);
  const seo = homeSeo[locale];

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

    window.addEventListener("scroll", scheduleLoad, { once: true, passive: true });
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

    const trackedSections = [
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
      ...(shouldRenderDeferredSections
        ? [
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
          ]
        : []),
    ];

    return analyticsModule.registerSectionViewTracking(trackedSections);
  }, [analyticsModule, shouldRenderDeferredSections]);

  useEffect(() => {
    if (shouldRenderDeferredSections) {
      return;
    }

    const revealDeferredSections = () => setShouldRenderDeferredSections(true);

    window.addEventListener("keydown", revealDeferredSections, { once: true });

    return () => window.removeEventListener("keydown", revealDeferredSections);
  }, [shouldRenderDeferredSections]);

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
      <DeferredHomeSections
        isReady={shouldRenderDeferredSections}
        locale={locale}
        onReveal={() => setShouldRenderDeferredSections(true)}
      />
    </div>
  );
};

export default Index;
