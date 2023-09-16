import React, { useState } from 'react';
import projectData from './projectData';


const Projects: React.FC = () => {

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
      <div key={project.id}>
      <div onClick={()=>toggleProject(project.id)} className="projects">
        <h3 className='project_name'>{project.projectName}</h3>
        <img className='project_img' src={project.imgSrc} alt="project image" />
        <div className="project_bottom_container">
          <small className='project_info'>{project.projectInfo}</small>

          
        </div>
        <div className="overlay"></div>
      </div>

        {/* --------CARD TO SHOW ON CLICK----------- */}
      {project.isShown && <div onClick={closeProject} className='overlay_page'></div>}
      {project.isShown && <div onClick={()=>toggleProject(project.id)} className="shown_projects">
        <h3 className='project_name'>{project.projectName}</h3>
        <img className='project_img' src={project.imgSrc} alt="project image" />
        <div className="project_bottom_container">
          <small className='project_info'>{project.projectInfo}</small>

          <div className="project_links_container">
             <a href={project.liveSite} target='_blank' className="project_live_site"><img className='link_ico' src="images/link.svg" alt="link icon" />preview site</a>
             <a href={project.repo} target='_blank' className="project_repo"><img className='link_ico' src="images/ghlink.svg" alt="link icon" />repository</a>
          </div>
        </div>
      </div>}

      </div>
  )})

  return (
    <section className='section-2'>
      <div className="projects_top_wrapper">
        <p className="projects_text text">Here are some of my projects I coded to practice and harden my skills.</p>
        <small className="highlightnt highlight">Click / Tap on project card to show more info</small>
      </div>
      <div className="projects_wrapper">
        {projects}
      </div>
      </section>
)};

export default Projects;
