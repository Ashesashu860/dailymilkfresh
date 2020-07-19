import React from "react";
import { Grid } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { colors } from "../../theme";
import "./contact.css";
import Contact2 from "./Contact2";

const Contact = () => {
  return (
    <>
      <div className="wrapper wrapper_image">
        <div className="sub_wrapper" style={{ flexDirection: "column" }}>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ height: "60%" }}
          >
            <img
              src={require("../../assets/logo_265.png")}
              className="contact_logo"
              alt=""
            />
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ height: "30%" }}
            direction="column"
          >
            <h3 style={{ paddingBottom: "2vh" }}>
              FEEL FREE TO CONTACT US NOW!
            </h3>
            <label>SCROLL DOWN</label>
            <ExpandMoreIcon style={{ color: colors.white }} />
          </Grid>
        </div>
      </div>
      <Contact2 />
    </>
  );
};

export default Contact;
