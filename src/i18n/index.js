import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import pl from "../locales/pl/translation.json";
import en from "../locales/en/translation.json";

i18n
  .use(LanguageDetector) // detect user language
  .use(initReactI18next)
  .init({
    resources: {
      pl: { translation: pl },
      en: { translation: en },
    },

    fallbackLng: "en", // default language

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"], // remembers user's choice
    },

    interpolation: {
      escapeValue: false, // React already protects against XSS
    },

    load: "languageOnly",
    supportedLngs: ["pl", "en"],
    lowerCaseLng: true,
  });

export default i18n;
