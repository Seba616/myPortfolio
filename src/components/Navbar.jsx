import { motion } from "framer-motion";
import { Home, User, Code2, FolderGit2, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

function Navbar() {
  const links = [
    { icon: Home, href: "#hero", label: "Inicio" },
    { icon: User, href: "#about", label: "About" },
    { icon: Code2, href: "#skills", label: "Skills" },
    { icon: FolderGit2, href: "#projects", label: "Projects" },
    { icon: Mail, href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/70 dark:bg-black/70 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-lg">
        {links.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={href}
            href={href}
            whileHover={{ scale: 1.3, y: -6 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
            aria-label={label}
          >
            <Icon size={20} />
          </motion.a>
        ))}
        <div className="w-px h-6 bg-neutral-300 dark:bg-neutral-700 mx-1" />
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </nav>
  );
}

export default Navbar;
