import { BriefcaseBusiness, CalendarDays, Globe2, RefreshCw, Users } from "lucide-react";
import { useState } from "react";
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
      verMasTecnologias: "Ver más tecnologías",
      verMenosTecnologias: "Ver menos",
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
      verMasTecnologias: "View more technologies",
      verMenosTecnologias: "Show less",
    },
  };

  const t = text[language];
  const [isStackExpanded, setIsStackExpanded] = useState(false);
  const [isAnsenuzaStackExpanded, setIsAnsenuzaStackExpanded] = useState(false);

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
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React Router",
    "Vite",
    "Bootstrap",
    "Tailwind CSS",
    "Shadcn/UI",
    "Responsive Design",
    "jQuery",
    "Fetch API",
    "Chart.js",
    "SweetAlert2",
    "Select2",
    "jsPDF",
    "SheetJS",
    "ExcelJS",
    "Face-api.js",
    "Web Camera API",
    "C#",
    "MVC",
    ".NET 8",
    "ASP.NET Web",
    "REST APIs",
    "Entity Framework Core",
    "LINQ",
    "Identity JWT",
    "Authentication & Authorization",
    "Refresh Tokens",
    "Logging",
    "Clean Architecture",
    "Dependency Injection",
    "Background Services",
    "File Handling",
    "SOLID",
    "CORS",
    language === "es" ? "Arquitectura multiempresa" : "Multi-tenant Architecture",
    "SQL Server",
    "T-SQL",
    "Code First",
    language === "es" ? "Consultas SQL" : "SQL Queries",
    language === "es" ? "Migraciones" : "Migrations",
    language === "es" ? "Modelado de datos" : "Data Modeling",
    language === "es" ? "Normalización" : "Normalization",
    language === "es" ? "Índices" : "Indexes",
    language === "es" ? "Transacciones" : "Transactions",
    language === "es" ? "Relaciones y claves foráneas" : "Relationships & Foreign Keys",
    language === "es" ? "Integridad referencial" : "Referential Integrity",
    language === "es" ? "Seed de datos" : "Data Seeding",
    language === "es" ? "Optimización de consultas" : "Query Optimization",
    "Visual Studio",
    "VS Code",
    "Swagger",
    "OpenAPI",
    "Git / GitHub",
    "npm",
    "NuGet",
    ".NET CLI",
    "EF Core Tools",
    "IIS Server",
    "ASP.NET Core Module",
    "dotnet publish",
    "Web.config",
    "Hosting In-Process",
    "SSL/TLS",
    language === "es" ? "Configuración por ambientes" : "Environment Configuration",
    language === "es" ? "Arquitectura de software" : "Software Architecture",
    language === "es" ? "Arquitectura por capas" : "Layered Architecture",
    language === "es" ? "Programación orientada a objetos" : "Object-Oriented Programming",
    language === "es" ? "Patrones de diseño" : "Design Patterns",
    language === "es" ? "Patrón DTO" : "DTO Pattern",
    language === "es" ? "Manejo de excepciones" : "Exception Handling",
    "Refactoring",
    language === "es" ? "Resolución de problemas" : "Problem Solving",
    language === "es" ? "Modelado relacional" : "Relational Modeling",
    language === "es" ? "Trabajo en equipo" : "Teamwork",
    "Code Review",
  ];

  const ansenuzaStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React Router",
    "Vite",
    "Tailwind CSS",
    "Shadcn/UI",
    "Responsive Design",
    "Axios",
    "C#",
    "MVC",
    "DDD",
    ".NET 10",
    "Identity JWT",
    "Authentication & Authorization",
    "Clean Architecture",
    "Fluent Validation",
    "ASP.NET Web",
    "REST APIs",
    "Entity Framework Core",
    "Dependency Injection",
    "SOLID",
    "CORS",
    "LINQ",
    "File Handling",
    "MediatR",
    language === "es" ? "Arquitectura multiempresa" : "Multi-tenant Architecture",
    "SQL Server",
    language === "es" ? "Modelado de datos" : "Data Modeling",
    language === "es" ? "Normalización" : "Normalization",
    language === "es" ? "Índices" : "Indexes",
    language === "es" ? "Transacciones" : "Transactions",
    "Code First",
    language === "es" ? "Migraciones" : "Migrations",
    language === "es" ? "Relaciones y claves foráneas" : "Relationships & Foreign Keys",
    language === "es" ? "Integridad referencial" : "Referential Integrity",
    language === "es" ? "Seed de datos" : "Data Seeding",
    language === "es" ? "Optimización de consultas" : "Query Optimization",
    "VS Code",
    "OpenAPI",
    "Git / GitHub",
    "npm",
    "NuGet",
    ".NET CLI",
    "EF Core Tools",
    "IIS Server",
    "ASP.NET Core Module",
    "dotnet publish",
    "Web.config",
    "Hosting In-Process",
    language === "es" ? "Configuración por ambientes" : "Environment Configuration",
    "SSL/TLS",
    language === "es" ? "Arquitectura de software" : "Software Architecture",
    language === "es" ? "Patrones de diseño" : "Design Patterns",
    language === "es" ? "Programación orientada a objetos" : "Object-Oriented Programming",
    language === "es" ? "Arquitectura por capas" : "Layered Architecture",
    language === "es" ? "Patrón DTO" : "DTO Pattern",
    language === "es" ? "Manejo de excepciones" : "Exception Handling",
    language === "es" ? "Modelado relacional" : "Relational Modeling",
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

          <div className="mb-5">
            <div>
              <div className={`flex flex-wrap gap-2 overflow-hidden ${isStackExpanded ? "max-h-none" : "max-h-28"}`}>
                {loguiSoftStack.map((technology) => (
                  <TechnologyBadge key={technology} name={technology} />
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsStackExpanded((current) => !current)}
              className="mt-3 cursor-pointer rounded-md border border-blue-100 px-3 py-1.5 text-xs font-bold text-blue-600 transition-colors hover:border-blue-300 hover:bg-blue-50 dark:border-blue-900 dark:hover:bg-blue-950/40"
              aria-expanded={isStackExpanded}
            >
              {isStackExpanded ? t.verMenosTecnologias : t.verMasTecnologias}
            </button>
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

          <div>
            <div className={`flex flex-wrap gap-2 overflow-hidden ${isAnsenuzaStackExpanded ? "max-h-none" : "max-h-28"}`}>
              {ansenuzaStack.map((technology) => (
                <TechnologyBadge key={technology} name={technology} />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIsAnsenuzaStackExpanded((current) => !current)}
              className="mt-3 cursor-pointer rounded-md border border-blue-100 px-3 py-1.5 text-xs font-bold text-blue-600 transition-colors hover:border-blue-300 hover:bg-blue-50 dark:border-blue-900 dark:hover:bg-blue-950/40"
              aria-expanded={isAnsenuzaStackExpanded}
            >
              {isAnsenuzaStackExpanded ? t.verMenosTecnologias : t.verMasTecnologias}
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Experience;
