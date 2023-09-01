import useSWR from 'swr'
function UseGitHubUser(username) {
    const fetcher = url => fetch(url).then(response => response.json())
    const {data, error, mutate} = useSWR(username ?` https://api.github.com/users/${username}`: null, fetcher)

   function handleRefreshData(){
     mutate()
   }


   
    return {
        users: data,
        error,
        isLoading: !data && !error,
        refresh: handleRefreshData
    }
}

export default UseGitHubUser