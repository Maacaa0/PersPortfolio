import Me from "./Me";

import { hearthIcon, userIcon } from "../Icons";
import { LangProps } from "../../App";

import styles from "./about.module.css"

const About = ({ lang }: LangProps) => {
  return (
    <section className={styles.section}>
      <Me lang={lang} />
      <div className={styles.filling}></div>
      <article id="about" className={styles.article}>
        <div className={styles.flex}>
          {userIcon}
          <p className={styles.text}>
            {lang === "en"
              ? "I am self-taught junior front-end developer eager for first web developer job. I'd like to become part of a team where I can learn from experienced professionals and make meaningful contributions to exciting projects."
              : "Jsem samouk junior front-end vývojář dychtivý po první práci webového vývojáře. Rád bych se stal součástí týmu, kde se mohu učit od zkušených profesionálů a smysluplně přispívat k zajímavým projektům."}
          </p>
        </div>

        <div className={styles.flex}>
          {hearthIcon}
          <p className={styles.text}>

           {lang === "en" ?  "I love all kind of sports like running, working out, and swimming to keep myself energized." : "Aktivně se věnuji sportům, jako je běh, cvičení a plavání, abych se udržel ve formě." 
          }
            <br />
            <br />
            {lang === "en" ? "Nature inspires me and brings me peace. In my spare time, I enjoy reading or listening to music." : "Příroda mě inspiruje a uklidňuje. Ve volném čase rád čtu nebo poslouchám hudbu."}
          </p>
        </div>
      </article>
      <div className={styles.wave}>
        
      </div>
    </section>
  );
};

export default About;
