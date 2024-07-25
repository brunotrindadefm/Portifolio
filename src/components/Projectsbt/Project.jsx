import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

import { useState } from "react";

const Project = ({ lang }) => {

    const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
       
    const projects = [
        {
            name: 'API Movies',
            image: '/apiMovies.png',
            technologies: [<FaReact key="react" />, <FaSass key='sass' />],
            description: {
                en: 'A project about movies data fetching using a public API.',
                pt: 'Um projeto sobre busca de dados de filmes usando uma API pública.'
            }
        },
        {
            name: 'API Clima',
            image: '/apiClima.png',
            technologies: [<FaReact key="react" />, <FaCss3Alt key="css" />],
            description: {
                en: 'A weather application using a weather API.',
                pt: 'Um aplicativo de clima usando uma API de clima.'
            }
        },
        {
            name: 'API Spotify',
            image: '/apiSpotify.png',
            technologies: [<FaReact key="react" />, <FaCss3Alt key="css" />],
            description: {
                en: 'A music streaming project using Spotify API.',
                pt: 'Um projeto de streaming de música usando a API do Spotify.'
            }
        },
        {
            name: 'Tic Tac Toe',
            image: '/TicTacToe.png',
            technologies: [<FaReact key="react" />, <FaCss3Alt key="css" />],
            description: {
                en: 'A simple Tic Tac Toe game.',
                pt: 'Um jogo simples de Tic Tac Toe.'
            }
        },
        {
            name: 'API Cep',
            image: '/apiCep.png',
            technologies: [<FaReact key="react" />, <FaCss3Alt key="css" />],
            description: {
                en: 'A project for fetching and displaying Brazilian postal codes.',
                pt: 'Um projeto para buscar e exibir códigos postais brasileiros.'
            }
        },
        {
            name: 'Calculadora',
            image: '/calculadora.png',
            technologies: [<FaReact key="react" />, <FaCss3Alt key="css" />],
            description: {
                en: 'A basic calculator project.',
                pt: 'Um projeto de calculadora básica.'
            }
        },
        {
            name: 'Treinamento Mira',
            image: '/TreinamentoAim.png',
            technologies: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />],
            description: {
                en: 'An aim training tool for gamers.',
                pt: 'Uma ferramenta de treinamento de mira para jogadores.'
            }
        },
        {
            name: 'Calculadora de IMC',
            image: '/calculadoradeImc.png',
            technologies: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <IoLogoJavascript key='js' />, <FaBootstrap key='bootstrap' />],
            description: {
                en: 'A BMI calculator project.',
                pt: 'Um projeto de calculadora de IMC.'
            }
        }
    ];

    const handleInfoClick = (index) => {
        setSelectedProjectIndex(index === selectedProjectIndex ? null : index);
    }

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
                    <button className='btn' onClick={() => handleInfoClick(index)} aria-label={`More info about project ${index + 1}`}>Info</button>
                    {selectedProjectIndex === index && (
                        <p>{lang ? project.description.pt : project.description.en}</p>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Project
