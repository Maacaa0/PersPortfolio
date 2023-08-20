import { useState } from 'react'

function Links() {

  const [activeLink, setActiveLink] = useState<string>("ABOUT")

  function setLink(e: React.MouseEvent<HTMLAnchorElement>) {
    const anchorElement = e?.currentTarget as HTMLAnchorElement
    const anchorId = anchorElement.id
    if (anchorId) {
        setActiveLink(anchorId)
    }
  }

  return (
    <>
      <ul className="section_selection">
          <li className={activeLink === "ABOUT" ? "underline" : ""}>
              <a id='ABOUT' href="#s1" onClick={setLink}>ABOUT ME</a>
          </li>

          <li className={activeLink === "SKILLS" ? "underline" : ""}>
              <a id='SKILLS' href="#s2" onClick={setLink}>SKILLS</a>
          </li>

          <li className={activeLink === "PROJECTS" ? "underline" : ""}>
              <a id='PROJECTS' href="#s3" onClick={setLink}>PROJECTS</a>
          </li>
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