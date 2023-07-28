function UncontrolledLogin() {
  const handleLog = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    console.log({
      username: username,
      password: password,
    });
  };

  return (
    <form onSubmit={handleLog}>
      <label>Username:</label>
      <input name="username" defaultValue="Fabiola" />

      <label>Password:</label>
      <input name="password" type="password" placeholder="Password" />

      <button type="submit">Login</button>
    </form>
  );
}

export default UncontrolledLogin;
