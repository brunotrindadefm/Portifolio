import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

import { useState } from 'react'

import '../index.css'

const Projects = () => {

  const [lang, setLang] = useState('')

  const handleLangChange = (newLang) => {
    setLang(newLang)
  }

  return (
    <>
      <NavBar appOnLangChange={handleLangChange} />
      <div className='app'>
        <div className='portifolio'>
         
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projects
