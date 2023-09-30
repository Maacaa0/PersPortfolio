import { useState } from 'react';
import Navbar from './components/Navbar'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer';
import './index.css'

export type LangProps = {
  lang: string
}

function App() {
  const [lang, setLang] = useState<string>("en")


  function toggleLanguage() {
    setLang(lang === "en" ? "cz" : "en");
  }
 
  return (
    <main>
      {/* br tag to avoid margin collapsing? I don't really get it  */}
      <br /> 
      <Navbar lang={lang} toggleLanguage={toggleLanguage} />
      <About lang={lang} />
      <Skills lang={lang} />
      <Projects />
      <Footer />
      
    </main>
  )
}

export default App
