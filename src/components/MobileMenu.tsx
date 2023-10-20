import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { NAV_ITEMS } from "../constants";

const MenuItem = styled(NavLink)`
  padding: 12px;
  font-size: 24px;
  text-decoration: none;
  color: #fff;
  padding: 8px 16px;
  outline: none;
  border: none;

  &:hover {
    color: darkcyan;
  }

  &.active {
    color: darkcyan;
  }
`;

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "24px",
    top: "16px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    left: 0,
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    display: "flex",
    flexDirection: "column",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    left: 0,
  },
};

const Container = styled.div`
  display: none;

  @media (max-width: 1224px) {
    display: block;

    &:after {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: #fff;
      height: 60px;
      z-index: 999;
      box-shadow: 0px 3px 12px 0px #ccc;
    }
  }
`;

const MobileMenu = () => {
  return (
    <Container>
      <Menu styles={styles}>
        {NAV_ITEMS.map(({ title, to }) => (
          <MenuItem to={to}>{title}</MenuItem>
        ))}
      </Menu>
    </Container>
  );
};

export default MobileMenu;
