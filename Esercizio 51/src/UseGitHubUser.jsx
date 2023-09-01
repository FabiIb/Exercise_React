import useSwr from 'swr'
function UseGitHubUser({ username }) {
    const dataFetch = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }

    const { data, error } = useSwr(username ? `https://api.github.com/users${username}` : null, dataFetch)

    return {
        users: data,
        error,
        isLoading: !data && !error
    }
}

export default UseGitHubUser