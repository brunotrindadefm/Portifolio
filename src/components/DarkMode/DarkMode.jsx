import './DarkMode.css'

import { useState, useEffect } from 'react';

const DarkMode = () => {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (!darkMode) {
            document.body.classList.add('dark-mode');
            document.querySelector('.grid').classList.remove('dark-mode');
            document.querySelector('.nav').classList.remove('dark-mode');
            document.querySelector('.hello').classList.remove('dark-mode');
            document.querySelector('.footer').classList.remove('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.querySelector('.grid').classList.add('dark-mode');
            document.querySelector('.nav').classList.add('dark-mode');
            document.querySelector('.hello').classList.add('dark-mode');
            document.querySelector('footer').classList.add('dark-mode');
        }
    }, [darkMode]);

    const handleToggle = () => {
        setDarkMode(!darkMode);
    };


    return (
        <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={handleToggle} />
            <span className="slider"></span>
        </label>
    )
}

export default DarkMode
