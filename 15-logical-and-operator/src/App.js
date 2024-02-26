import "./App.css"
import { useState } from "react"
import Button from "./components/Button"
import Counter from "./components/Counter"
import ResetBtn from "./components/ResetBtn"

function App() {
  const [count, setCount] = useState(0)
  const incR = () => {
    setCount(count + 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className='App'>
      <Button onClick={incR} />
      <Button onClick={incR} />
      <Button onClick={incR} />
      <Button onClick={incR} />
      <Button onClick={incR} />
      <Button onClick={incR} />
      <Button onClick={incR} />
      <Button onClick={incR} />
      <Button onClick={incR} />
      <Button onClick={incR} />
      <Button onClick={incR} />
      <Button onClick={incR} />
      <Button onClick={incR} />
      <Button onClick={incR} />
      <Button onClick={incR} />
      <Button onClick={incR} />
      <Button onClick={incR} />
      <ResetBtn count={count} resetCount={resetCount} />
      <Counter count={count} />
    </div>
  )
}

export default App
