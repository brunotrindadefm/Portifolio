import NavBar from '../components/NavBar/NavBar'
import { useState } from 'react'

const Projects = () => {

  const [lang, setLang] = useState('')

  const handleLangChange = (newLang) => {
    setLang(newLang)
  }

  return (
    <>
      <NavBar appOnLangChange={handleLangChange}/>
    </>
  )
}

export default Projects
