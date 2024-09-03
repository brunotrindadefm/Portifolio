import './AboutMe.scss';

import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaSass, FaJava, FaGitAlt, FaGithubAlt, FaNodeJs, FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql, SiTypescript } from "react-icons/si";
import { TbSql } from "react-icons/tb";

import { useState, useEffect } from 'react';

const AboutMe = ({ lang }) => {

    const [text1, setText1] = useState('')
    const [text2, setText2] = useState('')
    const [text3, setText3] = useState('')
    const [text4, setText4] = useState('')

    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [skills, setSkills] = useState('')

    console.log(lang)

    useEffect(() => {
        if (!lang) {
            setSubtitle("I'm Bruno")
            setTitle('Who is Bruno?')
            setText1('In the second semester of the Computer Science program, I am seeking my first internship. With a natural curiosity for technology and a passion for solving problems, I am eager to apply my theoretical skills in a professional environment, learn from experts, and contribute to innovative projects.')
            setText2('Preparing to enter the job market with my first internship, I have dedicated myself to studying programming and software development. I am looking to complement my academic training with practical experiences and am excited to face new challenges while helping the team achieve its goals.')
            setText3("Ready to take the next step in my professional journey, I am looking for an internship that allows me to utilize my programming and development skills while learning from hands-on experience and contributing to the team's success. I am eager to face challenges and grow in the field of technology.")
            setText4('I am seeking my first internship to apply the knowledge acquired in my classes and explore the world of technology in a practical way. With a proactive approach and a great desire to learn, I am prepared to dedicate myself to challenging projects and grow as a professional in the computing field.')
            setSkills('Skills')
        } else {
            setSubtitle("Eu sou Bruno")
            setTitle('Quem é Bruno?')
            setText1('No segundo semestre do curso de Ciência da Computação, busco meu primeiro estágio. Com uma curiosidade natural por tecnologia e uma paixão por resolver problemas, tenho vontade de aplicar minhas habilidades teóricas em um ambiente profissional, aprender com especialistas e contribuir para projetos inovadores.')
            setText2('Com a preparação para entrar no mercado de trabalho com o primeiro estágio, tenho me dedicado ao estudo de programação e desenvolvimento de software. O objetivo é complementar a formação acadêmica com experiências práticas. Estou empolgado para enfrentar novos desafios e ajudar a equipe a alcançar seus objetivos.')
            setText3('Pronto para dar o próximo passo na jornada profissional, procuro um estágio que permita utilizar minhas habilidades em programação e desenvolvimento, ao mesmo tempo em que aprendo com a experiência prática e contribuo para o sucesso da equipe. A expectativa é enfrentar desafios e crescer na área de tecnologia.')
            setText4('Busco meu primeiro estágio para aplicar os conhecimentos adquiridos nas aulas e explorar a tecnologia de maneira prática. Com uma abordagem proativa e um grande desejo de aprender, estou preparado para me dedicar a projetos desafiadores e crescer como profissional na área de computação.')
            setSkills('Habilidades')
        }
    }, [lang])

    return (
        <div className='container-about'>
            <h2>{title}</h2>
            <div>
                <h3>{subtitle}</h3>
                <p>{text1}</p>
                <p>{text2}</p>
                <p>{text3}</p>
                <p>{text4}</p>
            </div>
            <div className='skills'>
                <h3>{skills}</h3>
                <div className='skill'>
                    <div><FaHtml5 /></div>
                    <div><FaCss3Alt /></div>
                    <div><IoLogoJavascript /></div>
                    <div><FaJava /></div>
                    <div><FaBootstrap /></div>
                    <div><FaSass /></div>
                    <div><FaGitAlt /></div>
                    <div><FaGithubAlt /></div>
                    <div><FaReact /></div>
                    <div><FaNodeJs /></div>
                    <div><SiTypescript /></div>
                    <div><TbSql /></div>
                    <div><SiMysql /></div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
