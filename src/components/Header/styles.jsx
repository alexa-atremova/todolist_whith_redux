import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px 100px;
`;

export const Logo = styled(NavLink)`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItem = styled(NavLink)`
  margin-right: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #333333;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #1e90ff;
  }
`;
