import "./App.css"
import { useState } from "react"
import Button from "./components/Button"
import Counter from "./components/Counter"

function App() {
  console.log('app rendered')
  const [count, setCount] = useState(0)
  const incR = () => {
    setCount(count + 1)
    console.log(count)
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

      <Counter count={count} />
    </div>
  )
}

export default App
