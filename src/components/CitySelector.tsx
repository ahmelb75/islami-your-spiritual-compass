import { useState, useEffect } from "react";
import { Search, MapPin, X, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface City {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

interface SearchResult {
  display_name: string;
  lat: string;
  lon: string;
  address?: {
    city?: string;
    town?: string;
    village?: string;
    municipality?: string;
    country?: string;
  };
}

interface CitySelectorProps {
  open: boolean;
  onClose: () => void;
  onSelectCity: (city: City) => void;
}

const CitySelector = ({ open, onClose, onSelectCity }: CitySelectorProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Debounced search
  useEffect(() => {
    if (searchQuery.length < 2) {
      setSearchResults([]);
      setHasSearched(false);
      return;
    }

    const timeoutId = setTimeout(async () => {
      setLoading(true);
      setHasSearched(true);
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(searchQuery)}&format=json&addressdetails=1&limit=20&accept-language=fr`
        );
        const data: SearchResult[] = await response.json();
        
        const cities: City[] = data.map((result) => ({
          name: result.address?.city || result.address?.town || result.address?.village || result.address?.municipality || result.display_name.split(",")[0],
          country: result.address?.country || "",
          latitude: parseFloat(result.lat),
          longitude: parseFloat(result.lon),
        }));
        
        // Remove duplicates based on name + country
        const uniqueCities = cities.filter((city, index, self) =>
          index === self.findIndex((c) => c.name === city.name && c.country === city.country)
        );
        
        setSearchResults(uniqueCities);
      } catch (error) {
        console.error("Error searching cities:", error);
        setSearchResults([]);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const handleSelectCity = (city: City) => {
    onSelectCity(city);
    onClose();
    setSearchQuery("");
    setSearchResults([]);
    setHasSearched(false);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Rechercher une ville
          </DialogTitle>
        </DialogHeader>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Tapez le nom d'une ville..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
            autoFocus
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSearchResults([]);
                setHasSearched(false);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <p className="text-xs text-muted-foreground">
          Recherchez n'importe quelle ville dans le monde
        </p>

        <div className="flex-1 overflow-y-auto -mx-6 px-6 space-y-1 mt-4 min-h-[200px]">
          {loading && (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-6 h-6 text-primary animate-spin" />
            </div>
          )}
          
          {!loading && searchResults.map((city, index) => (
            <button
              key={`${city.name}-${city.latitude}-${city.longitude}`}
              onClick={() => handleSelectCity(city)}
              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-left animate-fade-in"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground truncate">{city.name}</p>
                <p className="text-sm text-muted-foreground truncate">{city.country}</p>
              </div>
            </button>
          ))}
          
          {!loading && hasSearched && searchResults.length === 0 && (
            <p className="text-center text-muted-foreground py-8">
              Aucune ville trouvée
            </p>
          )}
          
          {!loading && !hasSearched && searchQuery.length < 2 && (
            <p className="text-center text-muted-foreground py-8">
              Tapez au moins 2 caractères pour rechercher
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CitySelector;
