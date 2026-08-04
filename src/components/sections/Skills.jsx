import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import { Server, Database, Layout, Wrench, Globe, Cpu } from "lucide-react";

const Skills = () => {
  const { language } = useLanguage();

  const text = {
    es: {
      titulo: "Habilidades",
      frontend: "Frontend",
      backend: "Backend",
      database: "Base de Datos",
      tools: "Herramientas & Deploy",
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
      tools: "Tools & Deployment",
      enfoqueLabel: "Main Focus",
      enfoqueTitulo: "Clean Architecture",
      enfoqueY: "&",
      enfoqueSub: "Scalability",
      frase:
        "“Specialized in creating solid bridges between robust backends and smooth user experiences.”",
    },
  };

  const t = text[language];

  const skillGroups = [
    {
      category: t.frontend,
      icon: Layout,
      skills: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Shadcn/UI",
        "Bootstrap",
        "Chart.js",
        "jsPDF",
        "Vite",
      ],
    },
    {
      category: t.backend,
      icon: Server,
      skills: [
        ".NET 10",
        ".NET CORE 8",
        "ASP.NET Web API",
        "REST APIs",
        "Identity JWT",
        "Arquitectura DDD",
        "LINQ",
        "C#",
        "MVC",
      ],
    },
    {
      category: t.database, 
      icon: Database,
      skills: [
        "SQL Server",
        language === "es" ? "Procedimiento Almacenado" : "Stored Procedures",
        language === "es" ? "Modelado de Datos" : "Data Modeling",
      ],
    },
    {
      category: t.tools, 
      icon: Wrench,
      skills: [
        "Swagger",
        "IIS Server",
        "Git / GitHub",
        "Postman",
        "Monster ASP.NET",
        "DonWeb",
        "SSL/TLS",
        "FileZilla",
      ],
    },
  ];

  const skillLayout = [
    "xl:col-span-7",
    "xl:col-span-5",
    "xl:col-span-5",
    "xl:col-span-7",
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

            <div className="mt-auto flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-bold text-slate-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-blue-900 dark:hover:bg-blue-950/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
