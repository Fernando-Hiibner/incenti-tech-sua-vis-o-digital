import {
  Code2,
  Link2,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { siteContent, type Locale } from "@/lib/siteContent";

const serviceIcons = [Code2, Wrench, Link2, RefreshCw, ShieldCheck];

type ServicesSectionProps = {
  locale: Locale;
};

const ServicesSection = ({ locale }: ServicesSectionProps) => {
  const content = siteContent[locale].services;
  const supportItems = content.supportItems;

  return (
    <section id="servicos" className="section-padding">
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <Reveal className="lg:pr-8 xl:pr-10">
            <p className="home-kicker">{content.eyebrow}</p>
            <h2 className="home-section-title">{content.title}</h2>
            <p className="home-section-copy">{content.description}</p>

            <div className="home-signal-line mt-8 w-full max-w-sm" />

            <div className="mt-8 flex flex-wrap gap-3">
              {supportItems.map((item) => (
                <span key={item} className="home-chip px-4 py-2 text-sm">
                  {item}
                </span>
              ))}
            </div>

            <div className="home-shell-soft mt-8 border-[hsl(var(--brand-red)/0.22)] p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[hsl(var(--brand-red)/0.09)] text-[hsl(var(--brand-red))]">
                <Rocket className="h-5 w-5" />
              </div>
              <h3 className="home-card-title mt-5 text-[1.15rem]">
                {content.creationHighlight.title}
              </h3>
              <p className="home-card-copy mt-3 text-[0.95rem]">
                {content.creationHighlight.description}
              </p>
            </div>
          </Reveal>

          <Reveal className="home-shell overflow-hidden p-7 md:p-8" delay={80}>
            {content.items.map((service, index) => {
              const Icon = serviceIcons[index];

              return (
                <article
                  key={service.title}
                  className={`grid min-w-0 gap-5 border-border py-7 lg:grid-cols-[auto_220px_minmax(0,1fr)] lg:gap-6 ${index !== 0 ? "border-t" : ""} ${index === 0 ? "pt-0" : ""} ${index === content.items.length - 1 ? "pb-0" : ""}`}
                >
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="home-card-title max-w-md min-w-0 lg:self-center">
                    {service.title}
                  </h3>
                  <p className="home-card-copy max-w-2xl min-w-0">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
