import './Footer.css'

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
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
