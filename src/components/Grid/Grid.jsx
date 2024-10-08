import './Grid.scss'

import { SiAboutdotme } from "react-icons/si";
import { MdFolderSpecial } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const Grid = ({ lang, handleContact }) => {

  const [projects, setProjects] = useState('')
  const [me, setMe] = useState('')
  const [contact, setContact] = useState('')

  const clickContact = () => {
    handleContact(true);
  };

  useEffect(() => {
    if (lang) {
      setProjects('Projetos')
      setMe('Sobre mim')
      setContact("Contate-me")
    } else {
      setProjects('Projects')
      setMe('About me')
      setContact('Contact me')
    }
    AOS.init();
  }, [lang])

  return (
    <div data-aos="fade-up" className='grid'>
      <Link to='/projects'><div data-aos="fade-up" data-aos-duration="2000">
        <MdFolderSpecial />
        {projects}
      </div></Link>
      <Link to='/about'><div data-aos="fade-down" data-aos-duration="2000">
        <SiAboutdotme />
        {me}
      </div></Link>
      <div onClick={clickContact} data-aos="fade-right" data-aos-duration="2000">
        <MdConnectWithoutContact />
        {contact}
      </div>
    </div>
  )
}

export default Grid
