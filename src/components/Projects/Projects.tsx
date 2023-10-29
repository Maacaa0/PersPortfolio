import React, { useState, useEffect } from "react";
import { projectDataCZ } from "./projectData";
import { projectDataEN } from "./projectData";
import { LangProps } from "../../App";
import styles from "./projects.module.css";

const Projects: React.FC<LangProps> = ({ lang }) => {
  const [projectArr, setProjectArr] = useState(
    lang === "en" ? projectDataEN : projectDataCZ
  );

  useEffect(() => {
    setProjectArr(lang === "en" ? projectDataEN : projectDataCZ);
  }, [lang]);

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
          project.id % 2 === 0 ? styles.container : styles.container__reversed
        }
        key={project.id}
      >
        <div className={styles.image}>
          <img
            className={styles.img}
            src={project.imgSrc}
            alt="project image"
          />
        </div>
        <div className={styles.info}>
          <div>
            <h3 className={styles.name}>{project.projectName}</h3>
            <small className={styles.info__text}>{project.projectInfo}</small>
          </div>
          <small className={styles.created}>
            {lang === "en" ? "Created with:" : "Vytvořeno pomocí:"}
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
          <div onClick={closeProject} className={styles.overlay}></div>
        )}
        {project.isShown && (
          <div
            onClick={() => toggleProject(project.id)}
            className={styles.card}
          >
            <h3 className={styles.card__name}>{project.projectName}</h3>
            <img
              className={styles.card__img}
              src={project.imgSrc}
              alt="project image"
            />
            <div className={styles.card__bottom}>
              <small className={styles.card__info}>
                {project.projectInfo}
                <br />
                <br />
                <small className={styles.card__created}>
                  {lang === "en" ? "Created with:" : "Vytvořeno pomocí:"}
                  <br />
                  {project.buildWith}
                </small>
              </small>

              <div className={styles.card__links__wrapper}>
                <a href={project.liveSite} target="_blank">
                  <img
                    className={styles.card__icon}
                    src="images/link.svg"
                    alt="link icon"
                  />
                  {lang === "en" ? "preview site" : "otevřít stránku"}
                </a>
                <a href={project.repo} target="_blank" className="project_repo">
                  <img
                    className={styles.card__icon}
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
    <section className={styles.section}>
      <div className={styles.text}>
        <p>
          {lang === "en"
            ? "Projects I coded to practice and harden my skills."
            : "Projekty, které jsem vytvořil, abych procvičil své dovednosti."}
        </p>
        <small className={styles.highlight}>
          {lang === "en"
            ? "Click / Tap on project card to show more info"
            : "Kliknutím / klepnutím na kartu projektu zobrazíte více informací"}
        </small>
      </div>
      <div className={styles.wrapper}>{projects}</div>

      <h4 className={styles.more}>
        {lang === "en" ? "More Projects" : "Další Projekty"}:
      </h4>
      <table>
        <thead>
          <tr>
            <th>{lang === "en" ? "Project Name" : "Název Projektu"}</th>
            <th>{lang === "en" ? "Repository" : "Repozitář"}</th>
            <th>{lang === "en" ? "Live Site Link" : "Odkaz na stránku"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>31. Pluk RCHBO</td>
            <td>
              <a
                target="_blank"
                href="https://github.com/Maacaa0/31-hana-maca-final"
              >
                GitHub
              </a>
            </td>
            <td>
              <a target="_blank" href="https://31pluk-liberec.cz/">
                Live Site
              </a>
            </td>
          </tr>
          <tr>
            <td>Tenzies</td>
            <td>
              <a
                target="_blank"
                href="https://github.com/Maacaa0/Tenzies_React"
              >
                GitHub
              </a>
            </td>
            <td>
              <a
                target="_blank"
                href="https://shiny-cocada-1768e1.netlify.app/"
              >
                Live Site
              </a>
            </td>
          </tr>
          <tr>
            <td>Tip calculator</td>
            <td>
              <a
                target="_blank"
                href="https://github.com/Maacaa0/tip-calculator-app-main"
              >
                GitHub
              </a>
            </td>
            <td>
              <a
                target="_blank"
                href="https://maacaa0.github.io/tip-calculator-app-main/"
              >
                Live Site
              </a>
            </td>
          </tr>
          <tr>
            <td>Advice generator</td>
            <td>
              <a
                target="_blank"
                href="https://github.com/Maacaa0/advice-generator-app-main"
              >
                GitHub
              </a>
            </td>
            <td>
              <a
                target="_blank"
                href="https://maacaa0.github.io/advice-generator-app-main/"
              >
                Live Site
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      {projectCard}
    </section>
  );
};

export default Projects;
