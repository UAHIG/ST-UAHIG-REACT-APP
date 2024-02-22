import { useState } from "react"

function Button({ onClick, text }) {
  console.log("button rendered")

  const [buttonText, setText] = useState(text)
  const [color, setColor] = useState("")

  const handleClick = () => {
    setColor("red")
    setText(`'Yep! ${text} Done!'`)
    onClick()
  }

  return (
    <button onClick={handleClick} style={{ backgroundColor: color }}>
      {buttonText}
    </button>
  )
}

export default Button
