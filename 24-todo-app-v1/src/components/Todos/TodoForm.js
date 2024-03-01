import { useState } from "react"
import styles from "./TodoForm.module.css"

function TodoForm({ addTodo }) {
  const [text, setText] = useState("")

  function onSubmitHandler(event) {
    event.preventDefault()
    addTodo(text)
    setText("")
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder='Описание Вашего дела:'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>Добавить</button>
      </form>
    </div>
  )
}

export default TodoForm
