import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Github,
  Mail,
  Download,
  ArrowDown,
  ArrowRight,
  MapPin,
} from "lucide-react";
import miFoto from "@/assets/mi-foto-perfil.png";
import miCv from "@/assets/Ignacio_Medina_CV.pdf";

const Hero = () => {
  const { language } = useLanguage();

  const text = {
    es: {
      saludo: "Hola, soy",
      profesion: "Técnico Superior en Desarrollo de Software",
      descripcion:
        "Desarrollo aplicaciones web completas con React, .NET y SQL Server, transformando necesidades reales en soluciones claras, sólidas y escalables.",
      disponible: "Disponible para nuevos desafíos",
      ubicacion: "Morteros, Córdoba",
      btnProyectos: "Ver proyectos",
      btnCv: "Descargar CV",
    },
    en: {
      saludo: "Hi, I'm",
      profesion: "Higher Technician in Software Development",
      descripcion:
        "I build complete web applications with React, .NET and SQL Server, turning real needs into clear, solid and scalable solutions.",
      disponible: "Available for new opportunities",
      ubicacion: "Morteros, Córdoba",
      btnProyectos: "View projects",
      btnCv: "Download CV",
    },
  };

  const t = text[language];

  const socialLinks = [
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ignacio-esteban-medina-047226160/",
      label: "LinkedIn",
      hoverColor: "hover:border-[#0077b5]/40 hover:text-[#0077b5]",
    },
    {
      icon: Github,
      url: "https://github.com/Nikimedinagit",
      label: "GitHub",
      hoverColor: "hover:border-foreground/30 hover:text-foreground",
    },
    {
      icon: Mail,
      url: "mailto:ignaciomedina333@gmail.com",
      label: "Email",
      hoverColor: "hover:border-[#ea4335]/40 hover:text-[#ea4335]",
    },
  ];

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-100 pt-14 dark:bg-slate-950"
    >
      <div className="absolute inset-0 -z-20 bg-slate-100 dark:bg-slate-950" />
      <div className="absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-600/10" />
      <div className="absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-500/10" />

      <div className="z-10 grid w-full max-w-[1500px] grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:px-8 lg:py-12">
      
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-7">
            <p className="text-lg font-semibold tracking-tight text-blue-600 md:text-xl">
              {t.saludo}
            </p>

            <h1 className="text-5xl font-black leading-[0.98] tracking-tighter text-foreground sm:text-6xl xl:text-7xl">
              Ignacio Esteban Medina
            </h1>

            <p className="mt-4 text-lg font-bold text-foreground/80 sm:text-xl">
              {t.profesion}
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              {t.descripcion}
            </p>
          </div>

          <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
            <Button
              size="lg"
              asChild
              className="h-11 w-full gap-2 rounded-md bg-blue-600 px-5 font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto"
            >
              <a href="#proyectos">
                {t.btnProyectos}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-11 w-full gap-2 rounded-md border-slate-300 bg-white/60 px-5 font-bold shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10 sm:w-auto"
            >
              <a href={miCv} download="Cv-Ignacio-Medina.pdf">
                <Download className="h-4 w-4" />
                {t.btnCv}
              </a>
            </Button>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-9 items-center gap-2 rounded-md border border-transparent px-2.5 text-sm font-semibold text-muted-foreground transition-all hover:bg-white/70 dark:hover:bg-white/5 ${social.hoverColor}`}
              >
                <social.icon className="h-4 w-4" />
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end lg:pr-8">
          <div className="relative isolate">
            <div className="absolute -inset-8 -z-10 rounded-full border border-blue-200/50 dark:border-blue-800/30" />
            <div className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-br from-blue-100 to-white shadow-[0_30px_80px_-35px_rgba(37,99,235,0.55)] dark:from-blue-950 dark:to-slate-900" />

            <div className="overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-2xl shadow-blue-900/10 dark:border-slate-800 dark:bg-slate-900">
              <img
                src={miFoto}
                alt="Ignacio Esteban Medina, desarrollador Full Stack"
                className="h-64 w-64 object-contain sm:h-80 sm:w-80 xl:h-[390px] xl:w-[390px]"
              />
            </div>

            <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-md border border-blue-100 bg-white/95 px-3 py-2 text-xs font-bold text-blue-700 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-900/95 dark:text-blue-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]" />
              {t.disponible}
            </div>

            <div className="absolute -bottom-3 left-2 flex items-center gap-2 whitespace-nowrap rounded-md border border-blue-100 bg-white/95 px-3 py-2 text-xs font-bold text-slate-600 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-900/95 dark:text-slate-300 sm:left-0">
              <MapPin className="h-3.5 w-3.5 text-blue-600" />
              {t.ubicacion}
            </div>

            <div className="absolute -bottom-3 right-2 flex items-center gap-2 whitespace-nowrap rounded-md border border-blue-100 bg-white/95 px-3 py-2 text-xs font-bold text-slate-700 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-900/95 dark:text-slate-200 sm:right-0">
              <span className="text-blue-600">Full Stack</span>
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
