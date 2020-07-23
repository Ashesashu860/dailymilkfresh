import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import StyledButton from "../../components/Button";
import { colors } from "../../theme";
import { StyledNavLink } from "../../components/styles";
import "./product_item.css";

const ProductCard = styled(Grid)`
  background-color: ${colors.grey.light} !important;
  border-radius: 16px !important;
`;

const ProductDesc = styled(Grid)`
  flex: 1;
  height: 100%;
  padding: 0 0 4px 6vh;
`;

const StyledLabel = styled.label`
  color: ${colors.black};
  font-size: 20px;
`;

const StyledHeading = styled.h4`
  color: ${colors.grey.dark};
  padding: 0;
  text-align: left;
`;

const ProductItem = (props) => {
  return (
    <Grid item className="product_item_container" xs={12} sm={6} md={4}>
      <ProductCard container className="product_item_sub_container">
        <img src={props.data.image} alt="" className="product_item_image" />
        <ProductDesc
          container
          alignItems="flex-start"
          justify="space-between"
          direction="column"
          style={{ flexWrap: "nowrap" }}
        >
          <div
            className="product_item_badge"
            style={{ backgroundColor: colors.primaryDark, margin: "0" }}
          >
            <Grid
              container
              alignItems="center"
              justify="center"
              direction="column"
              className="full"
            >
              <h5>{`₹${props.data.price}`}</h5>
              <label>1 Ltr</label>
            </Grid>
          </div>
          <div>
            <StyledHeading>{props.data.title}</StyledHeading>
            <StyledHeading>1st Day Trial</StyledHeading>
            <StyledHeading>@FREE</StyledHeading>
            {/* <div>
              <StyledLabel>
                Get 2 Deliveries
                <br />
                of 1 Ltr pack
                <br />@
              </StyledLabel>
              <StyledLabel
                style={{ color: colors.primaryDark, fontWeight: "500" }}
              >
                ₹
                <StyledLabel style={{ textDecoration: "line-through" }}>
                  120
                </StyledLabel>
                100
              </StyledLabel>
            </div> */}
          </div>
          <StyledNavLink to="/contact" color="#fff">
            <StyledButton>Book Now</StyledButton>
          </StyledNavLink>
        </ProductDesc>
      </ProductCard>
    </Grid>
  );
};

export default ProductItem;
