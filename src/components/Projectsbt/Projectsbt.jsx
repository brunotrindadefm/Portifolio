import { useEffect, useState } from 'react'
import Project from './Project'
import './Projects.css'

const Projectsbt = ({ lang }) => {

    const [projectsTitle, setProjectsTitle] = useState('')

    useEffect(() => {
        if(lang) {
            setProjectsTitle('Meus Projetos')
        } else {
            setProjectsTitle('My Projects')
        }
    },[lang])

    return (
        <div className='projects-container'>
            <div className='projects-tit'>
                <h2>{projectsTitle}</h2>
                <div></div>
            </div>

           <Project lang={lang} />

        </div>
    )
}

export default Projectsbt
