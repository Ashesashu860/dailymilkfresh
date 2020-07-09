import React from "react";
import { Grid } from "@material-ui/core";
import "./home.css";
import "../../index.css";
import { colors } from "../../theme";
import HomeFooter from "./HomeFooter";
import About2 from "../About/About2";

const Home = () => {
  return (
    <>
      <div className="wrapper_image wrapper ">
        <Grid container className=" full" alignItems="center" justify="center">
          <Grid
            container
            className="home_header_container padding side_padding"
          >
            <Grid container className="home_header background_image"></Grid>
          </Grid>

          <Grid container className="home_body padding side_padding">
            <h1
              style={{
                color: colors.primary,
              }}
              className="home_body_left"
            >
              FARM FRESH COW AND BUFFALO MILK
            </h1>
            <div className="home_body_right home_body_image background_image"></div>
          </Grid>
          <HomeFooter className="home_footer" />
        </Grid>
      </div>
      <About2 />
    </>
  );
};

export default Home;
