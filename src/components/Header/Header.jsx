import React from "react";
import { HeaderContainer, Logo, Nav, NavItem } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <Logo>My App</Logo>
      <Nav>
        <NavItem to="/todo">ToDo</NavItem>
        <NavItem to="/editor">Editor</NavItem>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
