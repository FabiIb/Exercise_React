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

  const remuveItem = (index) => {
    let items = todo;
    items.splice(index, 1);
    setTodo(items);
  };

  // Purtroppo ho il problema  che finchè non scrivo qualcosa nell'imput text il render della lista non avviene quindi i miei elementi non si cancellano in automatico
  // non so come procedere

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
