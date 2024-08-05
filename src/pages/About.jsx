import { useState } from 'react';

import '../components/AboutMe/AboutMe.scss'

import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
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
        <AboutMe lang={lang} />
      </div>
      <Footer />
    </>
  )
}

export default About
