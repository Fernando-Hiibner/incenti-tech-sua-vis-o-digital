import type { CSSProperties, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  Eye,
  Layers,
  Link2,
  Send,
  Shield,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import SeoHead from "@/components/SeoHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE_URL } from "@/lib/seo";
import "./system-design.css";

type Swatch = { color: string; hex: string; name: string; role: string };
type Tone = "dark" | "light";
type ToneClasses = { border: string; card: string; chip: string; muted: string; panel: string };

const CANONICAL = `${SITE_URL}/system-design/`;

const NAV = [
  { id: "visao", label: "Visao" },
  { id: "cores", label: "Cores" },
  { id: "tipografia", label: "Tipografia" },
  { id: "componentes", label: "Componentes" },
  { id: "secoes", label: "Secoes" },
  { id: "cta", label: "CTA" },
];

const PRINCIPLES: { description: string; icon: LucideIcon; title: string }[] = [
  {
    icon: Target,
    title: "Marca na frente",
    description: "O nome da Incenti Tech lidera a hierarquia. O discurso comercial entra depois, sem competir pelo foco.",
  },
  {
    icon: Eye,
    title: "Profundidade sem ruido",
    description: "Planos grandes, contraste alto e menos grade de cards. O peso vem da composicao, nao do excesso de elementos.",
  },
  {
    icon: Zap,
    title: "Vermelho como sinal",
    description: "O vermelho aparece para acao, energia e orientacao. Nunca como ruído decorativo espalhado.",
  },
  {
    icon: Shield,
    title: "Tecnologia tangivel",
    description: "Fluxos, modulos, dados e integracoes aparecem como materia visual real e nao como abstracao genérica.",
  },
];

const PALETTES: {
  description: string;
  eyebrow: string;
  preview: string;
  swatches: Swatch[];
  tags: string[];
  title: string;
  tone: Tone;
}[] = [
  {
    tone: "dark",
    eyebrow: "modo institucional / premium",
    title: "Incenti Tech Core",
    description: "Base em azul marinho muito escuro, superficies densas e vermelho calibrado para autoridade, acao e sinalizacao.",
    preview: "Mais sofisticada, densa, tecnologica e premium.",
    tags: ["sofisticada", "executiva", "premium", "high trust"],
    swatches: [
      { name: "Ink 980", hex: "#050816", color: "#050816", role: "background principal" },
      { name: "Navy 920", hex: "#0d1830", color: "#0d1830", role: "surface base" },
      { name: "Navy 820", hex: "#172544", color: "#172544", role: "divisao e modulo" },
      { name: "Signal 600", hex: "#cf3f47", color: "#cf3f47", role: "cta primario" },
      { name: "Signal 500", hex: "#eb5960", color: "#eb5960", role: "hover e foco" },
      { name: "Mist 100", hex: "#dbe5f5", color: "#dbe5f5", role: "texto alto contraste" },
    ],
  },
  {
    tone: "light",
    eyebrow: "modo produto / modular",
    title: "Integration Hub Flow",
    description: "Base clara, superficies arejadas e estrutura modular. Mantem o mesmo vermelho de assinatura do ecossistema.",
    preview: "Mais clara, fluida, modular e orientada a integracao.",
    tags: ["clara", "modular", "fluida", "product-led"],
    swatches: [
      { name: "Cloud 0", hex: "#ffffff", color: "#ffffff", role: "canvas base" },
      { name: "Cloud 40", hex: "#f4f6fb", color: "#f4f6fb", role: "surface suave" },
      { name: "Slate 160", hex: "#d9dfeb", color: "#d9dfeb", role: "borda e divisao" },
      { name: "Graphite 900", hex: "#101827", color: "#101827", role: "texto e contraste" },
      { name: "Signal 580", hex: "#d6434a", color: "#d6434a", role: "cta primario" },
      { name: "Signal 430", hex: "#f3d2d5", color: "#f3d2d5", role: "apoio e glow" },
    ],
  },
];

const TYPE_SCALE = [
  ["Display", "Incenti Tech", "72-96 / 700 / -0.04em", "Hero, manifesto e aberturas visuais."],
  ["Headline", "Software e integracoes com presenca.", "48-64 / 600 / -0.03em", "Titulos principais com 2 a 3 linhas."],
  ["Section", "Arquitetura, clareza e intenção", "32-40 / 600 / -0.02em", "Titulos de secao e modulos."],
  ["UI title", "Camada operacional", "20-24 / 600", "Cards editoriais, blocos e paineis."],
  ["Body", "Inter para leitura rapida e escaneavel.", "16-18 / 400-500 / 1.6", "Descricao, apoio e formularios."],
  ["Label", "SYSTEM DESIGN / 01", "12-13 / 600 / 0.18em", "Eyebrows, tags e microcopy."],
] as const;

const SPACE_SCALE = [
  ["4", "micro ajustes e icones", "w-4"],
  ["8", "gaps compactos", "w-8"],
  ["12", "tags e clusters curtos", "w-12"],
  ["16", "inputs e agrupamentos", "w-16"],
  ["24", "padding padrao", "w-24"],
  ["32", "blocos curtos", "w-32"],
  ["48", "respiro entre modulos", "w-48"],
  ["72", "lead de secao", "w-72"],
  ["96+", "distancia entre secoes", "max-w-[30rem] w-full"],
] as const;

const SURFACES: { description: string; icon: LucideIcon; title: string }[] = [
  { icon: Layers, title: "Superficies em camadas", description: "Planos grandes, poucos contornos e gradiente discreto para dar profundidade." },
  { icon: Shield, title: "Contraste alto", description: "Texto sempre muito legivel, CTA destacado e secundarios com baixa friccao." },
  { icon: Sparkles, title: "Brilho contido", description: "Glow sutil para sugerir tecnologia e premium sem virar efeito decorativo gratuito." },
  { icon: Zap, title: "Peso visual controlado", description: "Informacao importante aparece em trilhas e divisores, sem virar mosaico excessivo." },
];

const PATTERNS: { description: string; icon: LucideIcon; items: string[]; title: string }[] = [
  {
    icon: Link2,
    title: "Workflow split",
    description: "Narrativa de um lado, diagrama ou modulo operacional do outro. Ideal para explicar integracoes e processos.",
    items: ["texto concentrado", "um fluxo dominante", "cta ao final"],
  },
  {
    icon: Database,
    title: "Benefits rail",
    description: "Faixa de beneficios com leitura rapida e cara editorial, sem parecer grade generica de SaaS.",
    items: ["icones pequenos", "titulos curtos", "cadencia forte"],
  },
  {
    icon: BarChart3,
    title: "Proof band",
    description: "Numeros e evidencias entram como faixa de prova para dar credibilidade sem inflar a hero.",
    items: ["micro labels", "tipografia grande", "uso pontual"],
  },
];

const BLUEPRINTS: { description: string; icon: LucideIcon; title: string; usage: string }[] = [
  { icon: Sparkles, title: "Poster Hero", usage: "as duas landing pages", description: "Hero full-bleed com assinatura forte, uma coluna de texto e um plano visual dominante." },
  { icon: Link2, title: "Narrative Split", usage: "solucao e diferenciais", description: "Bloco 50/50 para contar proposta de valor e sustentar com um modulo visual de apoio." },
  { icon: Database, title: "Feature Rail", usage: "beneficios e recursos", description: "Trilha de recursos com ritmo editorial, sem excesso de contorno ou micro cards." },
  { icon: Send, title: "Module Form", usage: "contato e demo", description: "Casca de formulario com peso de produto, campos limpos e CTA forte no fechamento." },
  { icon: Zap, title: "Signal CTA", usage: "fechamento final", description: "Faixa final com alto contraste, frase curta e escolha clara entre acao principal e apoio." },
  { icon: Shield, title: "Proof Strip", usage: "hero support", description: "Faixa compacta de prova, claims ou indicadores para reforcar confianca." },
];

const tone = (mode: Tone): ToneClasses =>
  mode === "dark"
    ? {
        card: "sd-shell-dark text-white",
        border: "border-white/10",
        chip: "border-white/[0.12] bg-white/5 text-white/[0.68]",
        muted: "text-white/[0.64]",
        panel: "border-white/10 bg-white/[0.03]",
      }
    : {
        card: "sd-shell-light text-[#101827]",
        border: "border-[#d9dfeb]",
        chip: "border-[#d9dfeb] bg-white text-[#697385]",
        muted: "text-[#5c6578]",
        panel: "border-[#d9dfeb] bg-[#fafbfe]",
      };

const SectionHeader = ({
  description,
  eyebrow,
  inverted = false,
  title,
}: {
  description: string;
  eyebrow: string;
  inverted?: boolean;
  title: string;
}) => (
  <div className="max-w-3xl">
    <p className={`sd-kicker ${inverted ? "text-white/[0.6]" : "text-[#7b8597]"}`}>{eyebrow}</p>
    <h2 className={`mt-4 text-balance font-heading text-4xl font-semibold tracking-[-0.04em] md:text-5xl ${inverted ? "text-white" : "text-[#101827]"}`}>
      {title}
    </h2>
    <p className={`mt-5 max-w-2xl text-base leading-7 md:text-lg ${inverted ? "text-white/[0.72]" : "text-[#546072]"}`}>{description}</p>
  </div>
);

const Shell = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`rounded-[32px] border p-8 md:p-10 ${className}`}>{children}</div>
);

