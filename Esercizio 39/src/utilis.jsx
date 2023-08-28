import { useEffect, useState } from "react";

export const userGitHub = (username) => {
    const [data, setData] = useState()
    const [load, setLoad] = useState(false)
    const [error, setError] = useState()
    async function fetchData(username) {
        setLoad(true)
        setError(null)
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()
            console.log(json)
            if (json.message === 'Not Found') {
                setError(json.message)
            } else {
                setData(json)
            }
        } catch (error) {
            setError(error)
            setData(null)
            console.log(error)
        } finally {
            setLoad(false)
        }
    }

    return (
        { data, load, error, fetchData }
    )
}
export default userGitHub