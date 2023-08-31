import useSwr from 'swr'
function UseGitHubUser() {
    const dataFetch = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }

    const { data, error } = useSwr(users ? `https://api.github.com/users` : null, dataFetch)

    return {
        users: data,
        error,
        isLoading: !data && !error
    }
}

export default UseGitHubUser