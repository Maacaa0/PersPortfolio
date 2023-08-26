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
            <div className="techstack">
            

                <h4 className="skills_heading">
                    <svg className="svg_icon" width="30" height="30" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.1875 5.59375V9.5H32.8125V5.59375C32.8125 5.16406 32.4609 4.8125 32.0312 4.8125H17.9688C17.5391 4.8125 17.1875 5.16406 17.1875 5.59375ZM12.5 9.5V5.59375C12.5 2.57617 14.9512 0.125 17.9688 0.125H32.0312C35.0488 0.125 37.5 2.57617 37.5 5.59375V9.5H40.2441C41.4844 9.5 42.6758 9.99805 43.5547 10.877L48.623 15.9453C49.502 16.8242 50 18.0156 50 19.2559V26.6875H37.5V25.125C37.5 23.3965 36.1035 22 34.375 22C32.6465 22 31.25 23.3965 31.25 25.125V26.6875H18.75V25.125C18.75 23.3965 17.3535 22 15.625 22C13.8965 22 12.5 23.3965 12.5 25.125V26.6875H0V19.2559C0 18.0156 0.498047 16.8242 1.37695 15.9453L6.44531 10.877C7.32422 9.99805 8.51563 9.5 9.75586 9.5H12.5ZM0 37.625V29.8125H12.5V31.375C12.5 33.1035 13.8965 34.5 15.625 34.5C17.3535 34.5 18.75 33.1035 18.75 31.375V29.8125H31.25V31.375C31.25 33.1035 32.6465 34.5 34.375 34.5C36.1035 34.5 37.5 33.1035 37.5 31.375V29.8125H50V37.625C50 41.0723 47.1973 43.875 43.75 43.875H6.25C2.80273 43.875 0 41.0723 0 37.625Z" fill="var(--highlight-clr)"/>
                    </svg>
                    Tech Stack
                </h4>

                <div className="icons_container">
                    {skills}
                </div>
            </div>

            <div className="svg_wrapper">
                <svg className="svg_icon" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" fill="var(--highlight-clr)" /></svg>
                <p className="code text">I started learning front-end development in early 2022. I've been using <span className="highlight_red">YouTube</span> tutorials and <a target="_blank" href="https://www.freecodecamp.org/" className="highlight">FreeCodeCamp</a> to learn, and I'm also practicing my skills with challenges from <a target="_blank" href="https://www.frontendmentor.io/challenges" className="highlight">Frontend Mentor</a> and <a target="_blank" href="https://www.codewars.com/users/Maacaa0" className="highlight_red">Codewars</a>.
                </p>
            </div>
            <div className="svg_wrapper">
            <svg className="svg_icon" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 384 512"><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" fill="var(--highlight-clr)" /></svg>
                <p className="text"> I have learned <span className="highlight">HTML</span>, <span className="highlight">CSS</span> and <span className="highlight">Javascript</span> essentials. Now I am on a path to learn <span className="highlight_lightBlue">ReactJs</span> with <span className="highlight_darkBlue">Typescript</span> and <span className="highlight_red">Git</span> to take my skills to the next level. <br /> <br />
            I understand, there is so much I dont know yet, but I am excited to explore and learn.
                </p>
            </div>
           
        </article>
    </section>
  )
}

export default Skills