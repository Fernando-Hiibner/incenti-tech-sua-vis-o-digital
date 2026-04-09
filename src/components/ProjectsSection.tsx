import { motion } from "framer-motion";
import { CreditCard, ShoppingBag, MessageCircle, Phone, Server, Globe } from "lucide-react";
import { siteContent, type Locale } from "@/lib/siteContent";

const projectIcons = [CreditCard, ShoppingBag, Phone, MessageCircle, Server, Globe];

type ProjectsSectionProps = {
  locale: Locale;
};

const ProjectsSection = ({ locale }: ProjectsSectionProps) => {
  const content = siteContent[locale].projects;

  return (
    <section id="projetos" className="section-padding">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {content.items.map((item, i) => {
            const Icon = projectIcons[i];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
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

export default ProjectsSection;
