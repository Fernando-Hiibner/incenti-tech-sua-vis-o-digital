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
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="lg:pr-8 xl:pr-10"
          >
            <p className="home-kicker">{content.eyebrow}</p>
            <h2 className="home-section-title">{content.title}</h2>
            <p className="home-section-copy">{content.description}</p>
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
                const isLastOddItem =
                  content.items.length % 2 === 1 &&
                  index === content.items.length - 1;

                return (
                  <article
                    key={item.title}
                    className={`flex min-w-0 flex-col gap-4 rounded-[18px] border border-border bg-secondary/45 p-5 xl:flex-row ${isLastOddItem ? "md:col-span-2 md:mx-auto md:w-full md:max-w-[calc(50%-0.625rem)]" : ""}`}
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="home-card-title min-w-0">{item.title}</h3>
                      <p className="home-card-copy mt-3">{item.description}</p>
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
