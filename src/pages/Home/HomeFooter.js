import React from "react";
import { Grid } from "@material-ui/core";
import StyledButton from "../../components/Button";
import { StyledNavLink } from "../../components/styles";
const HomeFooter = (props) => {
  return (
    <Grid
      item
      container
      alignItems="center"
      justify="space-between"
      className={`side_padding ${props.className}`}
      style={{
        backgroundColor: "#00000099",
      }}
    >
      <label>FRESH MILK AT YOUR DOORSTEP</label>
      <StyledNavLink to="/contact" color="#fff">
        <StyledButton>ORDER NOW</StyledButton>
      </StyledNavLink>
    </Grid>
  );
};

export default HomeFooter;
