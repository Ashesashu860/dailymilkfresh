import React from "react";
import Card from "../Card";
import styled from "styled-components";
import { colors } from "../../theme";
import Menu from "./Menu";

const StyledHeader = styled.header`
  position: fixed;
  width: 100vw;
  max-width: 100%;
  height: ${(props) => props.height};
`;

const HeaderWrapper = styled.div`
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const TopRightMenuItems = [
  {
    link: "about",
    label: "About",
  },
  {
    link: "contact",
    label: "Contact Us",
  },
];

const Header = (props) => {
  return (
    <StyledHeader height="75px">
      <Card color={colors.primary} width="100%" height="100%">
        <HeaderWrapper>
          <img
            src={require("../../assets/logo_128.png")}
            height="100%"
            alt=""
          />
          <Menu
            items={TopRightMenuItems}
            color={colors.white}
            activeColor={colors.white}
            activeBackgroundColor={colors.primaryDark}
          />
        </HeaderWrapper>
      </Card>
    </StyledHeader>
  );
};

export default Header;
