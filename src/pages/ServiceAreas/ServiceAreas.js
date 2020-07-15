import React from "react";
import { Paper, Grid } from "@material-ui/core";
import { LocationCity } from "@material-ui/icons";
import List from "../Contact/List";
import { colors } from "../../theme";
import "./service_areas.css";

const ServiceAreasList = [
  {
    icon: <LocationCity style={{ color: colors.primaryDark }} />,
    text: "Anshal API",
  },
  {
    icon: <LocationCity style={{ color: colors.primaryDark }} />,
    text: "Vrindavan Yojna",
  },
  {
    icon: <LocationCity style={{ color: colors.primaryDark }} />,
    text: "Aashiyana",
  },
  {
    icon: <LocationCity style={{ color: colors.primaryDark }} />,
    text: "Alambagh",
  },
  {
    icon: <LocationCity style={{ color: colors.primaryDark }} />,
    text: "Gomti Nagar",
  },
];

const ServiceAreas = () => {
  return (
    <div className="wrapper wrapper_image side_padding">
      <Grid
        className="full"
        item
        container
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          sm={12}
          md={6}
        >
          <h2
            style={{ color: colors.primaryDark }}
            className="service_areas_heading"
          >
            SERVICEABLE AREAS
          </h2>
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          sm={12}
          md={6}
        >
          <Paper elevation={6} style={{ padding: "6vw 8vw", opacity: "0.9" }}>
            <List items={ServiceAreasList} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ServiceAreas;
