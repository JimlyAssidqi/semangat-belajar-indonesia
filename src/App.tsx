
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Beranda from "./pages/Beranda";
import ProfilLayanan from "./pages/ProfilLayanan";
import TopikKonseling from "./pages/TopikKonseling";
import PendaftaranSesi from "./pages/PendaftaranSesi";
import MediaEdukasi from "./pages/MediaEdukasi";
import EvaluasiFeedback from "./pages/EvaluasiFeedback";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Beranda />} />
              <Route path="/profil-layanan" element={<ProfilLayanan />} />
              <Route path="/topik-konseling" element={<TopikKonseling />} />
              <Route path="/pendaftaran" element={<PendaftaranSesi />} />
              <Route path="/media-edukasi" element={<MediaEdukasi />} />
              <Route path="/evaluasi" element={<EvaluasiFeedback />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
