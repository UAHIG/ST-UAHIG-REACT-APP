import "./App.css"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import Header from "./components/UI/Header"
import TodoForm from "./components/Todos/TodoForm"
import TodoList from "./components/Todos/TodoList"
import TodosActions from "./components/Todos/TodosActions"

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isComplited: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isComplited: !todo.isComplited }
          : { ...todo }
      })
    )
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isComplited))
  }

  const completedTodosCount = todos.filter((todo) => todo.isComplited).length

  return (
    <div className='App'>
      <Header />

      <TodoForm addTodo={addTodoHandler} />

      {!!todos.length && (
        <TodosActions
          comletedTodoExist={!!completedTodosCount} // выдает тру и фолс
          resetTodo={resetTodosHandler}
          deleteCompletedTodo={deleteCompletedTodosHandler}
        />
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && <h2>{`Выполненных дел: ${completedTodosCount}`}</h2>}
    </div>
  )
}

export default App
