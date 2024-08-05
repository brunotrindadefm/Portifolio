import { useEffect, useState } from 'react'
import Project from './Project'
import './Projects.scss'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Projectsbt = ({ lang }) => {

    const [projectsTitle, setProjectsTitle] = useState('')

    useEffect(() => {
        if(lang) {
            setProjectsTitle('Meus Projetos')
        } else {
            setProjectsTitle('My Projects')
        }

        AOS.init();
    },[lang])

    return (
        <div className='projects-container'>
            <div className='projects-tit'>
                <h2 data-aos="fade-down" data-aos-duration="1000">{projectsTitle}</h2>
                <div data-aos="fade-up" data-aos-duration="1000"></div>
            </div>

           <Project lang={lang} />

        </div>
    )
}

export default Projectsbt
