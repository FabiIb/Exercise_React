import React, { useContext } from "react";
import LenguageContext from "./LenguageContext";

function DisplayLanguage() {
    const lang = useContext(LenguageContext)
    return (
        <h2>Lenguage :{lang}</h2>
    );
}

export default DisplayLanguage;