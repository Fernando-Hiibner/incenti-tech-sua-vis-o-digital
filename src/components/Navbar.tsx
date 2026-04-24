import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import LanguageSwitchButton from "@/components/LanguageSwitchButton";
import logo from "@/assets/logo-incenti-tech.svg";
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
  const navItems = content.items;
  const navClickEvents: Record<string, string> = {
    "#servicos": "home_click_nav_servicos",
    "#vantagens": "home_click_nav_vantagens",
    "#projetos": "home_click_nav_projetos",
    "#tecnologias": "home_click_nav_tecnologias",
    "#contato": "home_click_nav_contato",
  };

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
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`home-nav-shell flex items-center justify-between rounded-full px-4 transition-all duration-300 md:px-5 ${scrolled ? "gap-4 py-2" : "gap-3 py-0.5"}`}
        >
          <a
            href="#inicio"
            className="flex items-center gap-3"
            data-ga-click="home_click_nav_logo"
            data-ga-page="home"
            data-ga-section="navbar"
            data-ga-label="Logo"
            onClick={(event) => {
              event.preventDefault();
              handleClick("#inicio");
            }}
          >
            <div className={`${scrolled ? "-my-3" : "-my-5"} transition-all duration-300`}>
              <img
                src={logo}
                alt="Incenti Tech"
                className={`object-contain transition-all duration-300 ${scrolled ? "h-20 w-20" : "h-28 w-28"}`}
              />
            </div>
            <div className="leading-tight">
              <p
                className={`font-heading font-semibold tracking-normal text-foreground transition-all duration-300 ${scrolled ? "text-lg md:text-xl" : "text-base md:text-lg"}`}
              >
                <span className="text-[hsl(var(--brand-red))]">Incenti</span> Tech
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-ga-click={navClickEvents[item.href]}
                data-ga-page="home"
                data-ga-section="navbar"
                data-ga-label={item.label}
                onClick={(event) => {
                  event.preventDefault();
                  handleClick(item.href);
                }}
                className="home-nav-link"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitchButton
              currentLocale={locale}
              onClick={() => window.location.assign(switchHref)}
              data-ga-click="home_click_nav_mudar_idioma"
              data-ga-page="home"
              data-ga-section="navbar"
              data-ga-label={localeSwitchLabel[locale]}
              aria-label={content.languageButtonAriaLabel}
            />
            <button
              type="button"
              onClick={() => handleClick("#contato")}
              data-ga-click="home_click_nav_cta_contato"
              data-ga-page="home"
              data-ga-section="navbar"
              data-ga-label={content.contactButton}
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-red))] px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-[0_20px_38px_-28px_rgba(176,7,20,0.65)] transition-all hover:-translate-y-0.5 hover:bg-[hsl(var(--brand-red)/0.9)] sm:text-sm md:px-5"
            >
              <span className="hidden sm:inline">{content.contactButton}</span>
              <span className="sm:hidden">{content.contactButtonCompact}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
