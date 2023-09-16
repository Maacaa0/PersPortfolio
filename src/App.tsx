import Navbar from './components/Navbar'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import './index.css'



function App() {
 
  return (
    <main>
      {/* br tag to avoid margin collapsing? I dont really get it  */}
      <br /> 
      <Navbar />
      <About />
      <Skills />
      <Projects />

      {/* <Socials />  */}
    </main>
  )
}

export default App
