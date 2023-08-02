import TodoList from "./TodoList";

function App() {

  const renderItem = (name, index, remove) => (<li key={index}>
    {name}
    <button onClick={() => remove(index)}>Delete</button>
  </li>)

  return <TodoList renderItem={renderItem} />;
}

export default App;
