import React from "react";
import { Grid } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import { colors } from "../../theme";
import "./contact.css";
import List from "./List";
import styled from "styled-components";

const StyledLink = styled.a`
  display: block;
  &:hover {
    background-color: ${colors.white};
    border-radius: 50%;
    padding: 8px;
  }
  transition: 0.3s;
`;

const PhoneList = [
  {
    icon: (
      <StyledLink href="tel:+918601603008">
        <CallIcon style={{ color: colors.primaryDark }} />
      </StyledLink>
    ),
    text: "+918601603008",
  },
  {
    icon: (
      <StyledLink href="tel:+918168022669">
        <CallIcon style={{ color: colors.primaryDark }} />
      </StyledLink>
    ),
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
      <h4 style={{ color: colors.primaryDark }} className="padding">
        OUR CONTACTS
      </h4>
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
