import React from 'react';

interface ProjectProps {
  id: number,
  projectName: string,
  projectInfo: string,
  repo: string,
  liveSite: string,
  imgSrc: string;
  isShown: boolean,
  toggleProject: any,
  closeProject: any
}

const Project: React.FC<ProjectProps> = (props) => {

  return (
    <>
      <article onClick={()=>props.toggleProject(props.id)} className="projects">
        <h3 className='project_name'>{props.projectName}</h3>
        <img className='project_img' src={props.imgSrc} alt="" />
        <div className="project_bottom_container">
          <small className='project_info'>{props.projectInfo}</small>

          
        </div>
        <div className="overlay"></div>
      </article>

        {/* --------CARD TO SHOW ON CLICK----------- */}
      {props.isShown && <div onClick={props.closeProject} className='overlay_page'></div>}
      {props.isShown && <article  onClick={()=>props.toggleProject(props.id)} className="show-project projects">
        <h3 className='project_name'>{props.projectName}</h3>
        <img className='project_img' src={props.imgSrc} alt="" />
        <div className="project_bottom_container">
          <small className='project_info'>{props.projectInfo}</small>

          <div className="project_links_container">
             <a href={props.liveSite} target='_blank' className="project_live_site"><img className='link_ico' src="images/link.svg" alt="link icon" />preview site</a>
             <a href={props.repo} target='_blank' className="project_repo"><img className='link_ico' src="images/ghlink.svg" alt="link icon" />repository</a>
          </div>
        </div>
      </article>}

      </>
)};

export default Project;
