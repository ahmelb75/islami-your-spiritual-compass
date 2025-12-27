import AppLayout from "@/components/layout/AppLayout";
import { ArrowLeft, RotateCcw, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const TasbihPage = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(33);
  const [totalCount, setTotalCount] = useState(0);
  const [showSettings, setShowSettings] = useState(false);

  const targets = [33, 99, 100, 500, 1000];

  useEffect(() => {
    const saved = localStorage.getItem("tasbih_total");
    if (saved) {
      setTotalCount(parseInt(saved));
    }
  }, []);

  const handleTap = () => {
    setCount(prev => prev + 1);
    setTotalCount(prev => {
      const newTotal = prev + 1;
      localStorage.setItem("tasbih_total", newTotal.toString());
      return newTotal;
    });

    // Vibration feedback if available
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  const resetTotal = () => {
    setTotalCount(0);
    localStorage.setItem("tasbih_total", "0");
  };

  const progress = Math.min((count / target) * 100, 100);

  return (
    <AppLayout>
      <div className="px-4 py-6">
        <header className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate("/more")} className="p-2 hover:bg-muted rounded-lg">
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Tasbih</h1>
              <p className="text-muted-foreground text-sm">Compteur de dhikr</p>
            </div>
          </div>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 hover:bg-muted rounded-lg"
          >
            <Settings className="w-5 h-5 text-foreground" />
          </button>
        </header>

        {showSettings && (
          <div className="bg-card border border-border rounded-xl p-4 mb-6">
            <p className="text-foreground font-medium mb-3">Objectif</p>
            <div className="flex flex-wrap gap-2">
              {targets.map((t) => (
                <button
                  key={t}
                  onClick={() => { setTarget(t); setShowSettings(false); }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    target === t
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col items-center justify-center min-h-[55vh]">
          {/* Total count */}
          <div className="text-center mb-8">
            <p className="text-muted-foreground text-sm">Total cumulé</p>
            <p className="text-2xl font-bold text-foreground">{totalCount.toLocaleString()}</p>
          </div>

          {/* Progress ring */}
          <div className="relative mb-8">
            <svg className="w-72 h-72 transform -rotate-90">
              <circle
                cx="144"
                cy="144"
                r="130"
                stroke="currentColor"
                strokeWidth="12"
                fill="none"
                className="text-muted"
              />
              <circle
                cx="144"
                cy="144"
                r="130"
                stroke="currentColor"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 130}`}
                strokeDashoffset={`${2 * Math.PI * 130 * (1 - progress / 100)}`}
                strokeLinecap="round"
                className="text-primary transition-all duration-300"
              />
            </svg>
            
            {/* Tap button */}
            <button
              onClick={handleTap}
              className="absolute inset-0 m-auto w-52 h-52 rounded-full bg-gradient-to-br from-primary to-primary/80 flex flex-col items-center justify-center shadow-2xl active:scale-95 transition-transform"
            >
              <span className="text-6xl font-bold text-primary-foreground">{count}</span>
              <span className="text-primary-foreground/80 text-sm">/ {target}</span>
            </button>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <Button variant="outline" onClick={resetCount}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Réinitialiser
            </Button>
            <Button variant="ghost" onClick={resetTotal} className="text-destructive">
              Effacer le total
            </Button>
          </div>

          {count >= target && (
            <div className="mt-6 bg-primary/10 border border-primary/30 rounded-xl p-4 text-center">
              <p className="text-primary font-medium">🎉 Objectif atteint !</p>
              <p className="text-muted-foreground text-sm">Ma sha Allah</p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default TasbihPage;
