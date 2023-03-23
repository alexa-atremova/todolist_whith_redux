import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../../store/slice";
import EditorComponent from "./EditorComponent";

function EditorContainer() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todo.todoList);
  const handleTextChange = (item, value) => {
    console.log(item, value);
  };
  const handleToggle = (item) => {
    dispatch(toggleTodo(item));
  };
  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <EditorComponent
      items={items}
      onTextChange={handleTextChange}
      onToggle={handleToggle}
      onRemove={handleRemove}
    />
  );
}

export default EditorContainer;
