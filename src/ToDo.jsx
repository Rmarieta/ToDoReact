import React from "react";
import "./App.css";

const ToDo = ({ todo, toggleTodo }) => {
  function hangleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div className="ToDo">
      <div>
        {todo.name}
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={hangleTodoClick}
        />
      </div>
    </div>
  );
};

export default ToDo;
