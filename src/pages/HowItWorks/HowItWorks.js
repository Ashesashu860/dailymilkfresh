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

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "12px 24px",
  },
}));

export default function HowItWorks() {
  const classes = useStyles();

  return (
    <div className="wrapper_image_grey unbound_wrapper">
      <h2 style={{ color: colors.primaryDark }} className="padding">
        How it Works
      </h2>
      <Timeline align="alternate">
        {howItWorksData.map((item, index) => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                style={{
                  backgroundColor: colors.primary,
                  borderWidth: "1px",
                }}
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
                  <p
                    style={{
                      fontSize: "1vw",
                      textAlign: "left",
                      padding: "30px",
                    }}
                  >
                    {item.data}
                  </p>
                )}
              </TimelineDot>
              <TimelineConnector
                style={{ backgroundColor: colors.primary, height: "30px" }}
              />
            </TimelineSeparator>
            <TimelineContent>
              <Paper
                elevation={3}
                className={classes.paper}
                style={{
                  margin: "auto",
                  minWidth: "100px",
                  backgroundColor: colors.primary,
                }}
              >
                <p
                  style={{
                    fontSize: "1vw",
                    textAlign: "left",
                  }}
                >
                  {item.data}
                </p>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
