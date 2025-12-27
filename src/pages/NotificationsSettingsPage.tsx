import AppLayout from "@/components/layout/AppLayout";
import { ArrowLeft, Bell, BellOff, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

const prayerNames = [
  { id: "fajr", name: "Fajr", arabic: "الفجر" },
  { id: "dhuhr", name: "Dhuhr", arabic: "الظهر" },
  { id: "asr", name: "Asr", arabic: "العصر" },
  { id: "maghrib", name: "Maghrib", arabic: "المغرب" },
  { id: "isha", name: "Isha", arabic: "العشاء" },
];

const reminderOptions = [
  { value: 0, label: "À l'heure" },
  { value: 5, label: "5 min avant" },
  { value: 10, label: "10 min avant" },
  { value: 15, label: "15 min avant" },
  { value: 30, label: "30 min avant" },
];

interface NotificationSettings {
  enabled: boolean;
  prayers: Record<string, boolean>;
  reminderMinutes: number;
}

const NotificationsSettingsPage = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState<NotificationSettings>({
    enabled: false,
    prayers: {
      fajr: true,
      dhuhr: true,
      asr: true,
      maghrib: true,
      isha: true,
    },
    reminderMinutes: 10,
  });
  const [permissionStatus, setPermissionStatus] = useState<NotificationPermission | null>(null);

  useEffect(() => {
    // Load saved settings
    const saved = localStorage.getItem("prayer_notifications");
    if (saved) {
      setSettings(JSON.parse(saved));
    }

    // Check notification permission
    if ("Notification" in window) {
      setPermissionStatus(Notification.permission);
    }
  }, []);

  const saveSettings = (newSettings: NotificationSettings) => {
    setSettings(newSettings);
    localStorage.setItem("prayer_notifications", JSON.stringify(newSettings));
  };

  const requestPermission = async () => {
    if (!("Notification" in window)) {
      toast.error("Les notifications ne sont pas supportées sur cet appareil");
      return;
    }

    try {
      const permission = await Notification.requestPermission();
      setPermissionStatus(permission);
      
      if (permission === "granted") {
        saveSettings({ ...settings, enabled: true });
        toast.success("Notifications activées !");
      } else {
        toast.error("Permission refusée");
      }
    } catch (error) {
      console.error("Error requesting notification permission:", error);
      toast.error("Erreur lors de la demande de permission");
    }
  };

  const toggleNotifications = async (enabled: boolean) => {
    if (enabled && permissionStatus !== "granted") {
      await requestPermission();
    } else {
      saveSettings({ ...settings, enabled });
      if (!enabled) {
        toast.info("Notifications désactivées");
      }
    }
  };

  const togglePrayer = (prayerId: string, enabled: boolean) => {
    saveSettings({
      ...settings,
      prayers: { ...settings.prayers, [prayerId]: enabled },
    });
  };

  const setReminderMinutes = (minutes: number) => {
    saveSettings({ ...settings, reminderMinutes: minutes });
  };

  return (
    <AppLayout>
      <div className="px-4 py-6">
        <header className="mb-6 flex items-center gap-4">
          <button onClick={() => navigate("/more")} className="p-2 hover:bg-muted rounded-lg">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
            <p className="text-muted-foreground text-sm">Rappels de prières</p>
          </div>
        </header>

        {/* Main Toggle */}
        <div className="bg-card border border-border rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {settings.enabled ? (
                <Bell className="w-6 h-6 text-primary" />
              ) : (
                <BellOff className="w-6 h-6 text-muted-foreground" />
              )}
              <div>
                <p className="font-medium text-foreground">Activer les notifications</p>
                <p className="text-sm text-muted-foreground">
                  {settings.enabled ? "Vous recevrez des rappels" : "Notifications désactivées"}
                </p>
              </div>
            </div>
            <Switch
              checked={settings.enabled}
              onCheckedChange={toggleNotifications}
            />
          </div>
        </div>

        {settings.enabled && (
          <>
            {/* Reminder Time */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Rappel avant la prière
              </h3>
              <div className="flex flex-wrap gap-2">
                {reminderOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setReminderMinutes(option.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      settings.reminderMinutes === option.value
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border text-foreground hover:border-primary/30"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Individual Prayers */}
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Prières à notifier</h3>
              <div className="space-y-2">
                {prayerNames.map((prayer) => (
                  <div
                    key={prayer.id}
                    className="bg-card border border-border rounded-xl p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-arabic">{prayer.arabic}</span>
                      </div>
                      <span className="font-medium text-foreground">{prayer.name}</span>
                    </div>
                    <Switch
                      checked={settings.prayers[prayer.id]}
                      onCheckedChange={(checked) => togglePrayer(prayer.id, checked)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Info */}
        <div className="mt-6 bg-muted/50 rounded-xl p-4">
          <p className="text-muted-foreground text-sm">
            💡 Les notifications seront envoyées selon les horaires de prière de votre localisation.
            Assurez-vous d'avoir activé la localisation.
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default NotificationsSettingsPage;
