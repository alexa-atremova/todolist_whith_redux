import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Trash } from "react-bootstrap-icons";
import "./styles.css";
import AddItemContainer from "../../components/AddItem/AddItemContainer";

export default function EditorComponent({
  items,
  onTextChange,
  onToggle,
  onRemove,
}) {
  return (
    <>
      <div className="editor__container">
        {items.map((item) => (
          <Form.Group key={item.id} className="editor__item">
            <Form.Check
              type="checkbox"
              className="editor__checkbox"
              checked={item.done}
              onChange={() => onToggle(item.id)}
            />
            <Form.Control
              type="text"
              className="editor__input"
              value={item.text}
              onChange={(event) => onTextChange(item, event.target.value)}
            />
            <Button
              type="button"
              variant="danger"
              className="editor__button"
              onClick={() => onRemove(item.id)}
            >
              <Trash />
            </Button>
          </Form.Group>
        ))}
        <AddItemContainer />
      </div>
    </>
  );
}
