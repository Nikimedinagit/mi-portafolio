import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X, Languages } from "lucide-react";
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
      const sections = ["inicio", "sobre", "proyectos", "skills", "contacto"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -200 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const text = {
    es: {
      inicio: "Inicio",
      sobre: "Sobre Mí",
      proyectos: "Proyectos",
      skills: "Habilidades",
      contacto: "Contacto",
    },
    en: {
      inicio: "Home",
      sobre: "About Me",
      proyectos: "Projects",
      skills: "Skills",
      contacto: "Contact",
    },
  };

  const t = text[language];

  return (
    <nav className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-xl z-[100]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 h-16 flex items-center justify-between">
        
        <div className="flex-shrink-0 transition-transform active:scale-95">
          <a href="#inicio" onClick={() => setIsOpen(false)}>
            <Logo className="h-10 sm:h-12 md:h-14 w-auto" />
          </a>
        </div>

        <ul className="hidden lg:flex items-center gap-10 xl:gap-14">
          {Object.entries(t).map(([key, value]) => (
            <li key={key}>
              <a
                href={`#${key}`}
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

        <div className="flex items-center gap-3 md:gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 px-4 font-bold text-base hover:bg-blue-600/10 text-blue-600 transition-all rounded-md"
            onClick={toggleLanguage}
          >
            <Languages className="h-5 w-5 opacity-70" />
            <span className="hidden sm:inline">
              {language === "es" ? "Español" :  "English"}
            </span>
            <span className="sm:hidden">
              {language === "es" ? "ES" : "EN"}
            </span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="rounded-md h-10 w-10 border-muted-foreground/20 hover:border-blue-600/50 transition-all shadow-sm"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <Moon className="h-[18px] w-[18px] text-blue-600" />
            ) : (
              <Sun className="h-[18px] w-[18px] text-yellow-500" />
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
        className={`lg:hidden absolute w-full bg-background border-b transition-all duration-500 ease-in-out ${
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
                onClick={() => setIsOpen(false)}
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