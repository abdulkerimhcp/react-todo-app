import { useState } from "react";
import Header from "./Components/Header/Header.component";
import Main from "./Components/Main/Main.component";
import Footer from "./Components/Footer/Footer.component";
import "./App.css";

function App() {
  const [todos,setTodos] = useState([
    {
      todoName:"Learn JavaScript"
    },
    {
      todoName:"Learn React"
    },
    {
      todoName:"Have a life!"
    }
  ])
  return (
    <section className="todoapp">
      <Header todos={todos} addTodo={setTodos}/>
      <Main todos={todos} />
      <Footer todos={todos} />
    </section>
  );
}

export default App;
