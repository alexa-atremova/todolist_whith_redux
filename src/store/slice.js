import { createSlice } from "@reduxjs/toolkit";
import todoList from "./mock-items";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: todoList,
  },
  reducers: {
    addTodo: (state, action) => {
      const item = action.payload;
      state.todoList = [...state.todoList, item];
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todoList = state.todoList.filter((item) => item.id !== id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
