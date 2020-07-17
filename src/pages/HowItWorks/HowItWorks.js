import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Avatar from "@material-ui/core/Avatar";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import { howItWorksData } from "./HowItWorksData";
import { colors } from "../../theme";
import "./how_it_works.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "12px 24px",
  },
}));

export default function HowItWorks() {
  const classes = useStyles();

  return (
    <div className="wrapper_image_grey unbound_wrapper">
      <Grid container justify="center" alignItems="center" direction="column">
        <h3 style={{ color: colors.primaryDark }} className="padding">
          How it Works
        </h3>
        <label style={{ color: colors.grey.dark, paddingBottom: "2vw" }}>
          Fresh Cow's Milk from Farm to Table in Few Hours
        </label>
        <Timeline align="alternate">
          {howItWorksData.map((item, index) => (
            <TimelineItem className="timeline_item">
              <TimelineSeparator className="full_width_on_small">
                <TimelineDot
                  style={{
                    backgroundColor: colors.primary,
                    borderWidth: "1px",
                  }}
                  className="timeline_dot"
                >
                  {index < 6 ? (
                    <Avatar
                      style={{
                        height: "20vh",
                        width: "20vh",
                      }}
                      alt="Remy Sharp"
                      src={require(`../../assets/how_it_works/${item.icon}`)}
                    />
                  ) : (
                    <p className="padding">{item.data}</p>
                  )}
                </TimelineDot>
                {index < 6 && (
                  <Paper
                    elevation={3}
                    className={`display_on_small ${classes.paper}`}
                    style={{
                      backgroundColor: colors.primary,
                    }}
                  >
                    <h6>{item.title}</h6>
                    <p>{item.data}</p>
                  </Paper>
                )}
                {index < 6 && (
                  <TimelineConnector
                    style={{ backgroundColor: colors.primary, height: "30px" }}
                  />
                )}
              </TimelineSeparator>
              {index < 6 ? (
                <TimelineContent className="display_on_big">
                  <Paper
                    elevation={3}
                    className={classes.paper}
                    style={{
                      margin: "auto",
                      minWidth: "100px",
                      backgroundColor: colors.primary,
                    }}
                  >
                    <h6>{item.title}</h6>
                    <p
                      style={{
                        fontSize: "1vw",
                      }}
                    >
                      {item.data}
                    </p>
                  </Paper>
                </TimelineContent>
              ) : (
                <TimelineContent className="display_on_big"></TimelineContent>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      </Grid>
    </div>
  );
}
