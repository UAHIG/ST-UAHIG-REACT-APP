import { useState } from "react"
import styles from "./TodoForm.module.css"
import Button from "../UI/Button"

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
        <Button type='submit' title='Добавить дело' disabled={!text.length}>
          Добавить
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
