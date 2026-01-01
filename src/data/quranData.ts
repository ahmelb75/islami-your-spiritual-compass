// Complete list of all 114 surahs of the Quran
export interface Surah {
  number: number;
  name: string;
  arabicName: string;
  englishName: string;
  verses: number;
  revelationType: "Meccan" | "Medinan";
}

export const surahs: Surah[] = [
  { number: 1, name: "Al-Fatiha", arabicName: "الفاتحة", englishName: "The Opening", verses: 7, revelationType: "Meccan" },
  { number: 2, name: "Al-Baqara", arabicName: "البقرة", englishName: "The Cow", verses: 286, revelationType: "Medinan" },
  { number: 3, name: "Al-Imran", arabicName: "آل عمران", englishName: "The Family of Imran", verses: 200, revelationType: "Medinan" },
  { number: 4, name: "An-Nisa", arabicName: "النساء", englishName: "The Women", verses: 176, revelationType: "Medinan" },
  { number: 5, name: "Al-Ma'ida", arabicName: "المائدة", englishName: "The Table Spread", verses: 120, revelationType: "Medinan" },
  { number: 6, name: "Al-An'am", arabicName: "الأنعام", englishName: "The Cattle", verses: 165, revelationType: "Meccan" },
  { number: 7, name: "Al-A'raf", arabicName: "الأعراف", englishName: "The Heights", verses: 206, revelationType: "Meccan" },
  { number: 8, name: "Al-Anfal", arabicName: "الأنفال", englishName: "The Spoils of War", verses: 75, revelationType: "Medinan" },
  { number: 9, name: "At-Tawba", arabicName: "التوبة", englishName: "The Repentance", verses: 129, revelationType: "Medinan" },
  { number: 10, name: "Yunus", arabicName: "يونس", englishName: "Jonah", verses: 109, revelationType: "Meccan" },
  { number: 11, name: "Hud", arabicName: "هود", englishName: "Hud", verses: 123, revelationType: "Meccan" },
  { number: 12, name: "Yusuf", arabicName: "يوسف", englishName: "Joseph", verses: 111, revelationType: "Meccan" },
  { number: 13, name: "Ar-Ra'd", arabicName: "الرعد", englishName: "The Thunder", verses: 43, revelationType: "Medinan" },
  { number: 14, name: "Ibrahim", arabicName: "إبراهيم", englishName: "Abraham", verses: 52, revelationType: "Meccan" },
  { number: 15, name: "Al-Hijr", arabicName: "الحجر", englishName: "The Rocky Tract", verses: 99, revelationType: "Meccan" },
  { number: 16, name: "An-Nahl", arabicName: "النحل", englishName: "The Bee", verses: 128, revelationType: "Meccan" },
  { number: 17, name: "Al-Isra", arabicName: "الإسراء", englishName: "The Night Journey", verses: 111, revelationType: "Meccan" },
  { number: 18, name: "Al-Kahf", arabicName: "الكهف", englishName: "The Cave", verses: 110, revelationType: "Meccan" },
  { number: 19, name: "Maryam", arabicName: "مريم", englishName: "Mary", verses: 98, revelationType: "Meccan" },
  { number: 20, name: "Ta-Ha", arabicName: "طه", englishName: "Ta-Ha", verses: 135, revelationType: "Meccan" },
  { number: 21, name: "Al-Anbiya", arabicName: "الأنبياء", englishName: "The Prophets", verses: 112, revelationType: "Meccan" },
  { number: 22, name: "Al-Hajj", arabicName: "الحج", englishName: "The Pilgrimage", verses: 78, revelationType: "Medinan" },
  { number: 23, name: "Al-Mu'minun", arabicName: "المؤمنون", englishName: "The Believers", verses: 118, revelationType: "Meccan" },
  { number: 24, name: "An-Nur", arabicName: "النور", englishName: "The Light", verses: 64, revelationType: "Medinan" },
  { number: 25, name: "Al-Furqan", arabicName: "الفرقان", englishName: "The Criterion", verses: 77, revelationType: "Meccan" },
  { number: 26, name: "Ash-Shu'ara", arabicName: "الشعراء", englishName: "The Poets", verses: 227, revelationType: "Meccan" },
  { number: 27, name: "An-Naml", arabicName: "النمل", englishName: "The Ant", verses: 93, revelationType: "Meccan" },
  { number: 28, name: "Al-Qasas", arabicName: "القصص", englishName: "The Stories", verses: 88, revelationType: "Meccan" },
  { number: 29, name: "Al-Ankabut", arabicName: "العنكبوت", englishName: "The Spider", verses: 69, revelationType: "Meccan" },
  { number: 30, name: "Ar-Rum", arabicName: "الروم", englishName: "The Romans", verses: 60, revelationType: "Meccan" },
  { number: 31, name: "Luqman", arabicName: "لقمان", englishName: "Luqman", verses: 34, revelationType: "Meccan" },
  { number: 32, name: "As-Sajda", arabicName: "السجدة", englishName: "The Prostration", verses: 30, revelationType: "Meccan" },
  { number: 33, name: "Al-Ahzab", arabicName: "الأحزاب", englishName: "The Combined Forces", verses: 73, revelationType: "Medinan" },
  { number: 34, name: "Saba", arabicName: "سبأ", englishName: "Sheba", verses: 54, revelationType: "Meccan" },
  { number: 35, name: "Fatir", arabicName: "فاطر", englishName: "The Originator", verses: 45, revelationType: "Meccan" },
  { number: 36, name: "Ya-Sin", arabicName: "يس", englishName: "Ya-Sin", verses: 83, revelationType: "Meccan" },
  { number: 37, name: "As-Saffat", arabicName: "الصافات", englishName: "Those Ranged in Ranks", verses: 182, revelationType: "Meccan" },
  { number: 38, name: "Sad", arabicName: "ص", englishName: "Sad", verses: 88, revelationType: "Meccan" },
  { number: 39, name: "Az-Zumar", arabicName: "الزمر", englishName: "The Groups", verses: 75, revelationType: "Meccan" },
  { number: 40, name: "Ghafir", arabicName: "غافر", englishName: "The Forgiver", verses: 85, revelationType: "Meccan" },
  { number: 41, name: "Fussilat", arabicName: "فصلت", englishName: "Explained in Detail", verses: 54, revelationType: "Meccan" },
  { number: 42, name: "Ash-Shura", arabicName: "الشورى", englishName: "The Consultation", verses: 53, revelationType: "Meccan" },
  { number: 43, name: "Az-Zukhruf", arabicName: "الزخرف", englishName: "The Gold Adornment", verses: 89, revelationType: "Meccan" },
  { number: 44, name: "Ad-Dukhan", arabicName: "الدخان", englishName: "The Smoke", verses: 59, revelationType: "Meccan" },
  { number: 45, name: "Al-Jathiya", arabicName: "الجاثية", englishName: "The Kneeling", verses: 37, revelationType: "Meccan" },
  { number: 46, name: "Al-Ahqaf", arabicName: "الأحقاف", englishName: "The Wind-Curved Sandhills", verses: 35, revelationType: "Meccan" },
  { number: 47, name: "Muhammad", arabicName: "محمد", englishName: "Muhammad", verses: 38, revelationType: "Medinan" },
  { number: 48, name: "Al-Fath", arabicName: "الفتح", englishName: "The Victory", verses: 29, revelationType: "Medinan" },
  { number: 49, name: "Al-Hujurat", arabicName: "الحجرات", englishName: "The Rooms", verses: 18, revelationType: "Medinan" },
  { number: 50, name: "Qaf", arabicName: "ق", englishName: "Qaf", verses: 45, revelationType: "Meccan" },
  { number: 51, name: "Adh-Dhariyat", arabicName: "الذاريات", englishName: "The Winnowing Winds", verses: 60, revelationType: "Meccan" },
  { number: 52, name: "At-Tur", arabicName: "الطور", englishName: "The Mount", verses: 49, revelationType: "Meccan" },
  { number: 53, name: "An-Najm", arabicName: "النجم", englishName: "The Star", verses: 62, revelationType: "Meccan" },
  { number: 54, name: "Al-Qamar", arabicName: "القمر", englishName: "The Moon", verses: 55, revelationType: "Meccan" },
  { number: 55, name: "Ar-Rahman", arabicName: "الرحمن", englishName: "The Most Merciful", verses: 78, revelationType: "Medinan" },
  { number: 56, name: "Al-Waqi'a", arabicName: "الواقعة", englishName: "The Inevitable", verses: 96, revelationType: "Meccan" },
  { number: 57, name: "Al-Hadid", arabicName: "الحديد", englishName: "The Iron", verses: 29, revelationType: "Medinan" },
  { number: 58, name: "Al-Mujadila", arabicName: "المجادلة", englishName: "The Pleading Woman", verses: 22, revelationType: "Medinan" },
  { number: 59, name: "Al-Hashr", arabicName: "الحشر", englishName: "The Exile", verses: 24, revelationType: "Medinan" },
  { number: 60, name: "Al-Mumtahina", arabicName: "الممتحنة", englishName: "She That is to be Examined", verses: 13, revelationType: "Medinan" },
  { number: 61, name: "As-Saff", arabicName: "الصف", englishName: "The Ranks", verses: 14, revelationType: "Medinan" },
  { number: 62, name: "Al-Jumu'a", arabicName: "الجمعة", englishName: "Friday", verses: 11, revelationType: "Medinan" },
  { number: 63, name: "Al-Munafiqun", arabicName: "المنافقون", englishName: "The Hypocrites", verses: 11, revelationType: "Medinan" },
  { number: 64, name: "At-Taghabun", arabicName: "التغابن", englishName: "The Mutual Disillusion", verses: 18, revelationType: "Medinan" },
  { number: 65, name: "At-Talaq", arabicName: "الطلاق", englishName: "The Divorce", verses: 12, revelationType: "Medinan" },
  { number: 66, name: "At-Tahrim", arabicName: "التحريم", englishName: "The Prohibition", verses: 12, revelationType: "Medinan" },
  { number: 67, name: "Al-Mulk", arabicName: "الملك", englishName: "The Sovereignty", verses: 30, revelationType: "Meccan" },
  { number: 68, name: "Al-Qalam", arabicName: "القلم", englishName: "The Pen", verses: 52, revelationType: "Meccan" },
  { number: 69, name: "Al-Haqqah", arabicName: "الحاقة", englishName: "The Reality", verses: 52, revelationType: "Meccan" },
  { number: 70, name: "Al-Ma'arij", arabicName: "المعارج", englishName: "The Ascending Stairways", verses: 44, revelationType: "Meccan" },
  { number: 71, name: "Nuh", arabicName: "نوح", englishName: "Noah", verses: 28, revelationType: "Meccan" },
  { number: 72, name: "Al-Jinn", arabicName: "الجن", englishName: "The Jinn", verses: 28, revelationType: "Meccan" },
  { number: 73, name: "Al-Muzzammil", arabicName: "المزمل", englishName: "The Enshrouded One", verses: 20, revelationType: "Meccan" },
  { number: 74, name: "Al-Muddaththir", arabicName: "المدثر", englishName: "The Cloaked One", verses: 56, revelationType: "Meccan" },
  { number: 75, name: "Al-Qiyama", arabicName: "القيامة", englishName: "The Resurrection", verses: 40, revelationType: "Meccan" },
  { number: 76, name: "Al-Insan", arabicName: "الإنسان", englishName: "Man", verses: 31, revelationType: "Medinan" },
  { number: 77, name: "Al-Mursalat", arabicName: "المرسلات", englishName: "The Emissaries", verses: 50, revelationType: "Meccan" },
  { number: 78, name: "An-Naba", arabicName: "النبأ", englishName: "The Tidings", verses: 40, revelationType: "Meccan" },
  { number: 79, name: "An-Nazi'at", arabicName: "النازعات", englishName: "Those Who Drag Forth", verses: 46, revelationType: "Meccan" },
  { number: 80, name: "Abasa", arabicName: "عبس", englishName: "He Frowned", verses: 42, revelationType: "Meccan" },
  { number: 81, name: "At-Takwir", arabicName: "التكوير", englishName: "The Overthrowing", verses: 29, revelationType: "Meccan" },
  { number: 82, name: "Al-Infitar", arabicName: "الإنفطار", englishName: "The Cleaving", verses: 19, revelationType: "Meccan" },
  { number: 83, name: "Al-Mutaffifin", arabicName: "المطففين", englishName: "The Defrauding", verses: 36, revelationType: "Meccan" },
  { number: 84, name: "Al-Inshiqaq", arabicName: "الإنشقاق", englishName: "The Sundering", verses: 25, revelationType: "Meccan" },
  { number: 85, name: "Al-Buruj", arabicName: "البروج", englishName: "The Mansions of the Stars", verses: 22, revelationType: "Meccan" },
  { number: 86, name: "At-Tariq", arabicName: "الطارق", englishName: "The Morning Star", verses: 17, revelationType: "Meccan" },
  { number: 87, name: "Al-A'la", arabicName: "الأعلى", englishName: "The Most High", verses: 19, revelationType: "Meccan" },
  { number: 88, name: "Al-Ghashiya", arabicName: "الغاشية", englishName: "The Overwhelming", verses: 26, revelationType: "Meccan" },
  { number: 89, name: "Al-Fajr", arabicName: "الفجر", englishName: "The Dawn", verses: 30, revelationType: "Meccan" },
  { number: 90, name: "Al-Balad", arabicName: "البلد", englishName: "The City", verses: 20, revelationType: "Meccan" },
  { number: 91, name: "Ash-Shams", arabicName: "الشمس", englishName: "The Sun", verses: 15, revelationType: "Meccan" },
  { number: 92, name: "Al-Layl", arabicName: "الليل", englishName: "The Night", verses: 21, revelationType: "Meccan" },
  { number: 93, name: "Ad-Duha", arabicName: "الضحى", englishName: "The Morning Hours", verses: 11, revelationType: "Meccan" },
  { number: 94, name: "Ash-Sharh", arabicName: "الشرح", englishName: "The Relief", verses: 8, revelationType: "Meccan" },
  { number: 95, name: "At-Tin", arabicName: "التين", englishName: "The Fig", verses: 8, revelationType: "Meccan" },
  { number: 96, name: "Al-Alaq", arabicName: "العلق", englishName: "The Clot", verses: 19, revelationType: "Meccan" },
  { number: 97, name: "Al-Qadr", arabicName: "القدر", englishName: "The Power", verses: 5, revelationType: "Meccan" },
  { number: 98, name: "Al-Bayyina", arabicName: "البينة", englishName: "The Clear Proof", verses: 8, revelationType: "Medinan" },
  { number: 99, name: "Az-Zalzala", arabicName: "الزلزلة", englishName: "The Earthquake", verses: 8, revelationType: "Medinan" },
  { number: 100, name: "Al-Adiyat", arabicName: "العاديات", englishName: "The Courser", verses: 11, revelationType: "Meccan" },
  { number: 101, name: "Al-Qari'a", arabicName: "القارعة", englishName: "The Calamity", verses: 11, revelationType: "Meccan" },
  { number: 102, name: "At-Takathur", arabicName: "التكاثر", englishName: "The Rivalry in World Increase", verses: 8, revelationType: "Meccan" },
  { number: 103, name: "Al-Asr", arabicName: "العصر", englishName: "The Declining Day", verses: 3, revelationType: "Meccan" },
  { number: 104, name: "Al-Humaza", arabicName: "الهمزة", englishName: "The Traducer", verses: 9, revelationType: "Meccan" },
  { number: 105, name: "Al-Fil", arabicName: "الفيل", englishName: "The Elephant", verses: 5, revelationType: "Meccan" },
  { number: 106, name: "Quraysh", arabicName: "قريش", englishName: "Quraysh", verses: 4, revelationType: "Meccan" },
  { number: 107, name: "Al-Ma'un", arabicName: "الماعون", englishName: "The Small Kindnesses", verses: 7, revelationType: "Meccan" },
  { number: 108, name: "Al-Kawthar", arabicName: "الكوثر", englishName: "The Abundance", verses: 3, revelationType: "Meccan" },
  { number: 109, name: "Al-Kafirun", arabicName: "الكافرون", englishName: "The Disbelievers", verses: 6, revelationType: "Meccan" },
  { number: 110, name: "An-Nasr", arabicName: "النصر", englishName: "The Divine Support", verses: 3, revelationType: "Medinan" },
  { number: 111, name: "Al-Masad", arabicName: "المسد", englishName: "The Palm Fiber", verses: 5, revelationType: "Meccan" },
  { number: 112, name: "Al-Ikhlas", arabicName: "الإخلاص", englishName: "The Sincerity", verses: 4, revelationType: "Meccan" },
  { number: 113, name: "Al-Falaq", arabicName: "الفلق", englishName: "The Daybreak", verses: 5, revelationType: "Meccan" },
  { number: 114, name: "An-Nas", arabicName: "الناس", englishName: "Mankind", verses: 6, revelationType: "Meccan" },
];

