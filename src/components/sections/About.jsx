import { useLanguage } from "@/context/LanguageContext";
import { Cpu, MapPin, GraduationCap, Calendar } from "lucide-react";
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
      uniNombre: "Universidad Provincial de Córdoba (UPC)",
      estadoDesc: "Open to new challenges.",
    },
  };

  const t = text[language];

  const infoCards = [
    { icon: Calendar, label: t.labelEdad, detail: "21 Años" },
    { icon: MapPin, label: t.labelUbica, detail: "Morteros, Cba, Argentina" },
    { icon: GraduationCap, label: t.labelUni, detail: t.uniNombre },
    { icon: Cpu, label: t.labelEstado, detail: t.estadoDesc },
  ];

  return (
    <section id="sobre" className="scroll-mt-24 mb-20">
      <div>
        <SectionHeader title={t.titulo} />

        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-start">
            
            <div className="lg:col-span-7 space-y-8">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
                {t.descripcion1}
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
                {t.descripcion2}
              </p>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-4">
              {infoCards.map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-muted/30 border border-border/50 rounded-md transition-all duration-300 hover:bg-muted/50 shadow-sm group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon
                      size={20}
                      strokeWidth={2.5}
                      className="text-blue-600 transition-transform group-hover:scale-110"
                    />
                    <h3 className="text-base font-bold uppercase tracking-wider opacity-60 leading-none">
                      {item.label}
                    </h3>
                  </div>
                  <p className="text-base font-bold text-foreground leading-tight pl-[32px]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full">
            <div className="p-6 bg-blue-600/5 border-l-4 border-blue-600 rounded-r-md">
              <p className="text-xl text-foreground font-medium leading-relaxed text-pretty italic">
                {t.descripcion3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;