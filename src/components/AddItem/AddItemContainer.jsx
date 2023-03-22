import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import AddItemComponent from "./AddItemComponent";
import { addTodo } from "../../store/slice";

export function AddItemContainer() {
  const dispatch = useDispatch();

  const handlerAdd = (text) => {
    dispatch(
      addTodo({
        id: uuid(),
        text,
        done: false,
      })
    );
  };
  return <AddItemComponent onAdd={handlerAdd} />;
}

export default AddItemContainer;
