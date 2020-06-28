import React from "react";
import "./home.css";
import { Grid } from "@material-ui/core";
import About2 from "./About/About2";

const getLandingHeight = () => {
  if (window.screen.width < 400) {
    return window.screen.height * 0.4;
  }
  if (window.screen.width < 600) {
    return window.screen.height * 0.5;
  }
  if (window.screen.width < 1100) {
    return window.screen.height * 0.7;
  }
  return window.screen.height;
};

const getCareHeight = () => {
  if (window.screen.width < 400) {
    return window.screen.height * 0.2;
  }
  if (window.screen.width < 600) {
    return window.screen.height * 0.3;
  }
  if (window.screen.width < 1100) {
    return window.screen.height * 0.5;
  }
  return window.screen.height;
};

const Home = () => {
  return (
    <>
      <div
        className="wrapper_image wrapper"
        style={{ height: getLandingHeight() }}
      >
        <div style={{ height: "100%", width: "100%" }}>
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
              style={{ height: "30%", padding: "4%" }}
            >
              <img
                src={require("../assets/font.png")}
                height="100%"
                alt=""
                style={{ maxWidth: "100%" }}
              />
              {/* <p>
                Daily Milk Fresh stands for providing really good quality farm
                fresh milk. We ensure that our milk do not have presence of any
                harmful substance which are widely present in processed milks.
              </p> */}
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              justify="flex-end"
              style={{ height: "70%" }}
            >
              <img
                src={require("../assets/milk_flow.png")}
                height="100%"
                alt=""
              />
            </Grid>
          </Grid>
        </div>
      </div>
      {/* <div
        style={{ height: getCareHeight(), width: "100%" }}
        className="padding"
      >
        <img
          src={require("../assets/care.png")}
          height="100%"
          alt=""
          style={{ maxWidth: "100%" }}
        />
      </div> */}
      <About2 />
    </>
  );
};

export default Home;
