import React from "react";
import {
  ProductsContainter,
  ProductsHeading,
  ProductsWrapper,
} from "./ProductElements";

function Products() {
  return (
    <ProductsContainter>
      <ProductsHeading>Heading</ProductsHeading>
      <ProductsWrapper></ProductsWrapper>
    </ProductsContainter>
  );
}

export default Products;
