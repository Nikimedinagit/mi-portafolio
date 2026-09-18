import { useLanguage } from "@/context/LanguageContext";
import { CircleCheckBig, MapPin, GraduationCap, CalendarDays } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const About = () => {
  const { language } = useLanguage();

  const text = {
    es: {
      titulo: "Sobre Mí",
      descripcion1:
        "Soy Técnico Superior en Desarrollo de Software por la Universidad Provincial de Córdoba (UPC), desempeñándome como Desarrollador Full Stack con un enfoque directo en resolver problemas reales. Me especializo en cubrir todo el ciclo de vida de una aplicación: desde el diseño de la lógica de negocio y APIs robustas hasta interfaces modernas y funcionales.",
      descripcion2:
        "Mi día a día transcurre en el ecosistema .NET para el backend, React en el frontend y SQL Server para la gestión de datos. Esta combinación me permite construir soluciones web completas, seguras y bien estructuradas.",
      descripcion3:
        "Mi prioridad es escribir código limpio y escalable, aplicando buenas prácticas de arquitectura que faciliten el mantenimiento a largo plazo. Entiendo el software como una herramienta que debe evolucionar, por lo que busco la mejora continua en cada solución que desarrollo.",
      labelEdad: "Edad",
      labelUbica: "Ubicación",
      labelUni: "Formación",
      labelEstado: "Estado",
      edadDetalle: "22 años",
      uniNombre: "Universidad Provincial de Córdoba (UPC)",
      estadoDesc: "Abierto a nuevos desafíos.",
    },
    en: {
      titulo: "About Me",
      descripcion1:
        "I am a Higher Technician in Software Development from Universidad Provincial de Córdoba (UPC), working as a Full Stack Developer with a direct focus on solving real problems. I specialize in covering the entire application lifecycle: from business logic and robust API design to modern and functional interfaces.",
      descripcion2:
        "My daily work involves the .NET ecosystem for the backend, React for the frontend, and SQL Server for data management. This combination allows me to build complete, secure, and well-structured web solutions.",
      descripcion3:
        "My priority is writing clean and scalable code, applying architectural best practices that facilitate long-term maintenance. I understand software as a tool that must evolve, so I seek continuous improvement in every solution I develop.",
      labelEdad: "Age",
      labelUbica: "Location",
      labelUni: "Education",
      labelEstado: "Status",
      edadDetalle: "22 years old",
      uniNombre: "Universidad Provincial de Córdoba (UPC)",
      estadoDesc: "Open to new challenges.",
    },
  };

  const t = text[language];

  const infoCards = [
    { icon: CalendarDays, label: t.labelEdad, detail: t.edadDetalle, color: "#D97706" },
    { icon: MapPin, label: t.labelUbica, detail: "Morteros, Cba, Argentina", color: "#EA4335" },
    { icon: GraduationCap, label: t.labelUni, detail: t.uniNombre, color: "#7C3AED" },
    { icon: CircleCheckBig, label: t.labelEstado, detail: t.estadoDesc, color: "#16A34A" },
  ];

  return (
    <section className="py-8">
      <SectionHeader title={t.titulo} />

      <div className="mb-8 flex flex-wrap gap-2.5">
        {infoCards.map((item) => (
          <div
            key={item.label}
            className="group inline-flex min-h-11 items-center gap-2.5 rounded-full border border-slate-200 bg-slate-50 py-1.5 pl-1.5 pr-3.5 text-sm transition-all hover:-translate-y-px hover:bg-white hover:shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.07]"
          >
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform group-hover:scale-105"
              style={{ color: item.color, backgroundColor: `${item.color}14` }}
              aria-hidden="true"
            >
              <item.icon className="h-4 w-4" strokeWidth={2.3} />
            </span>
            <span className="font-semibold text-muted-foreground">{item.label}</span>
            <span className="h-4 w-px bg-slate-200 dark:bg-white/10" aria-hidden="true" />
            <span className="font-bold text-foreground">{item.detail}</span>
          </div>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-14">
        <p className="text-base font-medium leading-7 text-foreground/85 text-pretty md:text-lg md:leading-8">
          {t.descripcion1}
        </p>
        <p className="text-base font-medium leading-7 text-foreground/85 text-pretty md:text-lg md:leading-8">
          {t.descripcion2}
        </p>
      </div>

      <div className="mt-8 flex w-full gap-4 rounded-lg border border-blue-100 bg-blue-50/60 p-5 dark:border-blue-900/50 dark:bg-blue-950/20 md:p-6">
        <div className="w-1 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
        <p className="text-base font-medium leading-7 text-foreground/80 text-pretty md:text-lg md:leading-8">
          {t.descripcion3}
        </p>
      </div>
    </section>
  );
};

export default About;
