import React from "react";
import { Grid } from "@material-ui/core";
import { colors } from "../../theme";
import ProductItem from "./ProductItem";
const Products = (props) => {
  return (
    <div className="wrapper wrapper_image side_padding">
      <h3 style={{ color: colors.primary }} className="padding">
        Our Products
      </h3>
      <Grid
        container
        item
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} md={4}>
          <ProductItem />
        </Grid>
        <Grid item xs={12} md={4}>
          <ProductItem />
        </Grid>
        <Grid item xs={12} md={4}>
          <ProductItem />
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
