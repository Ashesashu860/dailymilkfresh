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
            item
            container
            alignItems="center"
            justify="center"
            className="home_logo padding side_padding"
          >
            <img
              src={require("../../assets/font.png")}
              height="100%"
              alt=""
              style={{ maxWidth: "700px" }}
            />
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            justify="center"
            className="home_body side_padding"
            style={{ flexWrap: "nowrap" }}
          >
            <h1
              style={{
                color: colors.primary,
              }}
              className="home_body_text"
            >
              FARM FRESH COW AND BUFFALO MILK
            </h1>

            <div className="home_body_image">
              <img src={require("../../assets/bottel.png")} alt="" />
            </div>
          </Grid>
          <HomeFooter className="home_footer" />
        </Grid>
      </div>
      <About2 />
    </>
  );
};

export default Home;
