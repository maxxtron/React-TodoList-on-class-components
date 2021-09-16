import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";

const TodoList = ({ todoData, onDeleted, onToggleDone, onToggleImportant }) => {
  const newTodoData = todoData.map((td) => {
    const { id, ...item } = td;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...item}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{newTodoData}</ul>;
};

export default TodoList;
