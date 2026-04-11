import { integrationHubPaths } from "@/lib/integrationHubRoutes";
import { localePaths, type Locale } from "@/lib/siteContent";

export type AlternateLink = {
  href: string;
  hrefLang: string;
};

export type PageSeo = {
  alternates: AlternateLink[];
  canonical: string;
  description: string;
  keywords: string;
  lang: string;
  ogLocale: string;
  title: string;
};

export const SITE_NAME = "Incenti Tech";
export const SITE_URL = "https://incentitech.com.br";
export const SITE_PHONE = "+55-11-97154-2519";
export const SEO_SHARE_IMAGE = `${SITE_URL}/seo-share.png`;

const HOME_PATHS: Record<Locale, string> = localePaths;
const INTEGRATION_HUB_PATHS: Record<Locale, string> = integrationHubPaths;

const buildAlternates = (paths: Record<Locale, string>): AlternateLink[] => [
  { hrefLang: "pt-BR", href: `${SITE_URL}${paths["pt-BR"]}` },
  { hrefLang: "en", href: `${SITE_URL}${paths.en}` },
  { hrefLang: "x-default", href: `${SITE_URL}${paths.en}` },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: SEO_SHARE_IMAGE,
  image: SEO_SHARE_IMAGE,
  telephone: SITE_PHONE,
  areaServed: "BR",
  availableLanguage: ["pt-BR", "en"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: ["pt-BR", "en"],
};

export const homeSeo: Record<Locale, PageSeo> = {
  "pt-BR": {
    title: "Desenvolvimento de Software para Empresas | Incenti Tech",
    description:
      "Desenvolvemos software sob medida, sistemas web, integrações complexas e soluções digitais para empresas que precisam de tecnologia confiável, performance e escala.",
    canonical: `${SITE_URL}${HOME_PATHS["pt-BR"]}`,
    lang: "pt-BR",
    ogLocale: "pt_BR",
    keywords:
      "desenvolvimento de software, sistemas web, solucoes digitais, software empresarial, integracao de sistemas, desenvolvimento sob medida",
    alternates: buildAlternates(HOME_PATHS),
  },
  en: {
    title: "Custom Software Development for Business | Incenti Tech",
    description:
      "We build custom software, business systems, complex integrations, and digital solutions for companies that need reliable technology, performance, and scalable growth.",
    canonical: `${SITE_URL}${HOME_PATHS.en}`,
    lang: "en",
    ogLocale: "en_US",
    keywords:
      "custom software development, business systems, digital solutions, web systems, software integration, enterprise software",
    alternates: buildAlternates(HOME_PATHS),
  },
};

export const integrationHubSeo: Record<Locale, PageSeo> = {
  "pt-BR": {
    title: "Integration Hub para Marketplaces e Incentivo | Incenti Tech",
    description:
      "Centralize catalogo, estoque, precos e integracoes com grandes varejistas em uma unica plataforma para campanhas de incentivo, marketplaces e operacoes B2B.",
    canonical: `${SITE_URL}${INTEGRATION_HUB_PATHS["pt-BR"]}`,
    lang: "pt-BR",
    ogLocale: "pt_BR",
    keywords:
      "integration hub, integracao com marketplaces, catalogo de produtos, campanhas de incentivo, integracao b2b, varejistas",
    alternates: buildAlternates(INTEGRATION_HUB_PATHS),
  },
  en: {
    title: "Integration Hub for Incentive and Marketplace Operations",
    description:
      "Unify catalog, stock, pricing, and retailer integrations in one platform for incentive campaigns, marketplaces, and B2B commerce operations.",
    canonical: `${SITE_URL}${INTEGRATION_HUB_PATHS.en}`,
    lang: "en",
    ogLocale: "en_US",
    keywords:
      "integration hub, marketplace integration, retailer catalog, incentive campaigns, b2b integration, ecommerce operations",
    alternates: buildAlternates(INTEGRATION_HUB_PATHS),
  },
};

export const getHomeStructuredData = (locale: Locale) => [
  organizationSchema,
  websiteSchema,
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${homeSeo[locale].canonical}#service`,
    name:
      locale === "pt-BR"
        ? "Desenvolvimento de software, sistemas web e integrações"
        : "Custom software, web systems, and integration services",
    url: homeSeo[locale].canonical,
    image: SEO_SHARE_IMAGE,
    description: homeSeo[locale].description,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: "BR",
    serviceType:
      locale === "pt-BR"
        ? ["Desenvolvimento de software", "Sistemas web", "Integrações", "Modernização de software legado"]
        : ["Custom software development", "Web systems", "Systems integration", "Legacy modernization"],
  },
];

export const getIntegrationHubStructuredData = (locale: Locale) => [
  organizationSchema,
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${integrationHubSeo[locale].canonical}#service`,
    name:
      locale === "pt-BR"
        ? "Integration Hub para incentivo e marketplaces"
        : "Integration Hub for incentive and marketplace operations",
    url: integrationHubSeo[locale].canonical,
    image: SEO_SHARE_IMAGE,
    description: integrationHubSeo[locale].description,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: "BR",
    serviceType:
      locale === "pt-BR"
        ? ["Integração com varejistas", "Catálogo unificado", "Histórico de preços", "Sincronização de estoque"]
        : ["Retailer integration", "Unified catalog", "Price history", "Stock synchronization"],
  },
];

export const getNotFoundStructuredData = () => [organizationSchema];
