import AppLayout from "@/components/layout/AppLayout";
import { ArrowLeft, Book } from "lucide-react";
import { useNavigate } from "react-router-dom";

const tafsirSurahs = [
  { number: 1, name: "Al-Fatiha", arabicName: "الفاتحة", verses: 7 },
  { number: 2, name: "Al-Baqara", arabicName: "البقرة", verses: 286 },
  { number: 3, name: "Al-Imran", arabicName: "آل عمران", verses: 200 },
  { number: 4, name: "An-Nisa", arabicName: "النساء", verses: 176 },
  { number: 36, name: "Ya-Sin", arabicName: "يس", verses: 83 },
  { number: 55, name: "Ar-Rahman", arabicName: "الرحمن", verses: 78 },
  { number: 56, name: "Al-Waqi'a", arabicName: "الواقعة", verses: 96 },
  { number: 67, name: "Al-Mulk", arabicName: "الملك", verses: 30 },
  { number: 112, name: "Al-Ikhlas", arabicName: "الإخلاص", verses: 4 },
  { number: 113, name: "Al-Falaq", arabicName: "الفلق", verses: 5 },
  { number: 114, name: "An-Nas", arabicName: "الناس", verses: 6 },
];

const TafsirPage = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="px-4 py-6">
        <header className="mb-6 flex items-center gap-4">
          <button onClick={() => navigate("/more")} className="p-2 hover:bg-muted rounded-lg">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Tafsir</h1>
            <p className="text-muted-foreground text-sm">Exégèse du Coran</p>
          </div>
        </header>

        <div className="bg-card border border-border rounded-xl p-4 mb-6">
          <p className="text-muted-foreground text-sm">
            Le Tafsir est l'interprétation et l'explication du Coran. Sélectionnez une sourate pour en apprendre davantage sur sa signification.
          </p>
        </div>

        <div className="space-y-3">
          {tafsirSurahs.map((surah) => (
            <button
              key={surah.number}
              className="w-full bg-card border border-border rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-primary font-bold">{surah.number}</span>
              </div>
              <div className="flex-1 text-left">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-foreground">{surah.name}</h3>
                  <span className="text-xl font-arabic text-primary">{surah.arabicName}</span>
                </div>
                <p className="text-sm text-muted-foreground">{surah.verses} versets</p>
              </div>
            </button>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-6">
          Plus de sourates à venir...
        </p>
      </div>
    </AppLayout>
  );
};

export default TafsirPage;
