import { ghIcon, linkedInIcon, fbIcon } from '../components/Icons';

const Footer:React.FC = () => {
  return (
    <footer>
      <div className="footer_socials">

        <a href="https://github.com/Maacaa0" target='_blank' className="footer_socials_icon">
          {ghIcon}
        </a>
        <a href="https://www.linkedin.com/in/marcel-hess-35a081257/" target='_blank' className="footer_socials_icon">
          {linkedInIcon}
        </a>
        <a href="https://www.facebook.com/hess.marcel/" target='_blank' className="footer_socials_icon">
          {fbIcon}
        </a>
      </div>  
      <a href="mailto:hesss.marcel@gmail.com">hesss.marcel@gmail.com</a>
      <a href="tel:+420739254332">+420 739 254 332</a>
      <small className='copyright'>&copy; 2023 | Czech Republic | Marcel Hess</small>
      </footer>
  )
}

export default Footer