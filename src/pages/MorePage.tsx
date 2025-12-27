import AppLayout from "@/components/layout/AppLayout";
import { 
  Sparkles, 
  BookOpen, 
  Compass, 
  Calendar, 
  Target, 
  Moon,
  Star,
  Bell,
  ChevronRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  { icon: Sparkles, name: "Dhikr", description: "Rappels et méditations", color: "from-primary/20 to-primary/5", route: "/dhikr" },
  { icon: BookOpen, name: "Tafsir", description: "Exégèse du Coran", color: "from-islamic-emerald/20 to-islamic-emerald/5", route: "/tafsir" },
  { icon: Compass, name: "Qibla", description: "Trouver la direction", color: "from-primary/20 to-primary/5", route: "/qibla" },
  { icon: Calendar, name: "Calendrier Islamique", description: "Hijri & événements", color: "from-islamic-emerald/20 to-islamic-emerald/5", route: "/islamic-calendar" },
  { icon: Target, name: "Compteur Tasbih", description: "Comptez vos dhikr", color: "from-primary/20 to-primary/5", route: "/tasbih" },
  { icon: Star, name: "99 Noms d'Allah", description: "Asma ul Husna", color: "from-islamic-emerald/20 to-islamic-emerald/5", route: "/names-of-allah" },
  { icon: Moon, name: "Nuits Spéciales", description: "Laylat al-Qadr & plus", color: "from-primary/20 to-primary/5", route: "/special-nights" },
  { icon: Bell, name: "Notifications", description: "Rappels de prières", color: "from-islamic-emerald/20 to-islamic-emerald/5", route: "/notifications" },
];

const MorePage = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="px-4 py-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Plus de Fonctionnalités</h1>
          <p className="text-muted-foreground text-sm">Découvrez toutes les ressources</p>
        </header>

        <div className="space-y-3">
          {features.map((feature, index) => (
            <button
              key={feature.name}
              onClick={() => navigate(feature.route)}
              className="w-full bg-card border border-border rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-foreground">{feature.name}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          ))}
        </div>

        {/* App Info */}
        <div className="mt-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-islamic-gold-dim flex items-center justify-center shadow-lg">
            <span className="text-2xl font-arabic text-primary-foreground">☪</span>
          </div>
          <h2 className="text-xl font-bold text-foreground">ISLAMI</h2>
          <p className="text-muted-foreground text-sm">Version 1.0.0</p>
          <p className="text-muted-foreground text-xs mt-2">© 2024 ISLAMI App</p>
        </div>
      </div>
    </AppLayout>
  );
};

export default MorePage;
