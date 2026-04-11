import logo from "@/assets/logo.png";
import { siteContent, type Locale } from "@/lib/siteContent";

type FooterProps = {
  locale: Locale;
};

const Footer = ({ locale }: FooterProps) => {
  const content = siteContent[locale].footer;
  const links =
    locale === "pt-BR"
      ? [
          { href: "#servicos", label: "Servicos" },
          { href: "#projetos", label: "Projetos" },
          { href: "#contato", label: "Contato" },
        ]
      : [
          { href: "#servicos", label: "Services" },
          { href: "#projetos", label: "Work" },
          { href: "#contato", label: "Contact" },
        ];

  return (
    <footer className="border-t border-white/8 bg-[#040713] px-4 py-14">
      <div className="container mx-auto">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
                <img
                  src={logo}
                  alt="Incenti Tech"
                  className="h-10 w-10 rounded-xl object-contain"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/46">
                  Custom software studio
                </p>
                <p className="font-heading text-2xl font-semibold tracking-[-0.04em] text-white">
                  <span className="text-primary">Incenti</span> Tech
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
              {locale === "pt-BR"
                ? "Software sob medida, integracoes complexas e sustentacao para operacoes que precisam de clareza tecnica e continuidade."
                : "Custom software, complex integrations, and support for operations that need technical clarity and continuity."}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                {locale === "pt-BR" ? "Navegacao" : "Navigation"}
              </p>
              <div className="space-y-3">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-muted-foreground transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                Incenti Tech
              </p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>63.404.846/0001-07</p>
                <p>fernando@incentitech.com.br</p>
                <p>+55 (11) 97154-2519</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Incenti Tech. {content.rights}
          </p>
          <p>
            {locale === "pt-BR"
              ? "Tecnologia com presenca, estrutura e continuidade."
              : "Technology with presence, structure, and continuity."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
