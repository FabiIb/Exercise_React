import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import GitHubUser from "./GitHubUser"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GitHubUser />} />
        <Route path="users" element={<GitHubUser />} />
      </Routes>
    </>
  )
}

export default App