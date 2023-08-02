import { useState } from "react";
function ClickCounter() {
  const [counter, setCounter] = useState(0);
  const click = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <p>{counter} </p>
      <button onClick={click}>Click Me</button>
    </>
  );
}
export default ClickCounter;
