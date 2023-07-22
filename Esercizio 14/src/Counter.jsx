import { useState } from "react";
import DisplayCounter from "./DisplayCounter";
function Counter({ start, range, incrase }) {
  const [count, setCount] = useState(start);
  useState(() => {
    const intervall = setInterval(() => {
      setCount((i) => i + incrase);
    }, range);
    return () => clearInterval(range);
  }, []);
  return <DisplayCounter count={count}/>
}
export default Counter;