import { motion } from "framer-motion";
import {
  Bot,
  Code2,
  Link2,
  RefreshCw,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { siteContent, type Locale } from "@/lib/siteContent";

const serviceIcons = [Code2, Wrench, Link2, RefreshCw, ShieldCheck, Bot];

type ServicesSectionProps = {
  locale: Locale;
};

const ServicesSection = ({ locale }: ServicesSectionProps) => {
  const content = siteContent[locale].services;
  const supportItems = content.supportItems;

  return (
    <section id="servicos" className="section-padding">
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="lg:pr-8 xl:pr-10"
          >
            <p className="home-kicker">{content.eyebrow}</p>
            <h2 className="mt-5 max-w-lg font-heading text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              {content.title}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground md:text-lg">
              {content.description}
            </p>

            <div className="home-signal-line mt-8 w-full max-w-sm" />

            <div className="mt-8 flex flex-wrap gap-3">
              {supportItems.map((item) => (
                <span key={item} className="home-chip px-4 py-2 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="home-shell overflow-hidden p-7 md:p-8"
          >
            {content.items.map((service, index) => {
              const Icon = serviceIcons[index];

              return (
                <article
                  key={service.title}
                  className={`grid min-w-0 gap-5 border-white/8 py-7 lg:grid-cols-[auto_220px_minmax(0,1fr)] lg:gap-6 ${index !== 0 ? "border-t" : ""} ${index === 0 ? "pt-0" : ""} ${index === content.items.length - 1 ? "pb-0" : ""}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="max-w-md min-w-0 break-words font-heading text-2xl font-semibold tracking-[-0.04em] text-white">
                    {service.title}
                  </h3>
                  <p className="max-w-2xl min-w-0 break-words text-sm leading-7 text-muted-foreground md:text-base">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
