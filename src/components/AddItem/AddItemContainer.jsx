import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { ADD_TODO } from "../../store/todo-actions";
import AddItemComponent from "./AddItemComponent";

export function AddItemContainer() {
  const dispatch = useDispatch();

  const handlerAdd = (text) => {
    dispatch({
      type: ADD_TODO,
      payload: {
        id: uuidv4(),
        text,
        done: false,
      },
    });
  };
  return <AddItemComponent onAdd={handlerAdd} />;
}

export default AddItemContainer;
