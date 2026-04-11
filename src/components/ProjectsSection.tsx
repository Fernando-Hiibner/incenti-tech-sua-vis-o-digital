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
          <h2 className="home-section-title max-w-3xl">{content.title}</h2>
          <p className="home-section-copy max-w-2xl">{content.description}</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.items.map((item, index) => {
            const Icon = projectIcons[index];
            const isFeatured = index === 0 || index === 2 || index === 4;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06 }}
                className={`glass-card min-w-0 p-7 md:col-span-2 md:p-8 ${isFeatured ? "xl:col-span-2" : "xl:col-span-1"}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3
                  className={`mt-6 break-words font-heading font-semibold leading-[1.02] tracking-[-0.045em] text-white ${isFeatured ? "text-[1.95rem] md:text-[2.25rem]" : "text-[1.45rem] md:text-[1.7rem]"}`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-4 break-words leading-7 text-muted-foreground ${isFeatured ? "max-w-2xl text-[0.98rem] md:text-[1.05rem]" : "text-[0.95rem] md:text-base"}`}
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
