import { useState } from 'react';
import Links from './components/Links'
import About from './components/About';
import Projects from './components/Projects';
import Socials from './components/Socials';
import Skills from './components/Skills';
import './index.css'
import projectData from "./projectData"



function App() {
  const [projectArr, setProjectArr] = useState(projectData)
    
  const toggleProject = (id: number) => {
    setProjectArr(prevState => {
      return prevState.map(project => {
        return project.id === id ? {...project, isShown: !project.isShown} : {...project, isShown: false}
      })
    }) 
  }

  const closeProject = () => {
    setProjectArr(prevState => {
      return prevState.map(project => {
        return {...project, isShown: false}
      })
    })
  }
  
  const projects = projectArr.map(project => {
    return (
      <Projects projectName={project.projectName}
               projectInfo={project.projectInfo}
               repo={project.repo}
               liveSite={project.liveSite}
               imgSrc={project.imgSrc}
               isShown={project.isShown}
               key={project.id}
               id={project.id}
               toggleProject={toggleProject}
               closeProject={closeProject}
                />
    )
  })
  
  return (
    <main>
      <Links closeProject={closeProject} />
      
      <About />
        
      <Skills />


      <section id='s3' className='section-3'>
      <div className="projects_top_wrapper">
        <p className="projects_text">Here are some of my <span className='highlight'>Projects</span> I coded to practice and harden my skills.</p>
        <small className="highlight">Click / Tap on project card to show more info</small>
      </div>
      <div className="projects_wrapper">
        {projects}
      </div>
      </section>

      <Socials />

      
    </main>
  )
}

export default App
