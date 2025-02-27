import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./translations/en";
import { ar } from "./translations/ar";

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18next;
