// suras.js

// গ্লোবাল ভ্যারিয়েবল হিসেবে suras ডিফাইন করছি
const suras = [
  {
    number: 102,
    nameAr: "سورة التكاثر",
    nameBn: "আত-তাকাসুর",
    type: "Makki",
    ayahCount: 8,
    file: "surah_102.json"
  },
  {
    number: 103,
    nameAr: "سورة العصر",
    nameBn: "আল-'আসর",
    type: "Makki",
    ayahCount: 3,
    file: "surah_103.json"
  },
  {
    number: 104,
    nameAr: "سورة الهمزة",
    nameBn: "আল-হুমাযাহ",
    type: "Makki",
    ayahCount: 9,
    file: "surah_104.json"
  }
];

console.log("✅ suras.js loaded, total suras:", suras.length);
