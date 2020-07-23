import React from "react";
import { Grid } from "@material-ui/core";
import { colors } from "../../theme";
import ProductItem from "./ProductItem";
import { ProductData } from "./ProductData";

const Products = (props) => {
  return (
    <div className="unbound_wrapper wrapper_image side_padding">
      <h3 style={{ color: colors.primary }} className="padding">
        Our Products
      </h3>
      <Grid
        container
        spacing={4}
        direction="row"
        justify="center"
        alignItems="center"
        style={{ paddingBottom: "32px" }}
      >
        {ProductData.map((item) => (
          <ProductItem data={item} />
        ))}
      </Grid>
    </div>
  );
};

export default Products;
