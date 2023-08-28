import { useState } from "react";
import DisplayLanguage from "./DisplayLanguage";
import LenguageContext from "./LenguageContext";
function App() {
    const [language, setLanguage] = useState("it")
    const handleLanguageChange = ((e) => {
        const data = e.target.value
        setLanguage(data)
    })
    return (
        <div>
            <select onChange={handleLanguageChange}>
                <option value="it">ITALIANO</option>
                <option value="en">ENGLISH</option>
            </select>
            <LenguageContext.Provider value={language}>
                <DisplayLanguage />
            </LenguageContext.Provider>
        </div>


    )
}

export default App;

