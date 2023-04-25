export default function Todo({ id, title, completed, setCompleted }) {
  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={(e) => {
          setCompleted(id, e.target.checked)
        }}
      />
      <label>{title}</label>
    </div>
  )
}
