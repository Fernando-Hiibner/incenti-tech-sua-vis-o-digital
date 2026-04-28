import type siteContentPtBr from "@/lib/siteContent.pt-BR";

export type HomeContent = typeof siteContentPtBr;
export type HomeNavContent = HomeContent["nav"];
export type HomeHeroContent = HomeContent["hero"];
export type HomePainContent = HomeContent["pain"];
export type HomeServicesContent = HomeContent["services"];
export type HomeProjectsContent = HomeContent["projects"];
export type HomeTechContent = HomeContent["tech"];
export type HomeContactContent = HomeContent["contact"];
export type HomeFooterContent = HomeContent["footer"];
