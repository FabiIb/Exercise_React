import { Route, Routes, Link } from 'react-router-dom';
import Component from './Component';
import Contact from './Contact';
import Product from './Product';

function App() {


  return (
    <>
      <Routes>
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/component' element={<Component />} />
      </Routes>

      <ul>
        <li><Link to="/product">Link 1</Link></li>
        <li><Link to="/contact">Link 2</Link></li>
        <li><Link to="/component">Link 3</Link></li>
      </ul>
    </>
  )
}

export default App
