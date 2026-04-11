import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteContent, type Locale } from "@/lib/siteContent";

type HeroSectionProps = {
  locale: Locale;
};

const HeroSection = ({ locale }: HeroSectionProps) => {
  const content = siteContent[locale].hero;
  const headlineHighlight =
    locale === "pt-BR" ? "sistemas e solucoes digitais" : "software systems and digital solutions";

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(0,0%,100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,100%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-[120px] bg-primary" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5"
          >
            <span className="text-sm text-primary font-medium">{content.badge}</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
            {content.titleStart} <span className="text-gradient">{headlineHighlight}</span>{" "}
            {content.titleEnd}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {content.description}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contato"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all animate-pulse-glow"
            >
              {content.primaryCta}
            </a>
            <a
              href="#servicos"
              className="border border-border text-foreground px-8 py-4 rounded-lg text-lg font-medium hover:bg-secondary/50 transition-colors"
            >
              {content.secondaryCta}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-muted-foreground" size={28} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
