import { useEffect, useState } from 'react';
import './Contact.css'
import { IoCloseSharp } from "react-icons/io5";

import btPhoto from '/BrunoTrindade.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = ({ lang, xIsClick }) => {

    const xWasClick = () => {
        xIsClick(false);
    }

    const [msg, setMsg] = useState('');
    const [contact, setContact] = useState('');

    useEffect(() => {
        if (lang) {
            setContact('Contate-me');
            setMsg('Envie-me uma mensagem');
        } else {
            setMsg('Send me a message');
            setContact('Contact-me');
        }

        AOS.init();
    })

    // <h2>{contact}</h2>
    // <p>btrindade172@gmail.com</p>
    // <p>31 99069-6032</p>
    // <p>Belo Horizonte-MG</p>
    // <p>Serra</p>
    // <p>Professor Estevao Pinto</p>
    // <span>{msg}</span>
    // <button><a href="https://w.app/5s2w1P" target='_blank'>Whatsapp</a></button>

    return (
        <>
            <div className='contact' data-aos="fade-right">
                <div className='card' data-aos="fade-right">
                    <div className='img' data-aos="fade-right"> <img src={btPhoto} alt="BrunoTrindade" /></div>
                    <p data-aos="fade-right" className="info">btrindade172@gmail.com</p>
                    <p data-aos="fade-right" className='info'>31 99069-6032</p>
                    <p data-aos="fade-right" className='info'>Belo Horizonte-MG</p>
                    <p data-aos="fade-right" className='info'>Serra</p>
                    <p data-aos="fade-right" className='info'>Professor Estevao Pinto</p>
                    <span data-aos="fade-right">{msg}</span>
                    <button data-aos="fade-right"><a href="https://wa.me/5531990696032?text=Olá" target='_blank'>Whatsapp</a></button>
                </div>
            </div>
            <IoCloseSharp className='contact-icon' onClick={xWasClick} />
        </>
    )
}

export default Contact
