import { useState } from 'react'

interface elemProps {
  id: string,
  name: string,
  decription?: string

}

function Links() {

  const [activeBtn, setActiveBtn] = useState<string>("s1")

const elements: elemProps[] = ([
      { id: 's1', name: 'ABOUT ME'},
      { id: 's2', name: 'SKILLS'},
      { id: 's3', name: 'PROJECTS'}
    ])

const scrollToElement = (id: string) => {
    const container: HTMLElement | null = document.getElementById(id);
    container?.scrollIntoView({ behavior: 'smooth' });
    setActiveBtn(id)
};

  return (
    <>
      <ul className="section_selection">
                    {elements.map((element, index) => (
                        <button key={index}
                                onClick={() => scrollToElement(element.id)}
                                className={element.id === activeBtn ? "underline" : ""}
                        >
                            {element.name}
                        </button>
                    ))}
      </ul>
        <div className="socials">
          <a href="https://github.com/Maacaa0" target='_blank' className="socials_icon">
            <img src="images/github.svg" alt="github icon" />
          </a>
          <a href="https://www.linkedin.com/in/marcel-hess-35a081257/" target='_blank' className="socials_icon">
            <img src="images/linkedin.svg" alt="linkedin icon" />
          </a>
        </div>
      </>
  )
}

export default Links



{/* <ul className="section_selection">
          <li className={activeLink === "ABOUT" ? "underline" : ""}>
              <a id='ABOUT' href="#s1" onClick={setLink}>ABOUT ME</a>
          </li>

          <li className={activeLink === "SKILLS" ? "underline" : ""}>
              <a id='SKILLS' href="#s2" onClick={setLink}>SKILLS</a>
          </li>

          <li className={activeLink === "PROJECTS" ? "underline" : ""}>
              <a id='PROJECTS' href="#s3" onClick={setLink}>PROJECTS</a>
          </li>
        </ul> */}