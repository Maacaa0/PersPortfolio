import { useState } from 'react'
import skillSet from "./skillSet"

interface SkillsProps {
  imgSrc: string,
  text: string,
  show: boolean,
}

const About = () => {

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

    <section className='section-1'>
        <article className="about">
          

          <div className="svg_wrapper">
          <svg className="svg_icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 29" fill="none">
            <path d="M16.9643 7.14286C16.9643 5.95886 16.4939 4.82335 15.6567 3.98613C14.8195 3.14892 13.684 2.67857 12.5 2.67857C11.316 2.67857 10.1805 3.14892 9.34327 3.98613C8.50606 4.82335 8.03571 5.95886 8.03571 7.14286C8.03571 8.32686 8.50606 9.46237 9.34327 10.2996C10.1805 11.1368 11.316 11.6071 12.5 11.6071C13.684 11.6071 14.8195 11.1368 15.6567 10.2996C16.4939 9.46237 16.9643 8.32686 16.9643 7.14286ZM5.35714 7.14286C5.35714 5.24846 6.10969 3.43164 7.44924 2.0921C8.78878 0.752549 10.6056 0 12.5 0C14.3944 0 16.2112 0.752549 17.5508 2.0921C18.8903 3.43164 19.6429 5.24846 19.6429 7.14286C19.6429 9.03726 18.8903 10.8541 17.5508 12.1936C16.2112 13.5332 14.3944 14.2857 12.5 14.2857C10.6056 14.2857 8.78878 13.5332 7.44924 12.1936C6.10969 10.8541 5.35714 9.03726 5.35714 7.14286ZM2.75112 25.8929H22.2489C21.7522 22.3605 18.7165 19.6429 15.0502 19.6429H9.94978C6.28348 19.6429 3.24777 22.3605 2.75112 25.8929ZM0 26.9141C0 21.4174 4.45312 16.9643 9.94978 16.9643H15.0502C20.5469 16.9643 25 21.4174 25 26.9141C25 27.8293 24.2578 28.5714 23.3426 28.5714H1.65737C0.742188 28.5714 0 27.8293 0 26.9141Z" fill="var(--highlight-clr)" />
          </svg>
          <p className='basic_info text'>
          I am self-taught junior front-end developer eager for first web developer job. <br /> <br />
          Passionate about creating impactful websites.  <br /><br />
          Seeking opportunities to learn and contribute.
          </p>
          </div>

          <div className="divider"></div>

          <div className="svg_wrapper">
          <svg className="svg_icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 22" fill="none">
            <path d="M11.0254 20.7704L10.9033 20.6581L2.34863 12.7138C0.849609 11.3222 0 9.36906 0 7.32316V7.16203C0 3.72453 2.44141 0.775309 5.82031 0.130778C7.74414 -0.240316 9.71191 0.20402 11.2793 1.30754C11.7188 1.62004 12.1289 1.98136 12.5 2.3964C12.7051 2.16203 12.9248 1.94718 13.1592 1.74699C13.3398 1.59074 13.5254 1.44425 13.7207 1.30754C15.2881 0.20402 17.2559 -0.240316 19.1797 0.125895C22.5586 0.770426 25 3.72453 25 7.16203V7.32316C25 9.36906 24.1504 11.3222 22.6514 12.7138L14.0967 20.6581L13.9746 20.7704C13.5742 21.1415 13.0469 21.3515 12.5 21.3515C11.9531 21.3515 11.4258 21.1464 11.0254 20.7704ZM11.6748 4.98918C11.6553 4.97453 11.6406 4.955 11.626 4.93546L10.7568 3.9589L10.752 3.95402C9.62402 2.68937 7.91992 2.1132 6.25977 2.43058C3.98438 2.86515 2.34375 4.84757 2.34375 7.16203V7.32316C2.34375 8.71476 2.9248 10.0478 3.94531 10.995L12.5 18.9394L21.0547 10.995C22.0752 10.0478 22.6562 8.71476 22.6562 7.32316V7.16203C22.6562 4.85246 21.0156 2.86515 18.7451 2.43058C17.085 2.1132 15.376 2.69425 14.2529 3.95402C14.2529 3.95402 14.2529 3.95402 14.248 3.9589C14.2432 3.96379 14.248 3.9589 14.2432 3.96379L13.374 4.94035C13.3594 4.95988 13.3398 4.97453 13.3252 4.99406C13.1055 5.21379 12.8076 5.33586 12.5 5.33586C12.1924 5.33586 11.8945 5.21379 11.6748 4.99406V4.98918Z" fill="var(--highlight-clr)" />
          </svg>
          <p className='hobbys_info text'>
          I love sports like running, working out, and swimming to keep myself energized. <br /><br />
          Nature inspires me and brings me peace. In my spare time, I enjoy reading.
          </p>
          </div>
        </article>

        <div className="divider hide"></div>

        <article className="skills_article">
            <div className="svg_wrapper">
                <svg className="svg_icon" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" fill="var(--highlight-clr)" /></svg>
                <p className="text">I started learning front-end development in early 2022. I've been using <span className="highlight_red">YouTube</span> tutorials and <a target="_blank" href="https://www.freecodecamp.org/" className="highlight">FreeCodeCamp</a> to learn, and I'm also practicing my skills with challenges from <a target="_blank" href="https://www.frontendmentor.io/challenges" className="highlight">Frontend Mentor</a> and <a target="_blank" href="https://www.codewars.com/users/Maacaa0" className="highlight_red">Codewars</a>.
                </p>
            </div>
            
            <div className="icons_container">
                {skills}
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

export default About