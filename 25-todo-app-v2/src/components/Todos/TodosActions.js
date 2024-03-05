import Button from "../UI/Button"
import styles from "./TodosActions.module.css"
import { RiRefreshLine, RiDeleteBin2Line } from "react-icons/ri"

function TodosActions({ resetTodo, deleteCompletedTodo, comletedTodoExist }) {
  return (
    <div classList={styles.todosActionsContainer}>
      <Button onClick={resetTodo} title='Удалить все'>
        <RiRefreshLine />
      </Button>
      <Button
        onClick={deleteCompletedTodo}
        title='Очистить список выполненных'
        disabled={!comletedTodoExist}>
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodosActions
