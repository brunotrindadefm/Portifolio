import './Me.css'

import mePhoto from '/BrunoTrindade.png'

import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const Me = () => {
    return (
        <div className='me'>
            <div className='me-img'>
                <img src={mePhoto} alt="" />
                <h2>Bruno </h2>
            </div>
            <div className='skills'>
                <h2>Skills</h2>
                <div className='me-skills'>
                    <p><FaHtml5 /></p>
                    <p><FaCss3Alt /></p>
                    <p><IoLogoJavascript /></p>
                    <p><FaBootstrap /></p>
                    <p><FaReact /></p>
                    <p><FaSass /></p>
                </div>
            </div>
        </div>
    )
}

export default Me
