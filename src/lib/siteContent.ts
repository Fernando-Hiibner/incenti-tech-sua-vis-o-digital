import type { Locale } from "@/lib/locale";
import siteContentPtBr from "@/lib/siteContent.pt-BR";
import siteContentEn from "@/lib/siteContent.en";

export type { Locale } from "@/lib/locale";

export const siteContent: Record<Locale, typeof siteContentPtBr> = {
  "pt-BR": siteContentPtBr,
  en: siteContentEn,
};
