import useSwr from 'swr'
function UseGitHubUser() {
    const dataFetch = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }

    const { dataF, error, mutate } = useSwr(`https://api.github.com/users`, dataFetch)
    function refreshData() {
        mutate()
    }
    return {
        users: dataF,
        error,
        isLoading: !dataF && !error,
        refresh: refreshData
    }
}

export default UseGitHubUser