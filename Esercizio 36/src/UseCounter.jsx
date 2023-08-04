import { useState } from 'react'

export function UseCounter(value = 0) {
    const [counter, setCounter] = useState(value)

    function incrementCounter() {
        setCounter((i) => i + 1)
    }

    function decrementCounter() {
        setCounter((i) => i + -1)
    }

    function resetCounter() {
        setCounter(value)
    }

    return {
        counter: counter,
        onIncrement: incrementCounter,
        onDecrement: decrementCounter,
        reset: resetCounter
    }
}
export default UseCounter