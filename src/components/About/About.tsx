import { hearthIcon, userIcon } from '../Icons'
import Me from './Me'
const About = () => {
  return (
      <section className="head_section">
        <Me />
        <article className="about">
          <div className="svg_wrapper">
            { userIcon }
          <p className='basic_info text'>
          I am self-taught junior front-end developer eager for first web developer job. I'd like to become part of a team where I can learn from experienced professionals and make meaningful contributions to exciting projects.  
          
          
          </p>
          </div>

          {/* <div className="divider"></div> */}

          <div className="svg_wrapper hobbys_info">
           {hearthIcon}
          <p className=' text'>
          I love all kind of sports like running, working out, and swimming to keep myself energized. <br /><br />
          Nature inspires me and brings me peace. In my spare time, I enjoy reading or listening to music.
          </p>
          </div>
        </article>
        
        <svg className='section_trans_primary' viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M-2.82,0.52 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" ></path></svg>

        <svg className='section_trans_secondary' viewBox="0 0 500 150" preserveAspectRatio="none" ><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" ></path></svg>
      </section>
  )
}

export default About