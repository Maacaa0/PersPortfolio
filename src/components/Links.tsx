import React, { useState, useEffect } from 'react'

type LinksProps = {
  closeProject: () => void;
};

const Links: React.FC<LinksProps> = (props:any) => {

  const [activeSection, setActiveSection] = useState<string>('s1');

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          props.closeProject()
        }
      });
    };
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };
    
    const observer = new IntersectionObserver(handleIntersection, options);
    
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });
  
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
        <nav>
          <a className={activeSection === 's1' ? 'underline nav_link' : 'nav_link'} href="#s1" onClick={(e) => { e.preventDefault(); scrollToSection('s1'); }}>ABOUT ME</a>
          <a className={activeSection === 's2' ? 'underline nav_link' : 'nav_link'} href="#s2" onClick={(e) => { e.preventDefault(); scrollToSection('s2'); }}>SKILLS</a>
          <a className={activeSection === 's3' ? 'underline nav_link' : 'nav_link'} href="#s3" onClick={(e) => { e.preventDefault(); scrollToSection('s3'); }}>PROJECTS</a>
        </nav>
  )
}

export default Links
