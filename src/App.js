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
        <Route exact path="/todo" component={Todos} />
        <Route exact path="/editor" component={Editor} />
      </Routes>
    </>
  );
}

export default App;
