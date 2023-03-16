import React from "react";
import { HeaderContainer, Logo, Nav, NavItem } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <Logo>My App</Logo>
      <Nav>
        <NavItem href="/todo">ToDo</NavItem>
        <NavItem href="/editor">Editor</NavItem>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
