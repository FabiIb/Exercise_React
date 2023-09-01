import UseGitHubUser from "./UseGitHubUser";

function GitHubUser({username }) {
    const { users, error, isLoading, refresh} = UseGitHubUser(username)
    return (
      <div>
        <button onClick={refresh}>Refresh</button>
          {isLoading && <h3>Loading...</h3>}
          {error && <h3> Error 404</h3>}
          {users && <div>
            <p>Name: {users.name}</p>
                <p>ID: {users.id}</p>
      </div>}
      </div>
    )

}

export default GitHubUser