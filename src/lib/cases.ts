import type { Locale } from "@/lib/locale";
import caseStudiesPtBr from "@/lib/cases.pt-BR";
import caseStudiesEn from "@/lib/cases.en";

export type CaseStudy = {
  slug: string;
  company: string;
  product: string;
  technologies: string[];
  duration: string;
  summary: string;
  fullText: string;
  featured?: boolean;
  featuredLabel?: string;
  images?: {
    src: string;
    alt: string;
  }[];
};

export const caseStudiesByLocale: Record<Locale, CaseStudy[]> = {
  "pt-BR": caseStudiesPtBr,
  en: caseStudiesEn,
};
