import { useState } from "react";
function ToDolist({}) {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const changeImput = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    if (inputValue !== "") {
      setTodo([...todo, inputValue]);
  
    }
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
    </>
  );
}
export default ToDolist;
