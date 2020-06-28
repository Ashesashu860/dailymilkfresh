import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Card = (props) => {
  return (
    <StyledCard color={props.color} width={props.width} height={props.height}>
      {props.children}
    </StyledCard>
  );
};

export default Card;
