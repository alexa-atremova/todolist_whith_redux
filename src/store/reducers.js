import { combineReducers } from "redux";
import { todoReduser } from "./todo-reducer";

export const rootReduser = combineReducers({
  todos: todoReduser,
});
