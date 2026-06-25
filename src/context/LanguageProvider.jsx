/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useCallback } from "react";
import es from "../i18n/es.json";
import en from "../i18n/en.json";

const translations = { es, en };
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "es");

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "es" ? "en" : "es";
      localStorage.setItem("lang", next);
      return next;
    });
  }, []);

  const t = useCallback(
    (key, replacements) => {
      let value = translations[lang][key] || translations.es[key] || key;
      if (replacements) {
        Object.entries(replacements).forEach(([k, v]) => {
          value = value.replace(`{${k}}`, v);
        });
      }
      return value;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
