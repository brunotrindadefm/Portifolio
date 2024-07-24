import './EnPt.css'

import { useState, useEffect } from 'react'

const EnPt = ({onLangChange}) => {

    const [lang, setLang] = useState(false)

   
    const toggleLanguage = () => {
        setLang(prevLang => {
            const newLang = !prevLang;
            onLangChange(newLang);
            return newLang;
        });
    };
    console.log(lang)

    return (
        <>
            <label className="toggle-label" for="language-toggle">
                <input type="checkbox"
                    class="toggle-input"
                    id="language-toggle"
                    onChange={toggleLanguage}
                    checked={lang}
                />
                <span className="toggle-slider"></span>
            </label>
        </>
    )
}

export default EnPt
