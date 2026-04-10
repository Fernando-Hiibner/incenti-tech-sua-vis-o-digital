import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getPreferredLocale } from "@/lib/locale";
import { localePaths } from "@/lib/siteContent";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import type { Locale } from "@/lib/siteContent";

const queryClient = new QueryClient();

const renderIndex = (locale: Locale) => <Index locale={locale} />;

const LocaleRedirect = () => {
  useEffect(() => {
    window.location.replace(localePaths[getPreferredLocale()]);
  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LocaleRedirect />} />
          <Route path="/pt-br" element={renderIndex("pt-BR")} />
          <Route path="/pt-br/" element={renderIndex("pt-BR")} />
          <Route path="/en" element={renderIndex("en")} />
          <Route path="/en/" element={renderIndex("en")} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
