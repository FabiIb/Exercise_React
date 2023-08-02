import { useEffect, useState } from "react"
import DisplayCounter from "./DisplayCounter";

function Counter({ start, range, incrase }) {
    const [count, setCount] = useState(start);
    useEffect(() => {
        clearInterval(count)
    }, [count])
    useState(() => {
        const intervall = setInterval(() => {
            setCount((i) => i + incrase)
        }, range);
        return () => {
            clearInterval(intervall)
        }
    }, [])
    return (
        <DisplayCounter count={count} />
    )

}
export default Counter;

