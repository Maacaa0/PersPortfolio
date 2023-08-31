import { useState } from 'react'
import { emailIcon, ghIcon, linkedInIcon } from './Icons';

const Socials = () => {

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
    <div className="socials">
        {isCopied && <div className='confirmation_box'>E-mail copied to Clipboard!</div>}
        <a className='socials_icon email_icon' onClick={copyToClipBoard}> 
          {emailIcon}
        </a>

        <a href="https://github.com/Maacaa0" target='_blank' className="socials_icon">
          {ghIcon}
        </a>
        <a href="https://www.linkedin.com/in/marcel-hess-35a081257/" target='_blank' className="socials_icon">
          {linkedInIcon}
        </a>
    </div>
  )
}

export default Socials