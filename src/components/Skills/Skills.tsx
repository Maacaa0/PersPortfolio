import { useState } from "react";
import skillSet from "./skillSet";
import { codeIcon, lightBulbIcon } from "../Icons";
import { LangProps } from "../../App";

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
      className="ico_wrapper"
      key={i}
      id={skill.text}
      onMouseEnter={() => handleMouseEnter(skill.text)}
      onMouseLeave={() => handleMouseLeave()}
    >
      {skill.show && <small className="icon_name">{skill.text}</small>}
      <img
        className="skills_icon"
        src={skill.imgSrc}
        alt={`${skill.text} icon`}
      />
    </div>
  ));

  return (
    <article className="skills_article">
      <div className="svg_wrapper">
        {codeIcon}
        <div className="text">
          {lang === "en" ? (
            <>
              I started learning front-end development in early 2022. I've been
              using <span className="highlight_red">YouTube</span> tutorials and{" "}
              <a
                target="_blank"
                href="https://www.freecodecamp.org/"
                className="highlight"
              >
                FreeCodeCamp
              </a>{" "}
              to learn, and I'm also practicing my skills with challenges from{" "}
              <a
                target="_blank"
                href="https://www.frontendmentor.io/challenges"
                className="highlight"
              >
                Frontend Mentor
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                href="https://www.codewars.com/users/Maacaa0"
                className="highlight"
              >
                Codewars
              </a>
              .
            </>
          ) : (
            <>
              Front-end jsem se začal učit na začátku roku 2022. K učení
              používám výukové videa na{" "}
              <span className="highlight_red">YouTube</span> a také procvičuji
              své dovednosti s výzvami od{" "}
              <a
                target="_blank"
                href="https://www.freecodecamp.org/"
                className="highlight"
              >
                FreeCodeCamp
              </a>
              ,{" "}
              <a
                target="_blank"
                href="https://www.frontendmentor.io/challenges"
                className="highlight"
              >
                Frontend Mentor
              </a>{" "}
              nebo{" "}
              <a
                target="_blank"
                href="https://www.codewars.com/users/Maacaa0"
                className="highlight"
              >
                Codewars
              </a>
              .
            </>
          )}
          <div className="icons_container">{skills}</div>
        </div>
      </div>

      <div className="svg_wrapper">
        {lightBulbIcon}
        <p className="text">
          {lang === "en" ? (
            <>
              I have learned <span className="highlight">HTML</span>,{" "}
              <span className="highlight">CSS</span>, and{" "}
              <span className="highlight">Javascript</span> essentials. Now I am
              on a path to learn React with Typescript and Git to take my skills
              to the next level.
              <br /> <br /> I understand, there is so much I don't know yet, but
              I am excited to explore and learn.
            </>
          ) : (
            <>
              Naučil jsem se základy <span className="highlight">HTML</span>,{" "}
              <span className="highlight">CSS</span>, a{" "}
              <span className="highlight">Javascriptu</span>. Nyní jsem na cestě naučit se React s Typescriptem a Git abych své dovednosti posunul na další úroveň.
              <br /> <br /> Rozumím, že je toho tolik, co ještě nevím, ale jsem namotivovaný se učit a prozkoumávat nové možnosti.
            </>
          )}
        </p>
      </div>
    </article>
  );
};

export default Skills;
