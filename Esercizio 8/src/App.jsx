import React from "react";
import Welcome from "./Welcome";

function App() {
  return <Welcome nome={<strong>Fabiola</strong>} age="31" />;
}

export default App;
/* Modify the Welcome component so that the Age component is rendered only if the age prop is present. */