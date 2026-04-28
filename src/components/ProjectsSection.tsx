import { ArrowRight, BadgeCheck, CalendarDays, Code2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { caseStudiesByLocale, type CaseStudy } from "@/lib/cases";
import { siteContent, type Locale } from "@/lib/siteContent";
import { cn } from "@/lib/utils";

type ProjectsSectionProps = {
  locale: Locale;
};

const caseStats: Record<Locale, string[]> = {
  "pt-BR": ["+ DE 100 ENTREGAS", "+ DE 6 ANOS DE EXPERIÊNCIA"],
  en: ["+100 DELIVERIES", "+6 YEARS OF EXPERIENCE"],
};

const caseLabels: Record<Locale, { viewMore: string }> = {
  "pt-BR": { viewMore: "Ver mais" },
  en: { viewMore: "Learn more" },
};

const renderInlineMarkdown = (text: string) =>
  text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }

    return part;
  });

const isBulletLine = (line: string) =>
  line.startsWith("* ") || Boolean(line.match(/^\s+\S/));

const renderCaseText = (text: string) => {
  const blocks = text.split(/\n\s*\n/g);

  return blocks.map((block, blockIndex) => {
    const lines = block.split("\n").filter((line) => line.length > 0);

    if (blockIndex === 0) {
      return (
        <div key={blockIndex} className="space-y-1">
          {lines[0] && (
            <h3 className="font-heading text-2xl font-semibold text-foreground">
              {renderInlineMarkdown(lines[0])}
            </h3>
          )}
          {lines.slice(1).map((line) => (
            <p key={line} className="text-base italic text-muted-foreground">
              {renderInlineMarkdown(line)}
            </p>
          ))}
        </div>
      );
    }

    if (lines.every(isBulletLine)) {
      return (
        <ul
          key={blockIndex}
          className="space-y-2 border-l-2 border-[hsl(var(--brand-red)/0.28)] pl-5"
        >
          {lines.map((line) => (
            <li key={line} className="leading-7 text-muted-foreground">
              {renderInlineMarkdown(line.replace(/^\*\s+/, "").trim())}
            </li>
          ))}
        </ul>
      );
    }

    if (lines.length === 1 && !/[.!?]$/.test(lines[0])) {
      return (
        <p key={blockIndex} className="font-semibold text-foreground">
          {renderInlineMarkdown(lines[0])}
        </p>
      );
    }

    return (
      <div key={blockIndex} className="space-y-4">
        {lines.map((line) => (
          <p key={line} className="leading-8 text-muted-foreground">
            {renderInlineMarkdown(line)}
          </p>
        ))}
      </div>
    );
  });
};

const CaseCard = ({
  caseStudy,
  viewMoreLabel,
}: {
  caseStudy: CaseStudy;
  viewMoreLabel: string;
}) => (
  <Dialog>
    <article
      className={cn(
        "glass-card flex min-h-[31rem] flex-col p-7 md:p-8",
        caseStudy.featured &&
          "border-[hsl(var(--brand-red)/0.36)] shadow-[0_30px_70px_-48px_rgba(176,7,20,0.55)]",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="home-kicker">{caseStudy.company}</p>
          <h3 className="mt-4 font-heading text-[1.75rem] font-semibold leading-[1.04] tracking-normal text-foreground">
            {caseStudy.product}
          </h3>
        </div>
        {caseStudy.featured && (
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[hsl(var(--brand-red)/0.09)] px-3 py-1.5 text-xs font-semibold text-[hsl(var(--brand-red))]">
            <BadgeCheck className="h-3.5 w-3.5" />
            {caseStudy.featuredLabel}
          </span>
        )}
      </div>

      <div className="mt-6 grid gap-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Code2 className="h-4 w-4 text-primary" />
          <span>{caseStudy.technologies.join(" / ")}</span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-primary" />
          <span>{caseStudy.duration}</span>
        </div>
      </div>

      <p className="mt-6 flex-1 text-[0.98rem] leading-7 text-muted-foreground">
        {caseStudy.summary}
      </p>

      <DialogTrigger asChild>
        <button
          type="button"
          data-ga-click="home_click_case_ver_mais"
          data-ga-page="home"
          data-ga-section="projetos"
          data-ga-label={`${caseStudy.company} / ${caseStudy.product}`}
          className="mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-red))] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_38px_-28px_rgba(176,7,20,0.7)] transition-all hover:-translate-y-0.5 hover:bg-[hsl(var(--brand-red)/0.9)]"
        >
          {viewMoreLabel}
          <ArrowRight className="h-4 w-4" />
        </button>
      </DialogTrigger>
    </article>

    <DialogContent className="max-h-[88vh] max-w-5xl overflow-y-auto rounded-[1.75rem] p-0">
      <div className="border-b border-border bg-muted/30 px-6 py-6 md:px-8">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl leading-tight text-foreground md:text-3xl">
            {caseStudy.company} / {caseStudy.product}
          </DialogTitle>
          <DialogDescription className="text-base">
            {caseStudy.duration} / {caseStudy.technologies.join(" / ")}
          </DialogDescription>
        </DialogHeader>
      </div>

      <div className="space-y-8 px-6 py-7 md:px-8">
        {caseStudy.images && caseStudy.images.length > 0 && (
          <div className="grid gap-4">
            <img
              src={caseStudy.images[0].src}
              alt={caseStudy.images[0].alt}
              className="aspect-video w-full rounded-2xl border border-border object-cover"
            />
            {caseStudy.images.length > 1 && (
              <div className="grid gap-4 sm:grid-cols-2">
                {caseStudy.images.slice(1).map((image) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className="aspect-video w-full rounded-2xl border border-border object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <div className="space-y-6 text-base">
          {renderCaseText(caseStudy.fullText)}
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

const StatCard = ({ label }: { label: string }) => (
  <article
    aria-disabled="true"
    className="glass-card flex min-h-[31rem] select-none items-center justify-center border-dashed border-border/90 bg-muted/35 p-8 text-center opacity-75 grayscale"
  >
    <p className="max-w-xs break-words font-heading text-[2.3rem] font-semibold uppercase leading-none tracking-normal text-primary/70 md:text-[2.75rem]">
      {label}
    </p>
  </article>
);

const ProjectsSection = ({ locale }: ProjectsSectionProps) => {
  const content = siteContent[locale].projects;
  const caseStudies = caseStudiesByLocale[locale];
  const labels = caseLabels[locale];

  return (
    <section id="projetos" className="section-padding">
      <div className="container mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="home-kicker">{content.eyebrow}</p>
          <h2 className="home-section-title max-w-3xl">{content.title}</h2>
          <p className="home-section-copy max-w-2xl">{content.description}</p>
        </div>

        <div>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="mx-auto max-w-[calc(100vw-2rem)]"
          >
            <CarouselContent className="-ml-5">
              {caseStudies.map((caseStudy) => (
                <CarouselItem
                  key={caseStudy.slug}
                  className="pl-5 md:basis-1/2 xl:basis-1/3"
                >
                  <CaseCard
                    caseStudy={caseStudy}
                    viewMoreLabel={labels.viewMore}
                  />
                </CarouselItem>
              ))}
              {caseStats[locale].map((stat) => (
                <CarouselItem
                  key={stat}
                  className="pl-5 md:basis-1/2 xl:basis-1/3"
                >
                  <StatCard label={stat} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 top-[calc(100%+1.25rem)] border-border bg-white text-primary hover:bg-muted md:-left-4 md:top-1/2" />
            <CarouselNext className="left-12 top-[calc(100%+1.25rem)] border-border bg-white text-primary hover:bg-muted md:-right-4 md:left-auto md:top-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
