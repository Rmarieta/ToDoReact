import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ToDoList from "./ToDoList";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );
  const todoNameRef = useRef();

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storedTodos) {
  //     setTodos(storedTodos);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
      <div class="triple-buttons">
        <input ref={todoNameRef} type="text" placeholder="Write a new task" />
        <button onClick={handleAddTodo}>Add Todo</button>
        <button onClick={handleClearTodos}>Clear Complete</button>
      </div>

      <div class="remaining">
        {todos.filter((todo) => !todo.complete).length} left to do
      </div>
    </>
  );
}

export default App;
