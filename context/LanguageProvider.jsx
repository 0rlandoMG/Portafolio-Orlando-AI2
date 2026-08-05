"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "../locales/en.json";
import es from "../locales/es.json";

const defaultLanguage = "en";
const locales = { en, es };

const LanguageContext = createContext({
  lang: defaultLanguage,
  setLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(defaultLanguage);

  useEffect(() => {
    const storedLang = window.localStorage.getItem("language");
    if (storedLang === "es" || storedLang === "en") {
      setLang(storedLang);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      get: (key, fallback = undefined) => {
        const dictionary = locales[lang] || locales[defaultLanguage];
        const parts = key.split(".");
        let current = dictionary;

        for (const part of parts) {
          if (current && Object.prototype.hasOwnProperty.call(current, part)) {
            current = current[part];
          } else {
            return fallback;
          }
        }

        return current !== undefined ? current : fallback;
      },
      t: (key, fallback = "") => {
        const result = locales[lang] || locales[defaultLanguage];
        const parts = key.split(".");
        let current = result;

        for (const part of parts) {
          if (current && Object.prototype.hasOwnProperty.call(current, part)) {
            current = current[part];
          } else {
            return fallback || key;
          }
        }

        return typeof current === "string" ? current : fallback || key;
      },
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}
