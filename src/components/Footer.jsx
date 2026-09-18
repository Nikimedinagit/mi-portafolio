import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp } from "lucide-react";
import { SiGithub, SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import Logo from "./Logo"; 

const Footer = () => {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  const text = {
    es: { 
      derechos: "Todos los derechos reservados",
      irArriba: "Arriba" 
    },
    en: { 
      derechos: "All rights reserved",
      irArriba: "Top" 
    },
  };

  const t = text[language];

  const socialLinks = [
    { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/ignacio-esteban-medina-047226160/", label: "LinkedIn", color: "#0A66C2", background: "bg-blue-50 dark:bg-blue-950/30" },
    { icon: SiGithub, url: "https://github.com/Nikimedinagit", label: "GitHub", color: "#64748B", background: "bg-slate-100 dark:bg-white/5" },
    { icon: SiGmail, url: "mailto:ignaciomedina333@gmail.com", label: "Email", color: "#EA4335", background: "bg-red-50 dark:bg-red-950/30" },
  ];

  return (
    <footer className="w-full border-t border-border/60 bg-background">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-8">
        <div className="flex flex-col items-center gap-3 py-3 sm:flex-row sm:justify-between">
          <Logo className="h-7 w-auto shrink-0" />

          <p className="order-3 text-center text-xs font-medium text-muted-foreground sm:order-none">
            © {year} · {t.derechos}
          </p>

          <div className="flex items-center gap-1">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-8 w-8 items-center justify-center rounded-md border border-transparent transition-all hover:-translate-y-px hover:border-slate-200 hover:shadow-sm dark:hover:border-white/10 ${social.background}`}
                style={{ color: social.color }}
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}

            <span className="mx-1 h-4 w-px bg-border" aria-hidden="true" />

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex h-8 cursor-pointer items-center gap-1.5 rounded-md px-2 text-xs font-bold text-muted-foreground transition-all hover:-translate-y-px hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950/30"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-blue-600 transition-transform group-hover:-translate-y-0.5 dark:bg-blue-950/30">
                <ArrowUp size={13} />
              </span>
              <span>{t.irArriba}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
