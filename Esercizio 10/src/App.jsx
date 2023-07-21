import React from "react";
import Welcome from "./Welcom";

function App() {
  return <Welcome nome= "John" age="31" />;
}

export default App;
/* Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18 and less than 65 and the name prop is equal to "John". */
