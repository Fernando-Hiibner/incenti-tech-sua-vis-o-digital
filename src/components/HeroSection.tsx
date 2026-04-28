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
      <div className="home-grid absolute opacity-70" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[hsl(var(--brand-red)/0.22)] bg-[hsl(var(--brand-red)/0.08)] px-4 py-2">
            <Sparkles className="h-4 w-4 text-[hsl(var(--brand-red))]" />
            <span className="text-sm font-medium text-[hsl(var(--brand-red))]">
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-red))] px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_24px_48px_-30px_rgba(176,7,20,0.68)] transition-all hover:-translate-y-0.5 hover:bg-[hsl(var(--brand-red)/0.9)]"
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
              className="inline-flex items-center justify-center rounded-full border border-border bg-white px-8 py-4 text-base font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              {content.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
