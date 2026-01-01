import AppLayout from "@/components/layout/AppLayout";
import { ArrowLeft, Book, ChevronRight, Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { tafsirSurahs, TafsirSurah } from "@/data/tafsirData";
import { ScrollArea } from "@/components/ui/scroll-area";

const TafsirPage = () => {
  const navigate = useNavigate();
  const [selectedSurah, setSelectedSurah] = useState<TafsirSurah | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSurahs = tafsirSurahs.filter(
    (surah) =>
      surah.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      surah.arabicName.includes(searchQuery) ||
      surah.number.toString() === searchQuery
  );

  return (
    <AppLayout>
      <div className="flex flex-col h-full">
        <header className="px-4 py-4 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-4 mb-4">
            <button onClick={() => navigate("/more")} className="p-2 hover:bg-muted rounded-lg">
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Tafsir</h1>
              <p className="text-muted-foreground text-sm">Exégèse des 114 sourates</p>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Rechercher une sourate..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </header>

        <ScrollArea className="flex-1 px-4">
          <div className="py-4 space-y-3">
            {filteredSurahs.map((surah) => (
              <button
                key={surah.number}
                onClick={() => setSelectedSurah(surah)}
                className="w-full bg-card border border-border rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-primary font-bold">{surah.number}</span>
                </div>
                <div className="flex-1 text-left min-w-0">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-foreground truncate">{surah.name}</h3>
                    <span className="text-xl font-arabic text-primary ml-2">{surah.arabicName}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{surah.verses} versets • {surah.revelation}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              </button>
            ))}

            {filteredSurahs.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                Aucune sourate trouvée
              </p>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Tafsir Detail Dialog */}
      <Dialog open={!!selectedSurah} onOpenChange={() => setSelectedSurah(null)}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-primary font-bold">{selectedSurah?.number}</span>
              </div>
              <div>
                <DialogTitle className="flex items-center gap-2">
                  {selectedSurah?.name}
                  <span className="text-xl font-arabic text-primary">{selectedSurah?.arabicName}</span>
                </DialogTitle>
                <p className="text-sm text-muted-foreground">
                  {selectedSurah?.verses} versets • {selectedSurah?.revelation}
                </p>
              </div>
            </div>
          </DialogHeader>

          {selectedSurah && (
            <div className="space-y-4 mt-4">
              <div className="bg-primary/5 rounded-xl p-4">
                <h4 className="text-sm font-medium text-primary mb-1">Thème principal</h4>
                <p className="text-foreground font-medium">{selectedSurah.theme}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Résumé</h4>
                <p className="text-foreground leading-relaxed">{selectedSurah.summary}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Points clés</h4>
                <ul className="space-y-2">
                  {selectedSurah.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-primary font-medium">{index + 1}</span>
                      </div>
                      <span className="text-foreground text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AppLayout>
  );
};

export default TafsirPage;
