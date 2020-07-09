import React from "react";
import { Grid, Card } from "@material-ui/core";
import { colors } from "../../theme";
import "./about.css";

const About2 = () => {
  return (
    <Grid container alignItems="center" justify="center" className="padding">
      <h4 style={{ color: colors.primaryDark, padding: "0" }}>OUR QUALITY</h4>
      <Grid
        item
        container
        alignItems="center"
        justify="space-around"
        className="padding"
        spacing={4}
      >
        <Grid item sm={6} xs={12}>
          <Card className="card" elevation={4}>
            <h6 style={{ color: colors.primary, paddingBottom: "0.8rem" }}>
              Real Fresh A-Grade Whole Milk
            </h6>
            <p style={{ color: colors.grey.normal }}>
              We serve "Raw Unprocessed Chilled Milk" milked within 12-24 hours
              before delivery. This is quite unique unlike other brands where
              milk is 4-5 days old and heavily processed for consistency. We
              have no middleman, and source directly from co-managed farms. This
              helps control the bacterial count 4-5 times better than
              traditional collection center milk.
            </p>
          </Card>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Card className="card" elevation={4}>
            <h6 style={{ color: colors.primary, paddingBottom: "0.8rem" }}>
              No Preservatives And Adulterants
            </h6>
            <p style={{ color: colors.grey.normal }}>
              The milk obtained from the cows is unadulterated and does not have
              any preservatives (such as formalin), which is widely used by
              local dairy vendors. We ensure the milk stays safe by using cold
              supply chain processes.
            </p>
          </Card>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Card className="card" elevation={4}>
            <h6 style={{ color: colors.primary, paddingBottom: "0.8rem" }}>
              No manipulation with Natural Milking Cycle{" "}
            </h6>
            <p style={{ color: colors.grey.normal }}>
              The cows are not given any hormonal injections to boost the milk
              yield. Studies have linked the consumption of milk contaminated
              with oxytocin to the early onset of puberty in children, which is
              on an alarming rise these days.
            </p>
          </Card>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Card className="card" elevation={4}>
            <h6 style={{ color: colors.primary, paddingBottom: "0.8rem" }}>
              Environment Friendly
            </h6>
            <p style={{ color: colors.grey.normal }}>
              Glass is one of the safest materials, non-toxic and non-reactive,
              as compared to other packaging materials such as plastic, which
              can leach into food products. Our brand values don’t go with
              plastic or anti-environment materials, thus we use glass bottles
              for packaging.
            </p>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About2;
