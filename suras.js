// suras.js
// Master list of all 114 surahs with basic metadata.
// Ayah arrays are left empty for now so UI can be tested and later filled.

const SURAS = [
  {
    number: 1,
    nameArabic: "الفاتحة",
    nameEnglish: "Al-Faatiha",
    nameBangla: "আল-ফাতিহা",
    totalAyah: 7,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 2,
    nameArabic: "البقرة",
    nameEnglish: "Al-Baqarah",
    nameBangla: "আল-বাকারা",
    totalAyah: 286,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 3,
    nameArabic: "آل عمران",
    nameEnglish: "Aal Imran",
    nameBangla: "আলে ইমরান",
    totalAyah: 200,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 4,
    nameArabic: "النساء",
    nameEnglish: "An-Nisa",
    nameBangla: "আন-নিসা",
    totalAyah: 176,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 5,
    nameArabic: "المائدة",
    nameEnglish: "Al-Ma'idah",
    nameBangla: "আল-মায়িদা",
    totalAyah: 120,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 6,
    nameArabic: "الأنعام",
    nameEnglish: "Al-An'am",
    nameBangla: "আল-আনআম",
    totalAyah: 165,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 7,
    nameArabic: "الأعراف",
    nameEnglish: "Al-A'raf",
    nameBangla: "আল-আ'রাফ",
    totalAyah: 206,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 8,
    nameArabic: "الأنفال",
    nameEnglish: "Al-Anfal",
    nameBangla: "আল-আনফাল",
    totalAyah: 75,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 9,
    nameArabic: "التوبة",
    nameEnglish: "At-Tawbah",
    nameBangla: "আত-তাওবা",
    totalAyah: 129,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 10,
    nameArabic: "يونس",
    nameEnglish: "Yunus",
    nameBangla: "ইউনুস",
    totalAyah: 109,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 11,
    nameArabic: "هود",
    nameEnglish: "Hud",
    nameBangla: "হুদ",
    totalAyah: 123,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 12,
    nameArabic: "يوسف",
    nameEnglish: "Yusuf",
    nameBangla: "ইউসুফ",
    totalAyah: 111,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 13,
    nameArabic: "الرعد",
    nameEnglish: "Ar-Ra'd",
    nameBangla: "আর-রা'দ",
    totalAyah: 43,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 14,
    nameArabic: "إبراهيم",
    nameEnglish: "Ibrahim",
    nameBangla: "ইব্রাহীম",
    totalAyah: 52,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 15,
    nameArabic: "الحجر",
    nameEnglish: "Al-Hijr",
    nameBangla: "আল-হিজর",
    totalAyah: 99,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 16,
    nameArabic: "النحل",
    nameEnglish: "An-Nahl",
    nameBangla: "আন-নাহল",
    totalAyah: 128,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 17,
    nameArabic: "الإسراء",
    nameEnglish: "Al-Isra",
    nameBangla: "আল-ইসরা",
    totalAyah: 111,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 18,
    nameArabic: "الكهف",
    nameEnglish: "Al-Kahf",
    nameBangla: "আল-কাহফ",
    totalAyah: 110,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 19,
    nameArabic: "مريم",
    nameEnglish: "Maryam",
    nameBangla: "মারইয়াম",
    totalAyah: 98,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 20,
    nameArabic: "طه",
    nameEnglish: "Ta-Ha",
    nameBangla: "ত্বা-হা",
    totalAyah: 135,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 21,
    nameArabic: "الأنبياء",
    nameEnglish: "Al-Anbiya",
    nameBangla: "আল-আম্বিয়া",
    totalAyah: 112,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 22,
    nameArabic: "الحج",
    nameEnglish: "Al-Hajj",
    nameBangla: "আল-হাজ্জ",
    totalAyah: 78,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 23,
    nameArabic: "المؤمنون",
    nameEnglish: "Al-Mu'minun",
    nameBangla: "আল-মু'মিনুন",
    totalAyah: 118,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 24,
    nameArabic: "النور",
    nameEnglish: "An-Nur",
    nameBangla: "আন-নূর",
    totalAyah: 64,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 25,
    nameArabic: "الفرقان",
    nameEnglish: "Al-Furqan",
    nameBangla: "আল-ফুরকান",
    totalAyah: 77,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 26,
    nameArabic: "الشعراء",
    nameEnglish: "Ash-Shu'ara",
    nameBangla: "আশ-শু'আরা",
    totalAyah: 227,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 27,
    nameArabic: "النمل",
    nameEnglish: "An-Naml",
    nameBangla: "আন-নামল",
    totalAyah: 93,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 28,
    nameArabic: "القصص",
    nameEnglish: "Al-Qasas",
    nameBangla: "আল-কাসাস",
    totalAyah: 88,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 29,
    nameArabic: "العنكبوت",
    nameEnglish: "Al-Ankabut",
    nameBangla: "আল-আনকাবুত",
    totalAyah: 69,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 30,
    nameArabic: "الروم",
    nameEnglish: "Ar-Rum",
    nameBangla: "আর-রূম",
    totalAyah: 60,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 31,
    nameArabic: "لقمان",
    nameEnglish: "Luqman",
    nameBangla: "লুকমান",
    totalAyah: 34,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 32,
    nameArabic: "السجدة",
    nameEnglish: "As-Sajdah",
    nameBangla: "আস-সাজদা",
    totalAyah: 30,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 33,
    nameArabic: "الأحزاب",
    nameEnglish: "Al-Ahzab",
    nameBangla: "আল-আহযাব",
    totalAyah: 73,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 34,
    nameArabic: "سبإ",
    nameEnglish: "Saba",
    nameBangla: "সাবা",
    totalAyah: 54,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 35,
    nameArabic: "فاطر",
    nameEnglish: "Fatir",
    nameBangla: "ফাতির",
    totalAyah: 45,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 36,
    nameArabic: "يس",
    nameEnglish: "Ya-Sin",
    nameBangla: "ইয়াসিন",
    totalAyah: 83,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 37,
    nameArabic: "الصافات",
    nameEnglish: "As-Saffat",
    nameBangla: "আস-সাফফাত",
    totalAyah: 182,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 38,
    nameArabic: "ص",
    nameEnglish: "Sad",
    nameBangla: "সাদ",
    totalAyah: 88,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 39,
    nameArabic: "الزمر",
    nameEnglish: "Az-Zumar",
    nameBangla: "আয-যুমার",
    totalAyah: 75,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 40,
    nameArabic: "غافر",
    nameEnglish: "Ghafir",
    nameBangla: "গাফির",
    totalAyah: 85,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 41,
    nameArabic: "فصلت",
    nameEnglish: "Fussilat",
    nameBangla: "ফুসসিলাত",
    totalAyah: 54,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 42,
    nameArabic: "الشورى",
    nameEnglish: "Ash-Shura",
    nameBangla: "আশ-শুরা",
    totalAyah: 53,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 43,
    nameArabic: "الزخرف",
    nameEnglish: "Az-Zukhruf",
    nameBangla: "আয-যুখরুফ",
    totalAyah: 89,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 44,
    nameArabic: "الدخان",
    nameEnglish: "Ad-Dukhan",
    nameBangla: "আদ-দুখান",
    totalAyah: 59,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 45,
    nameArabic: "الجاثية",
    nameEnglish: "Al-Jathiyah",
    nameBangla: "আল-জাসিয়াহ",
    totalAyah: 37,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 46,
    nameArabic: "الأحقاف",
    nameEnglish: "Al-Ahqaf",
    nameBangla: "আল-আহকাফ",
    totalAyah: 35,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 47,
    nameArabic: "محمد",
    nameEnglish: "Muhammad",
    nameBangla: "মুহাম্মদ",
    totalAyah: 38,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 48,
    nameArabic: "الفتح",
    nameEnglish: "Al-Fath",
    nameBangla: "আল-ফাতহ",
    totalAyah: 29,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 49,
    nameArabic: "الحجرات",
    nameEnglish: "Al-Hujurat",
    nameBangla: "আল-হুজুরাত",
    totalAyah: 18,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 50,
    nameArabic: "ق",
    nameEnglish: "Qaf",
    nameBangla: "কাফ",
    totalAyah: 45,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 51,
    nameArabic: "الذاريات",
    nameEnglish: "Adh-Dhariyat",
    nameBangla: "আয-যারিয়াত",
    totalAyah: 60,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 52,
    nameArabic: "الطور",
    nameEnglish: "At-Tur",
    nameBangla: "আত-তুর",
    totalAyah: 49,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 53,
    nameArabic: "النجم",
    nameEnglish: "An-Najm",
    nameBangla: "আন-নাজম",
    totalAyah: 62,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 54,
    nameArabic: "القمر",
    nameEnglish: "Al-Qamar",
    nameBangla: "আল-কামার",
    totalAyah: 55,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 55,
    nameArabic: "الرحمن",
    nameEnglish: "Ar-Rahman",
    nameBangla: "আর-রাহমান",
    totalAyah: 78,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 56,
    nameArabic: "الواقعة",
    nameEnglish: "Al-Waqi'ah",
    nameBangla: "আল-ওয়াকিআহ",
    totalAyah: 96,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 57,
    nameArabic: "الحديد",
    nameEnglish: "Al-Hadid",
    nameBangla: "আল-হাদীদ",
    totalAyah: 29,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 58,
    nameArabic: "المجادلة",
    nameEnglish: "Al-Mujadila",
    nameBangla: "আল-মুজাদিলা",
    totalAyah: 22,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 59,
    nameArabic: "الحشر",
    nameEnglish: "Al-Hashr",
    nameBangla: "আল-হাশর",
    totalAyah: 24,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 60,
    nameArabic: "الممتحنة",
    nameEnglish: "Al-Mumtahanah",
    nameBangla: "আল-মুমতাহিনা",
    totalAyah: 13,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 61,
    nameArabic: "الصف",
    nameEnglish: "As-Saff",
    nameBangla: "আস-সাফ",
    totalAyah: 14,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 62,
    nameArabic: "الجمعة",
    nameEnglish: "Al-Jumu'ah",
    nameBangla: "আল-জুমুআ",
    totalAyah: 11,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 63,
    nameArabic: "المنافقون",
    nameEnglish: "Al-Munafiqun",
    nameBangla: "আল-মুনাফিকুন",
    totalAyah: 11,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 64,
    nameArabic: "التغابن",
    nameEnglish: "At-Taghabun",
    nameBangla: "আত-তাগাবুন",
    totalAyah: 18,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 65,
    nameArabic: "الطلاق",
    nameEnglish: "At-Talaq",
    nameBangla: "আত-তালাক",
    totalAyah: 12,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 66,
    nameArabic: "التحريم",
    nameEnglish: "At-Tahrim",
    nameBangla: "আত-তাহরিম",
    totalAyah: 12,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 67,
    nameArabic: "الملك",
    nameEnglish: "Al-Mulk",
    nameBangla: "আল-মুলক",
    totalAyah: 30,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 68,
    nameArabic: "القلم",
    nameEnglish: "Al-Qalam",
    nameBangla: "আল-কলম",
    totalAyah: 52,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 69,
    nameArabic: "الحاقة",
    nameEnglish: "Al-Haqqah",
    nameBangla: "আল-হাক্কাহ",
    totalAyah: 52,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 70,
    nameArabic: "المعارج",
    nameEnglish: "Al-Ma'arij",
    nameBangla: "আল-মা'আরিজ",
    totalAyah: 44,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 71,
    nameArabic: "نوح",
    nameEnglish: "Nuh",
    nameBangla: "নূহ",
    totalAyah: 28,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 72,
    nameArabic: "الجن",
    nameEnglish: "Al-Jinn",
    nameBangla: "আল-জিন",
    totalAyah: 28,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 73,
    nameArabic: "المزمل",
    nameEnglish: "Al-Muzzammil",
    nameBangla: "আল-মুজ্জাম্মিল",
    totalAyah: 20,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 74,
    nameArabic: "المدثر",
    nameEnglish: "Al-Muddaththir",
    nameBangla: "আল-মুদ্দাসসির",
    totalAyah: 56,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 75,
    nameArabic: "القيامة",
    nameEnglish: "Al-Qiyamah",
    nameBangla: "আল-কিয়ামাহ",
    totalAyah: 40,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 76,
    nameArabic: "الانسان",
    nameEnglish: "Al-Insan",
    nameBangla: "আল-ইনসান",
    totalAyah: 31,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 77,
    nameArabic: "المرسلات",
    nameEnglish: "Al-Mursalat",
    nameBangla: "আল-মুরসালাত",
    totalAyah: 50,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 78,
    nameArabic: "النبإ",
    nameEnglish: "An-Naba",
    nameBangla: "আন-নাবা",
    totalAyah: 40,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 79,
    nameArabic: "النازعات",
    nameEnglish: "An-Nazi'at",
    nameBangla: "আন-নাজিয়াত",
    totalAyah: 46,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 80,
    nameArabic: "عبس",
    nameEnglish: "Abasa",
    nameBangla: "আবাসা",
    totalAyah: 42,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 81,
    nameArabic: "التكوير",
    nameEnglish: "At-Takwir",
    nameBangla: "আত-তাকভীর",
    totalAyah: 29,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 82,
    nameArabic: "الانفطار",
    nameEnglish: "Al-Infitar",
    nameBangla: "আল-ইনফিতার",
    totalAyah: 19,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 83,
    nameArabic: "المطففين",
    nameEnglish: "Al-Mutaffifin",
    nameBangla: "আল-মুতাফফিফিন",
    totalAyah: 36,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 84,
    nameArabic: "الانشقاق",
    nameEnglish: "Al-Inshiqaq",
    nameBangla: "আল-ইনশিকাক",
    totalAyah: 25,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 85,
    nameArabic: "البروج",
    nameEnglish: "Al-Buruj",
    nameBangla: "আল-বরূজ",
    totalAyah: 22,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 86,
    nameArabic: "الطارق",
    nameEnglish: "At-Tariq",
    nameBangla: "আত-তারিক",
    totalAyah: 17,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 87,
    nameArabic: "الأعلى",
    nameEnglish: "Al-A'la",
    nameBangla: "আল-আ'লা",
    totalAyah: 19,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 88,
    nameArabic: "الغاشية",
    nameEnglish: "Al-Ghashiyah",
    nameBangla: "আল-গাশিয়াহ",
    totalAyah: 26,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 89,
    nameArabic: "الفجر",
    nameEnglish: "Al-Fajr",
    nameBangla: "আল-ফাজর",
    totalAyah: 30,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 90,
    nameArabic: "البلد",
    nameEnglish: "Al-Balad",
    nameBangla: "আল- البلد",
    totalAyah: 20,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 91,
    nameArabic: "الشمس",
    nameEnglish: "Ash-Shams",
    nameBangla: "আশ-শামস",
    totalAyah: 15,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 92,
    nameArabic: "الليل",
    nameEnglish: "Al-Layl",
    nameBangla: "আল-লাইল",
    totalAyah: 21,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 93,
    nameArabic: "الضحى",
    nameEnglish: "Ad-Duha",
    nameBangla: "আদ-দুহা",
    totalAyah: 11,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 94,
    nameArabic: "الشرح",
    nameEnglish: "Ash-Sharh",
    nameBangla: "আশ-শারহ",
    totalAyah: 8,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 95,
    nameArabic: "التين",
    nameEnglish: "At-Tin",
    nameBangla: "আত-তীন",
    totalAyah: 8,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 96,
    nameArabic: "العلق",
    nameEnglish: "Al-Alaq",
    nameBangla: "আল-আলাক",
    totalAyah: 19,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 97,
    nameArabic: "القدر",
    nameEnglish: "Al-Qadr",
    nameBangla: "আল-কদর",
    totalAyah: 5,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 98,
    nameArabic: "البينة",
    nameEnglish: "Al-Bayyinah",
    nameBangla: "আল-বাইয়্যিনাহ",
    totalAyah: 8,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 99,
    nameArabic: "الزلزلة",
    nameEnglish: "Az-Zalzalah",
    nameBangla: "আয-যালযালাহ",
    totalAyah: 8,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 100,
    nameArabic: "العاديات",
    nameEnglish: "Al-Adiyat",
    nameBangla: "আল-আদিয়াত",
    totalAyah: 11,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 101,
    nameArabic: "القارعة",
    nameEnglish: "Al-Qari'ah",
    nameBangla: "আল-কারিয়াহ",
    totalAyah: 11,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 102,
    nameArabic: "التكاثر",
    nameEnglish: "At-Takathur",
    nameBangla: "আত-তাকাসুর",
    totalAyah: 8,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 103,
    nameArabic: "العصر",
    nameEnglish: "Al-Asr",
    nameBangla: "আল-আসর",
    totalAyah: 3,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 104,
    nameArabic: "الهمزة",
    nameEnglish: "Al-Humazah",
    nameBangla: "আল-হুমাযাহ",
    totalAyah: 9,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 105,
    nameArabic: "الفيل",
    nameEnglish: "Al-Fil",
    nameBangla: "আল-ফীল",
    totalAyah: 5,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 106,
    nameArabic: "قريش",
    nameEnglish: "Quraysh",
    nameBangla: "কুরাইশ",
    totalAyah: 4,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 107,
    nameArabic: "الماعون",
    nameEnglish: "Al-Ma'un",
    nameBangla: "আল-মাউন",
    totalAyah: 7,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 108,
    nameArabic: "الكوثر",
    nameEnglish: "Al-Kawthar",
    nameBangla: "আল-কাউসার",
    totalAyah: 3,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 109,
    nameArabic: "الكافرون",
    nameEnglish: "Al-Kafirun",
    nameBangla: "আল-কাফিরুন",
    totalAyah: 6,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 110,
    nameArabic: "النصر",
    nameEnglish: "An-Nasr",
    nameBangla: "আন-নাসর",
    totalAyah: 3,
    revelationPlace: "Madani",
    ayahs: []
  },
  {
    number: 111,
    nameArabic: "المسد",
    nameEnglish: "Al-Masad",
    nameBangla: "আল-মাসাদ",
    totalAyah: 5,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 112,
    nameArabic: "الإخلاص",
    nameEnglish: "Al-Ikhlas",
    nameBangla: "আল-ইখলাস",
    totalAyah: 4,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 113,
    nameArabic: "الفلق",
    nameEnglish: "Al-Falaq",
    nameBangla: "আল-ফালাক",
    totalAyah: 5,
    revelationPlace: "Makki",
    ayahs: []
  },
  {
    number: 114,
    nameArabic: "الناس",
    nameEnglish: "An-Nas",
    nameBangla: "আন-নাস",
    totalAyah: 6,
    revelationPlace: "Makki",
    ayahs: []
  }
];
