import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [theme, setTheme] = useState("dark");
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const root = window.document.documentElement;
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "sobre", "proyectos", "experiencia", "skills", "contacto"];
      let current = sections[0];
      const activationOffset = 120;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= activationOffset) current = section;
      });

      const reachedPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (reachedPageEnd) current = sections.at(-1);

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const text = {
    es: {
      inicio: "Inicio",
      sobre: "Sobre Mí",
      proyectos: "Proyectos",
      experiencia: "Experiencia",
      skills: "Habilidades",
      contacto: "Contacto",
    },
    en: {
      inicio: "Home",
      sobre: "About Me",
      proyectos: "Projects",
      experiencia: "Experience",
      skills: "Skills",
      contacto: "Contact",
    },
  };

  const t = text[language];
  const isGraySection = ["inicio", "proyectos", "skills"].includes(activeSection);

  return (
    <nav
      className={`fixed top-0 z-[100] w-full border-b backdrop-blur-xl transition-colors duration-300 ${
        isGraySection
          ? "border-slate-200/80 bg-white/90 dark:border-white/10 dark:bg-slate-900/90"
          : "border-slate-200/80 bg-slate-100/90 dark:border-white/10 dark:bg-slate-950/90"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1500px] items-center justify-between px-5 sm:px-8 md:px-10 lg:px-8">
        
        <div className="flex-shrink-0 transition-transform active:scale-95">
          <a href="#inicio" onClick={() => setIsOpen(false)}>
            <Logo className="h-8 sm:h-9 w-auto" />
          </a>
        </div>

        <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
          {Object.entries(t).map(([key, value]) => (
            <li key={key}>
              <a
                href={`#${key}`}
                onClick={() => setActiveSection(key)}
                className={`text-base font-bold tracking-tight transition-all relative group ${
                  activeSection === key
                    ? "text-blue-600"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {value}
                <span
                  className={`absolute -bottom-2 left-0 h-[2.5px] bg-blue-600 rounded-md transition-all duration-300 ${
                    activeSection === key ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="h-9 min-w-9 rounded-md px-2.5 text-xs font-black tracking-[0.12em] text-blue-600 transition-colors hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-950/40"
            onClick={toggleLanguage}
            aria-label={language === "es" ? "Cambiar idioma a inglés" : "Change language to Spanish"}
            title={language === "es" ? "Cambiar a inglés" : "Cambiar a español"}
          >
            {language === "es" ? "ES" : "EN"}
          </Button>

          <span className="mx-1 hidden h-5 w-px bg-border sm:block" aria-hidden="true" />

          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-md text-blue-600 transition-colors hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-950/40"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label={theme === "light" ? "Activar tema oscuro" : "Activar tema claro"}
            title={theme === "light" ? "Tema oscuro" : "Tema claro"}
          >
            {theme === "light" ? (
              <Moon className="h-[18px] w-[18px]" />
            ) : (
              <Sun className="h-[18px] w-[18px]" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden ml-1 text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </Button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute w-full border-b backdrop-blur-xl transition-all duration-500 ease-in-out ${
          isGraySection ? "bg-white/95 dark:bg-slate-900/95" : "bg-slate-100/95 dark:bg-slate-950/95"
        } ${
          isOpen
            ? "max-h-[500px] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <ul className="px-10 py-10 flex flex-col gap-8">
          {Object.entries(t).map(([key, value]) => (
            <li key={key}>
              <a
                href={`#${key}`}
                onClick={() => {
                  setActiveSection(key);
                  setIsOpen(false);
                }}
                className={`text-xl font-black block transition-all ${
                  activeSection === key
                    ? "text-blue-600 translate-x-3"
                    : "text-muted-foreground"
                }`}
              >
                {value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
