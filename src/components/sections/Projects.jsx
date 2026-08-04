import { useEffect, useState } from "react";
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
  X,
  Lock,
} from "lucide-react";

const Projects = () => {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedStacks, setExpandedStacks] = useState(() => new Set());

  const text = {
    es: {
      titulo: "Proyectos",
      catFullStack: "Desarrollo Full Stack",
      catFrontend: "Desarrollo Frontend",
      verProyecto: "Ver Proyecto",
      verMas: "Ver más",
      verMenosTecnologias: "Ver menos",
      detallesTecnicos: "Detalles Técnicos & Impacto",
      impactoNegocio: "Impacto en el Negocio",
      ecosistemaModulos: "Ecosistema de Módulos",
      tecnologias: "Tecnologías",
      repositorioPrivado: "Repositorio privado",
      cerrar: "Cerrar",

      ansenuzaTitle: "Desafíos Ansenuza",
      ansenuzaSubtitle: "Plataforma de Gestión de Rally",
      ansenuzaDesc:
        "Aplicación web autogestionable para centralizar la presencia institucional, las inscripciones y la operación de eventos de rally.",
      ansenuzaLong:
        "Solución Full Stack desarrollada para digitalizar la gestión de Desafíos Ansenuza. Combina una landing pública con información institucional y contenido actualizado, un flujo de inscripción para participantes y un panel administrativo protegido que permite al cliente gestionar de forma autónoma la operación del evento.",
      ansenuzaFeatures: [
        "Landing institucional: Presentación de la organización, novedades, fechas y contenido público.",
        "Noticias y galería autogestionables: Alta, edición y publicación de noticias e imágenes desde el panel administrativo.",
        "Fechas y puntajes: Administración de competencias, actualización de resultados y seguimiento de puntajes.",
        "Gestión de inscripciones: Registro, consulta y seguimiento de participantes inscriptos.",
        "Control de pagos: Gestión interna del estado de los pagos correspondientes a las inscripciones.",
        "Autenticación y administración: Acceso seguro al panel mediante usuarios autorizados.",
        "Arquitectura y despliegue: API en .NET 10 con DDD, publicación en DonWeb, dominio propio, certificado SSL y gestión de archivos mediante FileZilla.",
      ],

      ticketsTitle: "SLATETICKET SOPORTE",
      ticketsSubtitle: "Sistema de Gestión de Incidencias",
      ticketsDesc:
        "Plataforma centralizada para optimizar el flujo de soporte técnico y asignación de tareas, transformando el caos operativo en métricas visuales.",
      ticketsLong:
        "Este sistema nació de una necesidad real: la falta de trazabilidad y la ineficiencia en la comunicación entre clientes y desarrolladores. La solución unifica la gestión de incidencias, automatiza flujos de asignación según el puesto técnico y ofrece paneles estadísticos interactivos para evaluar el rendimiento del equipo y las categorías de tickets más recurrentes.",
      ticketsFeatures: [
        "Gestión de Tickets y Tareas: Flujo operativo completo con estados (Abierto, En Proceso, Cerrado, Cancelado) y prioridades.",
        "Asignación por Puestos: Vinculación inteligente de categorías de problemas con los perfiles del equipo de desarrollo.",
        "Automatización de Usuarios: Generación y alta de credenciales automáticas al registrar Clientes o Desarrolladores.",
        "Módulo de Analítica Avanzada: Panel con gráficos de torta y barras interactivos para medir rendimiento.",
        "Reportes por Categorías: Estadísticas detalladas de los incidentes de clientes ordenados por tipo de falla.",
        "Panel de Configuración: ABM completo y flexible para parametrizar puestos y categorías del sistema.",
      ],

      workSyncTitle: "WorkSync RRHH",
      workSyncSubtitle: "Sistema de Gestión de Recursos Humanos",
      workSyncDesc:
        "Ecosistema integral que centraliza la operación de talento humano, eliminando el caos administrativo mediante biometría y automatización de procesos.",
      workSyncLong:
        "WorkSync resuelve la fragmentación de datos y la ineficiencia en el control de personal. Al integrar biometría facial y flujos de aprobación automáticos, garantiza la veracidad de la asistencia y optimiza la gestión legal de legajos, permitiendo una toma de decisiones basada en indicadores reales y exportables.",
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
      verMenosTecnologias: "Show less",
      detallesTecnicos: "Technical Details & Impact",
      impactoNegocio: "Business Impact",
      ecosistemaModulos: "Module Ecosystem",
      tecnologias: "Technologies",
      repositorioPrivado: "Private repository",
      cerrar: "Close",

      ansenuzaTitle: "Desafíos Ansenuza",
      ansenuzaSubtitle: "Rally Management Platform",
      ansenuzaDesc:
        "Self-managed web application that centralizes the institutional website, registrations, and rally event operations.",
      ansenuzaLong:
        "Full Stack solution developed to digitize Desafíos Ansenuza's operations. It combines a public landing page with institutional information and up-to-date content, a participant registration flow, and a protected administration panel that allows the client to manage the event autonomously.",
      ansenuzaFeatures: [
        "Institutional landing page: Organization profile, news, dates, and public content.",
        "Self-managed news and gallery: Create, edit, and publish news and images from the administration panel.",
        "Dates and scores: Competition management, result updates, and score tracking.",
        "Registration management: Participant registration, review, and follow-up.",
        "Payment tracking: Internal management of registration payment status.",
        "Authentication and administration: Secure panel access for authorized users.",
        "Architecture and deployment: .NET 10 API with DDD, DonWeb hosting, custom domain, SSL certificate, and FileZilla file management.",
      ],

      ticketsTitle: "SLATETICKET SUPPORT",
      ticketsSubtitle: "Incident Management System",
      ticketsDesc:
        "Centralized platform to optimize tech support workflow and task assignment, turning operational chaos into visual metrics.",
      ticketsLong:
        "This system was born from a real need: the lack of traceability and inefficiency in communication between clients and developers. The solution unifies incident management, automates assignment workflows according to technical roles, and features interactive statistical dashboards to evaluate team performance and recurring issues.",
      ticketsFeatures: [
        "Ticket & Task Management: Complete operational workflow with states (Open, In Progress, Closed, Cancelled) and priorities.",
        "Role-Based Assignment: Intelligent linking of issue categories with specific developer profiles.",
        "User Automation: Automatic credential generation and registration upon creating Clients or Developers.",
        "Advanced Analytics Module: Interactive pie and bar charts dashboard to measure development metrics.",
        "Category Reporting: Detailed statistics of client incidents organized by failure types.",
        "Configuration Panel: Full and flexible CRUD (ABM) to parameterize organizational positions and categories.",
      ],


      workSyncTitle: "WorkSync HR",
      workSyncSubtitle: "Human Resources Management System",
      workSyncDesc:
        "Comprehensive ecosystem that centralizes human talent operations, eliminating administrative chaos through biometrics and process automation.",
      workSyncLong:
        "WorkSync resolves data fragmentation and personnel control inefficiency. By integrating facial biometrics and automated approval workflows, it guarantees attendance accuracy and optimizes legal record management, enabling decision-making based on real, exportable indicators.",
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

  useEffect(() => {
    if (!selectedProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const fullStackProjects = [
    {
      title: t.ansenuzaTitle,
      subtitle: t.ansenuzaSubtitle,
      description: t.ansenuzaDesc,
      longDescription: t.ansenuzaLong,
      stack: [
        ".NET 10",
        "Arquitectura DDD",
        "React",
        "Vite",
        "ASP.NET Web API",
        "C#",
        "SQL Server",
        "Identity JWT",
        "REST APIs",
        "Swagger",
        "Tailwind CSS",
        "Shadcn/UI",
        "DonWeb",
        "SSL/TLS",
        "FileZilla",
      ],
      features: t.ansenuzaFeatures,
      github: null,
      isPrivate: true,
      link: "https://desafiosansenuza.com",
      icon: Server,
    },
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
        language === "es" ? "Modelado de Datos" : "Data Modeling",
        "Swagger",
        "IIS Server",
        "Git / GitHub",
        "Postman",
        "Monster ASP.NET",
        "Bootstrap",
        "JavaScript",
        "Chart.js",
        "jsPDF",
        "HTML",
        "CSS",
      ],
      features: t.features,
      github: null,
      isPrivate: true,
      link: "http://gestionworksync.runasp.net",
      icon: Server,
    },
    {
      title: t.ticketsTitle,
      subtitle: t.ticketsSubtitle,
      description: t.ticketsDesc,
      longDescription: t.ticketsLong,
      stack: [
        "React",
        "Vite",
        "Shadcn/UI",
        "Tailwind CSS",
        ".NET CORE 8",
        "C#",
        "ASP.NET Web API",
        "SQL Server",
        "Identity JWT",
        "Chart.js",
        "jsPDF",
        "Git / GitHub",
        "Postman",
        "Monster ASP.NET",
      ],
      features: t.ticketsFeatures,
      github: "https://github.com/Nikimedinagit/GestionDeTickets", 
      link: "http://gestiontickets.runasp.net",
      icon: Database,
    },
  ];

  const frontendProjects = [
    {
      title: "WorkSync",
      subtitle: language === "es" ? "Gestión RRHH" : "HR Management",
      description:
        language === "es"
          ? "Plataforma para optimizar la gestión de talento humano."
          : "Platform to optimize human talent management.",
      stack: ["React", "Shadcn/UI", "Tailwind CSS"],
      github: "https://github.com/Nikimedinagit/rrhh-landing",
      link: "https://gestionworksync.netlify.app/",
    },
    {
      title: "Logui Soft",
      subtitle: language === "es" ? "Desarrollo de Software" : "Software Development",
      description:
        language === "es"
          ? "Sitio corporativo para venta de servicios de desarrollo."
          : "Corporate site for selling development services.",
      stack: ["React", "Shadcn/UI", "Tailwind CSS"],
      github: "https://github.com/Nikimedinagit/logui-landing",
      link: "https://loguisoft.netlify.app/",
    },
    {
      title: "Hotel Constantino",
      subtitle: language === "es" ? "Servicios Hoteleros" : "Hotel Services",
      description:
        language === "es"
          ? "Interfaz premium enfocada en la reserva de servicios."
          : "Premium interface focused on service reservations.",
      stack: ["React", "Shadcn/UI", "Tailwind CSS"],
      github: "https://github.com/Nikimedinagit/hotel-cons-landing",
      link: "https://hotelconstantino.netlify.app/",
    },
    {
      title: "Mi Portafolio",
      subtitle: language === "es" ? "Marca Personal" : "Personal Brand",
      description:
        language === "es"
          ? "Mi carta de presentación: performance y diseño."
          : "My presentation card: performance and design.",
      stack: ["React", "Shadcn/UI", "Tailwind CSS"],
      github: "https://github.com/Nikimedinagit/mi-portafolio",
      link: "https://ignaciodev.netlify.app/",
    },
  ];

  const renderFeaturedProject = (project) => {
    const isStackExpanded = expandedStacks.has(project.title);
    const visibleStack = isStackExpanded ? project.stack : project.stack.slice(0, 6);
    const hiddenStackCount = Math.max(project.stack.length - 6, 0);

    const toggleStack = () => {
      setExpandedStacks((current) => {
        const next = new Set(current);
        if (next.has(project.title)) {
          next.delete(project.title);
        } else {
          next.add(project.title);
        }
        return next;
      });
    };

    return (
    <article
      key={project.title}
      className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-900"
    >
      <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300" />

      <div className="flex h-full flex-col p-5 sm:p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600">
              <project.icon size={22} strokeWidth={2.2} />
            </div>
            <div>
              <p className="mb-1 text-xs font-bold text-blue-600">{project.subtitle}</p>
              <h4 className="text-xl font-black leading-tight tracking-tight text-foreground transition-colors group-hover:text-blue-600 sm:text-2xl">
                {project.title}
              </h4>
            </div>
          </div>

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-slate-100 hover:text-blue-600 dark:hover:bg-white/5"
              aria-label={`GitHub: ${project.title}`}
            >
              <Github size={18} />
            </a>
          ) : (
            <span className="inline-flex h-9 items-center gap-1.5 rounded-md bg-slate-100 px-2.5 text-xs font-bold text-muted-foreground dark:bg-white/5">
              <Lock size={13} /> {t.repositorioPrivado}
            </span>
          )}
        </div>

        <p className="mb-5 text-base leading-7 text-muted-foreground">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {visibleStack.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600 dark:bg-white/5 dark:text-slate-300"
            >
              {technology}
            </span>
          ))}
          {hiddenStackCount > 0 && (
            <button
              type="button"
              onClick={toggleStack}
              className="cursor-pointer rounded-md border border-blue-100 px-2.5 py-1 text-xs font-bold text-blue-600 transition-colors hover:border-blue-300 hover:bg-blue-50 dark:border-blue-900 dark:hover:bg-blue-950/40"
              aria-expanded={isStackExpanded}
            >
              {isStackExpanded ? t.verMenosTecnologias : `+${hiddenStackCount}`}
            </button>
          )}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-slate-100 pt-5 dark:border-white/10">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-md bg-blue-600 px-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-700"
          >
            {t.verProyecto} <ExternalLink size={15} />
          </a>
          <button
            onClick={() => setSelectedProject(project)}
            className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-md px-3 text-sm font-bold text-muted-foreground transition-colors hover:bg-slate-100 hover:text-blue-600 dark:hover:bg-white/5"
          >
            <Info size={15} /> {t.verMas}
          </button>
        </div>
      </div>
    </article>
    );
  };

  const renderCompactProject = (project) => (
    <article
      key={project.title}
      className="group flex flex-col rounded-lg border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-900"
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600/10 text-blue-600">
          <Layout size={18} />
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-blue-600"
          aria-label={`GitHub: ${project.title}`}
        >
          <Github size={17} />
        </a>
      </div>

      <p className="mb-1 text-xs font-bold text-blue-600">{project.subtitle}</p>
      <h4 className="mb-3 text-lg font-black tracking-tight text-foreground transition-colors group-hover:text-blue-600">
        {project.title}
      </h4>
      <p className="mb-5 text-sm leading-6 text-muted-foreground">{project.description}</p>

      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.stack.map((technology) => (
          <span
            key={technology}
            className="rounded bg-slate-100 px-2 py-1 text-[11px] font-bold text-slate-600 dark:bg-white/5 dark:text-slate-300"
          >
            {technology}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-all hover:gap-3"
      >
        {t.verProyecto} <ExternalLink size={14} />
      </a>
    </article>
  );

  return (
    <section className="relative">
      <SectionHeader title={t.titulo} />
      <div className="mb-14">
        <h3 className="mb-5 flex items-center gap-2.5 text-lg font-black tracking-tight text-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600/10 text-blue-600">
            <Code2 size={17} />
          </span>
          {t.catFullStack}
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {fullStackProjects.map(renderFeaturedProject)}
        </div>
      </div>

      <div>
        <h3 className="mb-5 flex items-center gap-2.5 text-lg font-black tracking-tight text-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600/10 text-blue-600">
            <Layout size={17} />
          </span>
          {t.catFrontend}
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {frontendProjects.map(renderCompactProject)}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-white/10 bg-background shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex shrink-0 items-center justify-between gap-4 border-b border-border/60 px-5 py-4 sm:px-6">
              <div className="min-w-0">
                <p className="mb-1 text-xs font-bold text-blue-600">{selectedProject.subtitle}</p>
                <h2 id="project-modal-title" className="truncate text-xl font-black tracking-tight text-foreground sm:text-2xl">
                  {selectedProject.title}
                </h2>
              </div>

              <div className="flex shrink-0 items-center gap-1">
                {selectedProject.github ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-blue-600"
                    aria-label={`GitHub: ${selectedProject.title}`}
                  >
                    <Github size={17} />
                  </a>
                ) : (
                  <span className="hidden items-center gap-1.5 px-2 text-xs font-bold text-muted-foreground sm:inline-flex">
                    <Lock size={13} /> {t.repositorioPrivado}
                  </span>
                )}
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-blue-600"
                  aria-label={`${t.verProyecto}: ${selectedProject.title}`}
                >
                  <ExternalLink size={17} />
                </a>
                <span className="mx-1 h-5 w-px bg-border" aria-hidden="true" />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30"
                  aria-label={t.cerrar}
                >
                  <X size={19} />
                </button>
              </div>
            </header>

            <div className="grid min-h-0 flex-1 gap-8 overflow-y-auto p-5 text-left sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
              <div>
                <section>
                  <h3 className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-blue-600">
                    {t.impactoNegocio}
                  </h3>
                  <p className="rounded-lg border border-blue-100 bg-blue-50/60 p-4 text-base font-medium leading-7 text-foreground/85 dark:border-blue-900/50 dark:bg-blue-950/20">
                    {selectedProject.longDescription}
                  </p>
                </section>

                <section className="mt-7">
                  <h3 className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-blue-600">
                    {t.tecnologias}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-muted px-2.5 py-1.5 text-xs font-bold text-muted-foreground"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </section>
              </div>

              <section>
                <h3 className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-blue-600">
                  {t.ecosistemaModulos}
                </h3>
                <ul className="grid gap-2.5">
                  {selectedProject.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 rounded-lg border border-border/60 bg-muted/20 p-3"
                    >
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-blue-600" />
                      <span className="text-sm font-semibold leading-6 text-foreground/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
