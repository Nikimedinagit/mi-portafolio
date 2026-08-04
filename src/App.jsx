import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <Hero />
        <main>
          <div id="sobre" className="scroll-mt-14">
            <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-8">
            <About />
            </div>
          </div>

          <div id="proyectos" className="scroll-mt-14 bg-slate-100 py-8 dark:bg-slate-950">
            <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-8">
              <Projects />
            </div>
          </div>

          <div id="experiencia" className="scroll-mt-14 py-8">
            <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-8">
              <Experience />
            </div>
          </div>

          <div id="skills" className="scroll-mt-14 bg-slate-100 py-8 dark:bg-slate-950">
            <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-8">
              <Skills />
            </div>
          </div>

          <div id="contacto" className="scroll-mt-14 bg-background py-8">
            <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-8">
              <Contact />
            </div>
          </div>
        </main>
          <Footer />   

      </div>
    </LanguageProvider>
  );
}

export default App;
