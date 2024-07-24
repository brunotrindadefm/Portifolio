import Footer from './components/Footer/Footer'
import Hello from './components/Hello/Hello'
import NavBar from './components/NavBar/NavBar'
import Grid from './components/Grid/Grid'
import './index.css'
import { useState, useEffect } from 'react'


function App() {

  const [lang, setLang] = useState('')

  const handleLangChange = (newLang) => {
    setLang(newLang)
  }

  console.log(lang)

  return (
    <>
      <NavBar appOnLangChange={handleLangChange}/>
      <div className='app'>
        <div className='portifolio'>
          <Hello lang={lang}/>
          <Grid lang={lang}/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
