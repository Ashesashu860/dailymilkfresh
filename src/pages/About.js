import React from "react";
import { Grid, Card } from "@material-ui/core";
import { colors } from "../theme";
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
              <h1>ABOUT DAILY MILK FRESH</h1>
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              justify="center"
              style={{ height: "40%" }}
              className="padding"
              direction="column"
            >
              <h1>DAILY MILK FRESH COW MILK</h1>
              <label style={{ textAlign: "center" }}>
                Daily Milk Fresh Cow's Milk is an honest attempt to serve
                nutritious, chemical-free and preservative-free milk. It's an
                equivalent of serving fresh whole milk from your own farm while
                being present in an urban living.
              </label>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Grid container alignItems="center" justify="center" className="padding">
        <h1 style={{ color: colors.primaryDark }}>OUR QUALITY</h1>
        <Grid
          item
          container
          alignItems="center"
          justify="space-around"
          className="padding"
          spacing={4}
        >
          <Grid item sm={6} xs={12}>
            <Card className="card">
              <h3 style={{ color: colors.primary, paddingBottom: "0.8rem" }}>
                Real Fresh A-Grade Whole Milk
              </h3>
              <p style={{ color: colors.grey.normal, paddingBottom: "0.8rem" }}>
                We serve "Raw Unprocessed Chilled Milk" milked within 12-24
                hours before delivery. This is quite unique unlike other brands
                where milk is 4-5 days old and heavily processed for
                consistency. We have no middleman, and source directly from
                co-managed farms. This helps control the bacterial count 4-5
                times better than traditional collection center milk.
              </p>
            </Card>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Card className="card">
              <h3 style={{ color: colors.primary, paddingBottom: "0.8rem" }}>
                No Preservatives And Adulterants
              </h3>
              <p style={{ color: colors.grey.normal, paddingBottom: "0.8rem" }}>
                The milk obtained from the cows is unadulterated and does not
                have any preservatives (such as formalin), which is widely used
                by local dairy vendors. We ensure the milk stays safe by using
                cold supply chain processes.
              </p>
            </Card>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Card className="card">
              <h3 style={{ color: colors.primary, paddingBottom: "0.8rem" }}>
                No manipulation with Natural Milking Cycle{" "}
              </h3>
              <p style={{ color: colors.grey.normal, paddingBottom: "0.8rem" }}>
                The cows are not given any hormonal injections to boost the milk
                yield. Studies have linked the consumption of milk contaminated
                with oxytocin to the early onset of puberty in children, which
                is on an alarming rise these days.
              </p>
            </Card>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Card className="card">
              <h3 style={{ color: colors.primary, paddingBottom: "0.8rem" }}>
                Environment Friendly{" "}
              </h3>
              <p style={{ color: colors.grey.normal, paddingBottom: "0.8rem" }}>
                Glass is one of the safest materials, non-toxic and
                non-reactive, as compared to other packaging materials such as
                plastic, which can leach into food products. Our brand values
                don’t go with plastic or anti-environment materials, thus we use
                glass bottles for packaging.
              </p>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
