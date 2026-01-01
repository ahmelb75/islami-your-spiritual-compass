import AppLayout from "@/components/layout/AppLayout";
import { ArrowLeft, Calendar, Star, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const islamicMonths = [
  "Muharram", "Safar", "Rabi' al-Awwal", "Rabi' al-Thani",
  "Jumada al-Awwal", "Jumada al-Thani", "Rajab", "Sha'ban",
  "Ramadan", "Shawwal", "Dhul Qi'dah", "Dhul Hijjah"
];

// Islamic events with estimated Gregorian dates for 2025-2026
// Dates may vary by 1-2 days depending on moon sighting
const islamicEvents = [
  { 
    name: "Nouvel An Islamique", 
    description: "1er Muharram - Début de l'année hégirienne 1447",
    gregorianDate: "27 ou 28 juin 2025"
  },
  { 
    name: "Achoura", 
    description: "10 Muharram - Jour de jeûne recommandé (9 et 10 Muharram)",
    gregorianDate: "5 ou 6 juillet 2025"
  },
  { 
    name: "Mawlid an-Nabi", 
    description: "12 Rabi' al-Awwal - Naissance du Prophète Muhammad ﷺ",
    gregorianDate: "4 ou 5 septembre 2025"
  },
  { 
    name: "Isra et Mi'raj", 
    description: "27 Rajab - Voyage nocturne et ascension céleste",
    gregorianDate: "26 ou 27 janvier 2026"
  },
  { 
    name: "Laylat al-Bara'ah", 
    description: "15 Sha'ban - Nuit du pardon et de la miséricorde",
    gregorianDate: "12 ou 13 février 2026"
  },
  { 
    name: "Début du Ramadan", 
    description: "1 Ramadan - Premier jour du mois de jeûne béni",
    gregorianDate: "27 ou 28 février 2026"
  },
  { 
    name: "Laylat al-Qadr", 
    description: "27 Ramadan - Nuit du Destin (recherchée les nuits impaires des 10 derniers jours)",
    gregorianDate: "24 ou 25 mars 2026"
  },
  { 
    name: "Aïd al-Fitr", 
    description: "1 Shawwal - Fête de la rupture du jeûne",
    gregorianDate: "28 ou 29 mars 2026"
  },
  { 
    name: "Jour d'Arafat", 
    description: "9 Dhul Hijjah - Jour de jeûne recommandé, veille de l'Aïd",
    gregorianDate: "5 ou 6 juin 2026"
  },
  { 
    name: "Aïd al-Adha", 
    description: "10 Dhul Hijjah - Fête du sacrifice",
    gregorianDate: "6 ou 7 juin 2026"
  },
  { 
    name: "Jours de Tachrik", 
    description: "11-13 Dhul Hijjah - Jours de fête où le jeûne est interdit",
    gregorianDate: "7 au 9 juin 2026"
  },
];

interface HijriDate {
  day: number;
  month: number;
  year: number;
  monthName: string;
}

const IslamicCalendarPage = () => {
  const navigate = useNavigate();
  const [hijriDate, setHijriDate] = useState<HijriDate | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHijriDate = async () => {
      try {
        const today = new Date();
        const day = today.getDate().toString().padStart(2, '0');
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const year = today.getFullYear();
        
        const response = await fetch(`https://api.aladhan.com/v1/gToH/${day}-${month}-${year}`);
        const data = await response.json();
        
        if (data.code === 200 && data.data?.hijri) {
          setHijriDate({
            day: parseInt(data.data.hijri.day),
            month: parseInt(data.data.hijri.month.number),
            year: parseInt(data.data.hijri.year),
            monthName: data.data.hijri.month.en
          });
        }
      } catch (error) {
        console.error("Error fetching Hijri date:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHijriDate();
  }, []);

  return (
    <AppLayout>
      <div className="px-4 py-6">
        <header className="mb-6 flex items-center gap-4">
          <button onClick={() => navigate("/more")} className="p-2 hover:bg-muted rounded-lg">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Calendrier Islamique</h1>
            <p className="text-muted-foreground text-sm">Hijri & événements</p>
          </div>
        </header>

        <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium">Date Hijri</span>
          </div>
          {loading ? (
            <div className="h-16 flex items-center justify-center">
              <Loader2 className="w-6 h-6 text-primary animate-spin" />
            </div>
          ) : hijriDate ? (
            <div className="text-center">
              <p className="text-4xl font-bold text-foreground mb-1">
                {hijriDate.day} {hijriDate.monthName}
              </p>
              <p className="text-xl text-primary">{hijriDate.year} H</p>
            </div>
          ) : (
            <p className="text-muted-foreground text-center">Impossible de charger la date</p>
          )}
        </div>

        <h2 className="text-lg font-semibold text-foreground mb-3">Mois Islamiques</h2>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {islamicMonths.map((month, index) => (
            <div
              key={month}
              className={`p-3 rounded-xl text-center text-sm ${
                hijriDate?.month === index + 1
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground"
              }`}
            >
              <span className="font-medium">{index + 1}</span>
              <p className="text-xs mt-1 truncate">{month}</p>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-semibold text-foreground mb-3">Événements Importants 2025-2026</h2>
        <p className="text-xs text-muted-foreground mb-4">
          * Les dates peuvent varier de 1-2 jours selon l'observation de la lune
        </p>
        <div className="space-y-3">
          {islamicEvents.map((event, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-4 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground">{event.name}</h3>
                <p className="text-sm text-muted-foreground">{event.description}</p>
                <p className="text-xs text-primary mt-1 font-medium">{event.gregorianDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default IslamicCalendarPage;
