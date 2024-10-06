import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { NAV_ITEMS } from "../../shared/constants";

const Nav: React.FC<{}> = () => {
  return (
    <NavContainer>
      {NAV_ITEMS.map(({ title, to }) => (
        <NavItem key={to} to={to}>{title}</NavItem>
      ))}
    </NavContainer>
  );
};

const NavItem = styled(NavLink)`
  position: relative;
  font-size: 20px;
  text-decoration: none;
  color: #000;
  padding: 0 12px;

  &:hover {
    color: darkcyan;
  }

  &.active {
    color: darkcyan;

    &:before {
      content: "";
      position: absolute;
      bottom: -12px;
      left: 0;
      width: 100%;
      border-bottom: 2px solid darkcyan;
    }
  }
`;

const NavContainer = styled.div`
  display: flex;
  padding: 0 12px 12px;
  margin: 0 -12px;
  border-bottom: 1px solid #ccc;
  flex-wrap: wrap;
`;

export default Nav;
