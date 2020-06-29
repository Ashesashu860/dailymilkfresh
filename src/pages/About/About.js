import React from "react";
import { Grid } from "@material-ui/core";
import About2 from "./About2";
const About = () => {
  return (
    <>
      <div className="wrapper wrapper_image">
        <Grid
          container
          alignItems="center"
          justify="center"
          className="sub_wrapper"
        >
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
            >
              <h2>ABOUT DAILY MILK FRESH</h2>
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              justify="center"
              style={{ height: "40%" }}
              className="padding"
            >
              <h1>DAILY MILK FRESH COW MILK</h1>
              <p>
                Daily Milk Fresh Cow's Milk is an honest attempt to serve
                nutritious, chemical-free and preservative-free milk. It's an
                equivalent of serving fresh whole milk from your own farm while
                being present in an urban living.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <About2 />
    </>
  );
};

export default About;
