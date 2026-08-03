import { useLanguage } from "../context/LanguageContext";

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-sm font-medium"
      aria-label="Cambiar idioma"
    >
      {language === "es" ? "EN" : "ES"}
    </button>
  );
}

export default LanguageToggle;
