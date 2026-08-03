import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function Contact() {
  const { t } = useLanguage();
  return (
    <section
      id="contact"
      className="pt-8 pb-28 px-6 max-w-2xl mx-auto text-center text-black dark:text-white"
    >
      <h2 className="text-2xl font-bold mb-4">{t.contactTitle}</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-6">
        {t.contactText}
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/Seba616"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub
            size={22}
            className="hover:text-neutral-500 transition-colors"
          />
        </a>

        <a
          href="https://linkedin.com/in/agustín-agurto-047a6438b/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin
            size={22}
            className="hover:text-neutral-500 transition-colors"
          />
        </a>

        <a href="mailto:agustinagurto@gmail.com" aria-label="Email">
          <Mail className="hover:text-neutral-500 transition-colors" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
