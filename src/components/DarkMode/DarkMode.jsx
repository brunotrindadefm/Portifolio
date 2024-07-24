import './DarkMode.css'

import { useState, useEffect } from 'react';

const DarkMode = () => {

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const classAction = darkMode ? 'add' : 'remove';
        const bodyAction = darkMode ? 'remove' : 'add';
        document.body.classList[bodyAction]('dark-mode');
        document.querySelector('.grid').classList[classAction]('dark-mode');
        document.querySelector('.nav').classList[classAction]('dark-mode');
        document.querySelector('.hello').classList[classAction]('dark-mode');
        document.querySelector('.footer').classList[classAction]('dark-mode');
    }, [darkMode]);

    const handleToggle = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={handleToggle} />
            <span className="slider"></span>
        </label>
    )
}

export default DarkMode
