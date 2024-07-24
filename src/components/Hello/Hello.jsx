import './Hello.css'

import { useState, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaHandPeace } from "react-icons/fa";

const Hello = ({lang}) => {

    const [about, setAbout] = useState('')
    const [name, setName] = useState('')
    const [saudacoes, setSaudacoes] = useState('')
    const [btn, setBtn] = useState('')

    useEffect(() => {
        if(!lang) {
        setBtn("Download CV")
        setSaudacoes('Hello')
        setName("I'm Bruno Trindade")
        setAbout('Dedicated Computer Science student with a passion for technology and problem solving. Committed to seeking opportunities that allow me to apply and expand my knowledge. I am looking for internship opportunities or research projects that allow me to develop my practical skills and contribute to innovative solutions in the technology area.')
        } else {
            setBtn("Baixar CV")
            setSaudacoes('Olá')
            setName("Eu sou Bruno Trindade")
            setAbout('Estudante dedicado de Ciência da Computação, apaixonado por tecnologia e resolução de problemas. Comprometido em buscar oportunidades que me permitam aplicar e ampliar meus conhecimentos. Procuro oportunidades de estágio ou projetos de investigação que me permitam desenvolver as minhas competências práticas e contribuir para soluções inovadoras na área tecnológica.')
        }
        AOS.init();
    }, [lang])

    return (
        <div data-aos="fade-down" data-aos-duration="1000" className='hello'>
            <h5 data-aos="fade-right" data-aos-duration="1200"><span>{saudacoes} <FaHandPeace /></span></h5>
            <h1 data-aos="fade-right" data-aos-duration="1500">{name}</h1>
            <p data-aos="fade-right" data-aos-duration="1800">{about}</p>
            <button  style={{ transition: 'background-color 0.8s ease, color 0.8s ease' }} data-aos="fade-right" data-aos-duration="1800" className='btn'>{btn}</button>
        </div>
    )
}

export default Hello
