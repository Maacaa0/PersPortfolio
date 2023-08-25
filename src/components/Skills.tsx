import { useState } from "react"
import skillSet from "../skillSet"

interface SkillsProps {
    imgSrc: string,
    text: string,
    show: boolean,
}

 const Skills = () => {
    const [stackData, setStackData] = useState<SkillsProps[]>(skillSet)


    const handleMouseEnter = (id: string) => {
        setStackData(prevState => prevState.map(data => (
           data.text === id ? {...data, show: true} : {...data, show: false}
        )))
    }

    const handleMouseLeave = () => {
        setStackData(prevState => prevState.map(data => (
            {...data, show: false}
        )))
    }

    const skills = stackData.map((skill, i) => (
        <div
            className="ico_wrapper"
            key={i}
            id={skill.text}
            onMouseEnter={() => handleMouseEnter(skill.text)}
            onMouseLeave={() => handleMouseLeave()}
          >
            {skill.show && <small className="icon_name">{skill.text}</small>}
            <img className="skills_icon" src={skill.imgSrc} alt={`${skill.text} icon`} />
        </div>
    ));

  return (
    <section id='s2' className='section-2'>
        <article className="skills_article">

            <h4 className="skills_heading">Tech Stack</h4>

            <div className="icons_container">
             {skills}
            </div>

            <p className="skills_text about_para code ">I started learning front-end development in early 2022. I've been using <span className="highlight_red">YouTube</span> tutorials and <a target="_blank" href="https://www.freecodecamp.org/" className="highlight">FreeCodeCamp</a> to learn, and I'm also practicing my skills with challenges from <a target="_blank" href="https://www.frontendmentor.io/challenges" className="highlight">Frontend Mentor</a> and <a target="_blank" href="https://www.codewars.com/users/Maacaa0" className="highlight_red">Codewars</a>.</p>

            <p className="skills_text about_para lightbulb"> I have learned <span className="highlight">HTML</span>, <span className="highlight">CSS</span> and <span className="highlight">Javascript</span> essentials. Now I am on a path to learn <span className="highlight_lightBlue">ReactJs</span> with <span className="highlight_darkBlue">Typescript</span> and <span className="highlight_red">Git</span> to take my skills to the next level. <br /> <br />
            I understand, there is so much I dont know yet, but I am excited to explore and learn.
            </p>

           
        </article>
    </section>
  )
}

export default Skills