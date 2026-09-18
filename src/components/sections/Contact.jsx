import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import {
  Send, MapPin, Briefcase, CheckCircle2,
  RotateCcw, Copy, ExternalLink, LoaderCircle, Code2,
} from "lucide-react";

const Contact = () => {
  const { language } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const emailRaw = "ignaciomedina333@gmail.com";

  const text = {
    es: {
      titulo: "Contacto",
      descripcion: "¿Tenés una propuesta laboral o necesitás una solución digital? Contame tu idea y veamos cómo puedo ayudarte.",
      serviciosTitulo: "También trabajo de forma freelance",
      servicios: ["Landing pages", "Sistemas web", "APIs y backend", "Mejoras y mantenimiento"],
      nombre: "Nombre", email: "Correo electrónico", mensaje: "Mensaje",
      enviar: "Enviar mensaje", enviando: "Enviando...",
      formularioTitulo: "Contame tu proyecto o propuesta", emailDirecto: "Email directo",
      linkedinTexto: "Conectemos en LinkedIn", ubicacion: "Ubicación",
      ciudad: "Morteros, Córdoba, Argentina", disponibilidad: "Disponibilidad",
      tiempo: "Propuestas laborales y freelance", exito: "¡Mensaje enviado!",
      reintentar: "Enviar otro mensaje", copiado: "¡Copiado!",
      error: "No se pudo enviar. Intentá nuevamente.",
    },
    en: {
      titulo: "Contact",
      descripcion: "Have a job opportunity or need a digital solution? Tell me your idea and let's see how I can help.",
      serviciosTitulo: "Also available for freelance work",
      servicios: ["Landing pages", "Web applications", "APIs and backend", "Improvements and maintenance"],
      nombre: "Name", email: "Email address", mensaje: "Message",
      enviar: "Send message", enviando: "Sending...",
      formularioTitulo: "Tell me about your project or proposal", emailDirecto: "Direct email",
      linkedinTexto: "Let's connect on LinkedIn", ubicacion: "Location",
      ciudad: "Morteros, Córdoba, Argentina", disponibilidad: "Availability",
      tiempo: "Job opportunities and freelance", exito: "Message sent!",
      reintentar: "Send another message", copiado: "Copied!",
      error: "The message could not be sent. Please try again.",
    },
  };

  const t = text[language];

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(emailRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSending(true);
    setSubmitError(false);
    try {
      const response = await fetch("https://formspree.io/f/xreyvpdz", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="relative">
      <SectionHeader title={t.titulo} />

      <div className="grid items-stretch gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div>
          <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{t.descripcion}</p>

          <div className="mt-5">
            <p className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-foreground">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-violet-50 text-violet-600 dark:bg-violet-950/30 dark:text-violet-400">
                <Code2 size={15} />
              </span>
              {t.serviciosTitulo}
            </p>
            <div className="flex flex-wrap gap-2">
              {t.servicios.map((servicio) => (
                <span key={servicio} className="rounded-md border border-blue-100 bg-blue-50/70 px-2.5 py-1.5 text-xs font-bold text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/25 dark:text-blue-300">
                  {servicio}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-3 rounded-lg border border-slate-200 bg-slate-50/70 p-3.5 sm:grid-cols-2 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400">
                <Briefcase size={16} />
              </span>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-muted-foreground">{t.disponibilidad}</p>
                <p className="text-sm font-bold leading-5 text-foreground">{t.tiempo}</p>
              </div>
            </div>
            <a href="https://maps.google.com/?q=Morteros,Cordoba,Argentina" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-red-50 text-[#EA4335] dark:bg-red-950/30">
                <MapPin size={16} />
              </span>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-muted-foreground">{t.ubicacion}</p>
                <p className="text-sm font-bold leading-5 text-foreground transition-colors hover:text-blue-600">{t.ciudad}</p>
              </div>
            </a>
          </div>

          <div className="mt-3 space-y-3">
            <button type="button" onClick={handleCopyEmail} className="group flex w-full cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-white p-3.5 text-left transition-colors hover:border-blue-200 hover:bg-blue-50/50 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-blue-900">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-red-50 text-[#EA4335] dark:bg-red-950/30"><SiGmail size={17} /></span>
              <span className="min-w-0 flex-1">
                <span className="block text-[10px] font-black uppercase tracking-[0.14em] text-muted-foreground">{t.emailDirecto}</span>
                <span className="block truncate text-sm font-bold text-foreground sm:text-base">{emailRaw}</span>
              </span>
              {copied
                ? <span className="inline-flex items-center gap-1 rounded bg-emerald-600 px-2 py-1 text-[10px] font-black text-white"><CheckCircle2 size={12} /> {t.copiado}</span>
                : <span className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-50 text-blue-600 dark:bg-blue-950/30"><Copy size={14} /></span>}
            </button>

            <a href="https://www.linkedin.com/in/ignacio-esteban-medina-047226160/" target="_blank" rel="noopener noreferrer" className="group flex w-full items-center gap-3 rounded-lg border border-slate-200 bg-white p-3.5 transition-colors hover:border-blue-200 hover:bg-blue-50/50 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-blue-900">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-50 text-[#0A66C2] dark:bg-blue-950/30"><FaLinkedinIn size={17} /></span>
              <span className="flex-1 text-sm font-bold text-foreground sm:text-base">{t.linkedinTexto}</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-50 text-blue-600 dark:bg-blue-950/30"><ExternalLink size={14} /></span>
            </a>
          </div>

        </div>

        <div className="h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex h-full flex-col gap-4">
              <h3 className="text-xl font-black tracking-tight text-foreground">{t.formularioTitulo}</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-bold text-muted-foreground">{t.nombre}</label>
                  <input id="contact-name" type="text" name="name" className="h-11 w-full rounded-md border border-slate-200 bg-background px-3 text-sm font-medium outline-none transition-colors focus:border-blue-600 focus:ring-3 focus:ring-blue-600/10 dark:border-white/10" required />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-bold text-muted-foreground">{t.email}</label>
                  <input id="contact-email" type="email" name="email" className="h-11 w-full rounded-md border border-slate-200 bg-background px-3 text-sm font-medium outline-none transition-colors focus:border-blue-600 focus:ring-3 focus:ring-blue-600/10 dark:border-white/10" required />
                </div>
              </div>
              <div className="flex min-h-0 flex-1 flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-xs font-bold text-muted-foreground">{t.mensaje}</label>
                <textarea id="contact-message" name="message" rows="4" className="min-h-28 flex-1 w-full resize-none rounded-md border border-slate-200 bg-background p-3 text-sm font-medium outline-none transition-colors focus:border-blue-600 focus:ring-3 focus:ring-blue-600/10 dark:border-white/10" required />
              </div>
              {submitError && <p className="text-sm font-semibold text-red-600">{t.error}</p>}
              <button type="submit" disabled={isSending} className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
                {isSending ? <LoaderCircle size={16} className="animate-spin" /> : <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/15"><Send size={14} /></span>}
                {isSending ? t.enviando : t.enviar}
              </button>
            </form>
          ) : (
            <div className="space-y-5 py-10 text-center animate-in fade-in zoom-in duration-300">
              <div className="flex justify-center"><span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-600/10 dark:bg-emerald-950/30 dark:text-emerald-400"><CheckCircle2 size={36} /></span></div>
              <h3 className="text-2xl font-black tracking-tight text-foreground">{t.exito}</h3>
              <button type="button" onClick={() => setIsSubmitted(false)} className="mx-auto flex cursor-pointer items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"><RotateCcw size={14} /> {t.reintentar}</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
