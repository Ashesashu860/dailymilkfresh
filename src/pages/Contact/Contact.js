import React from "react";
import { Grid, Card } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import { colors } from "../../theme";
import "./contact.css";

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
          >
            <h1>FEEL FREE TO CONTACT US NOW!</h1>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ height: "10%" }}
          >
            <label>SCROLL DOWN</label>
            <ExpandMoreIcon style={{ color: colors.white }} />
          </Grid>
        </div>
      </div>
      <Grid container alignItems="center" justify="center" className="padding">
        <h2 style={{ color: colors.primaryDark }}>OUR CONTACTS</h2>
        <Grid
          item
          container
          alignItems="center"
          justify="space-around"
          className="padding"
          spacing={4}
        >
          <Grid item sm={6} xs={12}>
            <Card className="card">
              <Grid
                item
                container
                alignItems="center"
                justify="center"
                direction="column"
              >
                <CallIcon
                  style={{ color: colors.primaryDark, marginBottom: "4vh" }}
                />
                <label style={{ color: colors.grey.normal }}>
                  +918601603008
                </label>
                <label style={{ color: colors.grey.normal }}>
                  +917905480842
                </label>
                <label style={{ color: colors.grey.normal }}>
                  +917292063210
                </label>
                <label style={{ color: colors.grey.normal }}>
                  +919140393094
                </label>
                <label style={{ color: colors.grey.normal }}>
                  +918168022669
                </label>
              </Grid>
            </Card>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Card className="card">
              <Grid
                item
                container
                alignItems="center"
                justify="center"
                direction="column"
              >
                <EmailIcon
                  style={{ color: colors.primaryDark, marginBottom: "4vh" }}
                />
                <label style={{ color: colors.grey.normal }}>
                  dailymilk0620@gmail.com
                </label>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
