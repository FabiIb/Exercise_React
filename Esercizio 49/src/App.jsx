import GitHubUser from "./GitHubUser";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/:username" element={<GitHubUser/>} />
      <Route index element={<p>Add a user and select it</p>} />
    </Routes>
  );
}

export default App;

