import { Route, Routes } from "react-router-dom"

import First from './homework/First'
import Second from './homework/Second'
import Third from './homework/Third'


function App() {
  return (
    <Routes>
      <Route path="/week-1" element={<First />}></Route>
      <Route path="/week-2" element={<Second />}></Route>
      <Route path="/week-3" element={<Third />}></Route>
    </Routes>
  )
}

export default App
