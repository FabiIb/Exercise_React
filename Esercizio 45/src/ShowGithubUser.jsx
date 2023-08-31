import { useParams } from "react-router-dom";
import GitHubUser from "./GitHubUser";

function ShowGithubUser() {
  const { username } = useParams();

  return (
    <div>
      <h2>Show GitHub User: {username}</h2>
      <GitHubUser username={username} />
    </div>
  );
}

export default ShowGithubUser;
