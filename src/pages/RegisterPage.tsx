import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IslamicPattern } from "@/components/decorative/IslamicPattern";
import { Apple, Mail, Lock, User, Eye, EyeOff, ArrowLeft } from "lucide-react";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  const handleAppleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      <IslamicPattern />
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-islamic-emerald/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      
      {/* Header with back button */}
      <header className="relative z-10 p-4">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour
        </Link>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-2">Créer un compte</h1>
          <p className="text-muted-foreground">Rejoignez la communauté ISLAMI</p>
        </div>

        {/* Register Form */}
        <div className="w-full max-w-sm space-y-6 animate-slide-up">
          <Button
            variant="apple"
            size="lg"
            className="w-full"
            onClick={handleAppleLogin}
          >
            <Apple className="w-5 h-5 mr-2" />
            S'inscrire avec Apple
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-background text-muted-foreground">ou</span>
            </div>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-12"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12"
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-12 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <Button type="submit" variant="gold" size="lg" className="w-full">
              Créer mon compte
            </Button>
          </form>

          <p className="text-center text-muted-foreground text-sm">
            En vous inscrivant, vous acceptez nos{" "}
            <span className="text-primary hover:underline cursor-pointer">conditions d'utilisation</span>
          </p>

          <p className="text-center text-muted-foreground">
            Déjà un compte ?{" "}
            <Link to="/" className="text-primary hover:underline font-medium">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
