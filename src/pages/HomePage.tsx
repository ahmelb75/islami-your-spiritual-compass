import { useMemo } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { MapPin, Sun, Sunrise, Moon, Sunset } from "lucide-react";

const prayers = [
  { name: "Fajr", time: "05:42", icon: Sunrise, passed: true },
  { name: "Dhuhr", time: "12:35", icon: Sun, passed: true },
  { name: "Asr", time: "15:18", icon: Sun, passed: false, next: true },
  { name: "Maghrib", time: "17:52", icon: Sunset, passed: false },
  { name: "Isha", time: "19:22", icon: Moon, passed: false },
];

const HomePage = () => {
  const currentTime = useMemo(() => {
    return new Date().toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }, []);

  const nextPrayer = prayers.find((p) => p.next);

  return (
    <AppLayout>
      <div className="px-4 py-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Salam 👋</h1>
            <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
              <MapPin className="w-4 h-4" />
              <span>Paris, France</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-primary">{currentTime}</p>
            <p className="text-sm text-muted-foreground">27 Jumada II 1446</p>
          </div>
        </header>

        {/* Next Prayer Card */}
        {nextPrayer && (
          <div className="bg-gradient-to-br from-primary/20 to-islamic-emerald/20 rounded-2xl p-6 mb-8 border border-primary/20 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Prochaine prière</p>
                <h2 className="text-3xl font-bold text-foreground">{nextPrayer.name}</h2>
                <p className="text-primary text-xl font-semibold mt-1">{nextPrayer.time}</p>
              </div>
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                <nextPrayer.icon className="w-8 h-8 text-primary" />
              </div>
            </div>
            <div className="mt-4 bg-background/50 rounded-xl p-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Temps restant</span>
                <span className="text-foreground font-semibold">2h 43min</span>
              </div>
            </div>
          </div>
        )}

        {/* Prayers List */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground mb-4">Horaires du jour</h3>
          {prayers.map((prayer, index) => (
            <div
              key={prayer.name}
              className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                prayer.next
                  ? "bg-primary/10 border border-primary/30"
                  : prayer.passed
                  ? "bg-muted/50 opacity-60"
                  : "bg-card border border-border"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    prayer.next
                      ? "bg-primary/20"
                      : prayer.passed
                      ? "bg-muted"
                      : "bg-secondary"
                  }`}
                >
                  <prayer.icon
                    className={`w-5 h-5 ${
                      prayer.next
                        ? "text-primary"
                        : prayer.passed
                        ? "text-muted-foreground"
                        : "text-foreground"
                    }`}
                  />
                </div>
                <div>
                  <p
                    className={`font-medium ${
                      prayer.passed ? "text-muted-foreground" : "text-foreground"
                    }`}
                  >
                    {prayer.name}
                  </p>
                  {prayer.passed && (
                    <p className="text-xs text-muted-foreground">Terminée</p>
                  )}
                </div>
              </div>
              <p
                className={`text-lg font-semibold ${
                  prayer.next
                    ? "text-primary"
                    : prayer.passed
                    ? "text-muted-foreground"
                    : "text-foreground"
                }`}
              >
                {prayer.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default HomePage;
