import { motion } from "framer-motion";
import { siteContent, type Locale } from "@/lib/siteContent";

type TechSectionProps = {
  locale: Locale;
};

const TechSection = ({ locale }: TechSectionProps) => {
  const content = siteContent[locale].tech;
  const groupedItems = content.items.reduce<Record<string, string[]>>(
    (acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item.name);
      return acc;
    },
    {},
  );

  return (
    <section id="tecnologias" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="home-shell p-7 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {Object.entries(groupedItems).map(([category, items], index) => (
                <div
                  key={category}
                  className="min-w-0 rounded-[24px] border border-white/8 bg-white/[0.03] p-5"
                >
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                    <p className="min-w-0 break-words text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                      {category}
                    </p>
                    <span className="shrink-0 text-right text-[11px] font-semibold uppercase tracking-[0.18em] text-white/36">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {items.map((name) => (
                      <span
                        key={name}
                        className="home-chip max-w-full break-words px-4 py-2 text-center text-[0.92rem] text-white"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
