import React from "react";
import { useSelector } from "react-redux";
import ToDoComponent from "./ToDoComponent";

export function TodoListContainer() {
  const items = useSelector((state) => state.todo.todoList);

  const todoItems = items.filter((item) => !item.done);
  const doneItems = items.filter((item) => item.done);
  return <ToDoComponent doneItems={doneItems} todoItems={todoItems} />;
}

export default TodoListContainer;
