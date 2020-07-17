import React from "react";
import { Paper, Grid } from "@material-ui/core";
import "./product.css";

const ProductItem = (props) => {
  return (
    <Paper elevation={3} className="padding">
      <Grid style={{ height: "300px" }}>ITEM</Grid>
    </Paper>
  );
};

export default ProductItem;
