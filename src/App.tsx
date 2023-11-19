import Navbar from './components/Navbar/Navbar'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import './index.css'
import useLocalStorage from './hooks/useLocalStorage';

export type LangProps = {
  lang: string
}

function App() {
  const [lang, setLang] = useLocalStorage({
    key: "language",
    initialValue: "cz",
  });

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
      <Projects lang={lang} />
      <Footer />
      
    </main>
  )
}

export default App
