import React from "react";
import { Grid } from "@material-ui/core";
const Contact = () => {
  return (
    <div className="wrapper wrapper_image">
      <div className="sub_wrapper">
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="column"
          style={{ height: "100%" }}
        >
          <Grid
            item
            container
            alignItems="center"
            justify="center"
            style={{ height: "70%" }}
          >
            <img src={require("../assets/logo_512.png")} height="100%" alt="" />
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            justify="center"
            style={{ height: "30%", lineHeight: "3rem" }}
            className="padded_content"
            direction="column"
          >
            <h1>FEEL FREE TO CONTACT US NOW!</h1>
            <label>+917905480842, +917292063210, +919140393094</label>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Contact;
