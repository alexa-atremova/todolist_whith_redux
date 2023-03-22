import React from "react";
import styled from "styled-components";

const TodoListContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 20px 0;
  padding: 50px;
`;

const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 24px;
  font-weight: bold;
`;

const List = styled.ul`
  width: 100%;
  max-width: 200px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  list-style-type: disc;
`;

const ItemText = styled.span`
  font-size: 18px;
  color: #333333;
`;

function ToDoComponent({ doneItems, todoItems }) {
  return (
    <>
      <TodoListContainer>
        <ItemsContainer>
          <Title>Todo:</Title>
          <List>
            {todoItems.map((item) => (
              <ListItem key={item.id}>
                <ItemText>{item.text}</ItemText>
              </ListItem>
            ))}
          </List>
        </ItemsContainer>
        <ItemsContainer>
          <Title>Done:</Title>
          <List>
            {doneItems.map((item) => (
              <ListItem key={item.id}>
                <ItemText>{item.text}</ItemText>
              </ListItem>
            ))}
          </List>
        </ItemsContainer>
      </TodoListContainer>
    </>
  );
}

export default ToDoComponent;
