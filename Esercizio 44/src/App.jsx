import { Route, Routes } from 'react-router-dom';
import Counter from './Counter'; // Assuming the Counter component is imported correctly

function App() {
  return (
    <>
      <Routes>
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;

