import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2,
  Loader2,
} from "lucide-react";
import { surahs, reciters, Reciter } from "@/data/quranData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Ayah {
  number: number;
  numberInSurah: number;
  text: string;
  audio?: string;
}

interface LastListened {
  surahNumber: number;
  reciterId: string;
  currentTime: number;
  ayah: number;
}

const SurahDetailPage = () => {
  const { surahNumber } = useParams<{ surahNumber: string }>();
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const [ayahs, setAyahs] = useState<Ayah[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedReciter, setSelectedReciter] = useState<Reciter>(reciters[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [audioUrl, setAudioUrl] = useState("");
  const [audioLoading, setAudioLoading] = useState(false);

  const surah = surahs.find(s => s.number === parseInt(surahNumber || "1"));

  // Load saved reciter preference
  useEffect(() => {
    const savedReciterId = localStorage.getItem("preferredReciter");
    if (savedReciterId) {
      const reciter = reciters.find(r => r.id === savedReciterId);
      if (reciter) setSelectedReciter(reciter);
    }
  }, []);

  // Fetch surah text from API
  useEffect(() => {
    const fetchSurah = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.alquran.cloud/v1/surah/${surahNumber}`
        );
        const data = await response.json();
        if (data.code === 200) {
          setAyahs(data.data.ayahs);
        }
      } catch (error) {
        console.error("Error fetching surah:", error);
      } finally {
        setLoading(false);
      }
    };

    if (surahNumber) {
      fetchSurah();
    }
  }, [surahNumber]);

  // Update audio URL when reciter changes
  useEffect(() => {
    if (surahNumber) {
      const url = `https://cdn.islamic.network/quran/audio-surah/128/${selectedReciter.id}/${surahNumber}.mp3`;
      setAudioUrl(url);
      localStorage.setItem("preferredReciter", selectedReciter.id);
    }
  }, [surahNumber, selectedReciter]);

  // Save last listened position
  useEffect(() => {
    if (surahNumber && currentTime > 0) {
      const lastListened: LastListened = {
        surahNumber: parseInt(surahNumber),
        reciterId: selectedReciter.id,
        currentTime,
        ayah: Math.floor((currentTime / duration) * ayahs.length) + 1,
      };
      localStorage.setItem("lastListened", JSON.stringify(lastListened));
    }
  }, [currentTime, surahNumber, selectedReciter, duration, ayahs.length]);

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
    }
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handlePreviousSurah = () => {
    const prevNumber = parseInt(surahNumber || "1") - 1;
    if (prevNumber >= 1) {
      navigate(`/quran/${prevNumber}`);
    }
  };

  const handleNextSurah = () => {
    const nextNumber = parseInt(surahNumber || "1") + 1;
    if (nextNumber <= 114) {
      navigate(`/quran/${nextNumber}`);
    }
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  if (!surah) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center h-screen">
          <p className="text-muted-foreground">Sourate non trouvée</p>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <header className="px-4 py-4 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/quran")}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-foreground">{surah.name}</h1>
              <p className="text-primary font-arabic text-lg">{surah.arabicName}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">{surah.verses} versets</p>
              <p className="text-xs text-muted-foreground">{surah.revelationType === "Meccan" ? "Mecquoise" : "Médinoise"}</p>
            </div>
          </div>
        </header>

        {/* Audio Player at Top */}
        <div className="border-b border-border bg-card p-4 space-y-4">
          {/* Reciter Selector with Photo */}
          <Select
            value={selectedReciter.id}
            onValueChange={(value) => {
              const reciter = reciters.find(r => r.id === value);
              if (reciter) {
                setSelectedReciter(reciter);
                setIsPlaying(false);
                if (audioRef.current) {
                  audioRef.current.pause();
                  audioRef.current.currentTime = 0;
                }
              }
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue>
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={selectedReciter.photo} alt={selectedReciter.name} />
                    <AvatarFallback>{selectedReciter.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span>{selectedReciter.name}</span>
                  <span className="text-muted-foreground text-xs">({selectedReciter.style})</span>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {reciters.map((reciter) => (
                <SelectItem key={reciter.id} value={reciter.id}>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={reciter.photo} alt={reciter.name} />
                      <AvatarFallback>{reciter.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span>{reciter.name}</span>
                      <span className="text-primary font-arabic text-sm">{reciter.arabicName}</span>
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePreviousSurah}
              disabled={parseInt(surahNumber || "1") <= 1}
            >
              <SkipBack className="w-5 h-5" />
            </Button>

            <Button
              size="lg"
              className="w-14 h-14 rounded-full"
              onClick={handlePlayPause}
              disabled={audioLoading}
            >
              {audioLoading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6 ml-1" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleNextSurah}
              disabled={parseInt(surahNumber || "1") >= 114}
            >
              <SkipForward className="w-5 h-5" />
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <Slider
              value={[currentTime]}
              max={duration || 100}
              step={1}
              onValueChange={handleSeek}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Volume */}
          <div className="flex items-center gap-3">
            <Volume2 className="w-4 h-4 text-muted-foreground" />
            <Slider
              value={[volume]}
              max={1}
              step={0.1}
              onValueChange={handleVolumeChange}
              className="flex-1"
            />
          </div>
        </div>

        {/* Bismillah */}
        {surah.number !== 1 && surah.number !== 9 && (
          <div className="text-center py-6 border-b border-border">
            <p className="font-arabic text-2xl text-primary">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
          </div>
        )}

        {/* Ayahs */}
        <ScrollArea className="flex-1 px-4">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="py-4 space-y-4">
              {ayahs.map((ayah, index) => (
                <div
                  key={ayah.number}
                  className="bg-card border border-border rounded-xl p-4 animate-fade-in"
                  style={{ animationDelay: `${index * 20}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-primary text-sm font-bold">{ayah.numberInSurah}</span>
                    </div>
                    <p className="font-arabic text-xl leading-loose text-foreground text-right flex-1" dir="rtl">
                      {ayah.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

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

export default SurahDetailPage;
