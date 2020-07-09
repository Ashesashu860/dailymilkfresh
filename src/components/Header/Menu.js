import React from "react";
import styled from "styled-components";
import { StyledNavLink } from "../styles";

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  & > a:not(:last-child) {
    margin-right: 1.2em;
  }
  flex-direction: ${(props) => props.direction};
`;

const activeStyle = {
  display: "block",
  textDecoration: "none",
  padding: "0.6em",
  borderRadius: "0.2em",
};

const Menu = (props) => {
  return (
    <StyledUl
      direction={props.direction}
      style={props.style}
      className={props.className}
    >
      {props.items.map((item) => (
        <StyledNavLink
          to={`/${item.link}`}
          activeStyle={{
            ...activeStyle,
            color: props.activeColor,
            backgroundColor: props.activeBackgroundColor,
          }}
          color={props.color}
          onClick={props.onClick}
        >
          {item.label}
        </StyledNavLink>
      ))}
    </StyledUl>
  );
};

export default Menu;
