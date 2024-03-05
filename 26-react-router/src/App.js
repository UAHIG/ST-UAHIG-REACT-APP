import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

import Home from "./components/Home"
import Contacts from "./components/Contacts"
import About from "./components/About"

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App
