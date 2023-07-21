import React from "react";
import Welcome from "./Welcom";

function App() {
  return <Welcome nome="Fabiola" age={31} />;
}

export default App;
/* Modify the Welcome component so that it receives a second prop called age and renders it below the 'welcome' message, within a p tag after the message "Your age is ". */