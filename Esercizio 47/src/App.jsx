import { Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import NotFound from './NotFound';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App
