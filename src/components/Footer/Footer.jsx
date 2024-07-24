import './Footer.css'

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
        <a className='linkedin' href=""><FaLinkedinIn /></a>
      </div>
      <div className='social'>
        <a className='github' href=""><FaGithub /></a>
      </div>
    </footer>
  )
}

export default Footer
