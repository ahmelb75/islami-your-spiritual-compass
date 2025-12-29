import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { Play, Pause, Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { surahs, reciters } from "@/data/quranData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LastListened {
  surahNumber: number;
  reciterId: string;
  currentTime: number;
  ayah: number;
}

const QuranPage = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLoading, setAudioLoading] = useState(false);
  const [lastListened, setLastListened] = useState<LastListened | null>(null);
  const [selectedReciterId, setSelectedReciterId] = useState<string>(reciters[0].id);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Load last listened and preferred reciter
  useEffect(() => {
    const savedLastListened = localStorage.getItem("lastListened");
    if (savedLastListened) {
      setLastListened(JSON.parse(savedLastListened));
    }
    
    const savedReciterId = localStorage.getItem("preferredReciter");
    if (savedReciterId) {
      setSelectedReciterId(savedReciterId);
    }
  }, []);

  const lastListenedSurah = lastListened 
    ? surahs.find(s => s.number === lastListened.surahNumber) 
    : surahs.find(s => s.number === 36); // Default to Ya-Sin

  const selectedReciter = reciters.find(r => r.id === selectedReciterId) || reciters[0];

  const audioUrl = lastListenedSurah 
    ? `https://cdn.islamic.network/quran/audio-surah/128/${selectedReciterId}/${lastListenedSurah.number}.mp3`
    : "";

  const filteredSurahs = surahs.filter(
    (surah) =>
      surah.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      surah.arabicName.includes(searchQuery) ||
      surah.number.toString().includes(searchQuery)
  );

  const handlePlayPause = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setAudioLoading(true);
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Error playing audio:", error);
      } finally {
        setAudioLoading(false);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      // Resume from last position if available
      if (lastListened && lastListened.currentTime > 0) {
        audioRef.current.currentTime = lastListened.currentTime;
      }
    }
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const estimatedAyah = lastListenedSurah 
    ? Math.min(Math.floor((currentTime / Math.max(duration, 1)) * lastListenedSurah.verses) + 1, lastListenedSurah.verses)
    : 1;

  // Save progress periodically
  useEffect(() => {
    if (currentTime > 0 && lastListenedSurah) {
      const newLastListened: LastListened = {
        surahNumber: lastListenedSurah.number,
        reciterId: selectedReciterId,
        currentTime,
        ayah: estimatedAyah,
      };
      localStorage.setItem("lastListened", JSON.stringify(newLastListened));
    }
  }, [currentTime, lastListenedSurah, selectedReciterId, estimatedAyah]);

  const handleReciterChange = (reciterId: string) => {
    setSelectedReciterId(reciterId);
    localStorage.setItem("preferredReciter", reciterId);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setCurrentTime(0);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <AppLayout>
      <div className="px-4 py-6">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Le Saint Coran</h1>
          <p className="text-muted-foreground text-sm">114 Sourates</p>
        </header>

        {/* Last Listened */}
        {lastListenedSurah && (
          <div className="bg-gradient-to-br from-primary/20 to-islamic-emerald/20 rounded-2xl p-5 mb-4 border border-primary/20">
            <div className="flex items-center justify-between mb-3">
              <div 
                className="cursor-pointer flex-1"
                onClick={() => navigate(`/quran/${lastListenedSurah.number}`)}
              >
                <p className="text-sm text-muted-foreground mb-1">Dernière écoute</p>
                <h3 className="text-xl font-bold text-foreground">{lastListenedSurah.name}</h3>
                <p className="text-primary font-arabic text-lg">{lastListenedSurah.arabicName}</p>
              </div>
              <button
                onClick={handlePlayPause}
                disabled={audioLoading}
                className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform disabled:opacity-50"
              >
                {audioLoading ? (
                  <Loader2 className="w-6 h-6 text-primary-foreground animate-spin" />
                ) : isPlaying ? (
                  <Pause className="w-6 h-6 text-primary-foreground" />
                ) : (
                  <Play className="w-6 h-6 text-primary-foreground ml-1" />
                )}
              </button>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  {isPlaying || currentTime > 0 ? formatTime(currentTime) : `Verset ${lastListened?.ayah || 1}`}
                </span>
                <span className="text-foreground">
                  {duration > 0 ? formatTime(duration) : `${lastListenedSurah.verses} versets`}
                </span>
              </div>
              <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Reciter Info */}
            <div className="mt-3 pt-3 border-t border-primary/20">
              <p className="text-xs text-muted-foreground mb-1">Récitateur</p>
              <p className="text-sm text-foreground">{selectedReciter.name}</p>
            </div>
          </div>
        )}

        {/* Reciter Selector */}
        <div className="mb-4">
          <Select value={selectedReciterId} onValueChange={handleReciterChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choisir un récitateur" />
            </SelectTrigger>
            <SelectContent>
              {reciters.map((reciter) => (
                <SelectItem key={reciter.id} value={reciter.id}>
                  <div className="flex flex-col">
                    <span>{reciter.name}</span>
                    <span className="text-primary font-arabic text-sm">{reciter.arabicName}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Rechercher une sourate..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12"
          />
        </div>

        {/* Surahs Grid */}
        <div className="grid grid-cols-3 gap-3 pb-20">
          {filteredSurahs.map((surah, index) => (
            <button
              key={surah.number}
              onClick={() => navigate(`/quran/${surah.number}`)}
              className="bg-card border border-border rounded-xl p-3 text-left hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 15}ms` }}
            >
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mb-2">
                <span className="text-primary text-sm font-bold">{surah.number}</span>
              </div>
              <p className="font-medium text-foreground text-sm truncate">{surah.name}</p>
              <p className="text-primary font-arabic text-base">{surah.arabicName}</p>
              <p className="text-xs text-muted-foreground mt-1">{surah.verses} versets</p>
            </button>
          ))}
        </div>

        {/* Hidden Audio Element */}
        <audio
          ref={audioRef}
          src={audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>
    </AppLayout>
  );
};

export default QuranPage;
