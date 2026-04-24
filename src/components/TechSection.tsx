import { motion } from "framer-motion";
import { siteContent, type Locale } from "@/lib/siteContent";

type TechSectionProps = {
  locale: Locale;
};

const techIconSlugs: Record<string, string> = {
  "C#": "dotnet",
  ".NET 10": "dotnet",
  "ASP.NET": "dotnet",
  PHP: "php",
  Python: "python",
  "REST APIs": "openapiinitiative",
  "SOAP/WSDL": "semanticweb",
  Blazor: "blazor",
  JavaScript: "javascript",
  React: "react",
  Vue: "vuedotjs",
  jQuery: "jquery",
  "ASP.NET Web Forms": "dotnet",
  "SQL e NoSQL": "postgresql",
  "SQL and NoSQL": "postgresql",
  Redis: "redis",
  Docker: "docker",
  AWS: "amazonwebservices",
  Azure: "microsoftazure",
};

const getInitials = (name: string) =>
  name
    .replace(/[.#]/g, "")
    .split(/[\s/-]+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 4)
    .toUpperCase();

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
      className="bg-secondary/20 px-4 py-6 sm:px-6 md:py-8 lg:px-8"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto text-center"
        >
          <p className="home-kicker">{content.eyebrow}</p>
          <h2 className="sr-only">
            {content.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="tech-carousel mt-4"
          aria-label={content.title}
        >
          <div className="tech-carousel-track">
            {carouselItems.map((item, index) => {
              const iconUrl = getIconUrl(item.name);

              return (
                <div
                  key={`${item.name}-${index}`}
                  className="tech-carousel-item"
                  aria-hidden={index >= content.items.length}
                  title={item.name}
                  aria-label={item.name}
                >
                  <div className="tech-carousel-icon">
                    <span>{getInitials(item.name)}</span>
                    {iconUrl && (
                      <img
                        src={iconUrl}
                        alt=""
                        loading="lazy"
                        className="h-8 w-8 object-contain"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
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
