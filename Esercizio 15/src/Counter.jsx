import { useEffect, useState } from "react"
import DisplayCounter from "./DisplayCounter";

function Counter({ start, range, increase }) {
    const [count, setCount] = useState(start);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((i) => i + increase);
        }, range);

        return () => {
            clearInterval(interval);
        };
    }, [range, increase]);
  
    return (
        <DisplayCounter count={count} />
    )

}
export default Counter;

