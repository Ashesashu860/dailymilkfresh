import React from "react";
import { Grid } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import { colors } from "../../theme";
import "./contact.css";
import List from "./List";

const PhoneList = [
  {
    icon: <CallIcon style={{ color: colors.primaryDark }} />,
    text: "+918601603008",
  },
  {
    icon: <CallIcon style={{ color: colors.primaryDark }} />,
    text: "+917905480842",
  },
  {
    icon: <CallIcon style={{ color: colors.primaryDark }} />,
    text: "+917292063210",
  },
  {
    icon: <CallIcon style={{ color: colors.primaryDark }} />,
    text: "+919140393094",
  },
  {
    icon: <CallIcon style={{ color: colors.primaryDark }} />,
    text: "+918168022669",
  },
];

const EmailList = [
  {
    icon: <EmailIcon style={{ color: colors.primaryDark }} />,
    text: "dailymilk0620@gmail.com",
  },
];

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
          <div className="mobile_bottom_margin"></div>
        </div>
      </div>
      <h2 style={{ color: colors.primaryDark }} className="padding">
        OUR CONTACTS
      </h2>
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ backgroundColor: colors.grey.light }}
        className="padding"
      >
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          sm={6}
          xs={12}
        >
          <List title="Call Us" items={PhoneList} />
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          sm={6}
          xs={12}
        >
          <List title="Email" items={EmailList} />
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
