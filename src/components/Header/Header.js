import React, { useState } from "react";
import Card from "../Card";
import styled from "styled-components";
import { colors } from "../../theme";
import Menu from "./Menu";
import { IconButton, Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./header.css";

const StyledHeader = styled.header`
  position: fixed;
  width: 100vw;
  max-width: 100%;
  height: ${(props) => props.height};
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
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleToggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setToggleDrawer(!toggleDrawer);
  };

  return (
    <>
      <StyledHeader height="75px">
        <Card color={colors.primary} width="100%" height="100%">
          <div className="header_wrapper">
            <NavLink
              to="/dailymilkfresh"
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "row",
                textDecoration: "none",
                alignItems: "center",
              }}
            >
              <img
                src={require("../../assets/logo_128.png")}
                height="100%"
                alt=""
              />
              <h3>Daily Milk Fresh</h3>
            </NavLink>
            <div className="visible_on_big">
              <Menu
                items={TopRightMenuItems}
                color={colors.white}
                activeColor={colors.white}
                activeBackgroundColor={colors.primaryDark}
                direction="row"
              />
            </div>
            <div className="visible_on_small">
              <IconButton
                edge="end"
                aria-label="menu"
                onClick={(event) => handleToggleDrawer(event)}
              >
                <MenuIcon style={{ color: "white" }} />
              </IconButton>
            </div>
          </div>
        </Card>
      </StyledHeader>
      <React.Fragment>
        <Drawer
          anchor="right"
          open={toggleDrawer}
          onClose={(event) => handleToggleDrawer(event)}
        >
          {/* <div>
            {TopRightMenuItems.map((item) => (
              <div>{item.label}</div>
            ))}
          </div> */}
          <img
            src={require("../../assets/logo_128.png")}
            width="100%"
            alt=""
            className="padding"
          />
          <Menu
            items={TopRightMenuItems}
            color={colors.primaryDark}
            activeColor={colors.primaryDark}
            activeBackgroundColor={colors.grey.light}
            direction="column"
            className="padding"
            onClick={(event) => handleToggleDrawer(event)}
          />
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default Header;
