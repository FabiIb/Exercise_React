import userGitHub from "./utilis"
import { useEffect } from "react"
function UserGit({ username }) {
    const { data, load, error, fetchData } = userGitHub(username)
    console.log(username)
    useEffect(() => {
        fetchData(username)
    }, [username])
    return (
        <div>
            {data && <h1>Username: {data.name}</h1>}
            {load && <h1>Loading...</h1>}
            {error && <h1>There is been an error</h1>}
        </div>
    )
}
export default UserGit