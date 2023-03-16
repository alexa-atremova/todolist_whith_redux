import React from "react";
import todoList from "../../store/mock-items";
import ToDoComponent from "./ToDoComponent";

export function TodoListContainer() {
  const todoItems = todoList.filter((item) => !item.done);
  const doneItems = todoList.filter((item) => item.done);
  return <ToDoComponent doneItems={doneItems} todoItems={todoItems} />;
}

export default TodoListContainer;
