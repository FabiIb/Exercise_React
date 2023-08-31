import UseGitHubUser from "./UseGitHubUser";

function GitHubUser({ }) {
    const { users, error, isLoading, refresh} = UseGitHubUser()
    return (
      <div>
        <button onClick={refresh}>Refresh</button>
          {isLoading && <h3>Loading...</h3>}
          {error && <h3> Error 404</h3>}
          {users && <ul>
             {users.map((element, index) => {
              return <li key={index}>{element.login}</li>
             })} </ul>}
      </div>
    )

}

export default GitHubUser