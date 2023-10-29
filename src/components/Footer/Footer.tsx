import { ghIcon, linkedInIcon, fbIcon } from '../Icons';
import styles from "./footer.module.css"

const Footer:React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>

        <a href="https://github.com/Maacaa0" target='_blank' className={styles.icon}>
          {ghIcon}
        </a>
        <a href="https://www.linkedin.com/in/marcel-hess-35a081257/" target='_blank' className={styles.icon}>
          {linkedInIcon}
        </a>
        <a href="https://www.facebook.com/hess.marcel/" target='_blank' className={styles.icon}>
          {fbIcon}
        </a>
      </div>  
      <a href="mailto:hesss.marcel@gmail.com">hesss.marcel@gmail.com</a>
      <a href="tel:+420739254332">+420 739 254 332</a>
      <small className={styles.copyright}>&copy; 2023 | Czech Republic | Marcel Hess</small>
      </footer>
  )
}

export default Footer