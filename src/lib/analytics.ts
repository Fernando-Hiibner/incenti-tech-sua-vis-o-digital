type AnalyticsParams = Record<string, string | number | boolean | undefined>;

type AnalyticsSection = {
  id: string;
  eventName: string;
  label: string;
  page: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const trackAnalyticsEvent = (
  eventName: string,
  params: AnalyticsParams = {},
) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  const eventParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined),
  );

  window.gtag("event", eventName, eventParams);
};

const registerAnalyticsClickTracking = () => {
  if (typeof document === "undefined") {
    return () => undefined;
  }

  const handleClick = (event: MouseEvent) => {
    const target =
      event.target instanceof Element
        ? event.target.closest<HTMLElement>("[data-ga-click]")
        : null;

    if (!target?.dataset.gaClick) {
      return;
    }

    trackAnalyticsEvent(target.dataset.gaClick, {
      page: target.dataset.gaPage,
      section: target.dataset.gaSection,
      label: target.dataset.gaLabel ?? target.textContent?.trim(),
    });
  };

  document.addEventListener("click", handleClick);

  return () => document.removeEventListener("click", handleClick);
};

const registerSectionViewTracking = (sections: AnalyticsSection[]) => {
  if (typeof document === "undefined" || typeof window === "undefined") {
    return () => undefined;
  }

  if (typeof window.IntersectionObserver !== "function") {
    return () => undefined;
  }

  const trackedSections = new Set<string>();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const section = sections.find(
          ({ id }) => id === (entry.target as HTMLElement).id,
        );

        if (!section || trackedSections.has(section.id)) {
          return;
        }

        trackedSections.add(section.id);
        trackAnalyticsEvent(section.eventName, {
          page: section.page,
          section: section.id,
          label: section.label,
        });
      });
    },
    {
      threshold: 0.35,
      rootMargin: "0px 0px -12% 0px",
    },
  );

  sections.forEach((section) => {
    const element = document.getElementById(section.id);
    if (element) {
      observer.observe(element);
    }
  });

  return () => observer.disconnect();
};

export {
  registerAnalyticsClickTracking,
  registerSectionViewTracking,
  trackAnalyticsEvent,
};
