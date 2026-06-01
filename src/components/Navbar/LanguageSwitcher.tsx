import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const languages = ["en", "pl"];
  const { i18n } = useTranslation();
  const currentLang = i18n.resolvedLanguage?.split("-")[0];

  return (
    <div className="flex items-center justify-center text-sm">
      <div className="relative flex bg--surface rounded-full p-1 w-fit">
        <div
          className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full transition-transform duration-300 ease-in-out bg-slate-200 dark:bg-slate-800 ${
            currentLang === "pl" ? "translate-x-full" : "translate-x-0"
          }`}
        />

        {/* pl / en buttons */}
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => i18n.changeLanguage(lang)}
            className={`relative uppercase z-10 px-4 py-1.5 font-semibold transition-colors duration-300 flex flex-col items-center cursor-pointer   ${
              currentLang === lang
                ? "t-primary"
                : " hover:text-primary dark:hover:text-dark-primary"
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
