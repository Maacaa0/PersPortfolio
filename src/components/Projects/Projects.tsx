import React, { useState } from "react";
import projectData from "./projectData";

const Projects: React.FC = () => {
  const [projectArr, setProjectArr] = useState(projectData);

  const toggleProject = (id: number) => {
    setProjectArr((prevState) => {
      return prevState.map((project) => {
        return project.id === id
          ? { ...project, isShown: !project.isShown }
          : { ...project, isShown: false };
      });
    });
  };

  const closeProject = () => {
    setProjectArr((prevState) => {
      return prevState.map((project) => {
        return { ...project, isShown: false };
      });
    });
  };

  const projects = projectArr.map((project) => {
    return (
      <div
        onClick={() => toggleProject(project.id)}
        className={
          project.id % 2 === 0
            ? "project_container"
            : "project_container reversed"
        }
        key={project.id}
      >
        <div className="project_image">
          <img
            className="project_img"
            src={project.imgSrc}
            alt="project image"
          />
        </div>
        <div className="project_info">
          <div>
            <h3 className="project_name">{project.projectName}</h3>
            <small className="project_info_text">{project.projectInfo}</small>
          </div>
          <small className="created_with">
            Created with:
            <br />
            {project.buildWith}
          </small>
        </div>
      </div>
    );
  });

  {
    /* --------CARD TO SHOW ON CLICK----------- */
  }
  const projectCard = projectArr.map((project) => {
    return (
      <div key={project.id}>
        {project.isShown && (
          <div onClick={closeProject} className="overlay_page"></div>
        )}
        {project.isShown && (
          <div
            onClick={() => toggleProject(project.id)}
            className="shown_project"
          >
            <h3 className="shown_project_name">{project.projectName}</h3>
            <img
              className="shown_project_img"
              src={project.imgSrc}
              alt="project image"
            />
            <div className="shown_project_bottom_container">
              <small className="shown_project_info">
                {project.projectInfo}
                <br />
                <br />
                <small className="shown_created_with">
                  Created with:
                  <br />
                  {project.buildWith}
                </small>
              </small>

              <div className="project_links_container">
                <a
                  href={project.liveSite}
                  target="_blank"
                  className="project_live_site"
                >
                  <img
                    className="link_ico"
                    src="images/link.svg"
                    alt="link icon"
                  />
                  preview site
                </a>
                <a href={project.repo} target="_blank" className="project_repo">
                  <img
                    className="link_ico"
                    src="images/ghlink.svg"
                    alt="link icon"
                  />
                  repository
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  });

  return (
    <section className="section-2">
      <div className="projects_top_wrapper">
        <p className="projects_text text">
          Projects I coded to practice and harden my skills.
        </p>
        <small className="highlightnt highlight">
          Click / Tap on project card to show more info
        </small>
      </div>
      <div className="projects_wrapper">{projects}</div>
      {projectCard}
    </section>
  );
};

export default Projects;
