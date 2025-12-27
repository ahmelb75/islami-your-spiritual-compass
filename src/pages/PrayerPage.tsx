import { useState, useEffect } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { MapPin, ChevronLeft, ChevronRight, Sun, Sunrise, Moon, Sunset, Loader2, MapPinOff } from "lucide-react";
import { useGeolocation } from "@/hooks/useGeolocation";
import { usePrayerTimes } from "@/hooks/usePrayerTimes";

const prayers = [
  { name: "Fajr", icon: Sunrise },
  { name: "Dhuhr", icon: Sun },
  { name: "Asr", icon: Sun },
  { name: "Maghrib", icon: Sunset },
  { name: "Isha", icon: Moon },
];

const generateDays = () => {
  const days = [];
  const today = new Date();
  for (let i = -3; i <= 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    days.push({
      day: date.toLocaleDateString("fr-FR", { weekday: "short" }),
      date: date.getDate(),
      fullDate: date,
      isToday: i === 0,
    });
  }
  return days;
};

const PrayerPage = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(3);
  const days = generateDays();
  
  const { location, loading: locationLoading, error: locationError, permissionDenied, requestLocation } = useGeolocation();
  
  const selectedDate = days[selectedDayIndex]?.fullDate || new Date();
  const { times, loading: timesLoading, error: timesError } = usePrayerTimes(
    location?.latitude || null,
    location?.longitude || null,
    selectedDate
  );

  // Request location on first load if not already saved
  useEffect(() => {
    if (!location && !locationLoading && !permissionDenied) {
      requestLocation();
    }
  }, []);

  const cityDisplay = location 
    ? `${location.city}${location.country ? `, ${location.country}` : ""}`
    : "Localisation...";

  const isLoading = locationLoading || timesLoading;

  return (
    <AppLayout>
      <div className="px-4 py-6">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">Horaires de Prière</h1>
          <button 
            onClick={requestLocation}
            className="flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-xl transition-all active:scale-95"
          >
            {locationLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : permissionDenied ? (
              <MapPinOff className="w-4 h-4" />
            ) : (
              <MapPin className="w-4 h-4" />
            )}
            <span className="text-sm font-medium">
              {locationLoading ? "Recherche..." : cityDisplay}
            </span>
          </button>
          {locationError && !permissionDenied && (
            <p className="text-xs text-destructive mt-2">{locationError}</p>
          )}
          {permissionDenied && (
            <p className="text-xs text-muted-foreground mt-2">
              Appuyez pour autoriser la localisation
            </p>
          )}
        </header>

        {/* Day Selector */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setSelectedDayIndex(Math.max(0, selectedDayIndex - 1))}
              className="p-2 rounded-lg bg-secondary text-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <p className="text-foreground font-medium">
              {days[selectedDayIndex]?.isToday
                ? "Aujourd'hui"
                : days[selectedDayIndex]?.fullDate.toLocaleDateString("fr-FR", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}
            </p>
            <button
              onClick={() => setSelectedDayIndex(Math.min(days.length - 1, selectedDayIndex + 1))}
              className="p-2 rounded-lg bg-secondary text-foreground"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Horizontal Day List */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => setSelectedDayIndex(index)}
                className={`flex-shrink-0 flex flex-col items-center justify-center w-14 h-16 rounded-xl transition-all duration-300 ${
                  index === selectedDayIndex
                    ? "bg-primary text-primary-foreground"
                    : day.isToday
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "bg-card border border-border text-foreground"
                }`}
              >
                <span className="text-xs uppercase">{day.day}</span>
                <span className="text-lg font-bold">{day.date}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Prayer Times */}
        <div className="space-y-3">
          {!location && !locationLoading && (
            <div className="text-center py-8">
              <MapPinOff className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground mb-4">
                Autorisez la localisation pour afficher les horaires de prière de votre ville
              </p>
              <button
                onClick={requestLocation}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium"
              >
                Autoriser la localisation
              </button>
            </div>
          )}
          
          {isLoading && location && (
            <div className="text-center py-8">
              <Loader2 className="w-8 h-8 mx-auto text-primary animate-spin mb-4" />
              <p className="text-muted-foreground">Chargement des horaires...</p>
            </div>
          )}

          {timesError && (
            <div className="text-center py-8">
              <p className="text-destructive">{timesError}</p>
            </div>
          )}

          {times && !isLoading && prayers.map((prayer, index) => (
            <div
              key={prayer.name}
              className="flex items-center justify-between p-4 bg-card rounded-xl border border-border animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <prayer.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{prayer.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {prayer.name === "Fajr" && "Prière de l'aube"}
                    {prayer.name === "Dhuhr" && "Prière du midi"}
                    {prayer.name === "Asr" && "Prière de l'après-midi"}
                    {prayer.name === "Maghrib" && "Prière du coucher"}
                    {prayer.name === "Isha" && "Prière de la nuit"}
                  </p>
                </div>
              </div>
              <p className="text-xl font-bold text-primary">{times[prayer.name as keyof typeof times]}</p>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default PrayerPage;
