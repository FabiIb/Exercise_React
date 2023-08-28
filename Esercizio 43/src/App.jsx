import FilterList from "./FilterList";
function App() {
  const list = [
    { id: 1, name: "Laura", age: 32 },
    { id: 2, name: "Mattia", age: 16 },
    { id: 3, name: "Matteo", age: 30 },
    { id: 4, name: "Sara", age: 10 },
    { id: 5, name: "Nadia", age: 18 },
  ];
  return (
    <FilterList list={list} />
  )
}

export default App



