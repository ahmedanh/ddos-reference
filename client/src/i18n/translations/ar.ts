export const ar = {
  languageSelect: {
    title: "اختر اللغة",
    english: "الإنجليزية",
    arabic: "العربية"
  },
  common: {
    next: "التالي",
    previous: "السابق",
    copy: "نسخ",
    copied: "تم النسخ!",
    explanation: "الشرح",
    purpose: "الغرض"
  },
  attacks: {
    title: "مرجع أوامر هجمات حجب الخدمة",
    udpFlood: {
      name: "هجوم فيضان UDP",
      explanation: "يغمر عنوان IP الهدف بحزم UDP (منفذ DNS 53) باستخدام عناوين IP عشوائية",
      purpose: "إغراق الخدمات القائمة على UDP (مثل DNS) لاختبار مقاومة حجب الخدمة"
    },
    icmpFlood: {
      name: "فيضان ICMP (فيضان بينج)",
      explanation: "يرسل فيضانًا من حزم ICMP (بينج) إلى عنوان IP الهدف باستخدام عناوين IP مزيفة",
      purpose: "اختبار كيفية تعامل شبكة الهدف مع عواصف طلبات ICMP"
    },
    // Add all 20+ attacks here in Arabic
  }
};
