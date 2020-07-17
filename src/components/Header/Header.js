import React, { useState } from "react";
import Card from "../Card";
import styled from "styled-components";
import { colors } from "../../theme";
import Menu from "./Menu";
import { IconButton, Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import "./header.css";

const StyledHeader = styled(Card)`
  position: fixed;
  z-index: 1000;
`;

const TopRightMenuItems = [
  {
    link: "about",
    label: "About",
  },
  {
    link: "service_areas",
    label: "Service Areas",
  },
  {
    link: "contact",
    label: "Contact Us",
  },
  {
    link: "how_it_works",
    label: "How it Works",
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
      <StyledHeader
        height="75px"
        className="side_padding"
        color={colors.primary}
        width="100%"
      >
        <div className="header_wrapper">
          <NavLink
            to="/"
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
              height="140%"
              alt=""
            />
            <h6>Daily Milk Fresh</h6>
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
      </StyledHeader>
      <React.Fragment>
        <Drawer
          anchor="right"
          open={toggleDrawer}
          onClose={(event) => handleToggleDrawer(event)}
        >
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
            className="padding align_drawer_menu"
            onClick={(event) => handleToggleDrawer(event)}
          />
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default Header;
