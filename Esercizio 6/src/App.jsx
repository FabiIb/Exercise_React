import React from "react";
import Welcome from "./Welcome";
function App() {
  return <Welcome nome={<strong>Fabiola</strong>} age="31" />;
}

export default App;
/* Extract the "Your age is " message into a new component called Age and render it within the Welcome component. 
Pass to the Age component the age prop that Welcome is receiving from the App component. */