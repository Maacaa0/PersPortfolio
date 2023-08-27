import Navbar from './components/Navbar'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Socials from './components/Socials';
import Me  from './components/About/Me';
import './index.css'



function App() {
 
  return (
    <main id="s1">
      <Navbar />
      <Me />
      <About />
      <Projects />

      <Socials /> 
    </main>
  )
}

export default App
