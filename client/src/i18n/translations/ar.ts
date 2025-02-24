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
    purpose: "الغرض",
    selectAttack: "اختر نوع الهجوم"
  },
  glossary: {
    title: "فئات هجمات حجب الخدمة والمصطلحات",
    categories: {
      flood: {
        title: "هجمات الفيضان",
        description: "هذه الهجمات تحاول إغراق الهدف بإرسال كمية كبيرة من حركة المرور.",
        attacks: ["udpFlood", "icmpFlood", "synFlood", "massiveSynFlood", "randomData"]
      },
      scanning: {
        title: "هجمات الفحص والمسح",
        description: "تُستخدم هذه الهجمات لاكتشاف وتحليل نقاط الضعف في الشبكة.",
        attacks: ["tcpFinScan", "tcpAckScan", "mtuTest"]
      },
      protocol: {
        title: "هجمات التلاعب بالبروتوكولات",
        description: "هذه الهجمات تستغل نقاط الضعف في بروتوكولات الشبكة.",
        attacks: ["christmasTree", "ttlManipulation", "spoofedPort", "adjustPacketTiming"]
      },
      data: {
        title: "هجمات التلاعب بالبيانات",
        description: "تركز هذه الهجمات على التلاعب بمحتويات الحزم وأنماط البيانات.",
        attacks: ["icmpExfiltration", "customPattern", "customHttpGet", "fragmentedPacket"]
      },
      tcpip: {
        title: "هجمات على بروتوكول TCP/IP",
        description: "تستهدف هذه الهجمات تطبيقات بروتوكولات الشبكة الأساسية.",
        attacks: ["traceroute", "landAttack"]
      }
    }
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
    fragmentedPacket: {
      name: "هجوم الحزم المجزأة",
      explanation: "يرسل حزم TCP SYN مجزأة إلى المنفذ 80 للهدف",
      purpose: "اختبار كيفية تعامل الهدف مع حركة المرور المجزأة (تقنية تجنب شائعة)"
    },
    tcpFinScan: {
      name: "مسح TCP FIN",
      explanation: "يرسل حزم TCP FIN للمنافذ 1-1000 للتحقق من المنافذ المفتوحة/المغلقة",
      purpose: "مسح المنافذ بشكل خفي (المنافذ المغلقة ترد بـ RST، المفتوحة قد تتجاهل)"
    },
    christmasTree: {
      name: "هجوم شجرة عيد الميلاد TCP",
      explanation: "يرسل حزمًا مع تعيين جميع علامات TCP إلى منفذ SSH للهدف",
      purpose: "اختبار معالجة الحزم المشوهة وإثارة استجابات IDS/IPS"
    },
    customHttpGet: {
      name: "طلب HTTP GET مخصص",
      explanation: "يحقن طلب HTTP GET خام في حزم TCP SYN",
      purpose: "اختبار استجابات خادم الويب أو تجاوز فحص الحزم الأساسي"
    },
    tcpAckScan: {
      name: "مسح TCP ACK",
      explanation: "يرسل حزم TCP ACK لتحديد قواعد جدار الحماية",
      purpose: "تحديد ما إذا كانت المنافذ مفلترة (لا استجابة) أو غير مفلترة (استجابة RST)"
    },
    spoofedPort: {
      name: "منفذ المصدر المزيف",
      explanation: "يستخدم منفذ HTTPS (443) كمصدر مع استهداف منفذ HTTP (80)",
      purpose: "تجنب قواعد جدار الحماية المستندة إلى المنفذ أو محاكاة حركة المرور المشروعة"
    },
    adjustPacketTiming: {
      name: "ضبط توقيت الحزم",
      explanation: "يرسل الحزم على فترات دقيقة (حزمة واحدة لكل مللي ثانية)",
      purpose: "اختبار أداء الشبكة تحت ظروف حركة المرور عالية السرعة"
    },
    icmpExfiltration: {
      name: "تسريب البيانات عبر ICMP",
      explanation: "يضمن البيانات في حمولات صدى ICMP",
      purpose: "محاكاة تسريب البيانات عبر ICMP (غالباً ما يتم تجاهله من قبل المراقبة الأساسية)"
    },
    ttlManipulation: {
      name: "التلاعب بـ TTL",
      explanation: "يضبط قيمة Time-To-Live على 1 للتحكم في وصول الحزمة",
      purpose: "اختبار التصفية المستندة إلى TTL أو إثارة استجابات ICMP Time Exceeded"
    },
    traceroute: {
      name: "تتبع المسار TCP",
      explanation: "يرسم مسار الشبكة عن طريق زيادة قيم TTL",
      purpose: "تحديد نقاط العبور ومشاكل التوجيه إلى منافذ محددة"
    },
    customPattern: {
      name: "نمط بيانات مخصص",
      explanation: "يرسل حزمًا بنمط هكس محدد (0xdeadbeef)",
      purpose: "اختبار كيفية تعامل التطبيقات مع أنماط الحمولة المحددة"
    },
    mtuTest: {
      name: "اختبار حجم MTU",
      explanation: "يرسل حزمة بحجم 1500 بايت لاختبار حدود MTU",
      purpose: "تشخيص مشاكل التجزئة أو عدم تطابق إعدادات MTU"
    },
    synFlood: {
      name: "هجوم فيضان SYN",
      explanation: "يغمر الهدف بحزم TCP SYN على المنفذ 135",
      purpose: "اختبار قدرة الهدف على التعامل مع محاولات اتصال TCP"
    },
    randomData: {
      name: "فيضان البيانات العشوائية",
      explanation: "يرسل كميات كبيرة من البيانات العشوائية إلى الهدف",
      purpose: "اختبار قدرة الهدف على التعامل مع كميات كبيرة من البيانات العشوائية"
    },
    landAttack: {
      name: "هجوم LAND",
      explanation: "يستخدم عنوان IP الهدف نفسه كمصدر ووجهة",
      purpose: "اختبار الحماية ضد هجمات حجب الخدمة الذاتية"
    },
    massiveSynFlood: {
      name: "فيضان SYN هائل",
      explanation: "يرسل 10000 حزمة SYN كبيرة مع عناوين IP عشوائية",
      purpose: "اختبار مقاومة الهدف ضد فيضان TCP عالي الحجم"
    }
  }
};