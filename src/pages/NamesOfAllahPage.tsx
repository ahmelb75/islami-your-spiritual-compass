import AppLayout from "@/components/layout/AppLayout";
import { ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const namesOfAllah = [
  { number: 1, arabic: "الرَّحْمَنُ", transliteration: "Ar-Rahman", meaning: "Le Tout Miséricordieux" },
  { number: 2, arabic: "الرَّحِيمُ", transliteration: "Ar-Rahim", meaning: "Le Très Miséricordieux" },
  { number: 3, arabic: "الْمَلِكُ", transliteration: "Al-Malik", meaning: "Le Roi" },
  { number: 4, arabic: "الْقُدُّوسُ", transliteration: "Al-Quddus", meaning: "Le Saint" },
  { number: 5, arabic: "السَّلاَمُ", transliteration: "As-Salam", meaning: "La Paix" },
  { number: 6, arabic: "الْمُؤْمِنُ", transliteration: "Al-Mu'min", meaning: "Le Fidèle" },
  { number: 7, arabic: "الْمُهَيْمِنُ", transliteration: "Al-Muhaymin", meaning: "Le Protecteur" },
  { number: 8, arabic: "الْعَزِيزُ", transliteration: "Al-Aziz", meaning: "Le Tout Puissant" },
  { number: 9, arabic: "الْجَبَّارُ", transliteration: "Al-Jabbar", meaning: "L'Irrésistible" },
  { number: 10, arabic: "الْمُتَكَبِّرُ", transliteration: "Al-Mutakabbir", meaning: "Le Suprême" },
  { number: 11, arabic: "الْخَالِقُ", transliteration: "Al-Khaliq", meaning: "Le Créateur" },
  { number: 12, arabic: "الْبَارِئُ", transliteration: "Al-Bari", meaning: "Le Producteur" },
  { number: 13, arabic: "الْمُصَوِّرُ", transliteration: "Al-Musawwir", meaning: "Le Formateur" },
  { number: 14, arabic: "الْغَفَّارُ", transliteration: "Al-Ghaffar", meaning: "Le Pardonnant" },
  { number: 15, arabic: "الْقَهَّارُ", transliteration: "Al-Qahhar", meaning: "Le Dominateur" },
  { number: 16, arabic: "الْوَهَّابُ", transliteration: "Al-Wahhab", meaning: "Le Donateur" },
  { number: 17, arabic: "الرَّزَّاقُ", transliteration: "Ar-Razzaq", meaning: "Le Pourvoyeur" },
  { number: 18, arabic: "الْفَتَّاحُ", transliteration: "Al-Fattah", meaning: "Le Juge Suprême" },
  { number: 19, arabic: "اَلْعَلِيْمُ", transliteration: "Al-Alim", meaning: "L'Omniscient" },
  { number: 20, arabic: "الْقَابِضُ", transliteration: "Al-Qabid", meaning: "Celui qui resserre" },
  { number: 21, arabic: "الْبَاسِطُ", transliteration: "Al-Basit", meaning: "Celui qui étend" },
  { number: 22, arabic: "الْخَافِضُ", transliteration: "Al-Khafid", meaning: "Celui qui abaisse" },
  { number: 23, arabic: "الرَّافِعُ", transliteration: "Ar-Rafi", meaning: "Celui qui élève" },
  { number: 24, arabic: "الْمُعِزُّ", transliteration: "Al-Mu'izz", meaning: "Celui qui honore" },
  { number: 25, arabic: "المُذِلُّ", transliteration: "Al-Mudhill", meaning: "Celui qui humilie" },
  { number: 26, arabic: "السَّمِيعُ", transliteration: "As-Sami", meaning: "L'Audient" },
  { number: 27, arabic: "الْبَصِيرُ", transliteration: "Al-Basir", meaning: "Le Voyant" },
  { number: 28, arabic: "الْحَكَمُ", transliteration: "Al-Hakam", meaning: "Le Juge" },
  { number: 29, arabic: "الْعَدْلُ", transliteration: "Al-Adl", meaning: "Le Juste" },
  { number: 30, arabic: "اللَّطِيفُ", transliteration: "Al-Latif", meaning: "Le Subtil" },
  { number: 31, arabic: "الْخَبِيرُ", transliteration: "Al-Khabir", meaning: "Le Bien-Informé" },
  { number: 32, arabic: "الْحَلِيمُ", transliteration: "Al-Halim", meaning: "Le Longanime" },
  { number: 33, arabic: "الْعَظِيمُ", transliteration: "Al-Azim", meaning: "L'Immense" },
  { number: 34, arabic: "الْغَفُورُ", transliteration: "Al-Ghafur", meaning: "Le Pardonneur" },
  { number: 35, arabic: "الشَّكُورُ", transliteration: "Ash-Shakur", meaning: "Le Reconnaissant" },
  { number: 36, arabic: "الْعَلِيُّ", transliteration: "Al-Ali", meaning: "Le Très Haut" },
  { number: 37, arabic: "الْكَبِيرُ", transliteration: "Al-Kabir", meaning: "Le Grand" },
  { number: 38, arabic: "الْحَفِيظُ", transliteration: "Al-Hafiz", meaning: "Le Gardien" },
  { number: 39, arabic: "المُقِيتُ", transliteration: "Al-Muqit", meaning: "Le Nourricier" },
  { number: 40, arabic: "الْحَسِيبُ", transliteration: "Al-Hasib", meaning: "Le Calculateur" },
  { number: 41, arabic: "الْجَلِيلُ", transliteration: "Al-Jalil", meaning: "Le Majestueux" },
  { number: 42, arabic: "الْكَرِيمُ", transliteration: "Al-Karim", meaning: "Le Généreux" },
  { number: 43, arabic: "الرَّقِيبُ", transliteration: "Ar-Raqib", meaning: "Le Vigilant" },
  { number: 44, arabic: "الْمُجِيبُ", transliteration: "Al-Mujib", meaning: "Celui qui répond" },
  { number: 45, arabic: "الْوَاسِعُ", transliteration: "Al-Wasi", meaning: "L'Immense" },
  { number: 46, arabic: "الْحَكِيمُ", transliteration: "Al-Hakim", meaning: "Le Sage" },
  { number: 47, arabic: "الْوَدُودُ", transliteration: "Al-Wadud", meaning: "Le Bien-Aimant" },
  { number: 48, arabic: "الْمَجِيدُ", transliteration: "Al-Majid", meaning: "Le Glorieux" },
  { number: 49, arabic: "الْبَاعِثُ", transliteration: "Al-Ba'ith", meaning: "Le Résurrecteur" },
  { number: 50, arabic: "الشَّهِيدُ", transliteration: "Ash-Shahid", meaning: "Le Témoin" },
  { number: 51, arabic: "الْحَقُّ", transliteration: "Al-Haqq", meaning: "La Vérité" },
  { number: 52, arabic: "الْوَكِيلُ", transliteration: "Al-Wakil", meaning: "Le Garant" },
  { number: 53, arabic: "الْقَوِيُّ", transliteration: "Al-Qawi", meaning: "Le Fort" },
  { number: 54, arabic: "الْمَتِينُ", transliteration: "Al-Matin", meaning: "Le Ferme" },
  { number: 55, arabic: "الْوَلِيُّ", transliteration: "Al-Wali", meaning: "L'Ami" },
  { number: 56, arabic: "الْحَمِيدُ", transliteration: "Al-Hamid", meaning: "Le Louable" },
  { number: 57, arabic: "الْمُحْصِي", transliteration: "Al-Muhsi", meaning: "Le Comptable" },
  { number: 58, arabic: "الْمُبْدِئُ", transliteration: "Al-Mubdi", meaning: "Le Créateur originel" },
  { number: 59, arabic: "الْمُعِيدُ", transliteration: "Al-Mu'id", meaning: "Le Restaurateur" },
  { number: 60, arabic: "الْمُحْيِي", transliteration: "Al-Muhyi", meaning: "Celui qui donne la vie" },
  { number: 61, arabic: "اَلْمُمِيتُ", transliteration: "Al-Mumit", meaning: "Celui qui donne la mort" },
  { number: 62, arabic: "الْحَيُّ", transliteration: "Al-Hayy", meaning: "Le Vivant" },
  { number: 63, arabic: "الْقَيُّومُ", transliteration: "Al-Qayyum", meaning: "L'Immuable" },
  { number: 64, arabic: "الْوَاجِدُ", transliteration: "Al-Wajid", meaning: "Le Riche" },
  { number: 65, arabic: "الْمَاجِدُ", transliteration: "Al-Majid", meaning: "Le Noble" },
  { number: 66, arabic: "الْوَاحِدُ", transliteration: "Al-Wahid", meaning: "L'Unique" },
  { number: 67, arabic: "اَلاَحَدُ", transliteration: "Al-Ahad", meaning: "Le Seul" },
  { number: 68, arabic: "الصَّمَدُ", transliteration: "As-Samad", meaning: "Le Soutien universel" },
  { number: 69, arabic: "الْقَادِرُ", transliteration: "Al-Qadir", meaning: "Le Capable" },
  { number: 70, arabic: "الْمُقْتَدِرُ", transliteration: "Al-Muqtadir", meaning: "Le Tout Puissant" },
  { number: 71, arabic: "الْمُقَدِّمُ", transliteration: "Al-Muqaddim", meaning: "Celui qui met en avant" },
  { number: 72, arabic: "الْمُؤَخِّرُ", transliteration: "Al-Mu'akhkhir", meaning: "Celui qui met en arrière" },
  { number: 73, arabic: "الأوَّلُ", transliteration: "Al-Awwal", meaning: "Le Premier" },
  { number: 74, arabic: "الآخِرُ", transliteration: "Al-Akhir", meaning: "Le Dernier" },
  { number: 75, arabic: "الظَّاهِرُ", transliteration: "Az-Zahir", meaning: "L'Apparent" },
  { number: 76, arabic: "الْبَاطِنُ", transliteration: "Al-Batin", meaning: "Le Caché" },
  { number: 77, arabic: "الْوَالِي", transliteration: "Al-Wali", meaning: "Le Gouverneur" },
  { number: 78, arabic: "الْمُتَعَالِي", transliteration: "Al-Muta'ali", meaning: "Le Très Élevé" },
  { number: 79, arabic: "الْبَرُّ", transliteration: "Al-Barr", meaning: "Le Bienfaisant" },
  { number: 80, arabic: "التَّوَّابُ", transliteration: "At-Tawwab", meaning: "L'Accueillant au repentir" },
  { number: 81, arabic: "الْمُنْتَقِمُ", transliteration: "Al-Muntaqim", meaning: "Le Vengeur" },
  { number: 82, arabic: "العَفُوُّ", transliteration: "Al-Afuw", meaning: "L'Indulgent" },
  { number: 83, arabic: "الرَّؤُوفُ", transliteration: "Ar-Ra'uf", meaning: "Le Compatissant" },
  { number: 84, arabic: "مَالِكُ الْمُلْكِ", transliteration: "Malik-ul-Mulk", meaning: "Le Possesseur de la royauté" },
  { number: 85, arabic: "ذُوالْجَلاَلِ وَالإكْرَامِ", transliteration: "Dhul-Jalali wal-Ikram", meaning: "Le Seigneur de majesté et de générosité" },
  { number: 86, arabic: "الْمُقْسِطُ", transliteration: "Al-Muqsit", meaning: "L'Équitable" },
  { number: 87, arabic: "الْجَامِعُ", transliteration: "Al-Jami", meaning: "Le Rassembleur" },
  { number: 88, arabic: "الْغَنِيُّ", transliteration: "Al-Ghani", meaning: "Le Riche" },
  { number: 89, arabic: "الْمُغْنِي", transliteration: "Al-Mughni", meaning: "Celui qui enrichit" },
  { number: 90, arabic: "اَلْمَانِعُ", transliteration: "Al-Mani", meaning: "Celui qui empêche" },
  { number: 91, arabic: "الضَّارَّ", transliteration: "Ad-Darr", meaning: "Celui qui peut nuire" },
  { number: 92, arabic: "النَّافِعُ", transliteration: "An-Nafi", meaning: "Celui qui profite" },
  { number: 93, arabic: "النُّورُ", transliteration: "An-Nur", meaning: "La Lumière" },
  { number: 94, arabic: "الْهَادِي", transliteration: "Al-Hadi", meaning: "Le Guide" },
  { number: 95, arabic: "الْبَدِيعُ", transliteration: "Al-Badi", meaning: "L'Inventeur" },
  { number: 96, arabic: "اَلْبَاقِي", transliteration: "Al-Baqi", meaning: "L'Éternel" },
  { number: 97, arabic: "الْوَارِثُ", transliteration: "Al-Warith", meaning: "L'Héritier" },
  { number: 98, arabic: "الرَّشِيدُ", transliteration: "Ar-Rashid", meaning: "Le Bien Dirigé" },
  { number: 99, arabic: "الصَّبُورُ", transliteration: "As-Sabur", meaning: "Le Patient" },
];

const NamesOfAllahPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedName, setSelectedName] = useState<typeof namesOfAllah[0] | null>(null);

  const filteredNames = namesOfAllah.filter(
    (name) =>
      name.transliteration.toLowerCase().includes(searchQuery.toLowerCase()) ||
      name.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      name.arabic.includes(searchQuery)
  );

  return (
    <AppLayout>
      <div className="px-4 py-6">
        <header className="mb-6 flex items-center gap-4">
          <button onClick={() => navigate("/more")} className="p-2 hover:bg-muted rounded-lg">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">99 Noms d'Allah</h1>
            <p className="text-muted-foreground text-sm">Asma ul Husna</p>
          </div>
        </header>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Rechercher un nom..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
        </div>

        {/* Selected Name Modal */}
        {selectedName && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-2xl p-8 max-w-sm w-full text-center">
              <span className="text-6xl font-arabic text-primary mb-4 block">{selectedName.arabic}</span>
              <h3 className="text-xl font-bold text-foreground mb-2">{selectedName.transliteration}</h3>
              <p className="text-muted-foreground mb-6">{selectedName.meaning}</p>
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-primary font-bold">{selectedName.number}</span>
              </div>
              <button
                onClick={() => setSelectedName(null)}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium"
              >
                Fermer
              </button>
            </div>
          </div>
        )}

        {/* Names Grid */}
        <div className="grid grid-cols-2 gap-3">
          {filteredNames.map((name) => (
            <button
              key={name.number}
              onClick={() => setSelectedName(name)}
              className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/30 transition-all"
            >
              <span className="text-2xl font-arabic text-primary block mb-2">{name.arabic}</span>
              <p className="text-foreground font-medium text-sm">{name.transliteration}</p>
              <p className="text-muted-foreground text-xs truncate">{name.meaning}</p>
            </button>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default NamesOfAllahPage;
