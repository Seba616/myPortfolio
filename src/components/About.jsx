import { useLanguage } from "../context/LanguageContext";

function About() {
  const { t } = useLanguage();
  return (
    <section
      id="about"
      className="py-8 px-6 max-w-2xl mx-auto bg-white dark:bg-black text-black dark:text-white"
    >
      <h2 className="text-2xl font-bold mb-4">{t.aboutTitle}</h2>
      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {t.aboutText}
      </p>
    </section>
  );
}

export default About;
