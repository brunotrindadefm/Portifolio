import './Grid.css'

import { SiAboutdotme } from "react-icons/si";
import { MdFolderSpecial } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';

const Grid = ({ lang }) => {

  const [projects, setProjects] = useState('')
  const [me, setMe] = useState('')
  const [contact, setContact] = useState('')

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
    <div data-aos="fade-up" data-aos-duration="1000" className='grid'>
      <div data-aos="fade-up" data-aos-duration="2000">
        <MdFolderSpecial />
        {projects}
      </div>
      <div data-aos="fade-down" data-aos-duration="2500">
        <SiAboutdotme />
        {me}
      </div>
      <div data-aos="fade-up" data-aos-duration="3000">
        <MdConnectWithoutContact />
        {contact}
      </div>
    </div>
  )
}

export default Grid
