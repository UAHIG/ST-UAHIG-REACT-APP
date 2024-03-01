import "./App.css"
import { useState } from "react"
import Header from "./components/UI/Header"
import TodoForm from "./components/Todos/TodoForm"
import TodoList from "./components/Todos/TodoList"

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    setTodos([...todos, text])
  }

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index))
  }

  return (
    <div className='App'>
      <Header />
      <TodoForm addTodo={addTodoHandler}/>
      <TodoList todos = {todos} deleteTodo = {deleteTodoHandler}/>
    </div>
  )
}

export default App
