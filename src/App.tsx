import { useState } from 'react';
import Links from './components/Links'
import Project from './components/Project';
import Socials from './components/Socials';
import './index.css'
import projectData from "./projectData"



function App() {
  const [projectArr, setProjectArr] = useState(projectData)
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
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
      <Project projectName={project.projectName}
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
      <Links scrollToSection={scrollToSection} />
      <section id='s1' className='section-1'>
        <article>
          <div className="typewriter">
            <h2>my name is</h2>
            <h1>Marcel HESS</h1>
          </div>

          <p className='basic_info about_para'>
          I am self-taught junior front-end developer eager for first web developer job. <br /> <br />
          Passionate about creating impactful websites.  <br /><br />
          Seeking opportunities to learn and contribute.
          </p>

          <div className="divider"></div>

          <p className='hobbys_info about_para'>
          I love sports like running, working out, and swimming to keep myself energized. <br /><br />
          Nature inspires me and brings me peace. In my spare time, I enjoy reading.
          </p>
        </article>
      </section>


      <section id='s2' className='section-2'>
        <article className='skills'>
          <p className="skills_text about_para">
            I started learning front-end development in early 2022. I've been using <span className='highlight_red'>YouTube</span> tutorials and <span className="highlight">FreeCodeCamp</span> to learn, and I'm also practicing my skills with challenges from <span className="highlight">Frontend Mentor</span> and <span className="highlight_red">Codewars</span>.
          </p>

          <h3 className='skills_heading about_para'>Tech Stack</h3>
        </article>
      </section>


      <section id='s3' className='section-3'>
      <p className="projects_text">Here are some of my <span className='highlight'>Projects</span> I coded to practice and harden my skills.</p>
      <small className="highlight">Click / Tap on project card to show more info</small>
        {projects}

      </section>

      <Socials />

      
    </main>
  )
}

export default App
