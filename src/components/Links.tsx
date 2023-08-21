import React, { useState } from 'react'

type LinksProps = {
  scrollToSection: (sectionId: string) => void;
};

const Links: React.FC<LinksProps> = ({ scrollToSection }) => {
  return (
      <>
        <div className='section_selection'>
          <a href="#s1" onClick={(e) => { e.preventDefault(); scrollToSection('s1'); }}>ABOUT ME</a>
          <a href="#s2" onClick={(e) => { e.preventDefault(); scrollToSection('s2'); }}>SKILLS</a>
          <a href="#s3" onClick={(e) => { e.preventDefault(); scrollToSection('s3'); }}>PROJECTS</a>
        </div>
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
