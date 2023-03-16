import React from "react";
import ToDoComponent from "./ToDoComponent";
import { todoList } from "./../../store/mock-items";

export function TodoListContainer() {
  const todoItems = todoList.filter((item) => !item.done);
  const doneItems = todoList.filter((item) => item.done);
  return (
    <div id="Todo">
      <ToDoComponent doneItems={doneItems} todoItems={todoItems} />
    </div>
  );
}

export default TodoListContainer;
