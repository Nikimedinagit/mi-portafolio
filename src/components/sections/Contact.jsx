import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import { Mail, Linkedin, Send, MapPin, Briefcase, CheckCircle2, RotateCcw, Copy } from "lucide-react";

const Contact = () => {
  const { language } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailRaw = "ignaciomedina333@gmail.com";

  const text = {
    es: {
      titulo: "Contacto",
      descripcion: "Si tenés una propuesta laboral o querés conocer más sobre mi perfil técnico, escribime directamente.",
      nombre: "Nombre",
      email: "Correo Electrónico",
      mensaje: "Mensaje",
      enviar: "Enviar Mensaje",
      ubicacion: "Ubicación",
      ciudad: "Morteros, Córdoba, Argentina",
      disponibilidad: "Disponibilidad",
      tiempo: "Full-time / Inmediata",
      exito: "¡Mensaje enviado!",
      reintentar: "Enviar otro mensaje",
      copiado: "¡Copiado!"
    },
    en: {
      titulo: "Contact",
      descripcion: "If you have a job proposal or want to know more about my technical profile, write to me directly.",
      nombre: "Name",
      email: "Email Address",
      mensaje: "Message",
      enviar: "Send Message",
      ubicacion: "Location",
      ciudad: "Morteros, Córdoba, Argentina",
      disponibilidad: "Availability",
      tiempo: "Full-time / Immediate",
      exito: "Message sent!",
      reintentar: "Send another message",
      copiado: "Copied!"
    },
  };

  const t = text[language];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/ignacio-medina3/", "_blank");
  };

  const handleMapClick = () => {
    window.open("https://maps.google.com/?q=Morteros,Cordoba,Argentina", "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/xreyvpdz", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <section id="contacto" className="scroll-mt-24 relative pb-20">
      <SectionHeader title={t.titulo} />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
        
        <div className="space-y-10 flex flex-col justify-center">
          <p className="text-[20px] text-muted-foreground leading-relaxed max-w-md">
            {t.descripcion}
          </p>

          <div className="flex gap-6 items-center">
            <button 
              onClick={handleCopyEmail}
              className="relative p-4 bg-muted rounded-2xl hover:bg-blue-600/10 hover:text-blue-600 transition-all group"
              title="Copiar Email"
            >
              <Mail size={28} />
              {copied && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] px-2 py-1 rounded font-black uppercase">
                  {t.copiado}
                </span>
              )}
            </button>

            <button 
              onClick={handleLinkedinClick}
              className="p-4 bg-muted rounded-2xl hover:bg-blue-600/10 hover:text-blue-600 transition-all"
              title="LinkedIn"
            >
              <Linkedin size={28} />
            </button>
          </div>

          <div className="space-y-6 pt-4 border-t border-border/50">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-blue-600/5 rounded-lg text-blue-600">
                <Briefcase size={22} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">{t.disponibilidad}</p>
                <p className="text-base font-bold">{t.tiempo}</p>
              </div>
            </div>

            <div 
              onClick={handleMapClick}
              className="flex items-center gap-4 group cursor-pointer hover:translate-x-1 transition-transform"
            >
              <div className="p-3 bg-blue-600/5 rounded-lg text-blue-600">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">{t.ubicacion}</p>
                <p className="text-base font-bold">{t.ciudad}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-muted/30 p-8 rounded-3xl border border-border/50 shadow-sm flex flex-col justify-center min-h-[400px]">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">{t.nombre}</label>
                  <input type="text" name="name" className="w-full bg-background border border-border/50 rounded-xl p-3 text-sm focus:outline-none focus:border-blue-600 transition-colors font-medium" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">{t.email}</label>
                  <input type="email" name="email" className="w-full bg-background border border-border/50 rounded-xl p-3 text-sm focus:outline-none focus:border-blue-600 transition-colors font-medium" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">{t.mensaje}</label>
                <textarea name="message" rows="4" className="w-full bg-background border border-border/50 rounded-xl p-3 text-sm focus:outline-none focus:border-blue-600 transition-colors font-medium resize-none" required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-[0.2em] text-xs py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-600/20">
                <Send size={16} /> {t.enviar}
              </button>
            </form>
          ) : (
            <div className="text-center space-y-6 py-10 animate-in fade-in zoom-in duration-300">
              <div className="flex justify-center">
                <CheckCircle2 size={64} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold italic uppercase tracking-tighter">{t.exito}</h3>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mx-auto flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-colors"
              >
                <RotateCcw size={14} /> {t.reintentar}
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;