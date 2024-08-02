import './AboutMe.css';

import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaSass, FaJava, FaGitAlt, FaGithubAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

import { useState, useEffect } from 'react';

const AboutMe = ({ lang }) => {

    const [text1, setText1] = useState('')
    const [text2, setText2] = useState('')
    const [text3, setText3] = useState('')
    const [text4, setText4] = useState('')
    const [text5, setText5] = useState('')

    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [skills, setSkills] = useState('')

    console.log(lang)

    useEffect(() => {
        if (!lang) {
            setTitle("I'm Bruno")
            setSubtitle('Who is Bruno?')
            setText1('Bruno is a Computer Science student in the second semester of his degree. With a natural curiosity for technology and a passion for solving problems, he is looking for his first internship. Bruno is eager to apply his theoretical skills in a professional environment, learn from experts and contribute to innovative projects.')
            setText2('Currently in the second semester of Computer Science, Bruno is preparing to enter the job market with his first internship. He has dedicated himself to studying programming and software development, and now wants to complement his academic training with practical experiences. Bruno is excited to face new challenges and help the team achieve its goals.')
            setText3("In the second semester of his Computer Science degree, Bruno is ready to take the next step in his professional journey. He is looking for an internship that allows him to utilize his programming and development skills, while learning from hands-on experience and contributing to the team's success. Bruno is eager to face challenges and grow in the field of technology.")
            setText4('Bruno, who is in the second semester of Computer Science, is looking for his first internship to apply the knowledge acquired in his classes and explore the world of technology in a practical way. With a proactive approach and a great desire to learn, he is ready to dedicate himself to challenging projects and grow as a professional in the computing field.')
            setSkills('Skills')
        } else {
            setTitle("Eu sou Bruno")
            setSubtitle('Quem é Bruno?')
            setText1('Bruno é um estudante de Ciência da Computação no segundo semestre de sua graduação. Com uma curiosidade natural por tecnologia e uma paixão por resolver problemas, ele está em busca de seu primeiro estágio. Bruno está ansioso para aplicar suas habilidades teóricas em um ambiente profissional, aprender com especialistas e contribuir para projetos inovadores.')
            setText2('Atualmente no segundo semestre de Ciência da Computação, Bruno está se preparando para entrar no mercado de trabalho com seu primeiro estágio. Ele tem se dedicado a estudar programação e desenvolvimento de software, e agora quer complementar sua formação acadêmica com experiências práticas. Bruno está empolgado para enfrentar novos desafios e ajudar a equipe a alcançar seus objetivos.')
            setText3('No segundo semestre de sua graduação em Ciência da Computação, Bruno está pronto para dar o próximo passo em sua jornada profissional. Ele busca um estágio que lhe permita utilizar suas habilidades em programação e desenvolvimento, enquanto aprende com a experiência prática e contribui para o sucesso da equipe. Bruno está ansioso para enfrentar desafios e crescer no campo da tecnologia.')
            setText4('Bruno, que está no segundo semestre de Ciência da Computação, está em busca de seu primeiro estágio para aplicar o conhecimento adquirido em suas aulas e explorar o mundo da tecnologia de maneira prática. Com uma abordagem proativa e uma grande vontade de aprender, ele está pronto para se dedicar a projetos desafiadores e crescer como profissional no campo da computação.')
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
            <div className='skills-another'>
                <div className='skills'>
                    <h3>{skills}</h3>
                    <div className='skill'>
                        <div><FaHtml5 /></div>
                        <div><FaCss3Alt /></div>
                        <div><IoLogoJavascript /></div>
                        <div><FaJava /></div>
                        <div><FaBootstrap /></div>
                        <div><FaGitAlt /></div>
                        <div><FaGithubAlt /></div>
                        <div><FaReact /></div>
                        <div><FaSass /></div>
                    </div>
                </div>
                <div className='another'>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;
