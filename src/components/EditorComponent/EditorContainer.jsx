import React from "react";
import todoList from "../../store/mock-items";

import EditorComponent from "./EditorComponent";

export function EditorContainer() {
  const handleTextChange = (item, value) => {
    console.log(item, value);
  };
  const handleToggle = (item, value) => {
    console.log(item, value);
  };
  const handleRemove = (item) => {
    console.log(item);
  };

  return (
    <EditorComponent
      items={todoList}
      onTextChange={handleTextChange}
      onToggle={handleToggle}
      onRemove={handleRemove}
    />
  );
}

export default EditorContainer;
