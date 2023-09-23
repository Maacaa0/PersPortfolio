import React, { useState, useEffect } from 'react'
import { ghIcon, emailIcon, linkedInIcon, moonIcon, sunIcon } from './Icons'
import useLocalStorage from '../hooks/useLocalStorage'

const Navbar: React.FC = () => {

  const [darkTheme, setDarkTheme] = useLocalStorage({
    key: 'darkMode',
    initialValue: false,
  });
  
  const toggleTheme = () => {  
    setDarkTheme(!darkTheme)
  }


useEffect(() => {
  darkTheme ? document.documentElement.style.setProperty('--bg-primary', "#25272b") 
            : document.documentElement.style.setProperty('--bg-primary', "#f7faff")

  darkTheme ? document.documentElement.style.setProperty('--text-clr', "#f7faff") 
            : document.documentElement.style.setProperty('--text-clr', "#25272b")

  darkTheme ? document.documentElement.style.setProperty('--bg-image', "url('./src/assets/dark.svg')" )
            : document.documentElement.style.setProperty('--bg-image', "url('./src/assets/light.svg')")

  
},[darkTheme])


const [isCopied, setIsCopied] = useState<boolean>(false);
  
const copyToClipBoard = () => {
  const textToCopy = "hesss.marcel@gmail.com"
  
  navigator.clipboard.writeText(textToCopy)
  
  setIsCopied(true);
  
  setTimeout(() => {
    setIsCopied(false);
  }, 1500); // Display the confirmation for 2 seconds
}


  return (
        <nav>   
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
          <button onClick={toggleTheme} className='nav_btn'>
            {darkTheme ? sunIcon : moonIcon}
          </button>

        </nav>

  )
}

export default Navbar
