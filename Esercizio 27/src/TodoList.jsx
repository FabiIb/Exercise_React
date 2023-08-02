import { useState } from "react";

function TodoList({ renderItem }) {

  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);

  const changeImput = (e) => {
    setInputValue(e.target.value);
  };
  const remuveItem = (index) => {
    let items = todo;
    items.splice(index, 1);
    setTodo(items);
  };
  const addItem = () => {
    if (inputValue !== "") {
      setTodo([...todo, inputValue]); //sto creando un nuovo array che abbia tutti gli elementi dell'array todo più imput value
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
        {todo.map((name, index) => renderItem(name, index, remuveItem))}
      </ul>

      <input type="text" value={inputValue} onChange={changeImput} />
      <button onClick={addItem}>Add Todo</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
export default TodoList;
