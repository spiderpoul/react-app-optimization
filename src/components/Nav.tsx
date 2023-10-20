import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { NAV_ITEMS } from "../constants";
import { NavLink } from "react-router-dom";

const Nav: React.FC<{}> = () => {
  return (
    <NavContainer>
      {NAV_ITEMS.map(({ title, to }) => (
        <NavItem to={to}>{title}</NavItem>
      ))}
    </NavContainer>
  );
};

const NavItem = styled(NavLink)`
  position: relative;
  font-size: 24px;
  text-decoration: none;
  color: #000;
  padding: 0 16px;

  &:hover {
    color: darkcyan;
  }

  &.active {
    color: darkcyan;

    &:before {
      content: "";
      position: absolute;
      bottom: -24px;
      left: 0;
      width: 100%;
      border-bottom: 2px solid darkcyan;
    }
  }
`;

const NavContainer = styled.div`
  display: flex;
  padding: 0 24px 24px;
  margin: 0 -24px;
  border-bottom: 1px solid #ccc;
  flex-wrap: wrap;

  @media (max-width: 1224px) {
    display: none;
  }
`;

export default Nav;
