import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";
import translationUZ from "./locales/uz/translation.json";
import usaFlag from "../assets/flag-icons/usa.svg";
import rusFlag from "../assets/flag-icons/rus.svg";
import uzbFlag from "../assets/flag-icons/uzb.png";

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  uz: {
    translation: translationUZ,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    keySeparator: "^",
    nsSeparator: "~",
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export const languageMenu = [
  {
    id: "2987bf89-0a39-4005-b75d-b612526bbd79",
    icon: usaFlag,
    title: "ENG",
    code: "en",
  },
  {
    id: "8acc7d82-d909-4232-b40e-400e8875c271",
    icon: rusFlag,
    title: "RUS",
    code: "ru",
  },
  {
    id: "8acc7d82-d909-4232-b40e-400e8875c222",
    icon: uzbFlag,
    title: "UZB",
    code: "uz",
  },
];

export default i18n;
