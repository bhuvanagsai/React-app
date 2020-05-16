import React,{Component} from 'react';

import { withRouter } from "react-router-dom";
import {ImageContainer,DetailsContainer,ProductPrice,ProductDescription, CartValue,
      CartIncre,AddToCart,AddToCartContainer,
      Quantity} from '../ProductDetails/Style';
class  ProductDetails extends Component{
   
    state = {
        data :[],
        cartValue : 1
        }
    componentDidMount(){
        this.setState({data : this.props.history.location.state});
    }
    
  CartHandler = (status) =>{
    let value = this.state.cartValue;
    if(status === "plus"){
        value= value + 1;
        
    }
    else if(status === "minus"){
        value = value - 1;
    }
    this.setState({cartValue : value});
  }
  
  ProductDetailsHandler = (content,cartValue) => {
    const location = {
        pathname: "Shop",
        state:  {
            content :  content,
            cartValue : cartValue
        },

    }
    this.props.history.replace(location);
  };
    render(){
        return(
            <div className="wrapper wrapper-margin">
                <div style = {{display :  "flex" , width:"100%"}}>
                    <ImageContainer src = {require('../../../assets/product_01.jpg')}></ImageContainer>
                    <DetailsContainer>
                        <h2>{this.state.data.productName}</h2>
                        <ProductPrice>{this.state.data.productPrice}</ProductPrice>
                        <ProductDescription>{this.state.data.description}</ProductDescription>
                        <div style = {{display : "flex"}}>
                            <CartValue>
                                <CartIncre className="fa fa-plus" aria-hidden="true" onClick = {() => {this.CartHandler('plus')}}></CartIncre>
                                    <Quantity type="text" value={this.state.cartValue}/>
                                    <CartIncre className="fa fa-minus" aria-hidden="true"  onClick = {() => {this.CartHandler('minus')}}></CartIncre>
                                </CartValue>
                            <AddToCartContainer onClick = {() =>{this.ProductDetailsHandler(this.state.data, this.state.cartValue)}}>
                                <AddToCart>Add To Cart</AddToCart>
                            </AddToCartContainer>
                        </div>
                    </DetailsContainer>
                </div>
            </div>
        );
    }
}
export default withRouter(ProductDetails);