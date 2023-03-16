import { combineReducers } from "redux";
import { todoReducer } from "./todo-reducer";

export const roorReduser = combineReducers({
  todos: todoReducer,
});
