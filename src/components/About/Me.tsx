import styles from "./me.module.css";
import { LangProps } from "../../App";

const Me = ({ lang }: LangProps) => {
  return (
    <section className={styles.animationSection}>
      <article className={styles.animationBox}>
        <div className={styles.wrapper}>
          <div className={styles.front}>
            <h2 className={styles.h2}>Hello World!</h2>
          </div>
          <div className={styles.back}>
            <p>{lang === "en" ? "I am" : "Jmenuji se"}</p>
            <h1 className={styles.h1}>Marcel Hess</h1>
          </div>
          <div className={styles.right}></div>
          <div className={styles.left}></div>
          <div className={styles.top}></div>
          <div className={styles.bottom}></div>
        </div>
      </article>
      <h2 className={styles.dev}>
        {lang === "en"
          ? "Junior Frontend Developer"
          : "Junior Frontend Vývojář"}
      </h2>
      <a href="#about" className={styles.downArrow} aria-disabled="true" tabIndex={-1}></a>
    </section>
  );
};

export default Me;
