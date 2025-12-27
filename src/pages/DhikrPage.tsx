import AppLayout from "@/components/layout/AppLayout";
import { useState } from "react";
import { ArrowLeft, Play, Pause, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const dhikrList = [
  { arabic: "سُبْحَانَ اللهِ", transliteration: "Subhan'Allah", translation: "Gloire à Allah", count: 33 },
  { arabic: "الْحَمْدُ لِلَّهِ", transliteration: "Al-Hamdulillah", translation: "Louange à Allah", count: 33 },
  { arabic: "اللهُ أَكْبَرُ", transliteration: "Allahu Akbar", translation: "Allah est le plus grand", count: 33 },
  { arabic: "لَا إِلَٰهَ إِلَّا اللهُ", transliteration: "La ilaha illa Allah", translation: "Il n'y a de dieu qu'Allah", count: 100 },
  { arabic: "أَسْتَغْفِرُ اللهَ", transliteration: "Astaghfirullah", translation: "Je demande pardon à Allah", count: 100 },
  { arabic: "سُبْحَانَ اللهِ وَبِحَمْدِهِ", transliteration: "Subhan'Allahi wa bihamdihi", translation: "Gloire à Allah et louange à Lui", count: 100 },
];

const DhikrPage = () => {
  const navigate = useNavigate();
  const [selectedDhikr, setSelectedDhikr] = useState<number | null>(null);
  const [currentCount, setCurrentCount] = useState(0);

  const handleDhikrClick = () => {
    if (selectedDhikr !== null) {
      const target = dhikrList[selectedDhikr].count;
      if (currentCount < target) {
        setCurrentCount(prev => prev + 1);
      }
    }
  };

  const resetCount = () => {
    setCurrentCount(0);
  };

  return (
    <AppLayout>
      <div className="px-4 py-6">
        <header className="mb-6 flex items-center gap-4">
          <button onClick={() => navigate("/more")} className="p-2 hover:bg-muted rounded-lg">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dhikr</h1>
            <p className="text-muted-foreground text-sm">Rappels et méditations</p>
          </div>
        </header>

        {selectedDhikr === null ? (
          <div className="space-y-3">
            {dhikrList.map((dhikr, index) => (
              <button
                key={index}
                onClick={() => { setSelectedDhikr(index); setCurrentCount(0); }}
                className="w-full bg-card border border-border rounded-xl p-4 text-left hover:border-primary/30 transition-all"
              >
                <p className="text-2xl font-arabic text-primary mb-2">{dhikr.arabic}</p>
                <p className="text-foreground font-medium">{dhikr.transliteration}</p>
                <p className="text-muted-foreground text-sm">{dhikr.translation}</p>
                <p className="text-primary text-sm mt-2">Objectif: {dhikr.count}x</p>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="text-center mb-8">
              <p className="text-4xl font-arabic text-primary mb-4">{dhikrList[selectedDhikr].arabic}</p>
              <p className="text-foreground text-lg">{dhikrList[selectedDhikr].transliteration}</p>
              <p className="text-muted-foreground">{dhikrList[selectedDhikr].translation}</p>
            </div>

            <button
              onClick={handleDhikrClick}
              className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-2xl active:scale-95 transition-transform"
            >
              <span className="text-6xl font-bold text-primary-foreground">{currentCount}</span>
            </button>

            <p className="text-muted-foreground mt-4">
              Objectif: {dhikrList[selectedDhikr].count}
            </p>

            <div className="flex gap-4 mt-8">
              <Button variant="outline" onClick={resetCount}>
                <RotateCcw className="w-4 h-4 mr-2" />
                Réinitialiser
              </Button>
              <Button variant="outline" onClick={() => setSelectedDhikr(null)}>
                Changer de dhikr
              </Button>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default DhikrPage;
