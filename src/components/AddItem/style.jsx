import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const AddItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const AddItemGroup = styled(Form.Group)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
`;

export const AddItemInput = styled(Form.Control)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 5px;
  border: none;
  width: 450px;
  padding: 20px;
  background-color: #e2e2e2a2;
  color: #495057;
  font-size: 16px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;

export const AddItemButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d1e7dd;
  border-color: #d1e7dd;
  color: #155724;
  padding: 10px;
  border-radius: 5px;
  width: 40px;
  height: 40px;

  &:hover,
  &:active,
  &:focus {
    background-color: #c4dfb9;
    border-color: #c4dfb9;
    color: #155724;
    outline: none;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(209, 231, 221, 0.5);
  }
`;
