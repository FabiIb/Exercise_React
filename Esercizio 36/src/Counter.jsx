import UseCounter from "./UseCounter"
function Counter({ value = 0 }) {

    const { counter, onIncrement, onDecrement, reset } = UseCounter(value)

    return <div>
        <h1>Time: {counter}</h1>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
}
export default Counter