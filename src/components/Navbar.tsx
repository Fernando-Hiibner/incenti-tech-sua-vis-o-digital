import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  localePaths,
  localeSwitchLabel,
  siteContent,
  type Locale,
} from "@/lib/siteContent";

type NavbarProps = {
  locale: Locale;
};

const Navbar = ({ locale }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const content = siteContent[locale].nav;
  const switchHref = locale === "pt-BR" ? localePaths.en : localePaths["pt-BR"];
  const navItems =
    locale === "pt-BR"
      ? [
          { href: "#servicos", label: "Servicos" },
          { href: "#projetos", label: "Projetos" },
          { href: "#tecnologias", label: "Stack" },
          { href: "#contato", label: "Contato" },
        ]
      : [
          { href: "#servicos", label: "Services" },
          { href: "#projetos", label: "Work" },
          { href: "#tecnologias", label: "Stack" },
          { href: "#contato", label: "Contact" },
        ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed inset-x-0 top-4 z-50">
      <div className="container mx-auto px-4">
        <div
          className={`home-nav-shell flex items-center justify-between gap-4 rounded-full px-4 transition-all duration-300 md:px-5 ${scrolled ? "py-3" : "py-4"}`}
        >
          <a
            href="#inicio"
            className="flex items-center gap-3"
            onClick={(event) => {
              event.preventDefault();
              handleClick("#inicio");
            }}
          >
            <div
              className={`rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 ${scrolled ? "p-1.5" : "p-2"}`}
            >
              <img
                src={logo}
                alt="Incenti Tech"
                className={`rounded-xl object-contain transition-all duration-300 ${scrolled ? "h-8 w-8" : "h-10 w-10"}`}
              />
            </div>
            <div className="leading-tight">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/48">
                Custom software studio
              </p>
              <p className="font-heading text-lg font-semibold tracking-[-0.04em] text-white md:text-xl">
                <span className="text-primary">Incenti</span> Tech
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleClick(item.href);
                }}
                className="rounded-full px-4 py-2 text-sm text-white/62 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.location.assign(switchHref)}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-semibold tracking-[0.18em] text-white transition-colors hover:border-primary/40 hover:text-primary md:px-4"
              aria-label={content.languageButtonAriaLabel}
            >
              {localeSwitchLabel[locale]}
            </button>
            <button
              type="button"
              onClick={() => handleClick("#contato")}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_24px_40px_-24px_rgba(207,63,71,0.9)] transition-all hover:-translate-y-0.5 hover:bg-primary/90 md:px-5"
            >
              <span className="hidden sm:inline">{content.contactButton}</span>
              <span className="sm:hidden">
                {locale === "pt-BR" ? "Contato" : "Contact"}
              </span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
