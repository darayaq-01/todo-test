export default function TodoList({ list, completed }) {
  return (
    <>
      {list?.length >= 0 ? (
        <ul className="todo-list">
          {list.map((item) => {
            return (
              <div className="todo" key={item.id}>
                <li>
                  {item.title}

                  <button
                    className="delete-button"
                    onClick={() => {
                      completed(item)
                    }}
                  >
                    Delete
                  </button>
                </li>
              </div>
            )
          })}
        </ul>
      ) : (
        <div className="empty">
          <p>No task found</p>
        </div>
      )}
    </>
  )
}
