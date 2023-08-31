import Navbar from './components/Navbar'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Me  from './components/About/Me';
import './index.css'



function App() {
 
  return (
    <main>
      <Navbar />
      <Me />
      <About />
      <Projects />

      {/* <Socials />  */}
    </main>
  )
}

export default App
