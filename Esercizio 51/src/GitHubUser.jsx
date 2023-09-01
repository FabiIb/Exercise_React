import UseGitHubUser from "./UseGitHubUser"
function GitHubUser({ username }) {
    const { users, error, isLoading } = UseGitHubUser(username)
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Errror: {error}</h1>}
            {data && <div>
                <p>Name: {users.login}</p>
                <p>Id: {users.id}</p>
            </div>}
        </div>
    )
}
export default GitHubUser