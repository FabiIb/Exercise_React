import { useState } from "react";
import UserGitHub from "./UserGitHub";

function UserGitHubList() {
    const [data, setData] = useState([])
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleAddUsername = () => {
        if (inputValue !== '') {
            setData((todo) => [...todo, inputValue])
            setInputValue('')
        }
    }

    return <>
        <input type="text" value={inputValue} onChange={handleInputChange}></input>
        <button onClick={handleAddUsername}>Add</button>
        <ul>
            {data.map((user, index) => <li key={index}><UserGitHub username={user} /></li>)}
        </ul>
    </>
}
export default UserGitHubList