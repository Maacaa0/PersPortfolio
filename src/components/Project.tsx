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
}

const Project: React.FC<ProjectProps> = (props) => {


  const styles: React.CSSProperties = {
    backgroundImage: `url(${props.imgSrc})`
  };

  return (
      <article onClick={()=>props.toggleProject(props.id)} className={props.isShown ? "show-project projects" : "projects"} style={styles} >
        <h3 className='project_name'>{props.projectName}</h3>

        <div className="project_bottom_container">
          <small className='project_info'>{props.projectInfo}</small>

          { props.isShown && <div className="project_links_container">
             <a href={props.liveSite} target='_blank' className="project_live_site"><img className='link_ico' src="images/link.svg" alt="link icon" />preview site</a>
             <a href={props.repo} target='_blank' className="project_repo"><img className='link_ico' src="images/ghlink.svg" alt="link icon" />repository</a>
          </div>}
        </div>
        <div className="overlay"></div>
      </article>
)};

export default Project;
