import React from "react";
import "./home.css";
import { Grid } from "@material-ui/core";
import About2 from "./About/About2";

const Home = () => {
  return (
    <>
      <div className="home_landing wrapper_image wrapper ">
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
      <About2 />
    </>
  );
};

export default Home;
