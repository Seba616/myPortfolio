import { useLanguage } from "../context/LanguageContext";
import CircuitBackground from "./CircuitBackground";
import profilePic from "../assets/icon.jpeg";

function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-20 pb-8 px-6 max-w-2xl mx-auto bg-white dark:bg-black text-black dark:text-white"
    >
      <CircuitBackground />
      <div className="relative z-10 flex flex-row-reverse items-center gap-6">
        <img
          src={profilePic}
          alt="Foto de perfil de Agustín"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border border-neutral-200 dark:border-neutral-800"
        />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t.heroTitle}</h1>
          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400">
            {t.heroSubtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
