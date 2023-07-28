import { useState } from "react";
function TodoList({ todo, setTodo, remuveItem }) {
  const [inputValue, setInputValue] = useState("");

  const changeImput = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    if (inputValue !== "") {
      setTodo([...todo, inputValue]);
      setInputValue("");
    }
  };
//Anche in questo caso non si renderizza in tempo reale 
  const reset = () => {
    setTodo([]);
  };

  return (
    <>
      <ul>
        {todo.map((name, index) => (
          <li key={index}>
            {name}
            <button onClick={() => remuveItem(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <input type="text" value={inputValue} onChange={changeImput} />
      <button onClick={addItem}>Add Todo</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
export default TodoList;
