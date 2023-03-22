import todoList from "./mock-items";
import { ADD_TODO } from "./todo-actions";

export const todoReduser = (state = todoList, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const item = action.payload;
      return [...state, item];
    }
    default:
      return state;
  }
};
