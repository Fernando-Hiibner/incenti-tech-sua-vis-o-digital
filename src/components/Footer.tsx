import logo from "@/assets/logo.png";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_WHATSAPP_URL,
} from "@/lib/contact";
import { siteContent, type Locale } from "@/lib/siteContent";

type FooterProps = {
  locale: Locale;
};

const Footer = ({ locale }: FooterProps) => {
  const content = siteContent[locale].footer;
  const links = content.links;

  return (
    <footer className="border-t border-white/8 bg-[#040713] px-4 py-14 sm:px-6">
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
                <img
                  src={logo}
                  alt="Incenti Tech"
                  className="h-10 w-10 rounded-xl object-contain"
                />
              </div>
              <div className="min-w-0">
                <p className="break-words font-heading text-2xl font-semibold tracking-[-0.04em] text-white">
                  <span className="text-primary">Incenti</span> Tech
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
              {content.description}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="min-w-0">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                {content.navigationLabel}
              </p>
              <div className="space-y-3">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-sm font-medium text-muted-foreground transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="min-w-0">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                Incenti Tech
              </p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>63.404.846/0001-07</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="block break-all font-medium transition-colors hover:text-white sm:break-normal"
                >
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={CONTACT_WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="block font-medium transition-colors hover:text-white"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Incenti Tech. {content.rights}
          </p>
          <p>{content.closingStatement}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
