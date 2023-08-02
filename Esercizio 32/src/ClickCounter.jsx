import { useEffect } from "react";
import { useState } from "react";
function ClickCounter({ onCounterChange }) {
    const [counter, setCounter] = useState(0);
    const click = () => {
        setCounter(counter + 1);
    };
    const clickDecrement = () => {
        setCounter(counter - 1);
    };

    useEffect(() => {
        onCounterChange(counter); // lo utilizzo per svolgere un azione al cambiare degli argomenti degli arrey di dipendenza useEffect(()=>{},[]) <===== il metodo in cui viene scritto, la prima parte è la callback mentre la seconda parte dopo la virgola e l'array delle dipendenze 
    }, [counter]);

    return (
        <>
            <p>{counter} </p>
            <button onClick={click}>Click Me</button>
            <button onClick={clickDecrement}>decrement</button>


        </>
    );
}
export default ClickCounter;