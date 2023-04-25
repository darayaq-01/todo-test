import { useState, useEffect } from 'react'

import { mockTodos } from './assets/mockdata'

import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

import './App.css'

function App() {
  const [todos, setTodos] = useState(mockTodos)

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || mockTodos
    setTodos(savedTodos)
  }, [])

  const addTodo = ({ title }) => {
    const newTodo = {
      title,
      id: self.crypto.randomUUID(),
      completed: false,
    }
    if (!title) return
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)

    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const completed = (item) => {
    const newTodos = todos.filter((todo) => {
      return todo !== item
    })
    setTodos(newTodos)

    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  return (
    <main>
      <h1>Finatix Todo App</h1>
      <TodoInput addTodo={addTodo} />

      {todos.length === 0 ? (
        <div>
          <p>-- no tasks yet --</p>
        </div>
      ) : (
        <TodoList list={todos} completed={completed} />
      )}
    </main>
  )
}

export default App
