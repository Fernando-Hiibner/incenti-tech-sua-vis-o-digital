import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getIntegrationHubPath } from "@/lib/integrationHubRoutes";
import { getPreferredLocale } from "@/lib/locale";
import { localePaths } from "@/lib/siteContent";
import type { Locale } from "@/lib/siteContent";

const queryClient = new QueryClient();
const IndexPage = lazy(() => import("./pages/Index.tsx"));
const IntegrationHubPage = lazy(() => import("./pages/IntegrationHub.tsx"));
const SystemDesignPage = lazy(() => import("./pages/SystemDesign.tsx"));
const NotFoundPage = lazy(() => import("./pages/NotFound.tsx"));

const RouteFallback = () => <div className="min-h-screen bg-background" />;

const renderIndex = (locale: Locale) => (
  <Suspense fallback={<RouteFallback />}>
    <IndexPage locale={locale} />
  </Suspense>
);

const renderIntegrationHub = (locale: Locale) => (
  <Suspense fallback={<RouteFallback />}>
    <IntegrationHubPage locale={locale} />
  </Suspense>
);

const LocaleRedirect = ({ resolvePath }: { resolvePath: (locale: Locale) => string }) => {
  useEffect(() => {
    window.location.replace(resolvePath(getPreferredLocale()));
  }, [resolvePath]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LocaleRedirect resolvePath={(locale) => localePaths[locale]} />} />
          <Route path="/pt-br" element={renderIndex("pt-BR")} />
          <Route path="/pt-br/" element={renderIndex("pt-BR")} />
          <Route path="/en" element={renderIndex("en")} />
          <Route path="/en/" element={renderIndex("en")} />
          <Route path="/integration-hub" element={<LocaleRedirect resolvePath={getIntegrationHubPath} />} />
          <Route path="/integration-hub/" element={<LocaleRedirect resolvePath={getIntegrationHubPath} />} />
          <Route path="/pt-BR/integration-hub" element={renderIntegrationHub("pt-BR")} />
          <Route path="/pt-BR/integration-hub/" element={renderIntegrationHub("pt-BR")} />
          <Route path="/pt-br/integration-hub" element={renderIntegrationHub("pt-BR")} />
          <Route path="/pt-br/integration-hub/" element={renderIntegrationHub("pt-BR")} />
          <Route path="/en/integration-hub" element={renderIntegrationHub("en")} />
          <Route path="/en/integration-hub/" element={renderIntegrationHub("en")} />
          <Route
            path="/system-design"
            element={
              <Suspense fallback={<RouteFallback />}>
                <SystemDesignPage />
              </Suspense>
            }
          />
          <Route
            path="/system-design/"
            element={
              <Suspense fallback={<RouteFallback />}>
                <SystemDesignPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<RouteFallback />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
