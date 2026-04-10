import type { Locale } from "@/lib/siteContent";

export const integrationHubRootPath = "/integration-hub";

export const integrationHubPaths: Record<Locale, string> = {
  "pt-BR": "/pt-BR/integration-hub",
  en: "/en/integration-hub",
};

export const getIntegrationHubPath = (locale: Locale) => integrationHubPaths[locale];
