import React from "react";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import { Grid } from "@material-ui/core";
import List from "./List";
import { colors } from "../../theme";
import "./contact.css";

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

const Contact2 = () => {
  return (
    <>
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

export default Contact2;
