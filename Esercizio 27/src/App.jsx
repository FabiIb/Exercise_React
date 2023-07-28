import TodoList from "./TodoList";
import { useState } from "react";
function App() {
  const [todo, setTodo] = useState([]);
  const remuveItem = (index) => {
    let items = todo;
    items.splice(index, 1);
    setTodo(items);
  };
  return <TodoList todo={todo} setTodo={setTodo} remuveItem={remuveItem} />;
}

export default App;
