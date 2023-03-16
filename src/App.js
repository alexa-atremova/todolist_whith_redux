import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Editor from "./pages/Editor/Editor";
import MainPage from "./pages/MainPage";
import Todos from "./pages/Todos/Todos";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route exact path="/todo" element={<Todos />} />
        <Route exact path="/editor" element={<Editor />} />
      </Routes>
    </>
  );
}

export default App;
