import { motion } from "framer-motion";
import { Target, Zap, Users, ShieldCheck, Headphones } from "lucide-react";
import { siteContent, type Locale } from "@/lib/siteContent";

const advantageIcons = [Target, Zap, Users, ShieldCheck, Headphones];

type AdvantagesSectionProps = {
  locale: Locale;
};

const AdvantagesSection = ({ locale }: AdvantagesSectionProps) => {
  const content = siteContent[locale].advantages;

  return (
    <section id="vantagens" className="section-padding bg-secondary/30">
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

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {content.items.map((item, i) => {
            const Icon = advantageIcons[i];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
