import "./App.css"
import Info from "./components/Info"
// import styles from '../src/components/Info.modules.css'

function App() {
  return (
    <div className='App'>
      <Info />
      <div className='info'>
        <h1>App component heading</h1>
        <h2>Heading h2 App component</h2>

        <button className='mybutton'>App component button</button>
        <button>No classname btn from app</button>

      </div>
    </div>
  )
}

export default App
