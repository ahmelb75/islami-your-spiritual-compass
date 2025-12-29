import { useState } from "react";
import { Search, MapPin, X } from "lucide-react";
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

const popularCities: City[] = [
  { name: "Paris", country: "France", latitude: 48.8566, longitude: 2.3522 },
  { name: "Lyon", country: "France", latitude: 45.7640, longitude: 4.8357 },
  { name: "Marseille", country: "France", latitude: 43.2965, longitude: 5.3698 },
  { name: "Toulouse", country: "France", latitude: 43.6047, longitude: 1.4442 },
  { name: "Nice", country: "France", latitude: 43.7102, longitude: 7.2620 },
  { name: "Strasbourg", country: "France", latitude: 48.5734, longitude: 7.7521 },
  { name: "Bordeaux", country: "France", latitude: 44.8378, longitude: -0.5792 },
  { name: "Lille", country: "France", latitude: 50.6292, longitude: 3.0573 },
  { name: "Nantes", country: "France", latitude: 47.2184, longitude: -1.5536 },
  { name: "Montpellier", country: "France", latitude: 43.6108, longitude: 3.8767 },
  { name: "Bruxelles", country: "Belgique", latitude: 50.8503, longitude: 4.3517 },
  { name: "Genève", country: "Suisse", latitude: 46.2044, longitude: 6.1432 },
  { name: "Casablanca", country: "Maroc", latitude: 33.5731, longitude: -7.5898 },
  { name: "Rabat", country: "Maroc", latitude: 34.0209, longitude: -6.8416 },
  { name: "Marrakech", country: "Maroc", latitude: 31.6295, longitude: -7.9811 },
  { name: "Tanger", country: "Maroc", latitude: 35.7595, longitude: -5.8340 },
  { name: "Alger", country: "Algérie", latitude: 36.7538, longitude: 3.0588 },
  { name: "Oran", country: "Algérie", latitude: 35.6969, longitude: -0.6331 },
  { name: "Constantine", country: "Algérie", latitude: 36.3650, longitude: 6.6147 },
  { name: "Tunis", country: "Tunisie", latitude: 36.8065, longitude: 10.1815 },
  { name: "Sousse", country: "Tunisie", latitude: 35.8254, longitude: 10.6360 },
  { name: "Dakar", country: "Sénégal", latitude: 14.7167, longitude: -17.4677 },
  { name: "Abidjan", country: "Côte d'Ivoire", latitude: 5.3600, longitude: -4.0083 },
  { name: "Le Caire", country: "Égypte", latitude: 30.0444, longitude: 31.2357 },
  { name: "Dubaï", country: "EAU", latitude: 25.2048, longitude: 55.2708 },
  { name: "Djeddah", country: "Arabie Saoudite", latitude: 21.4858, longitude: 39.1925 },
  { name: "La Mecque", country: "Arabie Saoudite", latitude: 21.4225, longitude: 39.8262 },
  { name: "Médine", country: "Arabie Saoudite", latitude: 24.5247, longitude: 39.5692 },
  { name: "Istanbul", country: "Turquie", latitude: 41.0082, longitude: 28.9784 },
  { name: "Londres", country: "Royaume-Uni", latitude: 51.5074, longitude: -0.1278 },
  { name: "Amsterdam", country: "Pays-Bas", latitude: 52.3676, longitude: 4.9041 },
  { name: "Berlin", country: "Allemagne", latitude: 52.5200, longitude: 13.4050 },
  { name: "Montréal", country: "Canada", latitude: 45.5017, longitude: -73.5673 },
  { name: "New York", country: "États-Unis", latitude: 40.7128, longitude: -74.0060 },
];

interface CitySelectorProps {
  open: boolean;
  onClose: () => void;
  onSelectCity: (city: City) => void;
}

const CitySelector = ({ open, onClose, onSelectCity }: CitySelectorProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCities = popularCities.filter(
    (city) =>
      city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectCity = (city: City) => {
    onSelectCity(city);
    onClose();
    setSearchQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Sélectionner une ville
          </DialogTitle>
        </DialogHeader>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Rechercher une ville..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto -mx-6 px-6 space-y-1 mt-4">
          {filteredCities.map((city, index) => (
            <button
              key={`${city.name}-${city.country}`}
              onClick={() => handleSelectCity(city)}
              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-left"
              style={{ animationDelay: `${index * 20}ms` }}
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">{city.name}</p>
                <p className="text-sm text-muted-foreground">{city.country}</p>
              </div>
            </button>
          ))}
          {filteredCities.length === 0 && (
            <p className="text-center text-muted-foreground py-8">
              Aucune ville trouvée
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CitySelector;
