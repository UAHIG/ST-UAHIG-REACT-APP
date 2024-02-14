import "./App.css"
import PetInfo from "./components/Petinfo"

function App() {
  return <div className='App'>
    <PetInfo animal='cat' age="55" />
    <PetInfo animal='giraf' age="5" />
    <PetInfo animal='rat' age="1" />
  </div>
}

export default App
