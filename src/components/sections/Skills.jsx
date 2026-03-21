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
        "Vite",
      ],
    },
    {
      category: t.backend,
      icon: Server,
      skills: [
        ".NET CORE 8",
        "ASP.NET Web API",
        "REST APIs",
        "Identity JWT",
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
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-24 mb-20">
      <SectionHeader title={t.titulo} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className="p-6 bg-background border border-border/50 rounded-md shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-blue-600/10 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                <group.icon
                  size={22}
                  className="text-blue-600 group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="text-lg font-bold tracking-tight">
                {group.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-muted text-muted-foreground text-base font-bold uppercase tracking-wider rounded-md border border-border/40 hover:border-blue-600/50 hover:text-blue-600 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full mt-6">
        <div className="p-6 bg-blue-600/5 rounded-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="p-3 bg-blue-600 rounded-lg shadow-md shadow-blue-200 dark:shadow-none">
              <Cpu size={30} strokeWidth={2} className="text-white" />
            </div>

            <div>
              <p className="text-[14px] uppercase tracking-[0.2em] font-black text-blue-600/70 mb-0.5">
                {t.enfoqueLabel}
              </p>
              <h4 className="text-xl md:text-2xl font-black tracking-tight text-slate-800 dark:text-white leading-tight">
                {t.enfoqueTitulo}{" "}
                <span className="text-blue-600">{t.enfoqueY}</span>{" "}
                {t.enfoqueSub}
              </h4>
            </div>
          </div>

          <div className="hidden md:block h-12 w-px bg-slate-200 dark:bg-slate-700" />

          <div className="max-w-md">
            <p className="text-xl text-foreground font-medium leading-relaxed text-pretty italic text-center md:text-left">
              {t.frase}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;