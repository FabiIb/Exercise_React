import Login from "./Login";
function App() {
  const handleLogin = (e) => {
    console.log("Log", e);
  };
  return (
    <>
      <h1>Page Login</h1>
      <Login onLog={handleLogin} />
    </>
  );
}

export default App;
