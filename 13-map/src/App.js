import "./App.css"
import { useState } from "react"
import Button from "./components/Button"
import Counter from "./components/Counter"

const texts = [
  "Accio",
  "Expelliarmus",
  "Expecto Patronum",
  "Lumos",
  "Nox",
  "Alohomora",
  "Wingardium Leviosa",
  "Avada Kedavra",
  "Imperio",
  "Crucio",
  "Sectumsempra",
  "Aguamenti",
  "Protego",
  "Riddikulus",
  "Stupefy",
  "Obliviate",
];


function App() {
  console.log("app rendered")
  const [count, setCount] = useState(0)
  const incR = () => {
    setCount(count + 1)
    console.log(count)
  }

  return (
    <div className='App'>
      {texts.map((text, index) => {
        return <Button key={index} onClick={incR} text={text} />
      })}
      <Counter count={count} />
    </div>
  )
}

export default App
