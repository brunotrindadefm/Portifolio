import './Footer.scss'

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <footer className='footer'>
      <div className='social'>
        <a
          className='linkedin'
          href="https://www.linkedin.com/in/bruno-trindade-883b03300/"
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn Profile'
          >
          <FaLinkedinIn />
        </a>
      </div>
      <div className='social'>
        <a
          className='github'
          href="https://github.com/brunotrindadefm"
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub Profile'
          >
          <FaGithub />
        </a>
      </div>
    </footer>
  )
}

export default Footer
