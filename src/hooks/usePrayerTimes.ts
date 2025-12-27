import { useState, useEffect } from "react";

interface PrayerTimesData {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

interface UsePrayerTimesResult {
  times: PrayerTimesData | null;
  loading: boolean;
  error: string | null;
}

export const usePrayerTimes = (
  latitude: number | null,
  longitude: number | null,
  date: Date
): UsePrayerTimesResult => {
  const [times, setTimes] = useState<PrayerTimesData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (latitude === null || longitude === null) {
      return;
    }

    const fetchPrayerTimes = async () => {
      setLoading(true);
      setError(null);

      try {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        // Using Aladhan API for prayer times
        const response = await fetch(
          `https://api.aladhan.com/v1/timings/${day}-${month}-${year}?latitude=${latitude}&longitude=${longitude}&method=2`
        );

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des horaires");
        }

        const data = await response.json();
        const timings = data.data.timings;

        setTimes({
          Fajr: timings.Fajr,
          Dhuhr: timings.Dhuhr,
          Asr: timings.Asr,
          Maghrib: timings.Maghrib,
          Isha: timings.Isha,
        });
      } catch (err) {
        setError("Impossible de charger les horaires de prière");
        console.error("Prayer times error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, [latitude, longitude, date.getDate(), date.getMonth(), date.getFullYear()]);

  return { times, loading, error };
};
