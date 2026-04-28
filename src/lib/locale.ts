export type Locale = "pt-BR" | "en";

export const DEFAULT_LOCALE: Locale = "en";
export const BRAZILIAN_PORTUGUESE_LOCALE: Locale = "pt-BR";

export const localePaths: Record<Locale, string> = {
  "pt-BR": "/pt-br/",
  en: "/en/",
};

export const localeSwitchLabel: Record<Locale, string> = {
  "pt-BR": "EN",
  en: "BR",
};

const normalizeLanguageTag = (value: string) => value.trim().toLowerCase();

export const resolveLocaleFromLanguageTag = (value?: string | null): Locale =>
  normalizeLanguageTag(value ?? "") === "pt-br"
    ? BRAZILIAN_PORTUGUESE_LOCALE
    : DEFAULT_LOCALE;

export const getPreferredLocale = (): Locale => {
  if (typeof navigator === "undefined") {
    return DEFAULT_LOCALE;
  }

  for (const language of navigator.languages ?? []) {
    if (
      resolveLocaleFromLanguageTag(language) === BRAZILIAN_PORTUGUESE_LOCALE
    ) {
      return BRAZILIAN_PORTUGUESE_LOCALE;
    }
  }

  return resolveLocaleFromLanguageTag(navigator.language);
};

export const getLocaleFromPathname = (pathname: string): Locale =>
  pathname.toLowerCase().startsWith("/pt-br")
    ? BRAZILIAN_PORTUGUESE_LOCALE
    : DEFAULT_LOCALE;
