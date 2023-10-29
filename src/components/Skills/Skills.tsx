import { useState } from "react";

import skillSet from "./skillSet";
import { codeIcon, lightBulbIcon } from "../Icons";
import { LangProps } from "../../App";
import styles from "./skills.module.css";

interface SkillsProps {
  imgSrc: string;
  text: string;
  show: boolean;
}

const Skills = ({ lang }: LangProps) => {
  const [stackData, setStackData] = useState<SkillsProps[]>(skillSet);

  const handleMouseEnter = (id: string) => {
    setStackData((prevState) =>
      prevState.map((data) =>
        data.text === id ? { ...data, show: true } : { ...data, show: false }
      )
    );
  };

  const handleMouseLeave = () => {
    setStackData((prevState) =>
      prevState.map((data) => ({ ...data, show: false }))
    );
  };

  const skills = stackData.map((skill, i) => (
    <div
      className={styles.icon}
      key={i}
      id={skill.text}
      onMouseEnter={() => handleMouseEnter(skill.text)}
      onMouseLeave={() => handleMouseLeave()}
    >
      {skill.show && <small className={styles.icon__name}>{skill.text}</small>}
      <img
        className={styles.icon__image}
        src={skill.imgSrc}
        alt={`${skill.text} icon`}
      />
    </div>
  ));

  return (
    <article className={styles.article}>
      <div className={styles.flex}>
        {codeIcon}
        <div className={styles.text}>
          {lang === "en" ? (
            <>
              I started learning front-end development in early 2022. I've been
              using YouTube tutorials and{" "}
              <a
                target="_blank"
                href="https://www.freecodecamp.org/"
                className={styles.highlight}
              >
                FreeCodeCamp
              </a>{" "}
              to learn, and I'm also practicing my skills with challenges from{" "}
              <a
                target="_blank"
                href="https://www.frontendmentor.io/challenges"
                className={styles.highlight}
              >
                Frontend Mentor
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                href="https://www.codewars.com/users/Maacaa0"
                className={styles.highlight}
              >
                Codewars
              </a>
              .
            </>
          ) : (
            <>
              Front-end jsem se začal učit na začátku roku 2022. K učení
              používám výukové videa na YouTube a také procvičuji své dovednosti
              s výzvami od{" "}
              <a
                target="_blank"
                href="https://www.freecodecamp.org/"
                className={styles.highlight}
              >
                FreeCodeCamp
              </a>
              ,{" "}
              <a
                target="_blank"
                href="https://www.frontendmentor.io/challenges"
                className={styles.highlight}
              >
                Frontend Mentor
              </a>{" "}
              nebo{" "}
              <a
                target="_blank"
                href="https://www.codewars.com/users/Maacaa0"
                className={styles.highlight}
              >
                Codewars
              </a>
              .
            </>
          )}
          <div className={styles.icon__wrapper}>{skills}</div>
        </div>
      </div>

      <div className={styles.flex}>
        {lightBulbIcon}
        <p className={styles.text}>
          {lang === "en" ? (
            <>
              I have learned <span className={styles.highlight}>HTML</span>,{" "}
              <span className={styles.highlight}>CSS</span>, and{" "}
              <span className={styles.highlight}>Javascript</span> essentials. Now I am
              on a path to learn React with Typescript and Git to take my skills
              to the next level.
              <br /> <br /> I understand, there is so much I don't know yet, but
              I am excited to explore and learn.
            </>
          ) : (
            <>
              Naučil jsem se základy <span className={styles.highlight}>HTML</span>,{" "}
              <span className={styles.highlight}>CSS</span>, a{" "}
              <span className={styles.highlight}>Javascriptu</span>. Nyní se věnuji
              Reactu s Typescriptem a učím se pracovat s Gitem abych své
              dovednosti posunul na další úroveň.
              <br /> <br /> Rozumím, že je toho mnoho, co ještě nevím, ale jsem
              namotivovaný se učit a prozkoumávat nové možnosti.
            </>
          )}
        </p>
      </div>
    </article>
  );
};

export default Skills;
