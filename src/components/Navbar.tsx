import React, { useState, useEffect } from 'react'

const Navbar: React.FC = () => {

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
        <nav>
          <a className={activeSection === 's1' ? 'underline nav_link' : 'nav_link'} href="#s1" onClick={(e) => { e.preventDefault(); scrollToSection('s1'); }}>ABOUT ME</a>
          <a className={activeSection === 's2' ? 'underline nav_link' : 'nav_link'} href="#s2" onClick={(e) => { e.preventDefault(); scrollToSection('s2'); }}>PROJECTS</a>
          <a className={activeSection === 's3' ? 'underline nav_link' : 'nav_link'} href="#s3" onClick={(e) => { e.preventDefault(); scrollToSection('s3'); }}>CONTACT ME</a>
        </nav>
  )
}

export default Navbar
