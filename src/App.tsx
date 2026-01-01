import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrayerPage from "./pages/PrayerPage";
import QuranPage from "./pages/QuranPage";
import SurahDetailPage from "./pages/SurahDetailPage";
import DuasPage from "./pages/DuasPage";
import MorePage from "./pages/MorePage";
import DhikrPage from "./pages/DhikrPage";
import TafsirPage from "./pages/TafsirPage";
import QiblaPage from "./pages/QiblaPage";
import IslamicCalendarPage from "./pages/IslamicCalendarPage";
import TasbihPage from "./pages/TasbihPage";
import NamesOfAllahPage from "./pages/NamesOfAllahPage";
import SpecialNightsPage from "./pages/SpecialNightsPage";
import NotificationsSettingsPage from "./pages/NotificationsSettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/prayer" element={<PrayerPage />} />
          <Route path="/quran" element={<QuranPage />} />
          <Route path="/quran/:surahNumber" element={<SurahDetailPage />} />
          <Route path="/duas" element={<DuasPage />} />
          <Route path="/more" element={<MorePage />} />
          <Route path="/dhikr" element={<DhikrPage />} />
          <Route path="/tafsir" element={<TafsirPage />} />
          <Route path="/qibla" element={<QiblaPage />} />
          <Route path="/islamic-calendar" element={<IslamicCalendarPage />} />
          <Route path="/tasbih" element={<TasbihPage />} />
          <Route path="/names-of-allah" element={<NamesOfAllahPage />} />
          <Route path="/special-nights" element={<SpecialNightsPage />} />
          <Route path="/notifications" element={<NotificationsSettingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
