import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Search, Heart, ArrowLeft, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Dua {
  id: number;
  name: string;
  arabic: string;
  transliteration: string;
  translation: string;
  reference: string;
  category: string;
}

const duas: Dua[] = [
  {
    id: 1,
    name: "Du'a du matin",
    arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration: "Asbahna wa asbahal-mulku lillah, walhamdulillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in qadir",
    translation: "Nous voici au matin et le royaume appartient à Allah, et la louange est à Allah. Nul n'est digne d'adoration sauf Allah, Seul, sans associé. À Lui appartient le royaume et à Lui la louange, et Il est capable de toute chose.",
    reference: "Abu Dawud",
    category: "Quotidien"
  },
  {
    id: 2,
    name: "Du'a du soir",
    arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration: "Amsayna wa amsal-mulku lillah, walhamdulillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in qadir",
    translation: "Nous voici au soir et le royaume appartient à Allah, et la louange est à Allah. Nul n'est digne d'adoration sauf Allah, Seul, sans associé. À Lui appartient le royaume et à Lui la louange, et Il est capable de toute chose.",
    reference: "Abu Dawud",
    category: "Quotidien"
  },
  {
    id: 3,
    name: "Avant de dormir",
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    transliteration: "Bismika Allahumma amutu wa ahya",
    translation: "C'est en Ton nom, ô Allah, que je meurs et que je vis.",
    reference: "Bukhari",
    category: "Sommeil"
  },
  {
    id: 4,
    name: "Au réveil",
    arabic: "الحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    transliteration: "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur",
    translation: "Louange à Allah qui nous a redonné la vie après nous avoir fait mourir, et c'est vers Lui que sera la résurrection.",
    reference: "Bukhari",
    category: "Sommeil"
  },
  {
    id: 5,
    name: "Avant le repas",
    arabic: "بِسْمِ اللَّهِ",
    transliteration: "Bismillah",
    translation: "Au nom d'Allah.",
    reference: "Abu Dawud",
    category: "Nourriture"
  },
  {
    id: 6,
    name: "Après le repas",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَٰذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
    transliteration: "Alhamdu lillahil-ladhi at'amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwah",
    translation: "Louange à Allah qui m'a nourri de ceci et me l'a accordé sans effort ni force de ma part.",
    reference: "Abu Dawud, Tirmidhi",
    category: "Nourriture"
  },
  {
    id: 7,
    name: "En entrant à la maison",
    arabic: "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
    transliteration: "Bismillahi walajna, wa bismillahi kharajna, wa 'alallahi rabbina tawakkalna",
    translation: "Au nom d'Allah nous entrons et au nom d'Allah nous sortons, et c'est en Allah notre Seigneur que nous plaçons notre confiance.",
    reference: "Abu Dawud",
    category: "Maison"
  },
  {
    id: 8,
    name: "En sortant de la maison",
    arabic: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    transliteration: "Bismillah, tawakkaltu 'alallah, wa la hawla wa la quwwata illa billah",
    translation: "Au nom d'Allah, je place ma confiance en Allah, et il n'y a de force et de puissance qu'en Allah.",
    reference: "Abu Dawud, Tirmidhi",
    category: "Maison"
  },
  {
    id: 9,
    name: "Istikhara",
    arabic: "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ",
    transliteration: "Allahumma inni astakhiruka bi'ilmik, wa astaqdiruka biqudratik, wa as'aluka min fadlikal-'azim, fa innaka taqdiru wa la aqdir, wa ta'lamu wa la a'lam, wa anta 'allamul-ghuyub",
    translation: "Ô Allah! Je Te consulte par Ta connaissance, je Te demande de m'accorder le pouvoir par Ta puissance et je Te demande de Ton immense grâce. Car Tu peux et je ne peux pas, Tu sais et je ne sais pas, et c'est Toi le Grand Connaisseur des choses cachées.",
    reference: "Bukhari",
    category: "Spécial"
  },
  {
    id: 10,
    name: "Pour les parents",
    arabic: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
    transliteration: "Rabbighfir li wa liwalidayya wa lil-mu'minina yawma yaqumul-hisab",
    translation: "Seigneur! Pardonne-moi, ainsi qu'à mes parents et aux croyants, le jour où se dressera le compte.",
    reference: "Coran 14:41",
    category: "Famille"
  },
  {
    id: 11,
    name: "Protection",
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration: "A'udhu bikalimatillahit-tammati min sharri ma khalaq",
    translation: "Je cherche refuge dans les paroles parfaites d'Allah contre le mal de ce qu'Il a créé.",
    reference: "Muslim",
    category: "Protection"
  },
  {
    id: 12,
    name: "Pardon",
    arabic: "أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
    transliteration: "Astaghfirullaha alladhi la ilaha illa huwal-Hayyul-Qayyum wa atubu ilayh",
    translation: "Je demande pardon à Allah, il n'y a de divinité que Lui, le Vivant, le Subsistant, et je me repens à Lui.",
    reference: "Abu Dawud, Tirmidhi",
    category: "Repentir"
  },
  {
    id: 13,
    name: "En entrant aux toilettes",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
    transliteration: "Allahumma inni a'udhu bika minal-khubthi wal-khaba'ith",
    translation: "Ô Allah! Je cherche refuge auprès de Toi contre les démons mâles et femelles.",
    reference: "Bukhari, Muslim",
    category: "Quotidien"
  },
  {
    id: 14,
    name: "En sortant des toilettes",
    arabic: "غُفْرَانَكَ",
    transliteration: "Ghufranaka",
    translation: "Je Te demande Ton pardon.",
    reference: "Abu Dawud, Tirmidhi",
    category: "Quotidien"
  },
  {
    id: 15,
    name: "Avant les ablutions",
    arabic: "بِسْمِ اللَّهِ",
    transliteration: "Bismillah",
    translation: "Au nom d'Allah.",
    reference: "Abu Dawud",
    category: "Quotidien"
  },
  {
    id: 16,
    name: "Après les ablutions",
    arabic: "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    transliteration: "Ash-hadu an la ilaha illallahu wahdahu la sharika lah, wa ash-hadu anna Muhammadan 'abduhu wa rasuluh",
    translation: "J'atteste qu'il n'y a de divinité qu'Allah, Seul, sans associé, et j'atteste que Muhammad est Son serviteur et Son messager.",
    reference: "Muslim",
    category: "Quotidien"
  },
  {
    id: 17,
    name: "En voyage",
    arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنْقَلِبُونَ",
    transliteration: "Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila rabbina lamunqalibun",
    translation: "Gloire à Celui qui a mis ceci à notre service, alors que nous n'étions pas capables de le dominer. Et c'est vers notre Seigneur que nous retournerons.",
    reference: "Coran 43:13-14",
    category: "Voyage"
  },
  {
    id: 18,
    name: "En entrant à la mosquée",
    arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    transliteration: "Allahumma-ftah li abwaba rahmatik",
    translation: "Ô Allah! Ouvre-moi les portes de Ta miséricorde.",
    reference: "Muslim",
    category: "Mosquée"
  },
  {
    id: 19,
    name: "En sortant de la mosquée",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
    transliteration: "Allahumma inni as'aluka min fadlik",
    translation: "Ô Allah! Je Te demande de Ta grâce.",
    reference: "Muslim",
    category: "Mosquée"
  },
  {
    id: 20,
    name: "En cas de détresse",
    arabic: "لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
    transliteration: "La ilaha illa anta subhanaka inni kuntu minaz-zalimin",
    translation: "Il n'y a de divinité que Toi! Gloire à Toi! J'étais parmi les injustes.",
    reference: "Coran 21:87",
    category: "Difficultés"
  },
  {
    id: 21,
    name: "Pour la guérison",
    arabic: "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ، اشْفِهِ وَأَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا",
    transliteration: "Allahumma rabban-nas, adh-hibil-ba's, ishfihi wa antash-shafi, la shifa'a illa shifa'uk, shifa'an la yughadiru saqama",
    translation: "Ô Allah, Seigneur des gens! Enlève le mal, guéris-le car Tu es le Guérisseur. Il n'y a de guérison que Ta guérison, une guérison qui ne laisse aucune maladie.",
    reference: "Bukhari, Muslim",
    category: "Santé"
  },
  {
    id: 22,
    name: "Sayyid al-Istighfar",
    arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    transliteration: "Allahumma anta rabbi la ilaha illa ant, khalaqtani wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika mastata't, a'udhu bika min sharri ma sana't, abu'u laka bini'matika 'alayy, wa abu'u laka bidhanbi faghfir li fa innahu la yaghfirudh-dhunuba illa ant",
    translation: "Ô Allah! Tu es mon Seigneur. Il n'y a de divinité que Toi. Tu m'as créé et je suis Ton serviteur. Je suis sur Ton pacte et Ta promesse autant que je le peux. Je cherche refuge auprès de Toi contre le mal de ce que j'ai fait. Je reconnais Tes bienfaits sur moi et je reconnais mes péchés. Pardonne-moi car nul ne pardonne les péchés sauf Toi.",
    reference: "Bukhari",
    category: "Repentir"
  },
];

