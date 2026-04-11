import { motion } from "framer-motion";
import { Headphones, ShieldCheck, Target, Users, Zap } from "lucide-react";
import { siteContent, type Locale } from "@/lib/siteContent";

const advantageIcons = [Target, Zap, Users, ShieldCheck, Headphones];

type AdvantagesSectionProps = {
  locale: Locale;
};

const AdvantagesSection = ({ locale }: AdvantagesSectionProps) => {
  const content = siteContent[locale].advantages;

  return (
    <section id="vantagens" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="grid gap-10 xl:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="xl:pr-10"
          >
            <p className="home-kicker">{content.eyebrow}</p>
            <h2 className="mt-5 max-w-lg font-heading text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              {content.title}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground md:text-lg">
              {content.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="home-shell overflow-hidden p-7 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              {content.items.map((item, index) => {
                const Icon = advantageIcons[index];

                return (
                  <article
                    key={item.title}
                    className="flex gap-4 rounded-[24px] border border-white/8 bg-white/[0.03] p-5"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-heading text-xl font-semibold tracking-[-0.04em] text-white">
                          {item.title}
                        </h3>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/36">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
