import { useLanguage } from "@/context/LanguageContext";
import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";
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
    { icon: Linkedin, url: "https://www.linkedin.com/in/ignacio-medina3/", label: "LinkedIn" },
    { icon: Github, url: "https://github.com/Nikimedinagit", label: "GitHub" },
    { icon: Mail, url: "mailto:ignaciomedina333@gmail.com", label: "Email" },
  ];

  return (
    <footer className="w-full py-4 border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-2">
          
          <div className="flex-1 flex justify-start">
            <Logo className="h-8 w-auto" />
          </div>

          <div className="flex items-center gap-8 flex-1 justify-center">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-600 transition-all hover:-translate-y-1 cursor-pointer"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div className="flex-1 flex justify-end">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 text-[12px] font-black uppercase tracking-widest text-muted-foreground hover:text-blue-600 transition-all cursor-pointer border border-border/40 px-4 py-2 rounded-md hover:bg-muted"
            >
              <ArrowUp size={14} className=" transition-transform" />
              <span>{t.irArriba}</span>
            </button>
          </div>
        </div>

        <div className="border-t border-border/10 w-full text-center">
          <p className="text-[12px] font-bold tracking-[0.2em] text-muted-foreground">
            © {year} — {t.derechos}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;