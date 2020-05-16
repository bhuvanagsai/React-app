import React from "react";
import { CenterLine } from "../HomeRecipes/LatestRecipeCard/Styles";
import {
  HeadLine,
  CartHeader,
  Quantity,
  CartImage,
  ProductList,
  ProductTitle,
  CartContainer,
  SubTotal,
  CartButton,
  CartEmpty

} from "../Cart/Style";
const Cart = (props) => {
  return (
    <div style={{ width: "25%" }}>
        <CartHeader>
          <HeadLine>Cart</HeadLine>
          <CenterLine></CenterLine>
        </CartHeader>
        <CartContainer>
          {props.cart.length === 0 ? <CartEmpty>Cart Empty</CartEmpty> :
          <div>
            <ProductList>
              <CartImage src={require("../../assets/shop_item")}></CartImage>
              <ProductTitle>
                <a href=" ">{props.cart.productName}</a>
                <Quantity>
                  {props.cartValue} x <span>{props.cart.productPrice}</span>
                </Quantity>
              </ProductTitle>
            </ProductList>
            <SubTotal>
              SubTotal :<span> $ {(props.cartValue * props.cart.productPrice.slice(1)).toFixed(2)}</span>
            </SubTotal>
            <CartButton>View Cart</CartButton>
            <CartButton Checkout>Checkout</CartButton>
          </div>
          }
        </CartContainer>
    </div>
  );
};
export default Cart;
