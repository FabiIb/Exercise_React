import ClickCounter from "./ClickCounter";
function App() {
    const onCounterChange = (counter) => console.log(counter);
    return <ClickCounter onCounterChange={onCounterChange} />
}
export default App