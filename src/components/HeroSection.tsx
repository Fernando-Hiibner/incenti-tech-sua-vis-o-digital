import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteContent, type Locale } from "@/lib/siteContent";

type HeroSectionProps = {
  locale: Locale;
};

const HeroSection = ({ locale }: HeroSectionProps) => {
  const content = siteContent[locale].hero;

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="home-grid absolute opacity-40" />
      <div className="home-floating-orb orb-a" />
      <div className="home-floating-orb orb-b" />
      <div className="home-floating-orb orb-c" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {content.badge}
            </span>
          </div>

          <h1 className="home-hero-title">
            {content.titleStart}{" "}
            <span className="text-gradient">{content.titleHighlight}</span>{" "}
            {content.titleEnd}
          </h1>

          <p className="home-hero-copy">{content.description}</p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contato"
              data-ga-click="home_click_hero_contato"
              data-ga-page="home"
              data-ga-section="hero"
              data-ga-label={content.primaryCta}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_32px_48px_-28px_rgba(207,63,71,0.92)] transition-all hover:-translate-y-0.5 hover:bg-primary/90"
            >
              {content.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#servicos"
              data-ga-click="home_click_hero_servicos"
              data-ga-page="home"
              data-ga-section="hero"
              data-ga-label={content.secondaryCta}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              {content.secondaryCta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
