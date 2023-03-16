import React from "react";
import styled from "styled-components";

const TodoListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  padding: 0px 50px;
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
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const ItemText = styled.span`
  font-size: 18px;
  color: #333333;
`;

function TodoList() {
  return (
    <TodoListContainer>
      <ItemsContainer>
        <Title>Todo:</Title>
        <List>
          <ListItem key="2">
            <ItemText>text</ItemText>
          </ListItem>
        </List>
      </ItemsContainer>
      <ItemsContainer>
        <Title>Done:</Title>
        <List>
          <ListItem key="1">
            <ItemText>text</ItemText>
          </ListItem>
        </List>
      </ItemsContainer>
    </TodoListContainer>
  );
}

export default TodoList;
