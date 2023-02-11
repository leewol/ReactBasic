import { useState } from "react";

function ToDoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    if (todo === "") return;
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
  };

  return (
    <div>
      <h1>My To-Dos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write your to-do..."
        />
        <button>Add To-Do</button>
      </form>
      <hr />
      <ul>
        {todos.map((todo, index) => (
          <li key={todo + index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
