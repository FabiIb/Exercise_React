import UseCounter from "./UseCounter"
function Counter() {
    const {counter,onIncrement,onDecrement,onReset} =UseCounter()
 
     return (
         <div>
             <h1>
                 Count: {counter}
             </h1>
             <button onClick={onIncrement}>+</button> 
             <button onClick={onDecrement}>-</button> 
             <button onClick={onReset}>Reset</button>
         </div>
     )
 }
 export default Counter

 