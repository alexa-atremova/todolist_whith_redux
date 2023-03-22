import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { TodoListContainer, EditorContainer } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<TodoListContainer />} />
        <Route exact path="/todo" element={<TodoListContainer />} />
        <Route exact path="/editor" element={<EditorContainer />} />
      </Routes>
    </>
  );
}

export default App;
