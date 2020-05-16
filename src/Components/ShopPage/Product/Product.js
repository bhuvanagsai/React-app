import React from "react";

import {
  Products,
  ProductContainer,
  ProductType,
  ProductName,
  ProductPrice,
  ProductCart,
  CartIcon,
  ProductImage,
} from "../Product/Style";
const Product = (props) => {
  return (
    <ProductContainer>
      {props.post.map((p) => (
        <Products key={p.id}>
          <ProductImage>
            <div
              style={{ height: "213px" }}
              onMouseEnter={() => {
                props.ImageHoverHandler(p.id);
              }}
              onMouseOut={() => {
                props.ImageLeaveHandler(p.id);
              }}
              onClick = {() =>{props.ProductHandler(p)}}
            >
              <img
                src={require("../../../assets/shop_item_02.jpg")}
                style={{ width: "100%" }}
              ></img>
            </div>
            <ProductCart
              hover={p.id == props.hover}
              onClick={(event) =>{props.cartHandler(p,event)}}
            >
              <CartIcon
                className="fa fa-shopping-cart"
                aria-hidden="true"
              ></CartIcon>
            </ProductCart>
          </ProductImage>
          <div style={{ backgroundColor: "#f8f8f8", padding: "10px" }}>
            <ProductType> {p.productType}</ProductType>
            <ProductName>{p.productName}</ProductName>
            <ProductPrice>{p.productPrice}</ProductPrice>
          </div>
        </Products>
      ))}
    </ProductContainer>
  );
};
export default Product;
