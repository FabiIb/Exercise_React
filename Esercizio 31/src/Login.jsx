import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState("");

  const userChange = (e) => {
    setUsername(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const check = (e) => {
    setRemember(e.target.checked);
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(username, password, remember);
  };
  return (
    <form>
      <input
        onChange={userChange}
        type="text"
        value={username}
        placeholder="username"
      />
      <input
        onChange={passwordChange}
        type="password"
        value={password}
        placeholder="*******"
      />
      <input
        onClick={check}
        type="checkbox"
        checked={remember}
        onChange={check}
      />
      <button onClick={submit} type="submit">
        Log In
      </button>
    </form>
  );
}

export default Login;
