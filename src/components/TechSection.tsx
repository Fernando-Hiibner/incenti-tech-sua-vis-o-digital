import { motion } from "framer-motion";
import { siteContent, type Locale } from "@/lib/siteContent";

type TechSectionProps = {
  locale: Locale;
};

const techIconSlugs: Record<string, string> = {
  ".NET 10": "dotnet",
  PHP: "php",
  Python: "python",
  Blazor: "blazor",
  JavaScript: "javascript",
  React: "react",
  Vue: "vuedotjs",
  jQuery: "jquery",
  Redis: "redis",
  Docker: "docker",
  AWS: "amazonwebservices",
  Azure: "microsoftazure",
};

const getIconUrl = (name: string) => {
  const slug = techIconSlugs[name];
  if (!slug) return null;
  return `https://cdn.simpleicons.org/${slug}/141A2A`;
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
              const iconUrl = getIconUrl(item.name);

              return (
                <div
                  key={`${item.name}-${index}`}
                  className={`tech-carousel-item ${iconUrl ? "logo-item" : "label-item"}`}
                  aria-hidden={index >= content.items.length}
                  title={item.name}
                  aria-label={index >= content.items.length ? undefined : item.name}
                >
                  <div className={`tech-carousel-icon ${iconUrl ? "has-logo" : "has-label"}`}>
                    {iconUrl ? (
                      <>
                        <span>{item.name}</span>
                        <img
                          src={iconUrl}
                          alt=""
                          loading="lazy"
                          className="h-8 w-8 object-contain"
                          onError={(event) => {
                            event.currentTarget.parentElement?.classList.add(
                              "logo-error",
                            );
                          }}
                        />
                      </>
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
