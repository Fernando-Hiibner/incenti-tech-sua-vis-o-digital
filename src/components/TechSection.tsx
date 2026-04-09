import { motion } from "framer-motion";
import { siteContent, type Locale } from "@/lib/siteContent";

type TechSectionProps = {
  locale: Locale;
};

const TechSection = ({ locale }: TechSectionProps) => {
  const content = siteContent[locale].tech;

  return (
    <section id="tecnologias" className="section-padding bg-secondary/30">
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

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {content.items.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-5 text-center group hover:border-primary/30 transition-all"
            >
              <div className="text-lg font-heading font-bold mb-1 group-hover:text-primary transition-colors">
                {tech.name}
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{tech.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
