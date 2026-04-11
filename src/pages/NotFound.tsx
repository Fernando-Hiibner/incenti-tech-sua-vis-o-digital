import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SeoHead from "@/components/SeoHead";
import { getLocaleFromPathname } from "@/lib/locale";
import { getNotFoundStructuredData, SITE_URL } from "@/lib/seo";
import { localePaths, siteContent, type Locale } from "@/lib/siteContent";

const NotFound = () => {
  const location = useLocation();
  const locale: Locale = getLocaleFromPathname(location.pathname);
  const content = siteContent[locale].notFound;

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <SeoHead
        title={`404 | Incenti Tech`}
        description={content.message}
        canonical={`${SITE_URL}${location.pathname}`}
        lang={locale}
        ogLocale={locale === "pt-BR" ? "pt_BR" : "en_US"}
        robots="noindex, follow"
        alternates={[
          { hrefLang: "pt-BR", href: `${SITE_URL}${localePaths["pt-BR"]}` },
          { hrefLang: "en", href: `${SITE_URL}${localePaths.en}` },
          { hrefLang: "x-default", href: `${SITE_URL}${localePaths.en}` },
        ]}
        structuredData={getNotFoundStructuredData()}
      />
      <div className="max-w-xl px-6 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">Error 404</p>
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">{content.message}</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          {locale === "pt-BR"
            ? "O endereco solicitado nao existe ou foi movido. Use os atalhos abaixo para continuar navegando."
            : "The requested address does not exist or has moved. Use the shortcuts below to keep browsing."}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={localePaths[locale]}
            className="rounded-lg bg-primary px-5 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {content.action}
          </a>
          <a
            href={locale === "pt-BR" ? "/pt-br/integration-hub/" : "/en/integration-hub/"}
            className="rounded-lg border border-border bg-background px-5 py-3 font-medium transition-colors hover:bg-secondary/70"
          >
            {locale === "pt-BR" ? "Ver Integration Hub" : "View Integration Hub"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
