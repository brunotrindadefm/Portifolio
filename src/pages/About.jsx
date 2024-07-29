import { useState } from 'react';

import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import Me from '../components/Me/Me';
import AboutMe from '../components/AboutMe/AboutMe';

const About = () => {

  const [lang, setLang] = useState('')

  const handleLangChange = (newLang) => {
    setLang(newLang)
  }

  return (
    <>
      <NavBar appOnLangChange={handleLangChange} />
      <div className='app'>
        <Me />
        <AboutMe />
      </div>
      <Footer />
    </>
  )
}

export default About
