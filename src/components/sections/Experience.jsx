import { BriefcaseBusiness, CalendarDays, Globe2, RefreshCw, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import TechnologyBadge from "@/components/TechnologyBadge";

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
      freelanceFecha: "Mayo 2025 — Actualidad",
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
      freelanceFecha: "May 2025 — Present",
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
      color: "#7C3AED",
    },
    {
      icon: RefreshCw,
      title: t.sueldosTitulo,
      date: t.sueldosFecha,
      description: t.sueldosDescripcion,
      color: "#0891B2",
    },
  ];

  const loguiSoftStack = [
    "React",
    "Vite",
    ".NET 10",
    ".NET 8",
    "ASP.NET Web",
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

            <span className="inline-flex w-fit items-center gap-2 rounded-md border border-amber-200/70 bg-amber-50/70 py-1.5 pl-1.5 pr-3 text-xs font-bold text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/20 dark:text-amber-400">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-100 dark:bg-amber-950/50">
                <CalendarDays size={14} />
              </span>
              {t.fecha}
            </span>
          </header>

          <p className="max-w-4xl py-5 text-base leading-7 text-muted-foreground">
            {t.descripcion}
          </p>

          <div className="mb-5 flex flex-wrap gap-2">
            {loguiSoftStack.map((technology) => (
              <TechnologyBadge key={technology} name={technology} />
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {workstreams.map((workstream) => (
              <div key={workstream.title} className="rounded-lg border border-slate-200 bg-slate-50/70 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md"
                      style={{ color: workstream.color, backgroundColor: `${workstream.color}14` }}
                      aria-hidden="true"
                    >
                      <workstream.icon size={17} />
                    </span>
                    <h4 className="font-black tracking-tight text-foreground">{workstream.title}</h4>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-muted-foreground">
                    <CalendarDays size={13} className="shrink-0 text-amber-500" />
                    {workstream.date}
                  </span>
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

            <span className="inline-flex w-fit items-center gap-2 rounded-md border border-amber-200/70 bg-amber-50/70 py-1.5 pl-1.5 pr-3 text-xs font-bold text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/20 dark:text-amber-400">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-100 dark:bg-amber-950/50">
                <CalendarDays size={14} />
              </span>
              {t.freelanceFecha}
            </span>
          </header>

          <p className="max-w-5xl py-5 text-base leading-7 text-muted-foreground">
            {t.freelanceDescripcion}
          </p>

          <div className="flex flex-wrap gap-2">
            {["React", "Vite", ".NET 10", "DDD", "SQL Server", "DonWeb", "SSL/TLS"].map((technology) => (
              <TechnologyBadge key={technology} name={technology} />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Experience;