// Famous Quran reciters with their audio API identifiers and photos
export interface Reciter {
  id: string;
  name: string;
  arabicName: string;
  style: string;
  photo: string;
}

// Only reciters with working audio from the Islamic Network CDN
export const reciters: Reciter[] = [
  { 
    id: "ar.alafasy", 
    name: "Mishary Rashid Alafasy", 
    arabicName: "مشاري راشد العفاسي", 
    style: "Murattal",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mishary_rashid_alafasy.jpg/220px-Mishary_rashid_alafasy.jpg"
  },
  { 
    id: "ar.abdulbasitmurattal", 
    name: "Abdul Basit Abdul Samad", 
    arabicName: "عبد الباسط عبد الصمد", 
    style: "Murattal",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Abdulbasit_Abdulsamad.jpg/220px-Abdulbasit_Abdulsamad.jpg"
  },
  { 
    id: "ar.hudhaify", 
    name: "Ali Al-Hudhaify", 
    arabicName: "علي الحذيفي", 
    style: "Murattal",
    photo: "https://i.scdn.co/image/ab6761610000e5eb4e7f1d8b5c3e5c4e8f9a0b1c"
  },
  { 
    id: "ar.husary", 
    name: "Mahmoud Khalil Al-Husary", 
    arabicName: "محمود خليل الحصري", 
    style: "Murattal",
    photo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Mahmoud_Khalil_Al-Hussary.jpg"
  },
  { 
    id: "ar.mahermuaiqly", 
    name: "Maher Al Muaiqly", 
    arabicName: "ماهر المعيقلي", 
    style: "Murattal",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Maher_Al_Mueaqly.jpg/220px-Maher_Al_Mueaqly.jpg"
  },
  { 
    id: "ar.minshawi", 
    name: "Mohamed Siddiq Al-Minshawi", 
    arabicName: "محمد صديق المنشاوي", 
    style: "Murattal",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Al-Minshawi.jpg/220px-Al-Minshawi.jpg"
  },
  { 
    id: "ar.muhammadayyoub", 
    name: "Muhammad Ayyub", 
    arabicName: "محمد أيوب", 
    style: "Murattal",
    photo: "https://i1.sndcdn.com/artworks-000164150061-0hv9sa-t500x500.jpg"
  },
  { 
    id: "ar.shaatree", 
    name: "Abu Bakr Al-Shatri", 
    arabicName: "أبو بكر الشاطري", 
    style: "Murattal",
    photo: "https://i.scdn.co/image/ab6761610000e5eb1e6a9a6a3e8c3e5c4e8f9a0b"
  },
];

// Get audio URL for a specific surah and reciter
export const getAudioUrl = (surahNumber: number, reciterId: string): string => {
  return `https://cdn.islamic.network/quran/audio-surah/128/${reciterId}/${surahNumber}.mp3`;
};
