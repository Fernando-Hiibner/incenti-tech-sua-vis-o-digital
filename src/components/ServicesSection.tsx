import { motion } from "framer-motion";
import { Code2, RefreshCw, Link2, Wrench, ShieldCheck, Bot } from "lucide-react";
import { siteContent, type Locale } from "@/lib/siteContent";

const serviceIcons = [Code2, Wrench, Link2, RefreshCw, ShieldCheck, Bot];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

type ServicesSectionProps = {
  locale: Locale;
};

const ServicesSection = ({ locale }: ServicesSectionProps) => {
  const content = siteContent[locale].services;

  return (
    <section id="servicos" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">{content.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">{content.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{content.description}</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {content.items.map((service, i) => {
            const Icon = serviceIcons[i];

            return (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="glass-card p-8 group hover:border-primary/30 transition-all duration-300 w-full md:w-[calc(50%-0.75rem)]"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
