import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import UseGitHubUser from "./UseGitHubUser"
import GitHubUser from "./GitHubUser"

function App() {
  return (
    <>
      <Routes>
        <Route path="/:username" element={<UseGitHubUser />} />
      </Routes>
    </>
  )
}

export default App