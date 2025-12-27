import { useState, useEffect, useCallback } from "react";

interface Location {
  latitude: number;
  longitude: number;
  city: string;
  country: string;
}

interface GeolocationState {
  location: Location | null;
  loading: boolean;
  error: string | null;
  permissionDenied: boolean;
}

export const useGeolocation = () => {
  const [state, setState] = useState<GeolocationState>({
    location: null,
    loading: false,
    error: null,
    permissionDenied: false,
  });

  const getCityFromCoordinates = async (lat: number, lon: number): Promise<{ city: string; country: string }> => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=fr`
      );
      const data = await response.json();
      
      const city = data.address?.city || data.address?.town || data.address?.village || data.address?.municipality || "Ville inconnue";
      const country = data.address?.country || "";
      
      return { city, country };
    } catch {
      return { city: "Ville inconnue", country: "" };
    }
  };

  const requestLocation = useCallback(async () => {
    if (!navigator.geolocation) {
      setState(prev => ({
        ...prev,
        error: "La géolocalisation n'est pas supportée par votre navigateur",
      }));
      return;
    }

    setState(prev => ({ ...prev, loading: true, error: null }));

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const { city, country } = await getCityFromCoordinates(latitude, longitude);
        
        setState({
          location: { latitude, longitude, city, country },
          loading: false,
          error: null,
          permissionDenied: false,
        });

        // Save to localStorage for future use
        localStorage.setItem("userLocation", JSON.stringify({ latitude, longitude, city, country }));
      },
      (error) => {
        let errorMessage = "Erreur lors de la récupération de la position";
        let permissionDenied = false;

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Vous avez refusé l'accès à votre position";
            permissionDenied = true;
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Position non disponible";
            break;
          case error.TIMEOUT:
            errorMessage = "Délai d'attente dépassé";
            break;
        }

        setState({
          location: null,
          loading: false,
          error: errorMessage,
          permissionDenied,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000, // 5 minutes
      }
    );
  }, []);

  // Load saved location on mount
  useEffect(() => {
    const savedLocation = localStorage.getItem("userLocation");
    if (savedLocation) {
      try {
        const parsed = JSON.parse(savedLocation);
        setState(prev => ({
          ...prev,
          location: parsed,
        }));
      } catch {
        // Invalid saved data
      }
    }
  }, []);

  return {
    ...state,
    requestLocation,
  };
};
