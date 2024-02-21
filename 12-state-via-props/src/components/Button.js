import { useState } from 'react';

function Button({onClick}) {
  console.log('button rendered')

  const [text, setText] = useState('Click me!')
  const [color, setColor] = useState('')

  const handleClick = () => {
    setColor('red')
    setText('Yep! Done!')
    onClick();
  }

  return <button onClick={handleClick} style={{backgroundColor :  color}}>{text}</button>
}

export default Button;