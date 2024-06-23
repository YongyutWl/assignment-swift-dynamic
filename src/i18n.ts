import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import th from "./locale/th.json";
import en from "./locale/en.json";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "th",
    resources: {
      en: {
        translation: en,
      },
      th: {
        translation: th,
      },
    },
    supportedLngs: ["en", "th"],
    fallbackLng: "en",
  });

export default i18n;
