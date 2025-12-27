import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IslamicPattern } from "@/components/decorative/IslamicPattern";
import { Apple, Mail, Lock, Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-islamic-emerald/20 rounded-full blur-3xl translate-y-1/2" />
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative z-10">
        {/* Logo and Title */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-islamic-gold-dim flex items-center justify-center shadow-lg">
            <span className="text-3xl font-arabic text-primary-foreground">☪</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">ISLAMI</h1>
          <p className="text-muted-foreground">Votre compagnon spirituel</p>
        </div>

        {/* Login Form */}
        <div className="w-full max-w-sm space-y-6 animate-slide-up">
          <form onSubmit={handleLogin} className="space-y-4">
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
              Se connecter
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-background text-muted-foreground">ou</span>
            </div>
          </div>

          <Button
            variant="apple"
            size="lg"
            className="w-full"
            onClick={handleAppleLogin}
          >
            <Apple className="w-5 h-5 mr-2" />
            Continuer avec Apple
          </Button>

          <p className="text-center text-muted-foreground">
            Nouveau sur ISLAMI ?{" "}
            <Link to="/register" className="text-primary hover:underline font-medium">
              Créer un compte
            </Link>
          </p>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="h-2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </div>
  );
};

export default LoginPage;
