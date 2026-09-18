import {
  Boxes,
  Braces,
  Cloud,
  Code2,
  Database,
  FileCode2,
  Network,
  Server,
  ShieldCheck,
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
  SiPostman,
  SiReact,
  SiShadcnui,
  SiSharp,
  SiSwagger,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

const technologyVisuals = {
  React: [SiReact, "#61DAFB"],
  JavaScript: [SiJavascript, "#F7DF1E"],
  HTML: [SiHtml5, "#E34F26"],
  CSS: [SiCss, "#663399"],
  "Tailwind CSS": [SiTailwindcss, "#06B6D4"],
  "Shadcn/UI": [SiShadcnui, "#71717A"],
  Bootstrap: [SiBootstrap, "#7952B3"],
  "Chart.js": [SiChartdotjs, "#FF6384"],
  jsPDF: [FileCode2, "#E63946"],
  Vite: [SiVite, "#646CFF"],
  ".NET 10": [SiDotnet, "#512BD4"],
  ".NET 8": [SiDotnet, "#512BD4"],
  "ASP.NET Web": [SiDotnet, "#512BD4"],
  "REST APIs": [Network, "#2563EB"],
  "Identity JWT": [SiJsonwebtokens, "#D63AFF"],
  DDD: [Boxes, "#0F766E"],
  LINQ: [Braces, "#7C3AED"],
  "C#": [SiSharp, "#239120"],
  MVC: [Boxes, "#2563EB"],
  "SQL Server": [Database, "#CC2927"],
  "Modelado de datos": [Boxes, "#0F766E"],
  "Data Modeling": [Boxes, "#0F766E"],
  Swagger: [SiSwagger, "#85EA2D"],
  "IIS Server": [Server, "#0078D4"],
  "Git / GitHub": [SiGithub, "#64748B"],
  Postman: [SiPostman, "#FF6C37"],
  "Monster ASP.NET": [SiDotnet, "#512BD4"],
  DonWeb: [Cloud, "#2563EB"],
  "SSL/TLS": [ShieldCheck, "#16A34A"],
  FileZilla: [SiFilezilla, "#BF0000"],
};

const TechnologyBadge = ({ name, compact = false }) => {
  const [Icon, color] = technologyVisuals[name] ?? [Code2, "#2563EB"];

  return (
    <span
      className={`inline-flex items-center font-bold text-slate-600 dark:text-slate-300 ${
        compact
          ? "gap-1.5 rounded px-2 py-1 text-[11px]"
          : "gap-2 rounded-md px-2.5 py-1.5 text-xs"
      } bg-slate-100 dark:bg-white/5`}
    >
      <Icon size={compact ? 12 : 14} style={{ color }} className="shrink-0" aria-hidden="true" />
      <span>{name}</span>
    </span>
  );
};

export default TechnologyBadge;
