import "./App.css"
import Wrapper from "./components/Wrapper"

function App() {
  return (
    <div className='App'>
      <Wrapper color="lightblue">
        <h2>Text inside Wrapper</h2>
        <button>Click me</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Text  Wrapper</h2>
        <p>Description</p>
        <input type="text" placeholder="Enter value"/>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Text  Wrapper</h2>
        <p>Description</p>
        <input type="text" placeholder="Enter value"/>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Text  Wrapper</h2>
        <p>Description</p>
        <input type="text" placeholder="Enter value"/>
      </Wrapper>
    </div>
  )
}

export default App
