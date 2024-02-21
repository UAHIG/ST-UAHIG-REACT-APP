import "./App.css"
import PetInfo from "./components/Petinfo"

function App() {
  return <div className='App'>
    <PetInfo animal='cat' age="55" hasPet={true} />
    <PetInfo animal='giraf' age="5" hasPet={false} />
    <PetInfo animal='rat' age="1" hasPet={false} />
  </div>
}

export default App
