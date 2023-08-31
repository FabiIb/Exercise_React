import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import UseGitHubUser from "./UseGitHubUser"
import Welcome from "./Welcome"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path=":username" element={<UseGitHubUser />} />
      </Routes>
    </>
  )
}

export default App