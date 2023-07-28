import { useState } from "react";
function ClickTracker() {
  const [lastpress, setLastpress] = useState("");
  const clickButton = (e) => {
    const inner = e.target.innerHTML;
    setLastpress(inner);
  };

  return (
    <>
      <h1>Last press button: {lastpress}</h1>
      <button onClick={clickButton}>Button One</button>
      <button onClick={clickButton}>Button Two</button>
      <button onClick={clickButton}>Button Three</button>
    </>
  );
}
export default ClickTracker;
