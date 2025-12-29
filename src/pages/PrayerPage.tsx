import { useState, useEffect } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { MapPin, ChevronLeft, ChevronRight, Sun, Sunrise, Moon, Sunset, Loader2, MapPinOff, ChevronDown } from "lucide-react";
import { useGeolocation } from "@/hooks/useGeolocation";
import { usePrayerTimes } from "@/hooks/usePrayerTimes";
import CitySelector from "@/components/CitySelector";

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
  const [showCitySelector, setShowCitySelector] = useState(false);
  const [manualLocation, setManualLocation] = useState<{
    city: string;
    country: string;
    latitude: number;
    longitude: number;
  } | null>(null);
  const days = generateDays();
  
  const { location: geoLocation, loading: locationLoading, error: locationError, permissionDenied, requestLocation } = useGeolocation();
  
  // Use manual location if set, otherwise use geolocation
  const location = manualLocation || geoLocation;
  
  const selectedDate = days[selectedDayIndex]?.fullDate || new Date();
  const { times, loading: timesLoading, error: timesError } = usePrayerTimes(
    location?.latitude || null,
    location?.longitude || null,
    selectedDate
  );

  // Load manual location from localStorage
  useEffect(() => {
    const savedManualLocation = localStorage.getItem("manual_location");
    if (savedManualLocation) {
      try {
        setManualLocation(JSON.parse(savedManualLocation));
      } catch (e) {
        console.error("Error loading manual location:", e);
      }
    }
  }, []);

  // Request location on first load if not already saved and no manual location
  useEffect(() => {
    if (!location && !locationLoading && !permissionDenied && !manualLocation) {
      requestLocation();
    }
  }, []);

  const handleSelectCity = (city: { name: string; country: string; latitude: number; longitude: number }) => {
    const newLocation = {
      city: city.name,
      country: city.country,
      latitude: city.latitude,
      longitude: city.longitude,
    };
    setManualLocation(newLocation);
    localStorage.setItem("manual_location", JSON.stringify(newLocation));
  };

  const handleRequestLocation = () => {
    // Clear manual location when requesting geolocation
    setManualLocation(null);
    localStorage.removeItem("manual_location");
    requestLocation();
  };

  const cityDisplay = location 
    ? `${location.city}${location.country ? `, ${location.country}` : ""}`
    : "Sélectionner une ville";

  const isLoading = locationLoading || timesLoading;

  return (
    <AppLayout>
      <div className="px-4 py-6">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">Horaires de Prière</h1>
          <div className="flex gap-2">
            <button 
              onClick={() => setShowCitySelector(true)}
              className="flex-1 flex items-center justify-between gap-2 text-primary bg-primary/10 px-4 py-2 rounded-xl transition-all active:scale-95"
            >
              <div className="flex items-center gap-2">
                {locationLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : !location ? (
                  <MapPinOff className="w-4 h-4" />
                ) : (
                  <MapPin className="w-4 h-4" />
                )}
                <span className="text-sm font-medium">
                  {locationLoading ? "Recherche..." : cityDisplay}
                </span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </button>
            {!manualLocation && (
              <button
                onClick={handleRequestLocation}
                className="p-2 bg-secondary rounded-xl text-foreground hover:bg-secondary/80 transition-colors"
                title="Utiliser ma position"
              >
                <MapPin className="w-5 h-5" />
              </button>
            )}
          </div>
          {locationError && !permissionDenied && !manualLocation && (
            <p className="text-xs text-destructive mt-2">{locationError}</p>
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
                Sélectionnez une ville ou autorisez la localisation
              </p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setShowCitySelector(true)}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium"
                >
                  Choisir une ville
                </button>
                <button
                  onClick={handleRequestLocation}
                  className="bg-secondary text-foreground px-6 py-3 rounded-xl font-medium"
                >
                  Utiliser ma position
                </button>
              </div>
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

      <CitySelector
        open={showCitySelector}
        onClose={() => setShowCitySelector(false)}
        onSelectCity={handleSelectCity}
      />
    </AppLayout>
  );
};

export default PrayerPage;
