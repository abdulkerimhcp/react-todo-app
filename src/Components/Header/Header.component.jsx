import { useState ,useEffect} from "react";
const intialFormValues = { todoName: "" }
function Header({ todos, addTodo }) {
  const [inputTodo, setInputTodo] = useState(intialFormValues);

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputTodo.todoName === ""){ return false};
    addTodo([...todos, inputTodo]);
  };

  const onChange = (e) => {
    setInputTodo({ ...inputTodo, [e.target.name]: [e.target.value] });
  };

  useEffect(() => {
    setInputTodo(intialFormValues);
  }, [todos]);

  return (
    <header className="header">
      <h1>Todos</h1>
      <form onSubmit={onSubmit}>
        <input
          name="todoName"
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={onChange}
          value={inputTodo.todoName}
          autoFocus
        />
      </form>
    </header>
  );
}

export default Header;
