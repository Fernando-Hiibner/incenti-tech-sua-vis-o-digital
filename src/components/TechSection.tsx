import { motion } from "framer-motion";
import {
  siBlazor,
  siDocker,
  siDotnet,
  siJavascript,
  siJquery,
  siPhp,
  siPython,
  siReact,
  siRedis,
  siVuedotjs,
  type SimpleIcon,
} from "simple-icons";
import { siteContent, type Locale } from "@/lib/siteContent";

type TechSectionProps = {
  locale: Locale;
};

const techIcons: Record<string, SimpleIcon> = {
  ".NET 10": siDotnet,
  PHP: siPhp,
  Python: siPython,
  Blazor: siBlazor,
  JavaScript: siJavascript,
  React: siReact,
  Vue: siVuedotjs,
  jQuery: siJquery,
  Redis: siRedis,
  Docker: siDocker,
};

const TechSection = ({ locale }: TechSectionProps) => {
  const content = siteContent[locale].tech;
  const carouselItems = [...content.items, ...content.items];

  return (
    <section
      id="tecnologias"
      className="bg-secondary/20 px-4 py-5 sm:px-6 md:py-6 lg:px-8"
    >
      <div className="container mx-auto">
        <h2 className="sr-only">{content.title}</h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="tech-carousel"
          aria-label={content.title}
        >
          <div className="tech-carousel-track">
            {carouselItems.map((item, index) => {
              const icon = techIcons[item.name];

              return (
                <div
                  key={`${item.name}-${index}`}
                  className={`tech-carousel-item ${icon ? "logo-item" : "label-item"}`}
                  aria-hidden={index >= content.items.length}
                  title={item.name}
                  aria-label={
                    index >= content.items.length ? undefined : item.name
                  }
                >
                  <div
                    className={`tech-carousel-icon ${icon ? "has-logo" : "has-label"}`}
                  >
                    {icon ? (
                      <svg
                        aria-hidden="true"
                        className="h-8 w-8"
                        role="img"
                        viewBox="0 0 24 24"
                      >
                        <path d={icon.path} fill="currentColor" />
                      </svg>
                    ) : (
                      <span>{item.name}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSection;
