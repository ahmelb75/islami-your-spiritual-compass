import AppLayout from "@/components/layout/AppLayout";
import { ArrowLeft, Calendar, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const islamicMonths = [
  "Muharram", "Safar", "Rabi' al-Awwal", "Rabi' al-Thani",
  "Jumada al-Awwal", "Jumada al-Thani", "Rajab", "Sha'ban",
  "Ramadan", "Shawwal", "Dhul Qi'dah", "Dhul Hijjah"
];

const islamicEvents = [
  { name: "Nouvel An Islamique", month: 1, day: 1, description: "1er Muharram" },
  { name: "Achoura", month: 1, day: 10, description: "Jour de jeûne recommandé" },
  { name: "Mawlid an-Nabi", month: 3, day: 12, description: "Naissance du Prophète ﷺ" },
  { name: "Isra et Mi'raj", month: 7, day: 27, description: "Voyage nocturne" },
  { name: "Début du Ramadan", month: 9, day: 1, description: "Mois de jeûne" },
  { name: "Laylat al-Qadr", month: 9, day: 27, description: "Nuit du Destin" },
  { name: "Aïd al-Fitr", month: 10, day: 1, description: "Fête de la rupture du jeûne" },
  { name: "Jour d'Arafat", month: 12, day: 9, description: "Jour de jeûne recommandé" },
  { name: "Aïd al-Adha", month: 12, day: 10, description: "Fête du sacrifice" },
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
        const dateStr = `${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getFullYear()}`;
        const response = await fetch(`https://api.aladhan.com/v1/gpiToH/${dateStr}`);
        const data = await response.json();
        
        if (data.data) {
          setHijriDate({
            day: data.data.hijri.day,
            month: parseInt(data.data.hijri.month.number),
            year: data.data.hijri.year,
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

        {/* Current Hijri Date */}
        <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium">Date Hijri</span>
          </div>
          {loading ? (
            <div className="h-16 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
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

        {/* Islamic Months */}
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

        {/* Upcoming Events */}
        <h2 className="text-lg font-semibold text-foreground mb-3">Événements Importants</h2>
        <div className="space-y-3">
          {islamicEvents.map((event, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-4 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{event.name}</h3>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
              <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                {event.day}/{event.month}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default IslamicCalendarPage;
