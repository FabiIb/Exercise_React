import GitHubUserList from "./GitHubUserList"
import GitHubUser from "./GitHubUser"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GitHubUserList />} />
        <Route path="/users/*" element={<GitHubUser username="FabiIb" />} />
      </Routes>
    </>
  )
}

export default App
