import AppLayout from "@/components/layout/AppLayout";
import { ArrowLeft, Moon, Star, Sparkles, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const specialNights = [
  {
    name: "Laylat al-Qadr",
    arabicName: "لَيْلَةُ الْقَدْرِ",
    description: "La Nuit du Destin",
    details: "Cette nuit vaut mieux que mille mois. Elle se trouve dans les dix dernières nuits du Ramadan, probablement les nuits impaires (21, 23, 25, 27, 29).",
    significance: "Les anges et l'Esprit (Jibril) descendent avec la permission de leur Seigneur pour tout ordre.",
    prayers: ["Prière de la nuit (Qiyam)", "Lecture du Coran", "Dhikr et invocations"],
    when: "27 Ramadan (approximatif)",
    icon: Sparkles,
  },
  {
    name: "Laylat al-Isra wal Mi'raj",
    arabicName: "لَيْلَةُ الإِسْرَاءِ وَالْمِعْرَاجِ",
    description: "La Nuit du Voyage et de l'Ascension",
    details: "Le 27 Rajab, le Prophète ﷺ a été transporté de la Mecque à Jérusalem, puis est monté aux cieux.",
    significance: "C'est lors de ce voyage que les cinq prières quotidiennes ont été prescrites.",
    prayers: ["Prières surérogatoires", "Méditation sur le voyage du Prophète ﷺ"],
    when: "27 Rajab",
    icon: Moon,
  },
  {
    name: "Laylat al-Bara'ah",
    arabicName: "لَيْلَةُ الْبَرَاءَةِ",
    description: "La Nuit du Pardon",
    details: "La nuit du 15 Sha'ban, connue pour être une nuit de pardon et de bénédictions.",
    significance: "Allah pardonne à tous sauf à ceux qui associent à Lui ou qui ont de la rancune dans leur cœur.",
    prayers: ["Demander pardon", "Prières de la nuit", "Jeûne le lendemain (recommandé)"],
    when: "15 Sha'ban",
    icon: Star,
  },
  {
    name: "Laylat al-Jumu'ah",
    arabicName: "لَيْلَةُ الْجُمُعَةِ",
    description: "La Nuit du Vendredi",
    details: "Chaque semaine, la nuit précédant le vendredi est une nuit bénie.",
    significance: "Le Prophète ﷺ a dit: 'Le meilleur jour sur lequel le soleil s'est levé est le vendredi.'",
    prayers: ["Lecture de Sourate Al-Kahf", "Prières sur le Prophète ﷺ", "Invocations"],
    when: "Chaque jeudi soir",
    icon: Moon,
  },
  {
    name: "Les dix premières nuits de Dhul Hijjah",
    arabicName: "عَشْرُ ذِي الْحِجَّةِ",
    description: "Les meilleures nuits de l'année",
    details: "Les dix premières nuits du mois de Dhul Hijjah, culminant avec le jour d'Arafat.",
    significance: "Allah a juré par ces nuits dans le Coran: 'Par l'aube, et par les dix nuits.'",
    prayers: ["Jeûne (surtout le jour d'Arafat)", "Takbir", "Bonnes œuvres"],
    when: "1-10 Dhul Hijjah",
    icon: Sparkles,
  },
  {
    name: "Nuit d'Arafat",
    arabicName: "لَيْلَةُ عَرَفَة",
    description: "La veille du jour d'Arafat",
    details: "La nuit précédant le jour d'Arafat est une nuit de grande importance.",
    significance: "Le jeûne du jour d'Arafat expie les péchés de deux années.",
    prayers: ["Invocations", "Dhikr", "Préparation pour le jeûne"],
    when: "9 Dhul Hijjah",
    icon: Star,
  },
  {
    name: "Nuit du 1er Muharram",
    arabicName: "لَيْلَةُ رَأْسِ السَّنَةِ",
    description: "La Nuit du Nouvel An Islamique",
    details: "La nuit marquant le début de la nouvelle année hégirienne.",
    significance: "Un moment de réflexion sur l'année passée et de renouvellement des intentions.",
    prayers: ["Réflexion et bilan", "Invocations", "Bonnes résolutions"],
    when: "1 Muharram",
    icon: Calendar,
  },
  {
    name: "Nuit de l'Achoura",
    arabicName: "لَيْلَةُ عَاشُورَاء",
    description: "La veille du 10 Muharram",
    details: "La nuit précédant le jour d'Achoura, jour où Moussa et son peuple furent sauvés.",
    significance: "Le jeûne des 9 et 10 Muharram est recommandé.",
    prayers: ["Préparation pour le jeûne", "Invocations", "Dhikr"],
    when: "10 Muharram",
    icon: Moon,
  },
  {
    name: "Les dernières nuits impaires du Ramadan",
    arabicName: "اللَّيَالِي الوِتْرِيَّة",
    description: "Les nuits 21, 23, 25, 27, 29 du Ramadan",
    details: "Les nuits impaires des dix derniers jours du Ramadan, parmi lesquelles se trouve Laylat al-Qadr.",
    significance: "Le Prophète ﷺ intensifiait son adoration durant ces nuits.",
    prayers: ["I'tikaf (retraite spirituelle)", "Prière de nuit prolongée", "Lecture du Coran"],
    when: "21, 23, 25, 27, 29 Ramadan",
    icon: Sparkles,
  },
];

const SpecialNightsPage = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="px-4 py-6">
        <header className="mb-6 flex items-center gap-4">
          <button onClick={() => navigate("/more")} className="p-2 hover:bg-muted rounded-lg">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Nuits Spéciales</h1>
            <p className="text-muted-foreground text-sm">Les nuits bénies de l'Islam</p>
          </div>
        </header>

        <div className="space-y-4">
          {specialNights.map((night, index) => (
            <div key={index} className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-primary/10 to-transparent">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <night.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{night.name}</h3>
                    <p className="text-xl font-arabic text-primary">{night.arabicName}</p>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {night.when}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{night.description}</p>
              </div>

              <div className="p-4 space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-1">À propos</h4>
                  <p className="text-muted-foreground text-sm">{night.details}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-1">Signification</h4>
                  <p className="text-muted-foreground text-sm">{night.significance}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Pratiques recommandées</h4>
                  <div className="flex flex-wrap gap-2">
                    {night.prayers.map((prayer, pIndex) => (
                      <span key={pIndex} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {prayer}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default SpecialNightsPage;
