import { ghIcon, linkedInIcon, fbIcon } from "../Icons";
import styles from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <a
          href="https://github.com/Maacaa0"
          target="_blank"
          className={styles.icon}
          aria-label="github profile link"
        >
          {ghIcon}
        </a>
        <a
          href="https://www.linkedin.com/in/marcel-hess-35a081257/"
          target="_blank"
          className={styles.icon}
          aria-label="linkedin profile link"
        >
          {linkedInIcon}
        </a>
        <a
          href="https://www.facebook.com/hess.marcel/"
          target="_blank"
          className={styles.icon}
          aria-label="facebook profile link"
        >
          {fbIcon}
        </a>
      </div>
      <a href="mailto:hesss.marcel@gmail.com" aria-label="Email">
        hesss.marcel@gmail.com
      </a>
      <a href="tel:+420739254332" aria-label="Phone number">
        +420 739 254 332
      </a>
      <small className={styles.copyright}>
        &copy; 2023 | Czech Republic | Marcel Hess
      </small>
    </footer>
  );
};

export default Footer;
