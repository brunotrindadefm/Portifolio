import './EnPt.css'

import { useState} from 'react'

const EnPt = ({onLangChange}) => {

    const [lang, setLang] = useState(false)

   
    const toggleLanguage = () => {
        setLang(prevLang => {
            const newLang = !prevLang;
            onLangChange(newLang);
            return newLang;
        });
    };

    return (
        <>
            <label className="toggle-label" htmlFor="language-toggle">
                <input type="checkbox"
                    className="toggle-input"
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
