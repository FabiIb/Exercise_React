import { useState } from "react"
import { Link } from "react-router-dom"
function GitHubUserList() {
    const [data, setData] = useState([])
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleAddUsername = () => {
        setData([...data, inputValue])
        setInputValue('')

    }

    return (
        <>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleAddUsername}>Add</button>
            <ul>
                {data.map((username, index) => <li key={username + index}><Link to={`/users/${username}`}>{username}</Link></li>)}
            </ul>
        </>
    )
}
export default GitHubUserList