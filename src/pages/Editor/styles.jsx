import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const EditorContainer = styled.div`
  width: 100%;
  height: 100vw;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin: 0 auto;
`;

export const EditorItem = styled(Form.Group)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const EditorCheckbox = styled(Form.Check)`
  display: flex;
  margin-right: 10px;
`;
export const CustomCheckbox = styled(EditorCheckbox)`
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }
`;
export const EditorInput = styled(Form.Control)`
  display: flex;
  margin-right: 10px;
  border-radius: 5px;
  border: none;
  width: 400px;
  padding: 15px;
  background-color: #e2e2e2a2;
  color: #495057;
  font-size: 16px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;

export const EditorButton = styled(Button)`
  display: flex;
  align-items: center;
  background-color: #f8d7da;
  border-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  border-radius: 5px;

  &:hover,
  &:active,
  &:focus {
    background-color: #f4c2c7;
    border-color: #f4c2c7;
    color: #721c24;
    outline: none;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(248, 215, 218, 0.5);
  }
`;
