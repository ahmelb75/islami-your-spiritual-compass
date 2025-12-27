import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Play, Pause, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const surahs = [
  { number: 1, name: "Al-Fatiha", arabicName: "الفاتحة", verses: 7 },
  { number: 2, name: "Al-Baqara", arabicName: "البقرة", verses: 286 },
  { number: 3, name: "Al-Imran", arabicName: "آل عمران", verses: 200 },
  { number: 4, name: "An-Nisa", arabicName: "النساء", verses: 176 },
  { number: 5, name: "Al-Ma'ida", arabicName: "المائدة", verses: 120 },
  { number: 6, name: "Al-An'am", arabicName: "الأنعام", verses: 165 },
  { number: 7, name: "Al-A'raf", arabicName: "الأعراف", verses: 206 },
  { number: 8, name: "Al-Anfal", arabicName: "الأنفال", verses: 75 },
  { number: 9, name: "At-Tawba", arabicName: "التوبة", verses: 129 },
  { number: 10, name: "Yunus", arabicName: "يونس", verses: 109 },
  { number: 11, name: "Hud", arabicName: "هود", verses: 123 },
  { number: 12, name: "Yusuf", arabicName: "يوسف", verses: 111 },
  { number: 36, name: "Ya-Sin", arabicName: "يس", verses: 83 },
  { number: 55, name: "Ar-Rahman", arabicName: "الرحمن", verses: 78 },
  { number: 67, name: "Al-Mulk", arabicName: "الملك", verses: 30 },
  { number: 112, name: "Al-Ikhlas", arabicName: "الإخلاص", verses: 4 },
  { number: 113, name: "Al-Falaq", arabicName: "الفلق", verses: 5 },
  { number: 114, name: "An-Nas", arabicName: "الناس", verses: 6 },
];

const QuranPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const lastListened = {
    surah: surahs[35], // Ya-Sin
    verse: 15,
    totalVerses: 83,
    progress: (15 / 83) * 100,
  };

  const filteredSurahs = surahs.filter(
    (surah) =>
      surah.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      surah.arabicName.includes(searchQuery)
  );

  return (
    <AppLayout>
      <div className="px-4 py-6">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Le Saint Coran</h1>
          <p className="text-muted-foreground text-sm">114 Sourates</p>
        </header>

        {/* Last Listened */}
        <div className="bg-gradient-to-br from-primary/20 to-islamic-emerald/20 rounded-2xl p-5 mb-6 border border-primary/20">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Dernière écoute</p>
              <h3 className="text-xl font-bold text-foreground">{lastListened.surah.name}</h3>
              <p className="text-primary font-arabic text-lg">{lastListened.surah.arabicName}</p>
            </div>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-primary-foreground" />
              ) : (
                <Play className="w-6 h-6 text-primary-foreground ml-1" />
              )}
            </button>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Verset {lastListened.verse}</span>
              <span className="text-foreground">{lastListened.totalVerses} versets</span>
            </div>
            <div className="h-2 bg-background/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${lastListened.progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Rechercher une sourate..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12"
          />
        </div>

        {/* Surahs Grid */}
        <div className="grid grid-cols-3 gap-3">
          {filteredSurahs.map((surah, index) => (
            <button
              key={surah.number}
              className="bg-card border border-border rounded-xl p-3 text-left hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mb-2">
                <span className="text-primary text-sm font-bold">{surah.number}</span>
              </div>
              <p className="font-medium text-foreground text-sm truncate">{surah.name}</p>
              <p className="text-primary font-arabic text-base">{surah.arabicName}</p>
              <p className="text-xs text-muted-foreground mt-1">{surah.verses} versets</p>
            </button>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default QuranPage;
