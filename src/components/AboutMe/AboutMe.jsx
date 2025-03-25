import './AboutMe.scss';

import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaSass, FaJava, FaGitAlt, FaGithubAlt, FaNodeJs, FaAngular } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql, SiTypescript } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { TbBrandCSharp } from "react-icons/tb";
import { useState, useEffect } from 'react';

const AboutMe = ({ lang }) => {

    const [texts, setTexts] = useState([])
    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [skillsTitle, setSkillsTitle] = useState('')

    useEffect(() => {
        if (!lang) {
            setSubtitle("I'm Bruno")
            setTitle('Who is Bruno?')
            setSkillsTitle('Skills')
            setTexts([
                "Currently in the third semester of the Computer Science program, I have already gained professional experience as a software development intern. With a natural curiosity for technology and a passion for problem-solving, I am constantly seeking to learn and grow in the field.",
                "During my internship, I worked with C# .NET, Angular, Azure, and SQL Server, gaining practical experience in both backend and frontend development. This opportunity allowed me to apply academic concepts to real-world projects and collaborate in an agile development environment.",
                "With this experience, I am now ready for new challenges and opportunities in the tech industry. I aim to refine my software development skills and contribute to innovative projects while continuously evolving as a professional.",
                "I am looking for new opportunities to further develop my skills and knowledge in web development and software engineering. My goal is to keep learning, face exciting challenges, and contribute to impactful projects."
            ]);
        } else {
            setSubtitle("Eu sou Bruno")
            setTitle('Quem é Bruno?')
            setSkillsTitle('Habilidades')            
            setTexts([
                "Atualmente no terceiro semestre do curso de Ciência da Computação, já tive a oportunidade de atuar como estagiário na área de desenvolvimento de software. Minha curiosidade por tecnologia e paixão por resolver problemas continuam a me impulsionar na busca por aprendizado e crescimento profissional.",
                "Durante minha experiência de estágio, trabalhei com C# .NET, Angular, Azure e SQL Server, adquirindo conhecimentos práticos tanto em backend quanto frontend. Essa vivência me permitiu aplicar conceitos acadêmicos em projetos reais e colaborar em equipe utilizando metodologias ágeis.",
                "Com essa bagagem, estou pronto para novos desafios e oportunidades na área de tecnologia. Busco aprimorar minhas habilidades em desenvolvimento de software e contribuir para projetos inovadores, sempre aprendendo e evoluindo profissionalmente.",
                "Estou em busca de uma nova oportunidade para continuar meu crescimento na área de tecnologia, utilizando as habilidades adquiridas e expandindo meu conhecimento em desenvolvimento web e engenharia de software."
            ]);
        }
    }, [lang])

    const skillIcons = [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <IoLogoJavascript />, name: "JavaScript" },
        { icon: <FaJava />, name: "Java" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
        { icon: <FaSass />, name: "Sass" },
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaGithubAlt />, name: "GitHub" },
        { icon: <FaReact />, name: "React" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <TbSql />, name: "SQL" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <TbBrandCSharp />, name: "C#" },
        { icon: <FaAngular />, name: "Angular" }
    ];

    return (
        <div className='container-about'>
            <h2>{title}</h2>
            <div>
                <h3>{subtitle}</h3>
                {texts.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
            <div className='skills'>
                <h3>{skillsTitle}</h3>
                <div className='skill'>
                    {skillIcons.map((skill, index) => (
                        <div key={index}>{skill.icon}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
