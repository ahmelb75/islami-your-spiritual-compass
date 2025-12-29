import AppLayout from "@/components/layout/AppLayout";
import { ArrowLeft, Book, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TafsirSurah {
  number: number;
  name: string;
  arabicName: string;
  verses: number;
  revelation: string;
  theme: string;
  summary: string;
  keyPoints: string[];
}

const tafsirSurahs: TafsirSurah[] = [
  {
    number: 1,
    name: "Al-Fatiha",
    arabicName: "الفاتحة",
    verses: 7,
    revelation: "Mecquoise",
    theme: "L'essence de l'Islam",
    summary: "Al-Fatiha (L'Ouverture) est la première sourate du Coran et la plus importante. Elle résume tous les enseignements du Coran. Elle commence par la louange d'Allah, reconnaît Sa souveraineté sur le Jour du Jugement, et demande Sa guidance sur le droit chemin.",
    keyPoints: [
      "La Basmalah (Bismillah) ouvre la sourate",
      "Allah est loué en tant que Seigneur de tous les mondes",
      "Le Jour du Jugement est mentionné",
      "La demande de guidance est centrale",
      "Le chemin des bénis vs. celui des égarés"
    ]
  },
  {
    number: 2,
    name: "Al-Baqara",
    arabicName: "البقرة",
    verses: 286,
    revelation: "Médinoise",
    theme: "Législation et guidance",
    summary: "Al-Baqara (La Vache) est la plus longue sourate du Coran. Elle contient de nombreuses règles juridiques concernant le mariage, le divorce, le commerce, et le jeûne. Elle tire son nom de l'histoire de la vache que les Israélites devaient sacrifier.",
    keyPoints: [
      "Classification des gens: croyants, mécréants, hypocrites",
      "L'histoire d'Adam et Satan",
      "L'histoire des Bani Israël et la vache",
      "Le changement de Qibla vers la Kaaba",
      "Ayat al-Kursi (verset du Trône)",
      "Les règles du jeûne et du pèlerinage"
    ]
  },
  {
    number: 3,
    name: "Al-Imran",
    arabicName: "آل عمران",
    verses: 200,
    revelation: "Médinoise",
    theme: "La famille de 'Imran",
    summary: "Cette sourate porte le nom de la famille de 'Imran (père de Maryam). Elle traite de la naissance miraculeuse de 'Isa (Jésus), affirme le monothéisme, et répond aux chrétiens de Najran. Elle contient également des leçons de la bataille d'Uhud.",
    keyPoints: [
      "La naissance de Maryam et de 'Isa",
      "La nature de 'Isa en tant que prophète",
      "L'appel aux Gens du Livre",
      "Les leçons de la bataille d'Uhud",
      "L'importance de la patience et de la persévérance"
    ]
  },
  {
    number: 4,
    name: "An-Nisa",
    arabicName: "النساء",
    verses: 176,
    revelation: "Médinoise",
    theme: "Les droits des femmes",
    summary: "An-Nisa (Les Femmes) traite principalement des droits des femmes, de l'héritage, du mariage et des relations familiales. Elle établit des règles pour protéger les orphelins et les femmes, et traite de questions juridiques importantes.",
    keyPoints: [
      "Les droits des orphelins et des femmes",
      "Les règles de l'héritage",
      "Les conditions du mariage",
      "L'interdiction d'épouser certaines catégories de femmes",
      "Les droits et devoirs conjugaux"
    ]
  },
  {
    number: 36,
    name: "Ya-Sin",
    arabicName: "يس",
    verses: 83,
    revelation: "Mecquoise",
    theme: "Le cœur du Coran",
    summary: "Ya-Sin est appelée 'le cœur du Coran' par le Prophète ﷺ. Elle traite des trois fondements de la foi: l'Unicité d'Allah, la prophétie, et la résurrection. Elle contient l'histoire des messagers envoyés à une ville.",
    keyPoints: [
      "La mission du Prophète ﷺ",
      "L'histoire des messagers rejetés",
      "Les signes d'Allah dans la création",
      "La résurrection et le Jour du Jugement",
      "Le pouvoir créateur d'Allah: 'Kun fayakun'"
    ]
  },
  {
    number: 55,
    name: "Ar-Rahman",
    arabicName: "الرحمن",
    verses: 78,
    revelation: "Médinoise",
    theme: "Les bienfaits d'Allah",
    summary: "Ar-Rahman (Le Tout Miséricordieux) énumère les innombrables bienfaits d'Allah envers Ses créatures. Le refrain 'Lequel des bienfaits de votre Seigneur nierez-vous?' est répété 31 fois, s'adressant aux hommes et aux djinns.",
    keyPoints: [
      "L'enseignement du Coran comme bienfait suprême",
      "La création de l'homme et des djinns",
      "Les bienfaits terrestres: fruits, végétation, océans",
      "La description du Paradis",
      "Tout périt sauf la Face d'Allah"
    ]
  },
  {
    number: 56,
    name: "Al-Waqi'a",
    arabicName: "الواقعة",
    verses: 96,
    revelation: "Mecquoise",
    theme: "L'événement inévitable",
    summary: "Al-Waqi'a (L'Événement) décrit le Jour du Jugement et divise l'humanité en trois groupes: les rapprochés (Sabiqun), les gens de la droite, et les gens de la gauche. Elle décrit les récompenses et châtiments de chaque groupe.",
    keyPoints: [
      "Les trois catégories de personnes le Jour du Jugement",
      "La description détaillée du Paradis",
      "La description de l'Enfer",
      "Les preuves de la résurrection dans la création",
      "Le serment par les positions des étoiles"
    ]
  },
  {
    number: 67,
    name: "Al-Mulk",
    arabicName: "الملك",
    verses: 30,
    revelation: "Mecquoise",
    theme: "La souveraineté d'Allah",
    summary: "Al-Mulk (La Royauté) affirme la souveraineté absolue d'Allah sur toute la création. Le Prophète ﷺ a dit que cette sourate intercède pour son lecteur jusqu'à ce qu'il soit pardonné. Elle invite à la réflexion sur la création.",
    keyPoints: [
      "Allah détient la royauté sur toute chose",
      "La création des sept cieux",
      "Le but de la vie: éprouver qui agit le mieux",
      "L'invitation à observer la création",
      "L'avertissement aux mécréants"
    ]
  },
  {
    number: 112,
    name: "Al-Ikhlas",
    arabicName: "الإخلاص",
    verses: 4,
    revelation: "Mecquoise",
    theme: "Le monothéisme pur",
    summary: "Al-Ikhlas (La Pureté) équivaut au tiers du Coran selon le Prophète ﷺ. Elle définit l'essence du monothéisme islamique (Tawhid). Elle nie toute similitude entre Allah et Ses créatures et rejette toute idée de filiation divine.",
    keyPoints: [
      "Allah est Un (Ahad)",
      "Allah est le Besoin de tous (As-Samad)",
      "Allah n'a pas engendré et n'a pas été engendré",
      "Nul n'est égal à Allah",
      "Équivaut au tiers du Coran"
    ]
  },
  {
    number: 113,
    name: "Al-Falaq",
    arabicName: "الفلق",
    verses: 5,
    revelation: "Mecquoise",
    theme: "Protection contre le mal",
    summary: "Al-Falaq (L'Aube naissante) est une des deux sourates de protection (Al-Mu'awwidhatayn). Elle demande la protection d'Allah contre quatre types de mal: le mal de ce qu'Il a créé, l'obscurité, la sorcellerie, et l'envie.",
    keyPoints: [
      "Chercher refuge auprès du Seigneur de l'aube",
      "Protection contre le mal de la création",
      "Protection contre l'obscurité de la nuit",
      "Protection contre la sorcellerie",
      "Protection contre l'envieux"
    ]
  },
  {
    number: 114,
    name: "An-Nas",
    arabicName: "الناس",
    verses: 6,
    revelation: "Mecquoise",
    theme: "Protection contre le chuchoteur",
    summary: "An-Nas (Les Hommes) est la dernière sourate du Coran et la seconde des sourates de protection. Elle demande la protection d'Allah contre les chuchotements de Satan qui viennent des djinns et des hommes.",
    keyPoints: [
      "Allah est le Seigneur des hommes",
      "Allah est le Roi des hommes",
      "Allah est le Dieu des hommes",
      "Protection contre le chuchoteur furtif",
      "Le mal peut venir des djinns et des hommes"
    ]
  },
];

const TafsirPage = () => {
  const navigate = useNavigate();
  const [selectedSurah, setSelectedSurah] = useState<TafsirSurah | null>(null);

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
              onClick={() => setSelectedSurah(surah)}
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
                <p className="text-sm text-muted-foreground">{surah.verses} versets • {surah.revelation}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-6">
          Plus de sourates à venir...
        </p>
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
