import AppLayout from "@/components/layout/AppLayout";
import { ArrowLeft, Compass, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGeolocation } from "@/hooks/useGeolocation";

const QiblaPage = () => {
  const navigate = useNavigate();
  const { location, loading, error, requestLocation } = useGeolocation();
  const [qiblaDirection, setQiblaDirection] = useState<number | null>(null);
  const [deviceHeading, setDeviceHeading] = useState<number>(0);

  // Kaaba coordinates
  const KAABA_LAT = 21.4225;
  const KAABA_LNG = 39.8262;

  useEffect(() => {
    if (location) {
      // Calculate Qibla direction
      const lat1 = location.latitude * (Math.PI / 180);
      const lat2 = KAABA_LAT * (Math.PI / 180);
      const diffLng = (KAABA_LNG - location.longitude) * (Math.PI / 180);

      const x = Math.cos(lat2) * Math.sin(diffLng);
      const y = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(diffLng);

      let qibla = Math.atan2(x, y) * (180 / Math.PI);
      qibla = (qibla + 360) % 360;
      setQiblaDirection(qibla);
    }
  }, [location]);

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.alpha !== null) {
        setDeviceHeading(event.alpha);
      }
    };

    if (typeof DeviceOrientationEvent !== 'undefined') {
      window.addEventListener('deviceorientation', handleOrientation);
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  const compassRotation = qiblaDirection !== null ? qiblaDirection - deviceHeading : 0;

  return (
    <AppLayout>
      <div className="px-4 py-6">
        <header className="mb-6 flex items-center gap-4">
          <button onClick={() => navigate("/more")} className="p-2 hover:bg-muted rounded-lg">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Qibla</h1>
            <p className="text-muted-foreground text-sm">Direction de la Mecque</p>
          </div>
        </header>

        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          {loading ? (
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-muted-foreground">Recherche de votre position...</p>
            </div>
          ) : error || !location ? (
            <div className="text-center">
              <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-foreground font-medium mb-2">Localisation requise</p>
              <p className="text-muted-foreground text-sm mb-4">
                Activez la localisation pour trouver la direction de la Qibla
              </p>
              <button
                onClick={requestLocation}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium"
              >
                Activer la localisation
              </button>
            </div>
          ) : (
            <>
              <div className="relative w-72 h-72 mb-8">
                {/* Compass background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-card to-muted border-4 border-border shadow-2xl">
                  {/* Cardinal directions */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="absolute top-4 text-foreground font-bold">N</span>
                    <span className="absolute bottom-4 text-muted-foreground">S</span>
                    <span className="absolute left-4 text-muted-foreground">O</span>
                    <span className="absolute right-4 text-muted-foreground">E</span>
                  </div>
                </div>

                {/* Qibla arrow */}
                <div
                  className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
                  style={{ transform: `rotate(${compassRotation}deg)` }}
                >
                  <div className="w-1 h-32 bg-gradient-to-t from-transparent via-primary to-primary rounded-full" />
                  <div className="absolute top-8">
                    <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-primary" />
                  </div>
                </div>

                {/* Center Kaaba icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <span className="text-2xl">🕋</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-foreground font-medium mb-1">
                  Direction: {qiblaDirection?.toFixed(1)}°
                </p>
                <p className="text-muted-foreground text-sm">
                  {location.city}, {location.country}
                </p>
              </div>

              <div className="mt-6 bg-card border border-border rounded-xl p-4 max-w-sm">
                <p className="text-muted-foreground text-sm text-center">
                  Tenez votre téléphone à plat et tournez-vous jusqu'à ce que la flèche pointe vers le haut
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default QiblaPage;
