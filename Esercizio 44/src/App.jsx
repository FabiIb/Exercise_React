import Counter from "./Counter"

import {Route} from "react-router"
import {Routes} from "react-router"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Counter />} />
      </Routes>
    </>
  )
}

export default App
