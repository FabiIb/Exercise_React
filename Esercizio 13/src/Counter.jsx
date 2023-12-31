import { useState } from "react";
function Counter({ start, range, incrase }) {
  const [count, setCount] = useState(start);
  useState(() => {
    const intervall = setInterval(() => {
      setCount((i) => i + incrase);
    }, range);
    return () => clearInterval(range);
  }, []);
  return <h1>{count}</h1>;
}
export default Counter;
