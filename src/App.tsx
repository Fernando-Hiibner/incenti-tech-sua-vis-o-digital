import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getIntegrationHubPath } from "@/lib/integrationHubRoutes";
import { getPreferredLocale } from "@/lib/locale";
import { localePaths } from "@/lib/siteContent";
import IntegrationHub from "./pages/IntegrationHub.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import type { Locale } from "@/lib/siteContent";

const queryClient = new QueryClient();

const renderIndex = (locale: Locale) => <Index locale={locale} />;
const renderIntegrationHub = (locale: Locale) => <IntegrationHub locale={locale} />;

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
