import React, { useState, useEffect } from 'react'
import { moonIcon, sunIcon } from './Icons'

const Navbar: React.FC = () => {

  const [darkTheme, setDarkTheme] = useState<boolean>(true)
  
  const toggleTheme = () => {  
    setDarkTheme(prevState => !prevState)
  }


useEffect(() => {
  darkTheme ? document.documentElement.style.setProperty('--bg-primary', "#25272b") 
            : document.documentElement.style.setProperty('--bg-primary', "#f7faff")

  darkTheme ? document.documentElement.style.setProperty('--text-clr', "#f7faff") 
            : document.documentElement.style.setProperty('--text-clr', "#25272b")

  
},[darkTheme])


  return (
        <nav>       
          <button onClick={toggleTheme} className='nav_btn'>
            {darkTheme ? moonIcon : sunIcon}
          </button>

        </nav>

  )
}

export default Navbar
