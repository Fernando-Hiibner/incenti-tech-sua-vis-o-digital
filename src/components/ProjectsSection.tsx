import { motion } from "framer-motion";
import {
  CreditCard,
  Globe,
  MessageCircle,
  Phone,
  Server,
  ShoppingBag,
} from "lucide-react";
import { siteContent, type Locale } from "@/lib/siteContent";

const projectIcons = [
  CreditCard,
  ShoppingBag,
  Phone,
  MessageCircle,
  Server,
  Globe,
];

type ProjectsSectionProps = {
  locale: Locale;
};

const ProjectsSection = ({ locale }: ProjectsSectionProps) => {
  const content = siteContent[locale].projects;

  return (
    <section id="projetos" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mb-14 max-w-3xl"
        >
          <p className="home-kicker">{content.eyebrow}</p>
          <h2 className="mt-5 font-heading text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
            {content.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            {content.description}
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.items.map((item, index) => {
            const Icon = projectIcons[index];
            const isFeatured = index === 0 || index === 4;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06 }}
                className={`glass-card p-7 md:p-8 ${isFeatured ? "md:col-span-2" : ""}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="home-chip px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]">
                    {locale === "pt-BR" ? "caso" : "case"}{" "}
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className={`mt-6 font-heading font-semibold tracking-[-0.04em] text-white ${isFeatured ? "text-3xl" : "text-2xl"}`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-4 leading-7 text-muted-foreground ${isFeatured ? "max-w-2xl text-base" : "text-sm md:text-base"}`}
                >
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
