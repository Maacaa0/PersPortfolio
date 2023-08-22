import { useState } from 'react';
import Links from './components/Links'
import './index.css'

function App() {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyToClipBoard = () => {
    const textToCopy = "hesss.marcel@gmail.com"

    navigator.clipboard.writeText(textToCopy)

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000); // Display the confirmation for 2 seconds
  }

  return (
    <main>
      <Links scrollToSection={scrollToSection} />
      <section id='s1' className='section-1'>
        <article>
          <h2>my name is</h2>
          <h1>Marcel HESS</h1>

          <p className='basic_info about_para'>
          I am self-taught junior front-end developer eager for first web developer job. <br /> <br />
          Passionate about creating impactful websites.  <br /><br />
          Seeking opportunities to learn and contribute.
          </p>

          <div className="divider"></div>

          <p className='hobbys_info about_para'>
          I love sports like running, working out, and swimming to keep myself energized. <br /><br />
          Nature inspires me and brings me peace. In my spare time, I enjoy reading.
          </p>
        </article>


      </section>
      {/* <div className="fill"></div> */}
      <section id='s2' className='section-2'></section>
      {/* <div className="fill"></div> */}
      <section id='s3' className='section-3'></section>
      <div className="socials">
        {isCopied && <div className='confirmation_box'>Email copied to Clipboard!</div>}
        <a className='socials_icon email_icon' onClick={copyToClipBoard}> <img src="images/email.svg" alt="email icon" />
        </a>
          <a href="https://github.com/Maacaa0" target='_blank' className="socials_icon">
            <img src="images/github.svg" alt="github icon" />
          </a>
          <a href="https://www.linkedin.com/in/marcel-hess-35a081257/" target='_blank' className="socials_icon">
            <img src="images/linkedin.svg" alt="linkedin icon" />
          </a>
        </div>
    </main>
  )
}

export default App
