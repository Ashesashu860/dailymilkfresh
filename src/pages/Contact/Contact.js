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
            style={{ height: "60%" }}
            className="image_padding"
          >
            <img
              src={require("../../assets/logo_265.png")}
              height="100%"
              alt=""
            />
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            justify="center"
            style={{ height: "40%" }}
            className="padded_content"
          >
            <h1>FEEL FREE TO CONTACT US NOW!</h1>
            <Grid
              item
              container
              alignItems="center"
              justify="center"
              direction="row"
              spacing={2}
            >
              <Grid item md={2}>
                <label>+918601603008</label>
              </Grid>
              <Grid item md={2}>
                <label>+917905480842</label>
              </Grid>
              <Grid item md={2}>
                <label>+917292063210</label>
              </Grid>
              <Grid item md={2}>
                <label>+919140393094</label>
              </Grid>
              <Grid item md={2}>
                <label>+918168022669</label>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Contact;
