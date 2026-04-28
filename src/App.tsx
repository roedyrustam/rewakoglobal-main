import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { QuoteModal } from "@/components/QuoteModal";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/en/terms" element={<Terms />} />
                <Route path="/id/terms" element={<Terms />} />
                <Route path="/en/privacy" element={<Privacy />} />
                <Route path="/id/privacy" element={<Privacy />} />
                {/* Legacy redirects to default locale */}
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
            <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
          </TooltipProvider>
        </LanguageProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
