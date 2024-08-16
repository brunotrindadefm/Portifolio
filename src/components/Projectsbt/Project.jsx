import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaSass, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql } from "react-icons/si";

import { useEffect, useState } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = ({ lang }) => {

    const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
    const [arrowUp, setArrowUp] = useState(false)

    const projects = [
        {
            name: 'Cadastro de Usuários',
            image: '/crud.png',
            technologies: [<FaReact key="react" />, <FaSass key='sass' />,  <FaNodeJs key='node.js'/>, <SiMysql key='mysql'/>  ],
            description: {
                en: 'Create, read, update and delete. Backend made with node.js + express  express and mysql database, frontend made with react.',
                pt: 'Create, read, update and delete. Backend feito com node.js + express e banco de dados mysql, frontend feito com react.'
            },
            github: 'https://github.com/brunotrindadefm/CadastroDeUsuarios'
        },
        {
            name: 'Gerenciador de Custos',
            image: '/crud-mysql.png',
            technologies: [<FaReact key="react" />, <FaSass key='sass' />,  <FaNodeJs key='node.js'/>, <SiMysql key='mysql'/>  ],
            description: {
                en: 'Crud project made with react, node + express and mysql database',
                pt: 'Projeto crud feito com react, node + express e banco de dados mysql'
            },
            github: 'https://github.com/brunotrindadefm/GerenciadorDeCustos'
        },
        {
            name: 'Pokedex',
            image: '/pokedex.png',
            technologies: [<FaReact key="react" />, <FaSass key='sass' />],
            description: {
                en: 'A pokedex fetching using PokeAPI.',
                pt: 'Uma pokedex usando PokeAPI.'
            },
            deploy: 'https://pokedexbt.netlify.app',
            github: 'https://github.com/brunotrindadefm/Pokedex'
        },
        {
            name: 'API Movies',
            image: '/apiMovies.png',
            technologies: [<FaReact key="react" />, <FaSass key='sass' />],
            description: {
                en: 'A project about movies data fetching using a public API.',
                pt: 'Um projeto sobre busca de dados de filmes usando uma API pública.'
            },
            deploy: 'https://btmovies.netlify.app/',
            github: 'https://github.com/brunotrindadefm/APIMovies'
        },
        {
            name: 'API Clima',
            image: '/apiClima.png',
            technologies: [<FaReact key="react" />, <FaSass key="sass" />],
            description: {
                en: 'A weather application using a weather API.',
                pt: 'Um aplicativo de clima usando uma API de clima.'
            },
            deploy: 'https://weathertrindade.netlify.app/',
            github: 'https://github.com/brunotrindadefm/WeatherAPI'
        },
        {
            name: 'Crypto',
            image: '/crypto.png',
            technologies: [<FaReact key="react" />, <FaSass key='sass' />],
            description: {
                en: 'Site with price and appreciation information, filtering 1000 cryptocurrencies by decreasing price.',
                pt: 'Site com informação do preço e valorização, filtrando por preço decrescente 1000 criptomoedas.'
            },
            deploy: 'https://btcryptocoin.netlify.app/',
            github: 'https://github.com/brunotrindadefm/Cryptocurrencies'
        },
        {
            name: 'API Cep',
            image: '/apiCep.png',
            technologies: [<FaReact key="react" />, <FaSass key="sass" />],
            description: {
                en: 'A project for fetching and displaying Brazilian postal codes.',
                pt: 'Um projeto para buscar e exibir CEP.'
            },
            deploy: 'https://btcep.netlify.app/',
            github: 'https://github.com/brunotrindadefm/BuscadorCEP'
        },
        {
            name: 'API Spotify',
            image: '/apiSpotify.png',
            technologies: [<FaReact key="react" />, <FaCss3Alt key="css" />],
            description: {
                en: "A music streaming project using Spotify API. You need to update the token every 30 minutes, which is why the website doesn't work",
                pt: 'Um projeto de streaming de música usando a API do Spotify. Precisa atualizar o token de 30 em 30 minutos, por isso o site não funcionará'
            },
            deploy: 'https://tourmaline-gelato-68d561.netlify.app/',
            github: 'https://github.com/brunotrindadefm/apiSpotify'
        },
        {
            name: 'Tic Tac Toe',
            image: '/TicTacToe.png',
            technologies: [<FaReact key="react" />, <FaCss3Alt key="css" />],
            description: {
                en: 'A simple Tic Tac Toe game.',
                pt: 'Um jogo simples de Tic Tac Toe.'
            },
            deploy: 'https://bttictactoe.netlify.app/',
            github: 'https://github.com/brunotrindadefm/TicTacToe'
        },
        {
            name: 'Calculadora',
            image: '/calculadora.png',
            technologies: [<FaReact key="react" />, <FaSass key="sass" />],
            description: {
                en: 'A basic calculator project.',
                pt: 'Um projeto de calculadora básica.'
            },
            deploy: 'https://btcalculator.netlify.app/',
            github: 'https://github.com/brunotrindadefm/calculadora'
        },
        {
            name: 'Treinamento Mira',
            image: '/TreinamentoAim.png',
            technologies: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaBootstrap key='bootstrap' />],
            description: {
                en: 'An aim training tool for gamers.',
                pt: 'Uma ferramenta de treinamento de mira para jogadores.'
            },
            deploy: 'https://btaim.netlify.app/',
            github: 'https://github.com/brunotrindadefm/TreinamentoDeMira'
        }
    ];

    const handleInfoClick = (index) => {
        setSelectedProjectIndex(index === selectedProjectIndex ? null : index);
        setArrowUp(true);
    }

    useEffect(() => {
        AOS.init();
    })

    return (
        <div className='card-projects' data-aos="fade-right">
            {projects.map((project, index) => (
                <div data-aos="fade-up" data-aos-duration="900" key={index}>
                    <img src={project.image} alt={`Project Thumbnail ${project.name}`} />
                    <h3>{project.name}</h3>
                    <div className="icons">
                        {project.technologies.map((Icon, i) => (
                            <span key={i}>{Icon}</span>
                        ))}
                    </div>
                    <div className="btn" data-aos="fade-up" >
                        {project.deploy && <a href={project.deploy} target="_blank"><button className="btn-project">View</button></a>}
                        <a href={project.github} target="_blank"><button className="btn-project">{lang ? 'Repositótrio' : 'Repository'}</button></a>
                        <button className='readMore' onClick={() => handleInfoClick(index)} aria-label={`More info about project ${index + 1}`}>
                            <span className="text">{lang ? 'Ler Mais' : 'Read More'}</span>
                            <span className={selectedProjectIndex === index ? 'arrowup' : 'arrowdown'}></span>
                        </button>
                        <p className={selectedProjectIndex === index ? 'visible' : ''}>
                            {lang ? project.description.pt : project.description.en}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Project
