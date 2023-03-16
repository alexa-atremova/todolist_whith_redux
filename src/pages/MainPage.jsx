import React from "react";
import EditorComponent from "../components/EditorComponent/EditorComponent";
import Header from "../components/Header/Header";
import ToDoComponent from "../components/ToDoComponent/ToDoComponent";

function MainPage() {
  return (
    <div>
      <Header />
      <EditorComponent />
      <ToDoComponent />
    </div>
  );
}

export default MainPage;
