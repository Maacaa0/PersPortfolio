import React, { useState, useEffect } from 'react'

type LinksProps = {
  scrollToSection: (sectionId: string) => void;
};

const Links: React.FC<LinksProps> = () => {

  const [activeSection, setActiveSection] = useState<string>('s1');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <>
        <div className='section_selection'>
          <a className={activeSection === 's1' ? 'underline' : ''} href="#s1" onClick={(e) => { e.preventDefault(); scrollToSection('s1'); }}>ABOUT ME</a>
          <a className={activeSection === 's2' ? 'underline' : ''} href="#s2" onClick={(e) => { e.preventDefault(); scrollToSection('s2'); }}>SKILLS</a>
          <a className={activeSection === 's3' ? 'underline' : ''} href="#s3" onClick={(e) => { e.preventDefault(); scrollToSection('s3'); }}>PROJECTS</a>
        </div>
      </>
  )
}

export default Links
