import { Suspense, lazy, useEffect } from "react";
import { getIntegrationHubPath } from "@/lib/integrationHubRoutes";
import { getPreferredLocale, localePaths, type Locale } from "@/lib/locale";

const IndexPtBrPage = lazy(() => import("./pages/IndexPtBr.tsx"));
const IndexEnPage = lazy(() => import("./pages/IndexEn.tsx"));
const IntegrationHubPage = lazy(() => import("./pages/IntegrationHub.tsx"));
const NotFoundPage = lazy(() => import("./pages/NotFound.tsx"));

const RouteFallback = () => <div className="min-h-screen bg-background" />;

const renderIndex = (locale: Locale) => (
  <Suspense fallback={<RouteFallback />}>
    {locale === "pt-BR" ? <IndexPtBrPage /> : <IndexEnPage />}
  </Suspense>
);

const renderIntegrationHub = (locale: Locale) => (
  <Suspense fallback={<RouteFallback />}>
    <IntegrationHubPage locale={locale} />
  </Suspense>
);

const LocaleRedirect = ({
  resolvePath,
}: {
  resolvePath: (locale: Locale) => string;
}) => {
  useEffect(() => {
    window.location.replace(resolvePath(getPreferredLocale()));
  }, [resolvePath]);

  return null;
};

const normalizePath = (pathname: string) =>
  pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

const renderNotFound = () => (
  <Suspense fallback={<RouteFallback />}>
    <NotFoundPage />
  </Suspense>
);

const App = () => {
  const pathname =
    typeof window === "undefined" ? "/" : normalizePath(window.location.pathname);

  switch (pathname) {
    case "/":
    case "/index.html":
      return <LocaleRedirect resolvePath={(locale) => localePaths[locale]} />;
    case "/pt-br":
    case "/pt-BR":
      return renderIndex("pt-BR");
    case "/en":
      return renderIndex("en");
    case "/integration-hub":
      return <LocaleRedirect resolvePath={getIntegrationHubPath} />;
    case "/pt-BR/integration-hub":
    case "/pt-br/integration-hub":
      return renderIntegrationHub("pt-BR");
    case "/en/integration-hub":
      return renderIntegrationHub("en");
    default:
      return renderNotFound();
  }
};

export default App;
