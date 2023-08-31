
import { Route,Routes } from "react-router-dom"
import UseGitHubUser from "./UseGitHubUser"
import GitHubUser from "./GitHubUser"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GitHubUser />} />
        <Route path="users" element={<UseGitHubUser />} />
      </Routes>
    </>
  )
}

export default App