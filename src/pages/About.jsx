import { useState } from 'react';

import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

const About = () => {

  const [lang, setLang] = useState('')

  const handleLangChange = (newLang) => {
    setLang(newLang)
  }

  return (
    <>
      <NavBar appOnLangChange={handleLangChange} />
      <div className='app'>
      </div>
      <Footer />
    </>
  )
}

export default About
