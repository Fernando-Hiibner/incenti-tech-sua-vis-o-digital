import { useEffect } from "react";

type SeoHeadProps = {
  title: string;
  description: string;
  canonical: string;
  lang: string;
  ogLocale: string;
  alternates: { hrefLang: string; href: string }[];
  image?: string;
  type?: string;
  keywords?: string;
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

const SeoHead = ({
  title,
  description,
  canonical,
  lang,
  ogLocale,
  alternates,
  image = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/29ba2d99-ef56-4983-a530-03f02dd8b95a/id-preview-5fbdbb6a--155575ed-1042-48f4-8754-d52787cea0f9.lovable.app-1775524304006.png",
  type = "website",
  keywords,
}: SeoHeadProps) => {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;

    upsertMeta("meta[name='description']", { name: "description" }, description);
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

    if (typeof window !== "undefined" && "gtag" in window && typeof window.gtag === "function") {
      window.gtag("config", "G-TXJ7J2404S", {
        page_path: window.location.pathname,
        page_title: title,
      });
    }
  }, [alternates, canonical, description, image, keywords, lang, ogLocale, title, type]);

  return null;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default SeoHead;
