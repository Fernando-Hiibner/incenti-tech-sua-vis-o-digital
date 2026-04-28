import {
  AlertTriangle,
  EyeOff,
  GitBranch,
  Layers,
  PlugZap,
  TimerReset,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { siteContent, type Locale } from "@/lib/siteContent";

const painIcons = [EyeOff, Layers, PlugZap, TimerReset, GitBranch, AlertTriangle];

type PainSectionProps = {
  locale: Locale;
};

const PainSection = ({ locale }: PainSectionProps) => {
  const content = siteContent[locale].pain;

  return (
    <section id="desafios" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal className="max-w-3xl lg:sticky lg:top-28">
            <p className="home-kicker">{content.eyebrow}</p>
            <h2 className="home-section-title">{content.title}</h2>
            <p className="home-section-copy">{content.description}</p>
            <div className="home-signal-line mt-8 w-full max-w-sm" />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {content.items.map((item, index) => {
              const Icon = painIcons[index];

              return (
                <Reveal
                  as="article"
                  key={item.title}
                  delay={index * 50}
                  className="glass-card min-w-0 p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[hsl(var(--brand-red)/0.09)] text-[hsl(var(--brand-red))]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="home-card-title mt-5 text-[1.15rem]">
                    {item.title}
                  </h3>
                  <p className="home-card-copy mt-3 text-[0.95rem]">
                    {item.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
