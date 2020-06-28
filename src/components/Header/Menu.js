import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  display: block;
  float: left;
  text-decoration: none;
  color: ${(props) => props.color};
  font-size: 0.9rem;
  transition: 0.3s;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  & > a:not(:last-child) {
    margin-right: 1.2em;
  }
`;

const activeStyle = {
  display: "block",
  textDecoration: "none",
  padding: "0.6em",
  borderRadius: "0.2em",
};

const Menu = (props) => {
  return (
    <StyledUl>
      {props.items.map((item) => (
        <StyledNavLink
          to={`/${item.link}`}
          activeStyle={{
            ...activeStyle,
            color: props.activeColor,
            backgroundColor: props.activeBackgroundColor,
          }}
          color={props.color}
        >
          {item.label}
        </StyledNavLink>
      ))}
    </StyledUl>
  );
};

export default Menu;
