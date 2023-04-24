import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { shapePl } from "./pl/shapePl";
import { shapeEn } from "./en/shapeEn";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)

  .init({
    //debug: true,
    fallbackLng: "pl",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      pl: shapePl,
      en: shapeEn,
    },
  });

export default i18n;