const categories = ["Tous", "Quotidien", "Sommeil", "Nourriture", "Maison", "Spécial", "Famille", "Protection", "Repentir", "Voyage", "Mosquée", "Difficultés", "Santé"];

const DuasPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem("dua_favorites");
    return saved ? JSON.parse(saved) : [1, 2, 9];
  });
  const [selectedDua, setSelectedDua] = useState<Dua | null>(null);

  const filteredDuas = duas.filter((dua) => {
    const matchesSearch =
      dua.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dua.arabic.includes(searchQuery);
    const matchesCategory = selectedCategory === "Tous" || dua.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => {
      const newFavorites = prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id];
      localStorage.setItem("dua_favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return (
    <AppLayout>
      <div className="px-4 py-6">
        {/* Header */}
        <header className="mb-6 flex items-center gap-4">
          <button onClick={() => navigate("/more")} className="p-2 hover:bg-muted rounded-lg">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Duas & Invocations</h1>
            <p className="text-muted-foreground text-sm">Invocations pour chaque moment</p>
          </div>
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
              onClick={() => setSelectedDua(dua)}
              className="bg-card border border-border rounded-xl p-4 animate-fade-in cursor-pointer hover:border-primary/30 transition-all"
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
                  <p className="text-primary font-arabic text-lg mt-1 line-clamp-1">{dua.arabic}</p>
                </div>
                <button
                  onClick={(e) => toggleFavorite(dua.id, e)}
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dua Detail Dialog */}
      <Dialog open={!!selectedDua} onOpenChange={() => setSelectedDua(null)}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-lg">{selectedDua?.name}</DialogTitle>
              <button
                onClick={(e) => selectedDua && toggleFavorite(selectedDua.id, e)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  selectedDua && favorites.includes(selectedDua.id)
                    ? "bg-destructive/20 text-destructive"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${selectedDua && favorites.includes(selectedDua.id) ? "fill-current" : ""}`}
                />
              </button>
            </div>
          </DialogHeader>

          {selectedDua && (
            <div className="space-y-4">
              <div className="bg-primary/5 rounded-xl p-4">
                <p className="text-xl font-arabic text-primary text-right leading-loose">
                  {selectedDua.arabic}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Translitération</h4>
                <p className="text-foreground italic">{selectedDua.transliteration}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Traduction</h4>
                <p className="text-foreground">{selectedDua.translation}</p>
              </div>

              <div className="pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Source: {selectedDua.reference}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AppLayout>
  );
};

export default DuasPage;
