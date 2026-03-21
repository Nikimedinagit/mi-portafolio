import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import {
  Github,
  ExternalLink,
  Code2,
  Layout,
  Database,
  Server,
  Info,
  CheckCircle2,
} from "lucide-react";

const Projects = () => {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const text = {
    es: {
      titulo: "Proyectos",
      catFullStack: "Desarrollo Full Stack",
      catFrontend: "Desarrollo Frontend",
      verProyecto: "Ver Proyecto",
      verMas: "Ver más",
      detallesTecnicos: "Detalles Técnicos & Impacto",
      impactoNegocio: "Impacto en el Negocio",
      ecosistemaModulos: "Ecosistema de Módulos",
      cerrar: "Cerrar",
      workSyncTitle: "WorkSync RRHH",
      workSyncSubtitle: "Sistema de Gestión de Recursos Humanos",
      workSyncDesc: "Ecosistema integral que centraliza la operación de talento humano, eliminando el caos administrativo mediante biometría y automatización de procesos.",
      workSyncLong: "WorkSync resuelve la fragmentación de datos y la ineficiencia en el control de personal. Al integrar biometría facial y flujos de aprobación automáticos, garantiza la veracidad de la asistencia y optimiza la gestión legal de legajos, permitiendo una toma de decisiones basada en indicadores reales y exportables.",
      features: [
        "Reconocimiento Facial: Registro de jornada mediante biometría facial.",
        "Módulo de Legajos: Gestión de datos personales, contacto y laboral.",
        "Control de Asistencia: Monitoreo en tiempo real con gestión de ausencias.",
        "Gestión de Desempeño: Evaluaciones personalizadas con indicadores gráficos.",
        "Módulo de Licencias: Sistema de solicitudes con flujo de aprobación ABM.",
        "Capacitaciones: Administración de cursos y emisión de certificados PDF.",
        "Estructura Organizacional: Gestión de sectores, puestos y geolocalización.",
        "Reporting Avanzado: Exportación a PDF de vistas, indicadores y legajos.",
      ],
    },
    en: {
      titulo: "Projects",
      catFullStack: "Full Stack Development",
      catFrontend: "Frontend Development",
      verProyecto: "Live Demo",
      verMas: "View more",
      detallesTecnicos: "Technical Details & Impact",
      impactoNegocio: "Business Impact",
      ecosistemaModulos: "Module Ecosystem",
      cerrar: "Close",
      workSyncTitle: "WorkSync HR",
      workSyncSubtitle: "Human Resources Management System",
      workSyncDesc: "Comprehensive ecosystem that centralizes human talent operations, eliminating administrative chaos through biometrics and process automation.",
      workSyncLong: "WorkSync resolves data fragmentation and personnel control inefficiency. By integrating facial biometrics and automated approval workflows, it guarantees attendance accuracy and optimizes legal record management, enabling decision-making based on real, exportable indicators.",
      features: [
        "Facial Recognition: Attendance tracking via facial biometrics.",
        "Employee Records: Personal, contact, and labor data management.",
        "Attendance Control: Real-time monitoring with absence management.",
        "Performance Management: Custom evaluations with graphic indicators.",
        "Leave Management: Request system with ABM approval workflow.",
        "Training: Course administration and PDF certificate issuance.",
        "Organizational Structure: Sector, position, and geolocation management.",
        "Advanced Reporting: PDF export for views, indicators, and records.",
      ],
    },
  };

  const t = text[language];

  const fullStackProjects = [
    {
      title: t.workSyncTitle,
      subtitle: t.workSyncSubtitle,
      description: t.workSyncDesc,
      longDescription: t.workSyncLong,
      stack: [
        ".NET CORE 8",
        "SQL Server",
        "Identity JWT",
        "MVC",
        "C#",
        "ASP.NET Web API",
        "Modelado de Datos",
        "Swagger",
        "IIS Server",
        "Git / GitHub",
        "Postman",
        "Monster ASP.NET",
        "Bootstrap",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      features: t.features,
      github: "https://github.com/Nikimedinagit/GestionRRHH",
      link: "http://gestionworksync.runasp.net",
      icon: Server,
    },
  ];

  const frontendProjects = [
    {
      title: "WorkSync",
      subtitle: language === "es" ? "Gestión RRHH" : "HR Management",
      description: language === "es" ? "Plataforma para optimizar la gestión de talento humano." : "Platform to optimize human talent management.",
      stack: ["React", "Shadcn/UI", "Tailwind CSS"],
      github: "https://github.com/Nikimedinagit/rrhh-landing",
      link: "https://gestionworksync.netlify.app/",
    },
    {
      title: "Logui Soft",
      subtitle: "Software Factory",
      description: language === "es" ? "Sitio corporativo para venta de servicios de desarrollo." : "Corporate site for selling development services.",
      stack: ["React", "Shadcn/UI", "Tailwind CSS"],
      github: "https://github.com/Nikimedinagit/logui-landing",
      link: "https://loguisoft.netlify.app/",
    },
    {
      title: "Hotel Constantino",
      subtitle: language === "es" ? "Servicios Hoteleros" : "Hotel Services",
      description: language === "es" ? "Interfaz premium enfocada en la reserva de servicios." : "Premium interface focused on service reservations.",
      stack: ["React", "Shadcn/UI", "Tailwind CSS"],
      github: "https://github.com/Nikimedinagit/hotel-cons-landing",
      link: "https://hotelconstantino.netlify.app/",
    },
    {
      title: "Mi Portafolio",
      subtitle: language === "es" ? "Marca Personal" : "Personal Brand",
      description: language === "es" ? "Mi carta de presentación: performance y diseño." : "My presentation card: performance and design.",
      stack: ["React", "Shadcn/UI", "Tailwind CSS"],
      github: "https://github.com/Nikimedinagit/mi-portafolio",
      link: "https://ignaciodev.netlify.app/",
    },
  ];

  const renderProjectCard = (project, isFullStack = false) => (
    <div
      key={project.title}
      className="p-6 bg-background border border-border/50 rounded-lg hover:border-blue-600/30 hover:shadow-lg transition-all group flex flex-col"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-black text-xl leading-none group-hover:text-blue-600 transition-colors uppercase tracking-tight dark:text-white">
            {project.title}
          </h4>
          <p className="text-base font-bold text-blue-600/70 uppercase tracking-widest mt-1.5">
            {project.subtitle}
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-blue-600 transition-all hover:scale-125"
          >
            <Github size={19} />
          </a>
        </div>
      </div>

      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
        {project.stack.map((s) => (
          <span
            key={s}
            className="px-3 py-1.5 bg-muted text-muted-foreground text-[13px] font-bold uppercase tracking-wider rounded-md border border-border/40 hover:text-blue-600/50 transition-colors"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 flex items-center gap-1 hover:gap-3 transition-all"
        >
          {t.verProyecto} <ExternalLink size={16} />
        </a>

        {isFullStack && (
          <button
            onClick={() => setSelectedProject(project)}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-blue-600 transition-all border border-border/40 px-3 py-1.5 rounded-md bg-muted/30 cursor-pointer"
            title={t.verMas}
          >
            <Info size={14} /> {t.verMas}
          </button>
        )}
      </div>
    </div>
  );

  return (
    <section id="proyectos" className="scroll-mt-24 mb-20 relative">
      <SectionHeader title={t.titulo} />
      <div className="mb-16">
        <h3 className="text-xl font-black uppercase tracking-[0.2em] text-blue-600/80 mb-8 flex items-center gap-2">
          <Code2 size={20} /> {t.catFullStack}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
          {fullStackProjects.map((p) => renderProjectCard(p, true))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-black uppercase tracking-[0.2em] text-blue-600/80 mb-6 flex items-center gap-2">
          <Layout size={20} /> {t.catFrontend}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {frontendProjects.map((p) => renderProjectCard(p))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 backdrop-blur-md p-4 cursor-default"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-background w-full max-w-5xl rounded-t-md p-10 shadow-2xl animate-in slide-in-from-bottom duration-500 overflow-y-auto max-h-[85vh] border-x border-t border-blue-600/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-10 pb-6 border-b border-border/50">
              <div>
                <h2 className="text-4xl font-black text-blue-600 uppercase tracking-tighter">
                  {selectedProject.title}
                </h2>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em] mt-2">
                  {t.detallesTecnicos}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-muted hover:bg-red-500 hover:text-white transition-all text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div className="space-y-4">
                <h4 className="font-black uppercase text-xs tracking-[0.2em] text-blue-600/70 flex items-center gap-2">
                  {t.impactoNegocio}
                </h4>
                <p className="text-lg font-medium text-foreground/90 leading-relaxed border-l-4 border-blue-600/20 pl-4">
                  "{selectedProject.longDescription}"
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-black uppercase text-xs tracking-[0.2em] text-blue-600/70">
                  {t.ecosistemaModulos}
                </h4>
                <ul className="grid grid-cols-1 gap-4">
                  {selectedProject.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 group/item">
                      <div className="mt-1 bg-blue-600/10 p-1 rounded">
                        <CheckCircle2 size={14} className="text-blue-600" />
                      </div>
                      <span className="text-base font-bold text-muted-foreground group-hover/item:text-foreground transition-colors">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;