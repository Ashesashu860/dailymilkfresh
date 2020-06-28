import React from "react";
import { colors } from "../../theme";
import { Grid } from "@material-ui/core";
const Footer = () => {
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{
        backgroundColor: colors.grey.dark,
        color: colors.white,
        padding: "1.2rem",
      }}
    >
      <label>Copyright © 2020 Daily Milk Fresh</label>
    </Grid>
  );
};

export default Footer;
