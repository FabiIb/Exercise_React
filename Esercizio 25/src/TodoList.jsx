import { useState } from "react";
function TodoList() {
  const [todo, setTodo] = useState([]);
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
  const reset = () => {
    setTodo([]);
  };
  return (
    <>
      <ul>
        {todo.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <input type="text" value={inputValue} onChange={changeImput} />
      <button onClick={addItem}>Add Todo</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
export default TodoList;
