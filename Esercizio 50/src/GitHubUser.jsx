import UseGitHubUser from "./UseGitHubUser";

function GitHubUser() {
    const { users, error, isLoading } = UseGitHubUser()

    return (

        <>
            {isLoading ? <h3>Loading...</h3> :
                error ? <h3>Error 404</h3> :
                    <ul>
                        {users.map((a, b) => (
                            <li key={b}>{a.login}</li>
                        ))}
                    </ul>}
        </>

    )

}

export default GitHubUser