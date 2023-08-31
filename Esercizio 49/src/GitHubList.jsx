import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function GitHubUserList() {
  const [usernames, setUsernames] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddUsername = () => {
    setUsernames([...usernames, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <h2>User List</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddUsername}>Add</button>
      <ul>
        {usernames.map((username, index) => (
          <li key={username + index}>
            <Link to={`${username}`}>{username}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}

export default GitHubUserList;
