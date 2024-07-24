import Footer from './components/Footer/Footer'
import Hello from './components/Hello/Hello'
import NavBar from './components/NavBar/NavBar'
import Grid from './components/Grid/Grid'
import './index.css'
import { useState } from 'react'
import Contact from './components/Contact/Contact'

function App() {

  const [lang, setLang] = useState('')

  const handleLangChange = (newLang) => {
    setLang(newLang)
  }

  const [isContactClicked, setIsContactClicked] = useState(false);

  const handleContact = (contato) => {
    setIsContactClicked(contato);
  };

  const XClicked = () => {
    setIsContactClicked(false)
  }

  return (
    <>
      <NavBar appOnLangChange={handleLangChange} />
      <div className='app'>
        <div className='portifolio'>
          <Hello lang={lang} />
          <Grid lang={lang} handleContact={handleContact}/>
          {isContactClicked && (
            <Contact lang={lang} xIsClick={XClicked}/>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
