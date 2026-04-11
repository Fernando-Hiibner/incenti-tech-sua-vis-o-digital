import { useEffect } from "react";

type SeoHeadProps = {
  alternates: { hrefLang: string; href: string }[];
  canonical: string;
  description: string;
  image?: string;
  keywords?: string;
  lang: string;
  ogLocale: string;
  robots?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
  title: string;
  type?: string;
};

const GENERATED_SELECTOR = "[data-seo-generated='true']";

const upsertMeta = (selector: string, attributes: Record<string, string>, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.dataset.seoGenerated = "true";
    Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const upsertLink = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement("link");
    element.dataset.seoGenerated = "true";
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
};

const syncStructuredData = (structuredData?: Record<string, unknown> | Record<string, unknown>[]) => {
  document.head
    .querySelectorAll<HTMLScriptElement>("script[type='application/ld+json'][data-seo-generated='true']")
    .forEach((element) => element.remove());

  if (!structuredData) {
    return;
  }

  const entries = Array.isArray(structuredData) ? structuredData : [structuredData];
  entries.forEach((entry) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seoGenerated = "true";
    script.text = JSON.stringify(entry);
    document.head.appendChild(script);
  });
};

const SeoHead = ({
  alternates,
  canonical,
  description,
  lang,
  ogLocale,
  image = "https://incentitech.com.br/seo-share.png",
  keywords,
  robots = "index, follow, max-image-preview:large",
  structuredData,
  title,
  type = "website",
}: SeoHeadProps) => {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;

    upsertMeta("meta[name='description']", { name: "description" }, description);
    upsertMeta("meta[name='robots']", { name: "robots" }, robots);
    upsertMeta("meta[property='og:site_name']", { property: "og:site_name" }, "Incenti Tech");
    upsertMeta("meta[property='og:title']", { property: "og:title" }, title);
    upsertMeta("meta[property='og:description']", { property: "og:description" }, description);
    upsertMeta("meta[property='og:type']", { property: "og:type" }, type);
    upsertMeta("meta[property='og:url']", { property: "og:url" }, canonical);
    upsertMeta("meta[property='og:locale']", { property: "og:locale" }, ogLocale);
    upsertMeta("meta[property='og:image']", { property: "og:image" }, image);
    upsertMeta("meta[name='twitter:card']", { name: "twitter:card" }, "summary_large_image");
    upsertMeta("meta[name='twitter:title']", { name: "twitter:title" }, title);
    upsertMeta("meta[name='twitter:description']", { name: "twitter:description" }, description);
    upsertMeta("meta[name='twitter:image']", { name: "twitter:image" }, image);

    if (keywords) {
      upsertMeta("meta[name='keywords']", { name: "keywords" }, keywords);
    }

    upsertLink("link[rel='canonical']", { rel: "canonical", href: canonical });

    document.head.querySelectorAll<HTMLLinkElement>(`link[rel='alternate']${GENERATED_SELECTOR}`).forEach((element) => element.remove());
    alternates.forEach(({ hrefLang, href }) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = hrefLang;
      link.href = href;
      link.dataset.seoGenerated = "true";
      document.head.appendChild(link);
    });

    syncStructuredData(structuredData);

    if (typeof window !== "undefined" && "gtag" in window && typeof window.gtag === "function") {
      window.gtag("config", "G-TXJ7J2404S", {
        page_path: window.location.pathname,
        page_title: title,
      });
    }
  }, [alternates, canonical, description, image, keywords, lang, ogLocale, robots, structuredData, title, type]);

  return null;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default SeoHead;
