import React from "react";
import GitHubList from "./GitHubList";
import GitHubUser from "./GitHubUser";
import AddUserMessage from "./AddUserMessage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
       <Route path="/users/*" element={<GitHubUser username="FabiIb" />} />
      <Route path="/" element={<GitHubList />}>
        <Route index element={<AddUserMessage />} />
      </Route>
    </Routes>
  );
}

export default App;

