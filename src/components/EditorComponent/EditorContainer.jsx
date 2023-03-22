import React from "react";
import { useSelector } from "react-redux";
import { EditorComponent } from "./EditorComponent";

export function EditorContainer() {
  const items = useSelector((state) => state.todos);

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
      items={items}
      onTextChange={handleTextChange}
      onToggle={handleToggle}
      onRemove={handleRemove}
    />
  );
}

export default EditorContainer;
