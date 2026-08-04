import { BriefcaseBusiness, CalendarDays, Globe2, RefreshCw, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/SectionHeader";

const Experience = () => {
  const { language } = useLanguage();

  const text = {
    es: {
      titulo: "Experiencia",
      puesto: "Desarrollador Full Stack",
      fecha: "Enero 2026 — Actualidad",
      descripcion:
        "Desarrollo y evolución de soluciones empresariales junto a LoguiSoft, participando en frontend, APIs, lógica de negocio, datos y publicación de actualizaciones en el servidor.",
      worksyncTitulo: "LoguiRRHH",
      worksyncFecha: "Enero 2026 — Actualidad",
      worksyncDescripcion:
        "Desarrollo y mejora continua de una plataforma integral para centralizar la gestión de Recursos Humanos.",
      sueldosTitulo: "LoguiSueldo",
      sueldosFecha: "Febrero 2026 — Actualidad",
      sueldosDescripcion:
        "Modernización progresiva de un sistema empresarial legado construido en FoxPro, llevándolo hacia una arquitectura web con React y .NET.",
      freelancePuesto: "Desarrollador Full Stack Freelance",
      freelanceFecha: "Proyecto freelance",
      freelanceDescripcion:
        "Desarrollo integral de la plataforma pública y el panel administrativo autogestionable de Desafíos Ansenuza, incluyendo API, autenticación, inscripciones, contenidos, despliegue y mantenimiento en servidor.",
    },
    en: {
      titulo: "Experience",
      puesto: "Full Stack Developer",
      fecha: "January 2026 — Present",
      descripcion:
        "Development and evolution of business solutions alongside LoguiSoft, contributing to frontend, APIs, business logic, data, and server deployments.",
      worksyncTitulo: "LoguiRRHH",
      worksyncFecha: "January 2026 — Present",
      worksyncDescripcion:
        "Ongoing development and improvement of a comprehensive platform that centralizes Human Resources management.",
      sueldosTitulo: "LoguiSueldo",
      sueldosFecha: "February 2026 — Present",
      sueldosDescripcion:
        "Progressive modernization of a legacy business system built with FoxPro, moving it to a web architecture with React and .NET.",
      freelancePuesto: "Freelance Full Stack Developer",
      freelanceFecha: "Freelance project",
      freelanceDescripcion:
        "End-to-end development of the public platform and self-managed administration panel for Desafíos Ansenuza, including API, authentication, registrations, content, deployment, and server maintenance.",
    },
  };

  const t = text[language];

  const workstreams = [
    {
      icon: Users,
      title: t.worksyncTitulo,
      date: t.worksyncFecha,
      description: t.worksyncDescripcion,
    },
    {
      icon: RefreshCw,
      title: t.sueldosTitulo,
      date: t.sueldosFecha,
      description: t.sueldosDescripcion,
    },
  ];

  const loguiSoftStack = [
    "React",
    "Vite",
    ".NET",
    "ASP.NET Web API",
    "MVC",
    "C#",
    "SQL Server",
    "HTML",
    "CSS",
    "JavaScript",
    "Git / GitHub",
    "Postman",
    "Swagger",
  ];

  return (
    <section>
      <SectionHeader title={t.titulo} />

      <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
        <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300" />

        <div className="p-5 sm:p-6">
          <header className="flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-start sm:justify-between dark:border-white/10">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <BriefcaseBusiness size={21} />
              </span>
              <div>
                <h3 className="text-xl font-black tracking-tight text-foreground">LoguiSoft</h3>
                <p className="text-sm font-bold text-blue-600">{t.puesto}</p>
              </div>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-md bg-slate-100 px-3 py-2 text-xs font-bold text-muted-foreground dark:bg-white/5">
              <CalendarDays size={14} className="text-blue-600" />
              {t.fecha}
            </span>
          </header>

          <p className="max-w-4xl py-5 text-base leading-7 text-muted-foreground">
            {t.descripcion}
          </p>

          <div className="mb-5 flex flex-wrap gap-2">
            {loguiSoftStack.map((technology) => (
              <span key={technology} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600 dark:bg-white/5 dark:text-slate-300">
                {technology}
              </span>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {workstreams.map((workstream) => (
              <div key={workstream.title} className="rounded-lg border border-slate-200 bg-slate-50/70 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <workstream.icon size={18} className="text-blue-600" />
                    <h4 className="font-black tracking-tight text-foreground">{workstream.title}</h4>
                  </div>
                  <span className="text-[11px] font-bold text-muted-foreground">{workstream.date}</span>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">{workstream.description}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      <article className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
        <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300" />

        <div className="p-5 sm:p-6">
          <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600">
                <Globe2 size={21} />
              </span>
              <div>
                <h3 className="text-xl font-black tracking-tight text-foreground">Desafíos Ansenuza</h3>
                <p className="text-sm font-bold text-blue-600">{t.freelancePuesto}</p>
              </div>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-md bg-slate-100 px-3 py-2 text-xs font-bold text-muted-foreground dark:bg-white/5">
              <CalendarDays size={14} className="text-blue-600" />
              {t.freelanceFecha}
            </span>
          </header>

          <p className="max-w-5xl py-5 text-base leading-7 text-muted-foreground">
            {t.freelanceDescripcion}
          </p>

          <div className="flex flex-wrap gap-2">
            {["React", "Vite", ".NET 10", "Arquitectura DDD", "SQL Server", "DonWeb", "SSL/TLS"].map((technology) => (
              <span key={technology} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600 dark:bg-white/5 dark:text-slate-300">
                {technology}
              </span>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Experience;
