import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

import { useState } from 'react'

import '../index.scss'
import Projectsbt from '../components/Projectsbt/Projectsbt'

const Projects = () => {

  const [lang, setLang] = useState('')

  const handleLangChange = (newLang) => {
    setLang(newLang)
  }

  return (
    <>
      <NavBar appOnLangChange={handleLangChange} />
      <div className='app'>
        <Projectsbt lang={lang}/>
      </div>
      <Footer />
    </>
  )
}

export default Projects
