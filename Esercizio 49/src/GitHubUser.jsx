import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function GitHubUser() {
    const {username} = useParams()
    const [user, setUsers] = useState()

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const data = await response.json()
            setUsers(data)
        }
        fetchData()
    }, [username])

    return (
        <div>
            {user && <h2>Name: {user.name}</h2>}
            {user && <h2>ID: {user.id} </h2>}


        </div>
    )
}

export default GitHubUser;