import Navbar from './components/Navbar'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer';
import './index.css'

function App() {
 
  return (
    <main>
      {/* br tag to avoid margin collapsing? I don't really get it  */}
      <br /> 
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Footer />
      
    </main>
  )
}

export default App
