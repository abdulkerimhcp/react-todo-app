

function Main({ todos }) {
 
  return (
    <section className="main">
      <ul className="todo-list">
        {/* <li className="completed">
            <input className="toggle" type="checkbox" />
            <label>Learn JavaScript</label>
            <button className="destroy"></button>
          </li> */}

        {todos.map((todo, index) => (
          <li key={index}>
            <input className="toggle" type="checkbox" />
            <label>{todo.todoName}</label>
            <button className="destroy"></button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Main;
