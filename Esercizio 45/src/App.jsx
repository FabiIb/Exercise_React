import { Routes, Route } from "react-router-dom";
import ShowGitHubUser from "./ShowGithubUser";
import GitHubUser from "./GitHubUser";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShowGitHubUser />} />
        <Route path="/users:username" element={<ShowGitHubUser />} />
        <Route path="/:username" element={<GitHubUser />} />
      </Routes>
    </>
  );
}

export default App;
