import type { Locale } from "@/lib/locale";

export const integrationHubRootPath = "/integration-hub";

export const integrationHubPaths: Record<Locale, string> = {
  "pt-BR": "/pt-br/integration-hub/",
  en: "/en/integration-hub/",
};

export const getIntegrationHubPath = (locale: Locale) => integrationHubPaths[locale];
