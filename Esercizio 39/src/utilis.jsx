import { useEffect, useState } from "react";

export const userGitHub = (username) => {
    const [data, setData] = useState("")
    async function fetchData(username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            if (response.status === 200) {
                const json = await response.json()
                setData(json)
            }
        } catch (error) {
            setError(error)
        }
    }
    useEffect(() => {
        fetchData(username)
    }, [username])
    return (
        data
    )
}
export default userGitHub