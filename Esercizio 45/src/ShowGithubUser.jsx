import { Link } from "react-router-dom";
function ShowGitHubUser() {
  return (
    <div>
      <Link to="/:username">Click here</Link>
    </div>
  );
}

export default ShowGitHubUser;
