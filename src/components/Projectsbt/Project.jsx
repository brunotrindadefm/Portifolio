import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const Project = () => {

    const projects = [
        { name: 'Portifólio', image: '/portifolio.png', technologies: [<FaReact key="react" />, <FaSass key='sass' />] },
        { name: 'API Movies', image: '/apiMovies.png', technologies: [<FaReact key="react" />, <FaCss3Alt key='css' />] },
        { name: 'API Clima', image: '/apiClima.png', technologies: [<FaReact key="react" />, <FaCss3Alt key='css' />] },
        { name: 'API Spotify', image: '/apiSpotify.png', technologies: [<FaReact key="react" />, <FaCss3Alt key='css' />] },
        { name: 'Tic Tac Toe', image: '/TicTacToe.png', technologies: [<FaReact key="react" />, <FaCss3Alt key='css' />] },
        { name: 'API Cep', image: '/apiCep.png', technologies: [<FaReact key="react" />, <FaCss3Alt key='css' />] },
        { name: 'Calculadora', image: '/calculadora.png', technologies: [<FaReact key="react" />, <FaCss3Alt key='css' />] },
        { name: 'Treinamento Mira', image: '/TreinamentoAim.png', technologies: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <IoLogoJavascript key='js' />] },
        { name: 'Calculadora de IMC', image: '/calculadoradeImc.png', technologies: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <IoLogoJavascript key='js' />, <FaBootstrap key='bootstrap' />] }
    ];

    return (
        <div className='card-projects'>
            {projects.map((project, index) => (
                <div key={index}>
                    <img src={project.image} alt={`Project Thumbnail ${project.name}`} />
                    <h3>{project.name}</h3>
                    <div className="icons">
                        {project.technologies.map((Icon, i) => (
                            <span key={i}>{Icon}</span>
                        ))}
                    </div>
                    <button className='btn' aria-label={`More info about project ${index + 1}`}>info</button>
                </div>
            ))}
        </div>
    )
}

export default Project
