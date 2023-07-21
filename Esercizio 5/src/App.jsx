import React from "react";
import Welcome from "./Welcome";

function App() {
  return <Welcome nome={<strong>Fabiola</strong>} age="31" />;
}

export default App;
/* What happens if the name prop is a JSX expression instead of a string? How do you pass a prop that contains a JSX expression? 
Modify the value passed to the name prop so that it's contained within a strong tag. */