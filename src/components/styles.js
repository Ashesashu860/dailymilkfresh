import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: ${(props) => props.color};
  font-size: 0.9rem;
  transition: 0.3s;
`;
