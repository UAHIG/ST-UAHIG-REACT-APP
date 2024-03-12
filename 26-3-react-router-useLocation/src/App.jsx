import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

import Home from "./components/Home"
import Contacts from "./components/Contacts"
import About from "./components/About"
import NotFound from "./components/NotFound"
import MainLayout from "./layouts/MainLayout"
import Courses from "./components/Courses"
import SingleCourse from "./components/SingleCourse"

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='contacts' element={<Contacts />}></Route>
            <Route path='*' element={<NotFound />}></Route>
            <Route path='courses' element={<Courses />}></Route>
            <Route path='courses/:courseSlug' element={<SingleCourse />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App
