import React from "react";
import { Trash } from "react-bootstrap-icons";
import AddItemContainer from "../../components/AddItem/AddItemContainer";
import {
  CustomCheckbox,
  EditorButton,
  EditorContainer,
  EditorInput,
  EditorItem,
} from "./styles";

export default function EditorComponent({
  items,
  onTextChange,
  onToggle,
  onRemove,
}) {
  return (
    <EditorContainer>
      {items.map((item) => (
        <EditorItem key={item.id}>
          <CustomCheckbox
            type="checkbox"
            checked={item.done}
            onChange={() => onToggle(item.id)}
          />
          <EditorInput
            type="text"
            value={item.text}
            onChange={(event) => onTextChange(item, event.target.value)}
          />
          <EditorButton
            type="button"
            variant="danger"
            onClick={() => onRemove(item.id)}
          >
            <Trash />
          </EditorButton>
        </EditorItem>
      ))}
      <AddItemContainer />
    </EditorContainer>
  );
}
