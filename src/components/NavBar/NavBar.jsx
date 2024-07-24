import DarkMode from '../DarkMode/DarkMode'
import EnPt from '../EnPt/EnPt'
import './NavBar.css'

import { useState } from 'react'

const NavBar = ({appOnLangChange}) => {

  const [language, setLanguage] = useState('')

  const handleLangChange = (newLang) => {
    setLanguage(newLang)
    appOnLangChange(newLang)
  }

  return (
    <header>
      <nav className='nav'>
        <div className='top-div'>
            <DarkMode />
        </div>
        <div className='name-div'>
          <h2>Bruno Trindade</h2>
        </div>
        <div className='top-div'>
          <EnPt onLangChange={handleLangChange}/>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
