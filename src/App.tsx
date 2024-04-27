// import Navbar from './components/Navbar/Navbar'
// import About from './components/About/About';
// import Projects from './components/Projects/Projects';
// import Skills from './components/Skills/Skills';
// import Footer from './components/Footer/Footer';
// import './index.css'
// import useLocalStorage from './hooks/useLocalStorage';

export type LangProps = {
  lang: string;
};

function App() {
  // const [lang, setLang] = useLocalStorage({
  //   key: "language",
  //   initialValue: "cz",
  // });

  // function toggleLanguage() {
  //   setLang(lang === "en" ? "cz" : "en");
  // }

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
      }}
    >
      {/* br tag to avoid margin collapsing? I don't really get it  */}
      <br />
      {/* <Navbar lang={lang} toggleLanguage={toggleLanguage} />
      <About lang={lang} />
      <Skills lang={lang} />
      <Projects lang={lang} />
      <Footer /> */}
      <h1>HELLO WORLD</h1>
    </main>
  );
}

export default App;
