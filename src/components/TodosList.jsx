import Todo from './Todo'

export default function Todos({ todos, setCompleted }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo
            id={todo.id}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
            setCompleted={setCompleted}
          />
        </li>
      ))}
    </ul>
  )
}
