import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ todos, toggleTodo }) => {
  return (
    <div className="Wrapper">
      {todos.map((todo) => {
        return <ToDo key={todo.id} todo={todo} toggleTodo={toggleTodo} />;
      })}
    </div>
  );
};

export default ToDoList;
