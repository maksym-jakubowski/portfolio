import React, { useState } from "react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("EN");

  const languages = ["EN", "PL"];

  return (
    <div className="flex items-center justify-center bg-slate-950 text-xs">
      {" "}
      {/* Tło tylko dla podglądu */}
      <div className="relative flex bg-slate-900/50 rounded-full p-1 w-fit">
        {/* Ruchome tło (akcent) */}
        <div
          className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-slate-800/80 rounded-full transition-transform duration-300 ease-in-out ${
            language === "PL" ? "translate-x-full" : "translate-x-0"
          }`}
        />

        {/* Przyciski */}
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`relative z-10 px-4 py-1.5 font-semibold transition-colors duration-300 flex flex-col items-center ${
              language === lang
                ? "text-indigo-400"
                : "text-slate-200 hover:text-indigo-400"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
