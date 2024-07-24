import { useEffect, useState } from 'react';
import './Contact.css'
import { IoCloseSharp } from "react-icons/io5";

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
    })

    return (
        <div className='contact'>
            <IoCloseSharp onClick={xWasClick} />
            <h2>{contact}</h2>
            <p>btrindade172@gmail.com</p>
            <p>31 99069-6032</p>
            <p>Belo Horizonte-MG</p>
            <p>Serra</p>
            <p>Professor Estevao Pinto</p>
            <span>{msg}</span>
            <button>Whatsapp</button>
        </div>
    )
}

export default Contact
