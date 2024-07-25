import Project from './Project'
import './Projects.css'

const Projectsbt = ({ lang }) => {



    return (
        <div className='projects-container'>
            <div className='projects-tit'>
                <h2>My projects</h2>
                <div></div>
            </div>

           <Project />

        </div>
    )
}

export default Projectsbt
