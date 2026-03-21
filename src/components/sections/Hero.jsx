import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, Download, ArrowDown } from "lucide-react";
import miFoto from "@/assets/mi-foto-perfil.png";
import miCv from "@/assets/Cv-Ignacio-Medina.pdf";

const Hero = () => {
  const { language } = useLanguage();

  const text = {
    es: {
      saludo: "Hola, soy",
      profesion: "Desarrollador Full Stack",
      btnCv: "Descargar CV",
    },
    en: {
      saludo: "Hi, I'm",
      profesion: "Full Stack Developer",
      btnCv: "Download CV",
    },
  };

  const t = text[language];

  const socialLinks = [
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ignacio-esteban-medina-047226160/",
      label: "LinkedIn",
      hoverColor: "hover:text-[#0077b5]",
    },
    {
      icon: Github,
      url: "https://github.com/Nikimedinagit",
      label: "GitHub",
      hoverColor: "hover:text-[#333] dark:hover:text-white",
    },
    {
      icon: Mail,
      url: "mailto:ignaciomedina333@gmail.com",
      label: "Gmail",
      hoverColor: "hover:text-[#ea4335]",
    },
  ];

  return (
    <section
      id="inicio"
      className="relative mb-20 min-h-screen flex items-center justify-center bg-background overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 z-10 w-full">
      
        <div className="flex-1 text-center md:text-left order-1 md:order-1 flex flex-col items-center md:items-start">
          <div className="mb-8">
            <p className="text-blue-600 text-xl md:text-3xl font-medium tracking-tight">
              {t.saludo}
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-foreground tracking-tighter leading-[1.1]">
              Ignacio Medina
            </h1>

            <p className="text-xl md:text-3xl font-medium text-muted-foreground mt-2">
              {t.profesion}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5 w-full sm:w-auto">
            <Button
              size="lg"
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white gap-3 font-bold px-10 h-14 rounded-md shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-1.5 active:scale-95 cursor-pointer w-full sm:w-auto"
            >
              <a href={miCv} download="Cv-Ignacio-Medina.pdf">
                <Download size={22} strokeWidth={2.5} />
                {t.btnCv}
              </a>
            </Button>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, url, label, hoverColor }) => (
                <Button
                  key={label}
                  size="icon"
                  variant="ghost"
                  className={`rounded-md h-14 w-14 bg-muted text-muted-foreground transition-all duration-300 hover:bg-muted/80 ${hoverColor} hover:-translate-y-1.5 active:scale-95 cursor-pointer`}
                  asChild
                >
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Icon size={28} strokeWidth={2.2} />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 order-2 md:order-2 mt-8 md:mt-0">
          <div className="relative">
            <div className="relative rounded-full p-2 bg-background border-2 border-blue-600/10">
              <img
                src={miFoto}
                alt="Ignacio Medina"
                className="rounded-full object-cover h-60 w-60 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px] transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-80 cursor-pointer hidden md:block">
        <a href="#sobre" className="cursor-pointer">
          <ArrowDown className="h-8 w-8 animate-bounce text-blue-600" />
        </a>
      </div>
    </section>
  );
};

export default Hero;