import Navbar from './components/Navbar'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import './index.css'

import { ghIcon, linkedInIcon, fbIcon } from './components/Icons';



function App() {
 
  return (
    <main>
      {/* br tag to avoid margin collapsing? I don't really get it  */}
      <br /> 
      <Navbar />
      <About />
      <Skills />
      <Projects />

      <footer>
      <div className="footer_socials">

        <a href="https://github.com/Maacaa0" target='_blank' className="footer_socials_icon">
          {ghIcon}
        </a>
        <a href="https://www.linkedin.com/in/marcel-hess-35a081257/" target='_blank' className="footer_socials_icon">
          {linkedInIcon}
        </a>
        <a href="https://www.facebook.com/hess.marcel/" target='_blank' className="footer_socials_icon">
          {fbIcon}
        </a>
      </div>  
      <a href="mailto:hesss.marcel@gmail.com">hesss.marcel@gmail.com</a>
      <a href="tel:+420739254332">+420 739 254 332</a>
      <small className='copyright'>&copy; 2023 Czech Republic Maca</small>
      </footer>
    </main>
  )
}

export default App
