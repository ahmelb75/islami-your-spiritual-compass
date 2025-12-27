import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Search, Heart, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";

const duas = [
  { id: 1, name: "Du'a du matin", arabic: "أَذْكَارُ الصَّبَاحِ", category: "Quotidien" },
  { id: 2, name: "Du'a du soir", arabic: "أَذْكَارُ المَسَاءِ", category: "Quotidien" },
  { id: 3, name: "Avant de dormir", arabic: "دُعَاءُ النَّوْمِ", category: "Sommeil" },
  { id: 4, name: "Au réveil", arabic: "دُعَاءُ الاِسْتِيقَاظِ", category: "Sommeil" },
  { id: 5, name: "Avant le repas", arabic: "دُعَاءُ الطَّعَامِ", category: "Nourriture" },
  { id: 6, name: "Après le repas", arabic: "دُعَاءُ بَعْدَ الطَّعَامِ", category: "Nourriture" },
  { id: 7, name: "En entrant à la maison", arabic: "دُعَاءُ دُخُولِ البَيْتِ", category: "Maison" },
  { id: 8, name: "En sortant de la maison", arabic: "دُعَاءُ الخُرُوجِ", category: "Maison" },
  { id: 9, name: "Istikhara", arabic: "دُعَاءُ الاِسْتِخَارَةِ", category: "Spécial" },
  { id: 10, name: "Pour les parents", arabic: "دُعَاءٌ لِلْوَالِدَيْنِ", category: "Famille" },
  { id: 11, name: "Protection", arabic: "أَعُوذُ بِكَلِمَاتِ اللهِ", category: "Protection" },
  { id: 12, name: "Pardon", arabic: "أَسْتَغْفِرُ اللهَ", category: "Repentir" },
];

const categories = ["Tous", "Quotidien", "Sommeil", "Nourriture", "Maison", "Spécial", "Famille", "Protection", "Repentir"];

const DuasPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [favorites, setFavorites] = useState<number[]>([1, 2, 9]);

  const filteredDuas = duas.filter((dua) => {
    const matchesSearch =
      dua.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dua.arabic.includes(searchQuery);
    const matchesCategory = selectedCategory === "Tous" || dua.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <AppLayout>
      <div className="px-4 py-6">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Duas & Invocations</h1>
          <p className="text-muted-foreground text-sm">Invocations pour chaque moment</p>
        </header>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Rechercher une invocation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Duas List */}
        <div className="space-y-3">
          {filteredDuas.map((dua, index) => (
            <div
              key={dua.id}
              className="bg-card border border-border rounded-xl p-4 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                      {dua.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground">{dua.name}</h3>
                  <p className="text-primary font-arabic text-lg mt-1">{dua.arabic}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleFavorite(dua.id)}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      favorites.includes(dua.id)
                        ? "bg-destructive/20 text-destructive"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${favorites.includes(dua.id) ? "fill-current" : ""}`}
                    />
                  </button>
                  <button className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors">
                    <BookOpen className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default DuasPage;
