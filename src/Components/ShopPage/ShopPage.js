import React, { Component } from "react";
import Cart from "../Cart/Cart";
import Product from "../ShopPage/Product/Product";
import axios from "axios";
import { withRouter } from "react-router-dom";
class Shop extends Component {
  state = {
    post: [],
    hover: 0,
    cartData : [],
    cartValue: 1
  };
  componentWillMount() {
    if(this.props.history.location.state !== undefined){
      const data = this.props.history.location.state.content;
      const Cart = this.props.history.location.state.cartValue;
      this.setState({cartValue : Cart})
      this.setState({cartData : data});
    }
    axios.get("http://demo3703858.mockable.io/ProductData").then((response) => {
      this.setState({ post: response.data });
    });
  }
  MouseEnterHandler = (id) => {
    this.setState({ hover: id });
  };
  MouseLeaveHandler = () => {
    this.setState({ hover: "-1" });
  };
  CartDataHandler = (ProductData,event) => {
      event.preventDefault();
      this.setState({cartData : ProductData});
      this.setState({cartValue : 1})
  };
ProductDetailsHandler = (content) => {
  this.props.history.push({
    pathname: "Productpage",
    state:  content,
  });
};
  render() {
    return (
      <div className="wrapper wrapper-margin">
        <Cart cart = {this.state.cartData.length !== 0 || this.state.cartData.length !== undefined ? this.state.cartData : null} cartValue = {this.state.cartValue}/>
        <Product
          hover={this.state.hover}
          cartHandler={this.CartDataHandler}
          post={this.state.post}
          ImageHoverHandler={this.MouseEnterHandler}
          ImageLeaveHandler={this.MouseLeaveHandler}
          ProductHandler = {this.ProductDetailsHandler}
        />
      </div>
    );
  }
}
export default withRouter(Shop);
