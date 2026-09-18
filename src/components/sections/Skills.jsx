import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import {
  Server,
  Database,
  Layout,
  Wrench,
  Cpu,
  BadgeCheck,
  Braces,
  Boxes,
  ClipboardCheck,
  Cloud,
  Code2,
  Component,
  FileCode2,
  Layers3,
  ListChecks,
  MonitorSmartphone,
  Network,
  PlugZap,
  RefreshCw,
  Search,
  ShieldCheck,
  ScrollText,
  TableProperties,
  Users,
  Workflow,
} from "lucide-react";
import {
  SiBootstrap,
  SiChartdotjs,
  SiCss,
  SiDotnet,
  SiFilezilla,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLinux,
  SiNpm,
  SiNuget,
  SiOpenapiinitiative,
  SiPostman,
  SiReact,
  SiReactrouter,
  SiShadcnui,
  SiSharp,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const Skills = () => {
  const { language } = useLanguage();

  const text = {
    es: {
      titulo: "Habilidades",
      frontend: "Frontend",
      backend: "Backend",
      database: "Base de Datos",
      tools: "Herramientas",
      deploy: "Deploy",
      methodologies: "Metodologías y conceptos",
      enfoqueLabel: "Enfoque Principal",
      enfoqueTitulo: "Arquitectura Limpia",
      enfoqueY: "&",
      enfoqueSub: "Escalabilidad",
      frase:
        "“Especializado en crear puentes sólidos entre backends robustos y experiencias de usuario fluidas.”",
    },
    en: {
      titulo: "Skills",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      tools: "Tools",
      deploy: "Deployment",
      methodologies: "Methodologies & Concepts",
      enfoqueLabel: "Main Focus",
      enfoqueTitulo: "Clean Architecture",
      enfoqueY: "&",
      enfoqueSub: "Scalability",
      frase:
        "“Specialized in creating solid bridges between robust backends and smooth user experiences.”",
    },
  };

  const t = text[language];

  const skill = (name, icon, color) => ({ name, icon, color });

  const skillGroups = [
    {
      category: t.frontend,
      icon: Layout,
      columns: "sm:grid-cols-3",
      skills: [
        skill("HTML", SiHtml5, "#E34F26"),
        skill("CSS", SiCss, "#663399"),
        skill("JavaScript", SiJavascript, "#F7DF1E"),
        skill("TypeScript", SiTypescript, "#3178C6"),
        skill("React", SiReact, "#61DAFB"),
        skill("React Router", SiReactrouter, "#CA4245"),
        skill("Vite", SiVite, "#646CFF"),
        skill("Tailwind CSS", SiTailwindcss, "#06B6D4"),
        skill("Shadcn/UI", SiShadcnui, "#71717A"),
        skill("Bootstrap", SiBootstrap, "#7952B3"),
        skill("Chart.js", SiChartdotjs, "#FF6384"),
        skill("jsPDF", FileCode2, "#E63946"),
        skill("Responsive Design", MonitorSmartphone, "#0EA5E9"),
      ],
    },
    {
      category: t.backend,
      icon: Server,
      columns: "sm:grid-cols-3",
      skills: [
        skill("C#", SiSharp, "#239120"),
        skill("MVC", Boxes, "#2563EB"),
        skill("DDD", Boxes, "#0F766E"),
        skill(".NET 10", SiDotnet, "#512BD4"),
        skill(".NET 8", SiDotnet, "#512BD4"),
        skill("Identity JWT", SiJsonwebtokens, "#D63AFF"),
        skill("Authentication & Authorization", ShieldCheck, "#16A34A"),
        skill("Logging", ScrollText, "#D97706"),
        skill("Clean Architecture", Layers3, "#0891B2"),
        skill("Fluent Validation", BadgeCheck, "#16A34A"),
        skill("ASP.NET Web", SiDotnet, "#512BD4"),
        skill("REST APIs", Network, "#2563EB"),
        skill("Entity Framework Core", SiDotnet, "#512BD4"),
        skill("Dependency Injection", PlugZap, "#D97706"),
        skill("SOLID", Component, "#0284C7"),
        skill("CORS", Network, "#EA580C"),
        skill("LINQ", Braces, "#7C3AED"),
      ],
    },
    {
      category: t.database, 
      icon: Database,
      columns: "sm:grid-cols-2 xl:grid-cols-3",
      skills: [
        skill("SQL Server", Database, "#CC2927"),
        skill(
          language === "es" ? "Procedimientos almacenados" : "Stored Procedures",
          Braces,
          "#CC2927",
        ),
        skill(language === "es" ? "Modelado de datos" : "Data Modeling", Boxes, "#0F766E"),
        skill("T-SQL", Database, "#CC2927"),
        skill(language === "es" ? "Consultas SQL" : "SQL Queries", Search, "#2563EB"),
        skill(language === "es" ? "Normalización" : "Normalization", TableProperties, "#0F766E"),
        skill(language === "es" ? "Índices" : "Indexes", ListChecks, "#7C3AED"),
        skill(language === "es" ? "Transacciones" : "Transactions", Workflow, "#D97706"),
      ],
    },
    {
      category: t.tools, 
      icon: Wrench,
      columns: "sm:grid-cols-3",
      skills: [
        skill("Visual Studio", Code2, "#A855F7"),
        skill("VS Code", Code2, "#007ACC"),
        skill("Azure Data Studio", Database, "#0078D4"),
        skill("Swagger", SiSwagger, "#85EA2D"),
        skill("OpenAPI", SiOpenapiinitiative, "#6BA539"),
        skill("Postman", SiPostman, "#FF6C37"),
        skill("Git / GitHub", SiGithub, "#64748B"),
        skill("npm", SiNpm, "#CB3837"),
        skill("NuGet", SiNuget, "#004880"),
      ],
    },
    {
      category: t.deploy,
      icon: Cloud,
      columns: "sm:grid-cols-3 xl:grid-cols-6",
      skills: [
        skill("IIS Server", Server, "#0078D4"),
        skill("Monster ASP.NET", SiDotnet, "#512BD4"),
        skill("DonWeb", Cloud, "#2563EB"),
        skill("SSL/TLS", ShieldCheck, "#16A34A"),
        skill("FileZilla", SiFilezilla, "#BF0000"),
        skill("Linux", SiLinux, "#FCC624"),
      ],
    },
    {
      category: t.methodologies,
      icon: Users,
      columns: "sm:grid-cols-2 xl:grid-cols-4",
      skills: [
        skill("Scrum", Users, "#2563EB"),
        skill("Agile", RefreshCw, "#0891B2"),
        skill(
          language === "es" ? "Arquitectura de software" : "Software Architecture",
          Layers3,
          "#7C3AED",
        ),
        skill(language === "es" ? "Patrones de diseño" : "Design Patterns", Workflow, "#D97706"),
        skill("Code Review", ClipboardCheck, "#16A34A"),
        skill("Refactoring", Component, "#0284C7"),
        skill(
          language === "es" ? "Resolución de problemas" : "Problem Solving",
          Search,
          "#EA580C",
        ),
        skill(language === "es" ? "Trabajo en equipo" : "Teamwork", Users, "#2563EB"),
      ],
    },
  ];

  const skillLayout = [
    "xl:col-span-5",
    "xl:col-span-7",
    "xl:col-span-6",
    "xl:col-span-6",
    "xl:col-span-12",
    "xl:col-span-12",
  ];

  return (
    <section>
      <SectionHeader title={t.titulo} />

      <div className="mb-5 flex flex-col gap-5 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-slate-50 p-5 dark:border-blue-900/50 dark:from-blue-950/30 dark:to-slate-950 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <Cpu size={22} strokeWidth={2.2} />
          </div>

          <div>
            <p className="mb-1 text-xs font-black uppercase tracking-[0.14em] text-blue-600">
              {t.enfoqueLabel}
            </p>
            <h3 className="text-lg font-black leading-tight tracking-tight text-foreground sm:text-xl">
              {t.enfoqueTitulo} <span className="text-blue-600">{t.enfoqueY}</span>{" "}
              {t.enfoqueSub}
            </h3>
          </div>
        </div>

        <p className="max-w-xl text-sm font-medium leading-6 text-muted-foreground sm:text-right sm:text-base">
          {t.frase}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-12">
        {skillGroups.map((group, index) => (
          <article
            key={group.category}
            className={`group flex min-h-44 flex-col rounded-xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-900 sm:p-6 ${skillLayout[index]}`}
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600/10 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <group.icon size={18} strokeWidth={2.2} />
                </div>
                <h3 className="text-lg font-black tracking-tight text-foreground">
                  {group.category}
                </h3>
              </div>

              <span className="text-xs font-bold text-muted-foreground">
                {group.skills.length}
              </span>
            </div>

            <div className={`grid grid-cols-1 gap-2 ${group.columns}`}>
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group/skill flex min-w-0 items-center gap-2.5 rounded-lg border border-slate-200 bg-slate-50/80 px-2.5 py-2 text-slate-600 transition-all hover:-translate-y-px hover:border-blue-200 hover:bg-white hover:shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-blue-900 dark:hover:bg-white/[0.08]"
                >
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white shadow-sm ring-1 ring-slate-900/5 transition-transform group-hover/skill:scale-110 dark:bg-slate-900 dark:ring-white/10"
                    style={{ color: skill.color }}
                    aria-hidden="true"
                  >
                    <skill.icon size={16} />
                  </span>
                  <span className="min-w-0 text-xs font-bold leading-4 whitespace-normal break-normal">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