const SwatchCard = ({ color, hex, name, role }: Swatch) => (
  <div className="rounded-[20px] border border-inherit p-3">
    <div className="sd-swatch-fill h-20 rounded-2xl border border-black/5" style={{ "--swatch": color } as CSSProperties} />
    <div className="mt-3 flex items-start justify-between gap-3">
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="mt-1 text-xs opacity-70">{role}</p>
      </div>
      <span className="text-xs font-medium uppercase tracking-[0.16em] opacity-70">{hex}</span>
    </div>
  </div>
);

const SystemDesign = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Incenti Tech System Design",
    description: "Vitrine interna do design system proposto para a Incenti Tech e o Integration Hub.",
    url: CANONICAL,
  };

  return (
    <div className="sd-page min-h-screen">
      <SeoHead
        title="System Design | Incenti Tech"
        description="Proposta visual do design system da Incenti Tech e do Integration Hub."
        canonical={CANONICAL}
        lang="pt-BR"
        ogLocale="pt_BR"
        robots="noindex, nofollow"
        alternates={[
          { hrefLang: "pt-BR", href: CANONICAL },
          { hrefLang: "x-default", href: CANONICAL },
        ]}
        structuredData={structuredData}
      />

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="sd-orb sd-orb-a" />
        <div className="sd-orb sd-orb-b" />
        <div className="sd-orb sd-orb-c" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#050816]/75 backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <Sparkles className="h-5 w-5 text-[#f68a90]" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/[0.58]">Incenti Tech</p>
              <p className="font-heading text-lg font-semibold tracking-[-0.04em] text-white">System Design</p>
            </div>
          </div>

          <nav className="hidden items-center gap-2 lg:flex">
            {NAV.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="rounded-full px-4 py-2 text-sm text-white/[0.62] transition-colors hover:bg-white/5 hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <Button asChild variant="ghost" className="hidden h-11 rounded-full border border-white/10 bg-white/5 px-5 text-white hover:bg-white/10 md:inline-flex">
            <a href="#cta">
              Validar base
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </header>

      <main className="relative z-10">
        <section id="visao" className="scroll-mt-28 border-b border-white/[0.08]">
          <div className="container py-20 md:py-28">
            <div className="grid gap-14 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
              <div>
                <p className="sd-kicker">System design / ecossistema Incenti Tech</p>
                <h1 className="mt-5 max-w-4xl font-heading text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
                  Uma linguagem visual para vender tecnologia com autoridade.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.72]">
                  A proposta une as duas landing pages por tipografia, ritmo, contraste, CTA e estrutura de componentes. O que muda e a atmosfera:
                  Incenti Tech fica mais sofisticada e densa; Integration Hub, mais claro, modular e orientado a fluxo.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild className="h-12 rounded-full bg-[#d6434a] px-6 text-sm text-white hover:bg-[#ef565d]">
                    <a href="#cores">
                      Explorar o sistema
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="ghost" className="h-12 rounded-full border border-white/10 bg-white/5 px-6 text-sm text-white hover:bg-white/10">
                    <a href="#componentes">Ver componentes-base</a>
                  </Button>
                </div>
              </div>

              <div className="sd-poster">
                <div className="sd-poster-card-dark">
                  <p className="sd-kicker">incenti tech mode</p>
                  <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl">Peso executivo.</h2>
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                      <p className="sd-kicker">hero principle</p>
                      <p className="mt-3 max-w-xs font-heading text-2xl font-semibold tracking-[-0.04em] text-white">Tecnologia com presenca, nao com ruído.</p>
                      <div className="mt-6 h-28 rounded-[20px] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02),rgba(214,67,74,0.22))]" />
                    </div>
                    <div className="grid gap-4">
                      {["tipografia forte", "glow controlado", "cta preciso"].map((item) => (
                        <div key={item} className="rounded-[20px] border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white/[0.68]">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="sd-poster-card-light">
                  <p className="sd-kicker text-[#7b8597]">integration hub mode</p>
                  <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.05em] text-[#101827] md:text-4xl">Clareza modular.</h2>
                  <div className="mt-8 rounded-[24px] border border-[#d9dfeb] bg-[#f8f9fc] p-5">
                    <p className="sd-kicker text-[#7b8597]">shared system</p>
                    <ul className="mt-4 space-y-3 text-sm text-[#5c6578]">
                      {["mesmo vermelho de assinatura", "mesma escala tipografica", "mesma cadencia de blocos", "mesma biblioteca de CTA"].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <CheckCircle2 className="h-4 w-4 text-[#d6434a]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="sd-floating-tag">mesmo vocabulario visual, duas atmosferas de marca</div>
              </div>
            </div>

            <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {PRINCIPLES.map(({ description, icon: Icon, title }) => (
                <div key={title} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d6434a]/[0.14] text-[#f68a90]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-2xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/[0.62]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cores" className="scroll-mt-28 bg-[#f3f5fa]">
          <div className="container py-20 md:py-28">
            <SectionHeader
              eyebrow="Paleta e modos de marca"
              title="Um sistema de cor compartilhado, com duas leituras de superficie."
              description="O vermelho continua como assinatura do ecossistema. O que muda e o peso do fundo, o comportamento das superficies e o nivel de clareza estrutural."
            />

            <div className="mt-12 grid gap-8 xl:grid-cols-2">
              {PALETTES.map((item) => {
                const t = tone(item.tone);

                return (
                  <Shell key={item.title} className={`${t.card} ${t.border}`}>
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div className="max-w-xl">
                        <p className="sd-kicker">{item.eyebrow}</p>
                        <h3 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.04em] md:text-4xl">{item.title}</h3>
                        <p className={`mt-4 max-w-lg text-base leading-7 ${t.muted}`}>{item.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] ${t.chip}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`mt-8 rounded-[28px] border p-6 ${t.panel}`}>
                      <p className="sd-kicker">{item.preview}</p>
                      <div className="mt-5 grid gap-4 md:grid-cols-3">
                        {[1, 2, 3].map((index) => (
                          <div key={index} className={`rounded-[20px] border p-4 ${t.panel}`}>
                            <div className={`mb-3 h-2 w-12 rounded-full ${item.tone === "dark" ? "bg-white/[0.14]" : "bg-[#e1e6ef]"}`} />
                            <div
                              className={`h-16 rounded-[16px] ${
                                item.tone === "dark" ? "bg-gradient-to-br from-white/10 to-transparent" : "bg-gradient-to-br from-[#eef2f8] to-white"
                              }`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                      {item.swatches.map((swatch) => (
                        <SwatchCard key={swatch.name} {...swatch} />
                      ))}
                    </div>
                  </Shell>
                );
              })}
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {[
                "Raio dominante entre 20px e 32px, com cantos suaves e menos aspecto de dashboard.",
                "Sombras sempre ambienciais. No escuro: glow sutil. No claro: lift curto e preciso.",
                "Bordas finas e discretas. O contraste principal vem da superficie, nao do contorno.",
              ].map((text) => (
                <div key={text} className="rounded-[24px] border border-[#d9dfeb] bg-white p-5 text-sm leading-7 text-[#5c6578]">
                  {text}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tipografia" className="scroll-mt-28 border-y border-white/[0.08]">
          <div className="container py-20 md:py-28">
            <SectionHeader
              eyebrow="Tipografia, espacamento e ritmo"
              title="A forma de leitura precisa parecer produto premium, nao vitrine genérica."
              description="A combinacao proposta usa Space Grotesk para assinatura e impacto, Inter para leitura continua e microcopy em caixa alta para organizar a pagina."
              inverted
            />

            <div className="mt-12 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
              <Shell className="border-white/10 bg-white/[0.03] text-white">
                <p className="sd-kicker">typographic specimen</p>
                <h3 className="mt-5 max-w-md font-heading text-5xl font-semibold tracking-[-0.07em] md:text-7xl">
                  Clean, forte e calibrado para alto contraste.
                </h3>
                <p className="mt-6 max-w-lg text-base leading-8 text-white/[0.68]">
                  O impacto fica concentrado nos titulos. O corpo respira. Isso ajuda a vender sofisticacao sem parecer overdesigned ou inflado.
                </p>
                <div className="mt-10 rounded-[28px] border border-white/10 bg-[#081121] p-6">
                  <p className="font-mono text-sm uppercase tracking-[0.28em] text-white/[0.46]">microcopy / metadata</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {["headline curta", "subtexto objetivo", "cta concentrado"].map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/[0.66]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Shell>

              <Shell className="border-white/10 bg-white/[0.03] text-white">
                <div className="space-y-5">
                  {TYPE_SCALE.map(([role, sample, spec, usage]) => (
                    <div key={role} className="grid gap-4 border-b border-white/10 py-4 last:border-b-0 md:grid-cols-[150px_minmax(0,1fr)_220px] md:items-end">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/[0.54]">{role}</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/[0.36]">{spec}</p>
                      </div>
                      <p
                        className={`leading-tight text-white ${
                          role === "Display"
                            ? "font-heading text-4xl tracking-[-0.05em] md:text-6xl"
                            : role === "Headline"
                              ? "font-heading text-3xl tracking-[-0.04em] md:text-4xl"
                              : role === "Section"
                                ? "font-heading text-2xl tracking-[-0.04em] md:text-3xl"
                                : role === "Label"
                                  ? "font-mono text-sm uppercase tracking-[0.28em] text-white/70"
                                  : "text-lg"
                        }`}
                      >
                        {sample}
                      </p>
                      <p className="text-sm leading-7 text-white/[0.6]">{usage}</p>
                    </div>
                  ))}
                </div>
              </Shell>
            </div>

            <div className="mt-8 grid gap-8 xl:grid-cols-[0.82fr_1.18fr]">
              <Shell className="border-white/10 bg-white/[0.03] text-white">
                <p className="sd-kicker">grid logic</p>
                <h3 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.04em]">Grade pensada para secoes amplas.</h3>
                <ul className="mt-6 space-y-4 text-sm leading-7 text-white/[0.66]">
                  {[
                    "Container maximo com leitura confortável e respiro lateral consistente.",
                    "Secoes com um único job visual: explicar, provar, aprofundar ou converter.",
                    "Evitar pilhas de cards quando a mesma informacao pode viver em trilhas e colunas.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 text-[#f68a90]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Shell>

              <Shell className="border-white/10 bg-white/[0.03] text-white">
                <p className="sd-kicker">spacing scale</p>
                <div className="mt-6 space-y-5">
                  {SPACE_SCALE.map(([size, usage, widthClassName]) => (
                    <div key={size} className="grid items-center gap-4 sm:grid-cols-[80px_minmax(0,1fr)_240px]">
                      <span className="font-mono text-sm uppercase tracking-[0.24em] text-white/[0.58]">{size}px</span>
                      <div className="rounded-full border border-white/10 bg-white/5 px-4 py-3">
                        <div className={`h-2 rounded-full bg-gradient-to-r from-[#d6434a] to-[#f5a3a7] ${widthClassName}`} />
                      </div>
                      <span className="text-sm text-white/[0.62]">{usage}</span>
                    </div>
                  ))}
                </div>
              </Shell>
            </div>
          </div>
        </section>

        <section id="componentes" className="scroll-mt-28 bg-[#f3f5fa]">
          <div className="container py-20 md:py-28">
            <SectionHeader
              eyebrow="Biblioteca de componentes"
              title="Botoes, cards, inputs e superficies com coerencia entre marca e produto."
              description="A pagina funciona como showroom dos componentes que podem ser aplicados depois nas duas landing pages sem perder unidade visual."
            />

            <div className="mt-12 space-y-8">
              <Shell className="border-[#d9dfeb] bg-white text-[#101827]">
                <p className="sd-kicker text-[#7b8597]">CTA system</p>
                <div className="mt-4 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
                  <div>
                    <h3 className="font-heading text-3xl font-semibold tracking-[-0.04em]">Estilos de botao</h3>
                    <p className="mt-4 max-w-md text-base leading-7 text-[#546072]">
                      Mesmo comportamento, aparencias diferentes. O sistema usa acao primaria, apoio e opcao de menor atrito com o mesmo desenho-base.
                    </p>
                  </div>
                  <div className="grid gap-6 xl:grid-cols-2">
                    {(["dark", "light"] as const).map((mode) => {
                      const t = tone(mode);
                      const dark = mode === "dark";

                      return (
                        <div key={mode} className={`rounded-[28px] border p-6 ${t.card} ${t.border}`}>
                          <p className="sd-kicker">{dark ? "incenti tech" : "integration hub"}</p>
                          <p className="mt-3 text-xl font-semibold">{dark ? "CTA premium com alta presenca" : "CTA claro, modular e direto"}</p>
                          <div className="mt-6 flex flex-wrap gap-3">
                            <Button className={`h-12 rounded-full px-6 text-sm ${dark ? "bg-[#d6434a] text-white hover:bg-[#ef565d]" : "bg-[#d6434a] text-white hover:bg-[#bf3940]"}`}>
                              Primario
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" className={`h-12 rounded-full px-6 text-sm ${dark ? "border border-white/[0.12] bg-white/5 text-white hover:bg-white/10" : "border border-[#d9dfeb] bg-white text-[#101827] hover:bg-[#f7f8fc]"}`}>
                              Secundario
                            </Button>
                            <Button variant="ghost" className={`h-12 rounded-full px-4 text-sm ${dark ? "text-white/70 hover:bg-white/10" : "text-[#d6434a] hover:bg-[#d6434a]/10"}`}>
                              Terciario
                            </Button>
                          </div>
                          <div className="mt-6 grid gap-3 sm:grid-cols-3">
                            {["acao forte", "apoio controlado", "baixo atrito"].map((label) => (
                              <div key={label} className={`rounded-[20px] border px-4 py-4 text-sm ${t.panel} ${t.muted}`}>
                                {label}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Shell>

              <Shell className="border-[#d9dfeb] bg-white text-[#101827]">
                <p className="sd-kicker text-[#7b8597]">Cards and forms</p>
                <div className="mt-4 grid gap-8 lg:grid-cols-2">
                  {([
                    {
                      tone: "dark" as const,
                      title: "Camada de confianca",
                      description: "Superficie densa com brilho controlado, texto forte e detalhe vermelho como sinal de acao.",
                    },
                    {
                      tone: "light" as const,
                      title: "Modulo de integracao",
                      description: "Superficie clara com borda fina, sombra curta e leitura direta para fluxos, features e casos de uso.",
                    },
                  ]).map((item) => {
                    const t = tone(item.tone);
                    const dark = item.tone === "dark";

                    return (
                      <div key={item.title} className={`rounded-[28px] border p-6 ${t.card} ${t.border}`}>
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${dark ? "bg-[#d6434a]/[0.16] text-[#f68a90]" : "bg-[#f6d8db] text-[#d6434a]"}`}>
                          <Layers className="h-5 w-5" />
                        </div>
                        <h3 className="mt-6 font-heading text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                        <p className={`mt-4 text-sm leading-7 ${t.muted}`}>{item.description}</p>
                        <div className={`mt-6 rounded-[20px] border p-4 ${t.panel}`}>
                          <div className={`mb-3 h-2 w-16 rounded-full ${dark ? "bg-white/[0.14]" : "bg-[#e1e6ef]"}`} />
                          <div className={`h-24 rounded-[20px] ${dark ? "bg-gradient-to-br from-white/10 to-transparent" : "bg-gradient-to-br from-[#eef2f8] to-white"}`} />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 grid gap-6 xl:grid-cols-2">
                  {(["dark", "light"] as const).map((mode) => {
                    const t = tone(mode);
                    const dark = mode === "dark";
                    const fieldClass =
                      mode === "dark"
                        ? "h-12 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-white/[0.28] focus-visible:ring-[#d6434a]"
                        : "h-12 rounded-2xl border-[#d9dfeb] bg-white text-[#101827] placeholder:text-[#8a93a4] focus-visible:ring-[#d6434a]/[0.35]";

                    return (
                      <div key={mode} className={`rounded-[28px] border p-6 ${t.card} ${t.border}`}>
                        <p className="sd-kicker">{dark ? "form shell / institutional" : "form shell / product"}</p>
                        <p className="mt-3 text-xl font-semibold">{dark ? "Contato com densidade premium" : "Contato com leitura clara e modular"}</p>
                        <div className="mt-6 grid gap-4">
                          <div className="grid gap-4 md:grid-cols-2">
                            <Input className={fieldClass} placeholder="Nome" />
                            <Input className={fieldClass} placeholder="Empresa" />
                          </div>
                          <div className="grid gap-4 md:grid-cols-2">
                            <Input className={fieldClass} placeholder="Email" />
                            <Input className={fieldClass} placeholder="Telefone" />
                          </div>
                          <Textarea className={`min-h-[120px] rounded-[24px] ${fieldClass}`} placeholder="Descreva o contexto e o objetivo do contato." />
                        </div>
                        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                          <p className={`max-w-sm text-sm leading-6 ${t.muted}`}>Casca forte, labels claros, campos consistentes e CTA concentrado no fechamento.</p>
                          <Button className={`h-12 rounded-full px-6 text-sm ${dark ? "bg-[#d6434a] text-white hover:bg-[#ef565d]" : "bg-[#d6434a] text-white hover:bg-[#bf3940]"}`}>
                            Enviar proposta
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Shell>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {SURFACES.map(({ description, icon: Icon, title }) => (
                  <div key={title} className="rounded-[28px] border border-[#d9dfeb] bg-[#fafbfe] p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3d2d5] text-[#d6434a]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-heading text-xl font-semibold tracking-[-0.04em] text-[#101827]">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#5c6578]">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="secoes" className="scroll-mt-28 border-y border-white/[0.08]">
          <div className="container py-20 md:py-28">
            <SectionHeader
              eyebrow="Padroes de secao"
              title="Exemplos de hero, blocos de beneficios e modulos funcionais."
              description="A ideia aqui nao e definir layout final, mas consolidar o vocabulario visual que vai guiar a aplicacao futura nas landing pages."
              inverted
            />

            <div className="mt-12 grid gap-8">
              {([
                {
                  tone: "dark" as const,
                  eyebrow: "hero / incenti tech",
                  title: "Software e integracoes com densidade premium.",
                  description: "Hero com texto concentrado, fundo profundo, narrativa curta e um unico plano visual forte para sustentar a marca.",
                  cta: "Conversar com o time",
                },
                {
                  tone: "light" as const,
                  eyebrow: "hero / integration hub",
                  title: "Uma camada clara para conectar operacao e varejo.",
                  description: "Hero mais fluido, com modulos claros e foco em fluxo operacional, produto e leitura imediata.",
                  cta: "Solicitar demo",
                },
              ]).map((hero) => {
                const t = tone(hero.tone);
                const dark = hero.tone === "dark";

                return (
                  <Shell key={hero.title} className={`${t.card} ${t.border}`}>
                    <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
                      <div>
                        <p className="sd-kicker">{hero.eyebrow}</p>
                        <h3 className="mt-4 max-w-md font-heading text-4xl font-semibold tracking-[-0.05em] md:text-5xl">{hero.title}</h3>
                        <p className={`mt-5 max-w-md text-base leading-7 ${t.muted}`}>{hero.description}</p>
                        <Button className={`mt-8 h-12 rounded-full px-6 text-sm ${dark ? "bg-[#d6434a] text-white hover:bg-[#ef565d]" : "bg-[#d6434a] text-white hover:bg-[#bf3940]"}`}>
                          {hero.cta}
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className={`rounded-[28px] border p-6 ${t.panel}`}>
                        <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                          <div className={`rounded-[24px] border p-5 ${t.panel}`}>
                            <div className={`mb-3 h-2 w-16 rounded-full ${dark ? "bg-white/[0.14]" : "bg-[#e1e6ef]"}`} />
                            <div className={`h-24 rounded-[18px] ${dark ? "bg-gradient-to-br from-white/[0.08] to-transparent" : "bg-gradient-to-br from-[#eef2f8] to-white"}`} />
                            <div className="mt-4 flex gap-2">
                              <div className="h-10 flex-1 rounded-full bg-[#d6434a]" />
                              <div className={`h-10 w-20 rounded-full ${dark ? "bg-white/[0.08]" : "bg-[#f1f3f9]"}`} />
                            </div>
                          </div>
                          <div className="grid gap-4">
                            {[1, 2, 3].map((index) => (
                              <div key={index} className={`rounded-[20px] border p-4 ${t.panel}`}>
                                <div className={`mb-3 h-2 w-10 rounded-full ${dark ? "bg-white/[0.14]" : "bg-[#e1e6ef]"}`} />
                                <div className={`h-14 rounded-[16px] ${dark ? "bg-gradient-to-br from-white/10 to-transparent" : "bg-gradient-to-br from-[#eef2f8] to-white"}`} />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Shell>
                );
              })}
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-3">
              {PATTERNS.map(({ description, icon: Icon, items, title }) => (
                <div key={title} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d6434a]/[0.14] text-[#f68a90]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-2xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/[0.62]">{description}</p>
                  <ul className="mt-6 space-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-white/[0.68]">
                        <CheckCircle2 className="h-4 w-4 text-[#f68a90]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="scroll-mt-28">
          <div className="container py-20 md:py-28">
            <SectionHeader
              eyebrow="Reaproveitamento e fechamento"
              title="Componentes reutilizaveis para aplicar depois nas duas landing pages."
              description="A base proposta foi pensada para virar sistema real: mesma logica, mesma cadencia e personalidades ajustadas por superficie, cor e densidade."
              inverted
            />

            <div className="mt-12 grid gap-6 xl:grid-cols-3">
              {BLUEPRINTS.map(({ description, icon: Icon, title, usage }) => (
                <div key={title} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.08] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/[0.56]">
                      {usage}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-2xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/[0.62]">{description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-2">
              {([
                {
                  tone: "dark" as const,
                  eyebrow: "cta pattern / incenti tech",
                  title: "Fechamento institucional com autoridade e foco.",
                  description: "Mensagem curta, promessa bem definida e escolha clara entre contato principal e rota secundaria.",
                  actions: ["Falar com a Incenti Tech", "Ver casos de uso"],
                },
                {
                  tone: "light" as const,
                  eyebrow: "cta pattern / integration hub",
                  title: "Fechamento orientado a produto e demonstracao.",
                  description: "Call to action limpo, com beneficio operacional explicito e caminho direto para demo ou conversa consultiva.",
                  actions: ["Solicitar demonstracao", "Entender a arquitetura"],
                },
              ]).map((cta) => {
                const t = tone(cta.tone);
                const dark = cta.tone === "dark";

                return (
                  <Shell key={cta.title} className={`${t.card} ${t.border}`}>
                    <p className="sd-kicker">{cta.eyebrow}</p>
                    <h3 className="mt-4 max-w-md font-heading text-3xl font-semibold tracking-[-0.04em] md:text-4xl">{cta.title}</h3>
                    <p className={`mt-4 max-w-xl text-base leading-7 ${t.muted}`}>{cta.description}</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      {cta.actions.map((action, index) => (
                        <Button
                          key={action}
                          variant={index === 0 ? undefined : "ghost"}
                          className={`h-12 rounded-full px-6 text-sm ${
                            index === 0
                              ? "bg-[#d6434a] text-white hover:bg-[#bf3940]"
                              : dark
                                ? "border border-white/[0.12] bg-white/5 text-white hover:bg-white/10"
                                : "border border-[#d9dfeb] bg-white text-[#101827] hover:bg-[#f7f8fc]"
                          }`}
                        >
                          {action}
                          {index === 0 ? <ArrowRight className="h-4 w-4" /> : null}
                        </Button>
                      ))}
                    </div>
                  </Shell>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SystemDesign;
