import React, { useState } from "react";
import { Plus } from "react-bootstrap-icons";
import {
  AddItemButton,
  AddItemContainer,
  AddItemGroup,
  AddItemInput,
} from "./style";

export default function AddItemComponent({ onAdd }) {
  const [text, setText] = useState("");

  const handleChange = (value) => {
    setText(value);
  };

  const handleAdd = () => {
    onAdd(text);
    setText("");
  };

  return (
    <AddItemContainer>
      <AddItemGroup>
        <AddItemInput
          type="text"
          value={text}
          onChange={(event) => handleChange(event.target.value)}
        />
        <AddItemButton type="button" variant="primary" onClick={handleAdd}>
          <Plus />
        </AddItemButton>
      </AddItemGroup>
    </AddItemContainer>
  );
}
