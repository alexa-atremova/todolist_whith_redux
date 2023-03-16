import React from "react";
import ToDoComponent from "./ToDoComponent";
import { todoList } from "./../../store/mock-items";

export function TodoListContainer() {
  const todoItems = todoList.filter((item) => !item.done);
  const doneItems = todoList.filter((item) => item.done);
  return <ToDoComponent doneItems={doneItems} todoItems={todoItems} />;
}

export default TodoListContainer;
