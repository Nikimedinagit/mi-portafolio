import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <main className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
          
          <Hero />      
          <About />     
          <Projects />  
          <Skills />    
          <Contact />   
          
        </main>
          <Footer />   

      </div>
    </LanguageProvider>
  );
}

export default App;