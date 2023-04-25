import { useState } from 'react'

export default function TodoInput({ addTodo }) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo({ title: inputValue })
    setInputValue('')
  }

  console.log(inputValue, setInputValue)
  return (
    <>
      <form className="input-wrapper" onSubmit={handleSubmit}>
        <input
          value={inputValue}
          placeholder="Create a new todo"
          onChange={(e) => setInputValue(e.target.value)}
          autofocus
        />
        <button className="add-button">Add</button>
      </form>
    </>
  )
}
