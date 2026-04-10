import type { Locale } from "@/lib/siteContent";

export const DEFAULT_LOCALE: Locale = "en";
export const BRAZILIAN_PORTUGUESE_LOCALE: Locale = "pt-BR";

const normalizeLanguageTag = (value: string) => value.trim().toLowerCase();

export const resolveLocaleFromLanguageTag = (value?: string | null): Locale =>
  normalizeLanguageTag(value ?? "") === "pt-br" ? BRAZILIAN_PORTUGUESE_LOCALE : DEFAULT_LOCALE;

export const getPreferredLocale = (): Locale => {
  if (typeof navigator === "undefined") {
    return DEFAULT_LOCALE;
  }

  for (const language of navigator.languages ?? []) {
    if (resolveLocaleFromLanguageTag(language) === BRAZILIAN_PORTUGUESE_LOCALE) {
      return BRAZILIAN_PORTUGUESE_LOCALE;
    }
  }

  return resolveLocaleFromLanguageTag(navigator.language);
};

export const getLocaleFromPathname = (pathname: string): Locale =>
  pathname.startsWith("/pt-br") ? BRAZILIAN_PORTUGUESE_LOCALE : DEFAULT_LOCALE;
