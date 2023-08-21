import Links from './components/Links'
import './index.css'

function App() {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Links scrollToSection={scrollToSection} />
    <main>
      <section id='s1' className='section-1'>
        <article>
          <h2>my name is</h2>
          <h1><span className='highlight closer_span'>&#91;</span> Marcel HESS <span className='highlight closer_span'>&#93;</span></h1>

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
    </main>
    </>
  )
}

export default App
